import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ column }) => {
  const tasks = column?.tasks ?? [];

  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="min-h-[20px] transition-all duration-300"
        >
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`bg-white dark:bg-darkbg rounded-lg shadow-lg px-3 py-4 mb-4 mt-4 group ${
                    snapshot.isDragging ? "dragging" : ""
                  }`}
                  style={{
                    ...provided.draggableProps.style,
                    cursor: "grab",
                  }}
                >
                  <p className="font-bold text-base dark:text-white group-hover:text-theme">
                    {task.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 break-words">
                    {task.description}
                  </p>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskCard;
