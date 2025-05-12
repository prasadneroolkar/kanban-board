import React from "react";
import TaskCard from "../board/TaskCard";
import { useSelector } from "react-redux";

const Columns = () => {
  const boards = useSelector((state) => state.board.boards);
  const currentBoardId = useSelector((state) => state.board.currentBoardId);

  const boardCol = boards
    ?.find((board) => board.id === currentBoardId)
    ?.columns?.map((col) => col);

  console.log("board column", boardCol);

  return (
    <>
      {boardCol?.map((col) => (
        <div className="min-w-[280px]" key={col.id}>
          <h3 className="space-x-2 flex items-center">
            <span
              className={`rounded-full w-4 h-4 inline-block ${col.color}`}
            ></span>
            <span className="text-dark-text tracking-widest font-semibold">
              {col.value}
            </span>
          </h3>
          <TaskCard column={col} />
        </div>
      ))}
    </>
  );
};

export default Columns;
