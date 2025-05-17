import React from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../button/Button";
import Dotmenu from "../header/Dotmenu";
import AddNewTask from ".././modal/AddNewTask";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const boards = useSelector((state) => state.board.boards);
  const currentId = useSelector((state) => state.board.currentBoardId);
  const currentBoard = boards?.find((curr) => curr.id === currentId);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary flex justify-between p-4 items-center z-10 dark:bg-darkbg">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-auto w-[50px]" />
        <p className="md:text-3xl ml-4 font-bold text-base tracking-wide dark:text-white">
          TaskTrex
        </p>
        <p className="md:ml-20 text-2xl font-bold capitalize text-base tracking-wide dark:text-white">
          {currentBoard?.name}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Button buttonName={<AddNewTask />} icon="+" />
        <Dotmenu />
      </div>
    </header>
  );
};

export default Header;
