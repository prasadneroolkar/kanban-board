import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Button = ({ buttonName }) => {
  return (
    <button className="px-4 py-3 text-[18px] font-medium text-white bg-theme  rounded-[50px] capitalize space-x-2 flex items-center">
      <span className="text-[24px] font-[400] leading-6">+</span>
      <span>{buttonName}</span>
    </button>
  );
};

export default Button;
