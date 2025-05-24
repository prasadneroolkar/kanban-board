import React from "react";
import { useDraggable } from "@dnd-kit/core";

const Task = ({ task, columnId }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { columnId }, // Track which column the task comes from
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  const subtasks = task.subtask ?? [];
  const completedCount = subtasks.filter((s) => s.isCompleted).length;
  const totalCount = subtasks.length;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white rounded-lg dark:bg-darkbg shadow-shadow mb-4 px-3 py-4 shadow-lg hover:text-theme cursor-pointer  mt-4 group"
    >
      <p className="dark:text-white font-bold tracking-wide group-hover:text-theme text-base">
        {task.title}
      </p>
      <p className="text-gray-500 text-sm mt-1 wrap-break-word">
        {task.description}
      </p>
      {/* <p className="text-gray-500 text-xs mt-2 font-bold tracking-wide">
        {`${completedCount} of ${totalCount} subtasks completed`}
      </p> */}
    </div>
  );
};

const TaskCard = ({ column }) => {
  const tasks = column?.tasks ?? [];
  console.log("tasks", tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} columnId={column.id} />
      ))}
    </>
  );
};

export default TaskCard;
