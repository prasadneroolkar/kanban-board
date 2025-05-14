import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalComponent from ".././common/ModalComponent";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";
import { nanoid } from "nanoid";
import { updateBoardAction } from "../board/boardSlice.js";
import Button from "../button/Button";

const EditBoard = () => {
  const boards = useSelector((state) => state.board.boards);
  const currentId = useSelector((state) => state.board.currentBoardId);
  const dispatch = useDispatch();

  const modalRef = useRef();

  const currentBoard = boards?.find((curr) => curr.id === currentId);

  const [boardName, setBoardName] = useState(currentBoard?.name || "");

  const [columns, setColumns] = useState([]);

  const initialColumnsRef = useRef([]);

  useEffect(() => {
    setBoardName(currentBoard?.name || "");
  }, [currentBoard]);

  useEffect(() => {
    const cols = currentBoard?.columns?.map((col) => ({ ...col })) || [];
    initialColumnsRef.current = cols;
    setColumns(cols);
  }, [currentBoard]);

  console.log("columns", columns);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Clicked outside component!");
        setColumns(initialColumnsRef.current);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const updateBoard = () => {
    if (boardName.trim() === "") {
      alert("Board name cannot be empty");
      return;
    }

    if (columns.some((col) => col.value.trim() === "")) {
      alert("Column names cannot be empty.");
      return;
    }

    const updatedBoard = {
      id: currentId,
      name: boardName,
      columns: columns.map((col) => ({
        ...col,
        value: col.value.trim(),
        name: col.value.trim(),
      })),
    };
    try {
      dispatch(updateBoardAction(updatedBoard));
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleMultiplecol = (id, newValue) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === id ? { ...col, value: newValue, name: newValue } : col
      )
    );
  };

  const handleRemove = (id) => {
    setColumns(columns?.filter((col) => col.id !== id));
    console.log("in handkeltemove");
  };

  const addColumn = () => {
    const newColumn = {
      id: nanoid(),
      value: "",
      name: "", // or any other default property you use
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  return (
    <div ref={modalRef}>
      <ModalComponent textContent="Edit boards">
        {(closeModal) => (
          <>
            <ModalHeading title="Edit boards" />
            <Wrapper>
              <ModalHeading subtitle="Board Name" />
              <ModalInputs
                value={boardName}
                placeholder=" e.g Take coffee break"
                onChange={(event) => setBoardName(event.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <ModalHeading subtitle=" Board Columns" />

              {columns?.map((column) => (
                <div
                  key={column.id}
                  className="flex items-center space-x-2 justify-center mt-[12px]"
                >
                  <ModalInputs
                    name={column.name}
                    value={column.name}
                    onChange={(e) =>
                      handleMultiplecol(column.id, e.target.value)
                    }
                  />
                  <CloseButton onClick={() => handleRemove(column.id)} />
                </div>
              ))}
            </Wrapper>
            <ButtonWrapper>
              <Button
                buttonName="Add New Column"
                icon="+"
                className="w-full justify-center"
                onClick={addColumn}
              />
              <Button
                buttonName="Update"
                className="w-full justify-center"
                onClick={() => updateBoard()}
              />
            </ButtonWrapper>
          </>
        )}
      </ModalComponent>
    </div>
  );
};

export default React.memo(EditBoard);
