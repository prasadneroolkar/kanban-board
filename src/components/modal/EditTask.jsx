import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { updateTask } from "../board/boardSlice";

const EditTask = ({ isOpen, onClose, task, columnId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        taskId: task.id,
        columnId,
        updatedTask: {
          ...task,
          title,
          description,
        },
      })
    );
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Task"
      className="bg-white dark:bg-darkbg rounded-xl p-6 w-96 mx-auto mt-20 outline-none"
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">Edit Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="p-2 rounded border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <textarea
          className="p-2 rounded border"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="text-gray-500">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTask;
