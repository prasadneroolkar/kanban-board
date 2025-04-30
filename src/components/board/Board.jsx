import React from "react";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../button/LogoutButton";
import Columns from "../board/Columns";

const Board = () => {
  const { user } = useAuth();
  return (
    <div className="size-full bg-[#f4f7fd] flex gap-11 py-4 px-10 dark:bg-dark-layout">
      <Columns />
      <Columns />
      <Columns />
    </div>
  );
};

export default Board;
