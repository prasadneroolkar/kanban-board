import React, { useState } from "react";
import ModalComponent from ".././common/ModalComponent";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import { nanoid } from "nanoid";
import Button from "../button/Button";

const AddNewTask = () => {
  const [boardName, setBoardName] = useState("");

  const [columns, setColumns] = useState([
    {
      id: nanoid(),
      name: "default1",
      value: "",
    },
    {
      id: nanoid(),
      name: "default2",
      value: "",
    },
  ]);

  const handleRemove = () => {};

  return (
    <ModalComponent textContent="Add New Task">
      <ModalHeading title="Add New Task" />
      <Wrapper>
        <ModalHeading subtitle="Task Name" />
        <ModalInputs
          value={boardName}
          placeholder=" e.g Take coffee break"
          onChange={() => setBoardName(event.target.value)}
        />
      </Wrapper>
      <Wrapper>
        <ModalHeading subtitle="Description" />
        <textarea
          name="description"
          placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
          className="min-h-[200px] size-full rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent px-4 py-2 ring-0"
        />
      </Wrapper>
      <Wrapper>
        <ModalHeading subtitle="Sub Task " />
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex items-center space-x-2 justify-center mt-[12px]"
          >
            <ModalInputs />
            <CloseButton onClick={() => handleRemove()} />
          </div>
        ))}
        <Button
          buttonName="Add New Subtask"
          icon="+"
          className="w-full justify-center"
        />
      </Wrapper>
      <Wrapper>
        <ModalHeading subtitle="Current Status " />
        <select name="" id=""></select>
        <Button buttonName="Create Task" className="w-full justify-center" />
      </Wrapper>
    </ModalComponent>
  );
};

export default AddNewTask;
