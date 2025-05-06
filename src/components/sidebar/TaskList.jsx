import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CreateNewBoard from ".././modal/CreateNewBoard";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentBoard } from "../board/boardSlice.js";

const TaskList = () => {
  const boards = useSelector((state) => state.board.boards);
  const dispatch = useDispatch();

  return (
    <ul>
      {boards.map((board) => (
        <li
          key={board.id}
          className=" text-base flex items-center space-x-2 px-5 py-4 text-lg hover:bg-[#635fc71a] hover:text-[#635fc7] cursor-pointer font-semibold hover:rounded-r-full active:bg-theme active:text-white active:rounded-r-full"
          onClick={() => dispatch(setCurrentBoard(board.id))}
        >
          <FormatListBulletedIcon
            sx={{ fontSize: 20 }}
            className="dark:text-[#828fa3]"
          />
          <span className="dark:text-white">{board.name}</span>
        </li>
      ))}

      <li className=" flex items-center space-x-2 px-5 py-4 text-lg hover:bg-[#635fc71a] text-[#635fc7] cursor-pointer font-semibold hover:rounded-r-full">
        <FormatListBulletedIcon
          sx={{ fontSize: 20 }}
          className="dark:text-[#828fa3]"
        />

        <CreateNewBoard />
      </li>
    </ul>
  );
};

export default TaskList;
