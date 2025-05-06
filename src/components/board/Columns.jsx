import React, { useEffect, useState } from "react";
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
      {boardCol?.map((col, index) => (
        <div className="min-w-[280px]" key={index}>
          <h3 className="space-x-2 flex items-center">
            <span className={`rounded-full  w-4 h-4 inline-block`}></span>
            <span className="text-dark-text tracking-widest font-semibold">
              {/* {col} */}
            </span>
          </h3>
          <TaskCard />
          <TaskCard />
        </div>
      ))}
    </>
  );
};

export default Columns;
