import React from "react";
import ToggleTheme from "../sidebar/ToggleTheme";
import TaskList from "../sidebar/TaskList";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const boards = useSelector((state) => state.board.boards);

  return (
    <aside className="h-svh min-w-[261px] bg-white  dark:bg-[#2b2c37] absolute">
      <div className="mr-8 py-6">
        <p className="dark:text-gray-300 text-gray-600 font-[500] uppercase tracking-[0.3px] mb-8 text-md ml-5">
          {`All Boards (${boards.length})`}
        </p>
        <div className="h-[70vh] flex flex-col justify-between">
          <TaskList />
          <div className=" w-full bottom-[130px]">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
