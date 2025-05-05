import React from "react";
import Close from "../../assets/images/close.svg";

const CloseButton = ({ onClick }) => {
  return (
    <img src={Close} alt="close" className="cursor-pointer" onClick={onClick} />
  );
};

export default CloseButton;
