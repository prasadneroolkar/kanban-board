import React, { useState, useEffect } from "react";
import ModalComponent from ".././common/ModalComponent";
import Button from "../button/Button";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { setBoards, setCurrentBoard } from "../board/boardSlice.js";

const CreateNewBoard = () => {
  const [boardName, setBoardName] = useState("");

  const dispatch = useDispatch();

  const [columns, setColumns] = useState([
    {
      id: nanoid(),
      name: "default1",
      value: "Todo",
    },
    { id: nanoid(), name: "default2", value: "Doing" },
  ]);

  const handleMultiplecol = (id, newValue) => {
    setColumns((prev) =>
      prev.map((col) => (col.id === id ? { ...col, value: newValue } : col))
    );
  };

  useEffect(() => {
    console.log("columns", columns);
  }, [columns]);

  const addColumn = () => {
    const newColumn = {
      id: nanoid(),
      name: "column" + (columns.length + 1),
      value: "",
    };

    setColumns((prev) => [...prev, newColumn]);
  };
  const handleBoardName = () => {
    console.log("bordname", event.target.value);
    setBoardName(event.target.value);
  };

  const handleRemove = (id) => {
    console.log(id);
    const deletedInput = columns.filter((val) => val.id !== id);
    setColumns(deletedInput);
  };

  const createNewBoard = () => {
    const newBoard = {
      id: nanoid(), // Unique id for the board
      name: boardName, // The board name from your input
      columns: columns, // The array of columns you've built
    };

    // Dispatch the new board — add to the list of boards
    dispatch(setBoards(newBoard));
    dispatch(setCurrentBoard(newBoard.id));
  };
  return (
    <div>
      <ModalComponent textContent="Create New Board">
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
            onClick={createNewBoard}
          />
        </ButtonWrapper>
      </ModalComponent>
    </div>
  );
};

export default CreateNewBoard;
