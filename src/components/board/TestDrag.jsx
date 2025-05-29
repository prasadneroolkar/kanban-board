import React from "react";
import {
  DndContext,
  useDraggable,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";

function DraggableBox() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "box",
  });

  const style = {
    width: "100px",
    height: "100px",
    background: "skyblue",
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
    padding: "20px",
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      Drag me
    </div>
  );
}

export default function TestDrag() {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      onDragStart={() => console.log("Drag start")}
      onDragEnd={() => console.log("Drag end")}
    >
      <DraggableBox />
    </DndContext>
  );
}
