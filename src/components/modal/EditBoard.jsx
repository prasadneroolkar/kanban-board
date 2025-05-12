import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalComponent from ".././common/ModalComponent";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";
import { nanoid } from "nanoid";
import Button from "../button/Button";

const EditBoard = () => {
  const boards = useSelector((state) => state.board.boards);
  const currentId = useSelector((state) => state.board.currentBoardId);
  console.log("boards", boards);
  console.log("currentId", currentId);

  const modalRef = useRef();

  useEffect(() => {
    console.log("boards", boards);
    console.log("currentId", currentId);
  }, []);

  const currentBoard = boards?.find((curr) => curr.id === currentId);

  const [boardName, setBoardName] = useState(currentBoard?.name);
  console.info("currentBoard", boardName);
  const initialColumns = currentBoard?.columns?.map((col) => col);
  console.info("initialColumns", initialColumns);

  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    setBoardName(currentBoard?.name || "");
    setColumns(currentBoard?.columns || []);
  }, [currentBoard]);
  console.info("currentColumns", columns);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Clicked outside component!");
        setColumns(initialColumns);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [initialColumns]);

  const updateBoard = () => {};
  const handleMultiplecol = (id, newValue) => {
    setColumns((prev) =>
      prev.map((col) => (col.id === id ? { ...col, value: newValue } : col))
    );
  };
  const handleRemove = (id) => {
    setColumns(columns?.filter((col) => col.id !== id));
  };
  const addColumn = () => {};

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
                    value={column.value}
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
                buttonName="Create New Board"
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

export default EditBoard;
