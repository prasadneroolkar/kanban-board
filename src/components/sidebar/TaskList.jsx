import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CreateNewBoard from ".././modal/CreateNewBoard";

const TaskList = () => {
  return (
    <ul>
      <li className=" text-base flex items-center space-x-2 px-5 py-4 text-lg hover:bg-[#635fc71a] hover:text-[#635fc7] cursor-pointer font-semibold hover:rounded-r-full active:bg-theme active:text-white active:rounded-r-full">
        <FormatListBulletedIcon
          sx={{ fontSize: 20 }}
          className="dark:text-[#828fa3]"
        />
        <span className="dark:text-white">Platform Launch</span>
      </li>

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
