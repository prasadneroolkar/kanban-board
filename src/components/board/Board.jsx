import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../button/LogoutButton";
import Columns from "../board/Columns";
import NewColumn from "../board/NewColumn";
import Sidebar from "../sidebar/Sidebar";
import EditBoard from "../modal/EditBoard";
import { moveTask } from "../board/boardSlice.js";

import { DndContext } from "@dnd-kit/core";

const Board = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  const currentId = useSelector((state) => state.board.currentBoardId);
  console.log("current board id", currentId);

  const selectedBoard = boards.find((board) => board.id === currentId);
  console.log("selectedBoard", selectedBoard);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    dispatch(
      moveTask({
        taskId: active.id,
        sourceColId: active.data.current.columnId,
        targetColId: over.data.current.columnId,
      })
    );
  };

  return (
    <>
      <div className="w-dvw bg-[#f4f7fd] flex dark:bg-dark-layout">
        <Sidebar />
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex gap-11 py-4 px-10 ml-[261px] overflow-x-scroll scrollbar-hide overflow-y-scroll">
            <Columns />
            <NewColumn />
          </div>
        </DndContext>
      </div>
    </>
  );
};

export default Board;
