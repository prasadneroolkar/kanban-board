import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FormButton = ({ buttonText, className }) => {
  console.log("button component");
  return (
    <button
      className={` bg-white flex justify-between items-center p-[16px_20px] text-theme w-auto uppercase border-[1px] border-[#D4D3E8] text-sm font-bold rounded-3xl shadow-[0px_2px_2px_#5C5696] text-left  mx-[1px] cursor-pointer  ${className}`}
      type="Submit"
    >
      {buttonText}
      <ArrowForwardIosIcon />
    </button>
  );
};

export default React.memo(FormButton);
