import React, { useState, useEffect } from "react";
import ModalComponent from ".././common/ModalComponent";
import Button from "../button/Button";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, setCurrentBoard } from "../board/boardSlice.js";
import useColor from "../../hooks/useColor.js";

const CreateNewBoard = () => {
  const { randomColor } = useColor();

  const [boardName, setBoardName] = useState("");

  const dispatch = useDispatch();

  const [columns, setColumns] = useState(() => [
    {
      id: nanoid(),
      name: "default1",
      value: "Todo",
      color: randomColor(),
      tasks: [],
    },
    {
      id: nanoid(),
      name: "default2",
      value: "Doing",
      color: randomColor(),
      tasks: [],
    },
  ]);

  const handleMultiplecol = (id, newValue) => {
    setColumns((prev) =>
      prev.map((col) => (col.id === id ? { ...col, value: newValue } : col))
    );
  };

  const addColumn = () => {
    const newColumn = {
      id: nanoid(),
      name: "column" + (columns.length + 1),
      value: "",
      color: randomColor(),
      tasks: [],
    };

    setColumns((prev) => [...prev, newColumn]);
  };
  const handleBoardName = () => {
    setBoardName(event.target.value);
  };

  const handleRemove = (id) => {
    const deletedInput = columns.filter((val) => val.id !== id);
    setColumns(deletedInput);
  };

  const resetModal = () => {
    setBoardName("");
    setColumns([
      {
        id: nanoid(),
        name: "default1",
        value: "Todo",
        color: randomColor(),
        tasks: [],
      },
      {
        id: nanoid(),
        name: "default2",
        value: "Doing",
        color: randomColor(),
        tasks: [],
      },
    ]);
  };

  const createNewBoard = (closeModal) => {
    const newBoard = {
      id: nanoid(), // Unique id for the board
      name: boardName.trim(), // The board name from your input
      columns: columns, // The array of columns you've built
    };

    try {
      dispatch(addBoard(newBoard));
      dispatch(setCurrentBoard(newBoard.id));
      closeModal();
      resetModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ModalComponent textContent="Create New Board" classname="text-theme">
      {(closeModal) => (
        <>
          <ModalHeading title="Add New Board" />

          <Wrapper>
            <ModalHeading subtitle="Board Name" />
            <ModalInputs
              value={boardName}
              placeholder="e.g Web Design"
              onChange={handleBoardName}
            />
          </Wrapper>

          <Wrapper>
            <ModalHeading subtitle=" Board Columns" />

            {columns.map((column) => (
              <div
                key={column.id}
                className="flex items-center space-x-2 justify-center mt-[12px]"
              >
                <ModalInputs
                  name={column.name}
                  value={column.value}
                  onChange={(e) => handleMultiplecol(column.id, e.target.value)}
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
              onClick={() => createNewBoard(closeModal)}
            />
          </ButtonWrapper>
        </>
      )}
    </ModalComponent>
  );
};

export default CreateNewBoard;
