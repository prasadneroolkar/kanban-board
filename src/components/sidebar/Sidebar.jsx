import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
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
          <button className="w-11 h-6 relative" type="button"></button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
