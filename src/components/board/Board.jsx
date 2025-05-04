import React from "react";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../button/LogoutButton";
import Columns from "../board/Columns";
import NewColumn from "../board/NewColumn";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";

const Board = () => {
  const { user } = useAuth();
  const boards = useSelector((state) => state.board.boards);
  return (
    <>
      <div className="size-full bg-[#f4f7fd] flex dark:bg-dark-layout">
        <Sidebar />
        <div className="flex gap-11 py-4 px-10 ml-[261px] overflow-x-scroll scrollbar-hide overflow-y-scroll">
          {/* <Columns />
          <Columns />
          <Columns />
          <NewColumn /> */}
          {boards.map((board) => (
            <div key={board.id}>{board.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
