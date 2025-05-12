import React from "react";

const TaskCard = ({ column }) => {
  const tasks = column.tasks;
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg dark:bg-darkbg shadow-shadow mb-4 px-3 py-4 shadow-lg hover:text-theme cursor-pointer  mt-4 group"
        >
          <p className="dark:text-white font-bold tracking-wide group-hover:text-theme text-base">
            {task.title}
          </p>
          <p className="text-gray-500 text-sm mt-1">{task.description}</p>

          <p className="text-gray-500 text-xs mt-2 font-bold tracking-wide">
            {`${task.subtask?.length ?? 0} of ${
              task.subtask?.length ?? 0
            } completed task`}
          </p>
        </div>
      ))}
    </>
  );
};

export default TaskCard;
