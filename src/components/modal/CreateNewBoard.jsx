import React, { useState, useEffect } from "react";
import ModalComponent from ".././common/ModalComponent";
import Button from "../button/Button";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";
import { nanoid } from "nanoid";

const CreateNewBoard = () => {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState([]);

  const [colName, setColName] = useState({
    default1: "Todo",
    default2: "Doing",
  });

  const handleColName = () => {
    setColName((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleMultiplecol = () => {};

  useEffect(() => {
    console.log("columns", columns);
    // console.log("columns", colName);
  }, [columns]);

  const addColumn = () => {
    const newColumn = {
      id: nanoid(),
      name: "column" + (columns.length + 1),
      value: event.target.value,
    };

    setColumns((prev) => [...prev, newColumn]);
  };
  const handleBoardName = () => {
    console.log("bordname", event.target.value);
    setBoardName(event.target.value);
  };
  return (
    <div>
      <ModalComponent textContent="Create New Board">
        <ModalHeading title="Add New Board" />

        <Wrapper>
          <ModalHeading subtitle="Board Name" />
          <ModalInputs
            placeholder="e.g Web Design"
            onChange={handleBoardName}
          />
        </Wrapper>

        <Wrapper>
          <ModalHeading subtitle=" Board Columns" />

          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <ModalInputs
              name="default1"
              value={colName.default1}
              onChange={handleColName}
            />
            <CloseButton />
          </div>
          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <ModalInputs
              name="default2"
              value={colName.default2}
              onChange={handleColName}
            />
            <CloseButton />
          </div>
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex items-center space-x-2 justify-center mt-[12px]"
            >
              <ModalInputs
                name={column.name}
                value={column.value}
                onChange={handleMultiplecol}
              />
              <CloseButton />
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
          />
        </ButtonWrapper>
      </ModalComponent>
    </div>
  );
};

export default CreateNewBoard;
