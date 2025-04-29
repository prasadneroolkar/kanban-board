import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ToggleTheme from "../sidebar/ToggleTheme";
const Sidebar = () => {
  return (
    <aside className="h-full min-w-[261px] bg-white ">
      <div>
        <p>All Boards (3)</p>

        <ul>
          <li>
            <FormatListBulletedIcon sx={{ fontSize: 20 }} />
            <span>Platform Launch</span>
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
