import React, { useState, useCallback, useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import EditTask from "../modal/EditTask";

const Task = React.memo(({ task, columnId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const pointerDownPosition = useRef({ x: 0, y: 0 });

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { columnId },
    });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handlePointerDown = (e) => {
    pointerDownPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleClick = (e) => {
    const dx = Math.abs(e.clientX - pointerDownPosition.current.x);
    const dy = Math.abs(e.clientY - pointerDownPosition.current.y);

    // If the pointer didn't move much, treat it as a click
    if (dx < 5 && dy < 5) {
      openEditModal();
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        className="bg-white rounded-lg dark:bg-darkbg shadow-shadow mb-4 px-3 py-4 shadow-lg hover:text-theme cursor-pointer mt-4 group"
      >
        <p className="dark:text-white font-bold tracking-wide group-hover:text-theme text-base">
          {task.title}
        </p>
        <p className="text-gray-500 text-sm mt-1 wrap-break-word">
          {task.description}
        </p>
      </div>

      {isEditing && (
        <EditTask
          isOpen={isEditing}
          onClose={closeEditModal}
          task={task}
          columnId={columnId}
        />
      )}
    </>
  );
});

const TaskCard = ({ column }) => {
  const tasks = column?.tasks ?? [];
  console.log("TaskCard part");

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} columnId={column.id} />
      ))}
    </>
  );
};

export default React.memo(TaskCard);
