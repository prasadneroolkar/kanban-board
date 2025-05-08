import React from "react";
import { useSelector } from "react-redux";

const TaskCard = () => {
  const boards = useSelector((state) => state.board.boards);
  console.log("boards", boards);

  // Flatten all tasks into one array
  const tasksList =
    boards?.flatMap(
      (board) => board.columns?.flatMap((col) => col.tasks ?? []) ?? []
    ) ?? [];

  console.log("taskslist", tasksList);

  return (
    <>
      {tasksList.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg dark:bg-darkbg shadow-shadow my-5 px-3 py-6 shadow-lg hover:text-theme cursor-pointer group"
        >
          <p className="dark:text-white font-bold tracking-wide group-hover:text-theme text-base">
            {task.title}
          </p>

          {task.subtask.map((sub, index) => (
            <p
              key={index} // If subtasks don't have an id, fallback to index
              className="text-gray-500 text-xs mt-2 font-bold tracking-wide"
            >
              {`${sub.length} of ${sub.length} completed task`}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default TaskCard;
