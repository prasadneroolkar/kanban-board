import React from "react";
import TaskCard from "../board/TaskCard";
import { useSelector } from "react-redux";
import { Droppable } from "@hello-pangea/dnd";

const Column = ({ col }) => {
  return (
    <div className="min-w-[280px] mr-6">
      <h3 className="flex items-center mb-4 space-x-2">
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

  return (
    <>
      {boardCol.map((col) => (
        <Column key={col.id} col={col} />
      ))}
    </>
  );
};

export default Columns;
