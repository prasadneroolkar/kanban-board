import React from "react";
import TaskCard from "../board/TaskCard";
import { useSelector } from "react-redux";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ col }) => {
  const { setNodeRef } = useDroppable({
    id: col.id,
    data: { columnId: col.id },
  });

  return (
    <div ref={setNodeRef} className="min-w-[280px]">
      <h3 className="space-x-2 flex items-center">
        <span
          className={`rounded-full w-4 h-4 inline-block ${col.color}`}
        ></span>
        <span className="text-dark-text tracking-widest font-semibold">
          {col.name}
        </span>
      </h3>
      <TaskCard column={col} />
    </div>
  );
};

const Columns = () => {
  const boards = useSelector((state) => state.board.boards);
  const currentBoardId = useSelector((state) => state.board.currentBoardId);

  const boardCol =
    boards.find((board) => board.id === currentBoardId)?.columns ?? [];

  console.log("board column", boardCol);

  return (
    <>
      {boardCol.map((col) => (
        <Column key={col.id} col={col} />
      ))}
    </>
  );
};

export default Columns;
