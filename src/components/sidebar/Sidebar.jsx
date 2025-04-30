import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ToggleTheme from "../sidebar/ToggleTheme";
const Sidebar = () => {
  return (
    <aside className="h-full min-w-[261px] bg-white  dark:bg-[#2b2c37] ">
      <div>
        <p className="dark:text-gray-300">All Boards (3)</p>

        <ul>
          <li>
            <FormatListBulletedIcon
              sx={{ fontSize: 20 }}
              className="dark:text-[#828fa3]"
            />
            <span className="dark:text-white">Platform Launch</span>
          </li>
          <li>
            <FormatListBulletedIcon />
            <span>Platform Launch</span>
          </li>
          <li>
            <FormatListBulletedIcon />
            <span>Create New Board</span>
          </li>
        </ul>
        <div>
          <ToggleTheme />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
