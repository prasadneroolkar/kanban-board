import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Button = ({ buttonName, className, icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-[18px] font-medium text-white bg-theme  rounded-[50px] capitalize space-x-2 flex items-center ${className} cursor-pointer`}
    >
      <span className="text-[24px] font-[400] leading-6">{icon}</span>
      <span>{buttonName}</span>
    </button>
  );
};

export default Button;
