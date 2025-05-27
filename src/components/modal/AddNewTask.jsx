import React, { useState, useEffect, useRef } from "react";
import ModalComponent from ".././common/ModalComponent";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import { nanoid } from "nanoid";
import Button from "../button/Button";
import { addTask } from "../board/boardSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddNewTask = () => {
  const currentId = useSelector((state) => state.board.currentBoardId);
  const boards = useSelector((state) => state.board.boards);
  const dispatch = useDispatch();

  const currentBoard = boards?.find((board) => board.id === currentId);

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const [selectedColId, setSelectedColId] = useState(
    currentBoard?.columns?.[0]?.id || ""
  );
  // console.log("SelectedCOption", selectedColId);

  useEffect(() => {}, []);

  const selectRef = useRef();

  const [subTask, setsubTask] = useState([
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

  const handleRemove = (id) => {
    setsubTask((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAddtask = () => {
    const addTask = {
      id: nanoid(),
      name: `subtask ${subTask.length}`,
      value: "",
    };
    setsubTask((prev) => [...prev, addTask]);
  };

  const handleInput = (val, id) => {
    setsubTask((prev) =>
      prev.map((task) => (task.id === id ? { ...task, value: val } : task))
    );
  };

  const resetModal = () => {
    setTaskName("");
    setTaskDesc("");
    setSelectedColId(currentBoard?.columns?.[0]?.id || "");
    setsubTask([
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
  };
  const createTask = (closeModal) => {
    if (!taskName.trim()) {
      toast.error("Task name is required.");
      return;
    }

    const selectedOption = selectRef.current?.value;

    const task = {
      id: nanoid(),
      title: taskName.trim(),
      description: taskDesc.trim(),
      colid: selectedOption,
      subtask: subTask
        .filter((st) => st.value.trim() !== "")
        .map((st) => ({
          id: st.id,
          title: st.value.trim(),
          isCompleted: false,
        })),
    };

    try {
      dispatch(
        addTask({
          boardId: currentBoard.id,
          columnId: selectedOption,
          task: task,
        })
      );
      toast.success("Task added successfully!");
      closeModal();
      resetModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ModalComponent textContent="Add New Task" classname="text-white">
      {({ closeModal }) => (
        <>
          <ModalHeading title="Add New Task" />
          <Wrapper>
            <ModalHeading subtitle="Task Name" />
            <ModalInputs
              value={taskName}
              placeholder=" e.g Take coffee break"
              onChange={(event) => setTaskName(event.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <ModalHeading subtitle="Description" />
            <textarea
              name="description"
              value={taskDesc}
              onChange={(event) => setTaskDesc(event.target.value)}
              placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
              className="min-h-[100px] size-full rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent px-4 py-2 ring-0"
            />
          </Wrapper>
          <Wrapper>
            <ModalHeading subtitle="Subtasks " />
            {subTask.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-2 justify-center mt-[12px]"
              >
                <ModalInputs
                  name={task.name}
                  value={task.value}
                  placeholder=" e.g Take coffee break"
                  onChange={(event) => handleInput(event.target.value, task.id)}
                />
                <CloseButton onClick={() => handleRemove(task.id)} />
              </div>
            ))}
            <Button
              buttonName="Add New Subtask"
              icon="+"
              className="w-full justify-center mt-4 mb-6"
              onClick={handleAddtask}
            />
          </Wrapper>
          <Wrapper>
            <ModalHeading subtitle="Current Status " />
            <select
              ref={selectRef}
              name="columns"
              value={selectedColId}
              className="size-full rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent px-4 py-2 ring-0 mt-3 mb-4 select-status cursor-pointer"
              onChange={(e) => setSelectedColId(e.target.value)}
            >
              {currentBoard?.columns?.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <Button
              buttonName="Create Task"
              className="w-full justify-center"
              onClick={() => createTask(closeModal)}
            />
          </Wrapper>
        </>
      )}
    </ModalComponent>
  );
};

export default AddNewTask;
