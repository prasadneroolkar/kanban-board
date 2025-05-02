import React from "react";

const ModalHeading = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
      <p className="text-sm dark:text-white text-gray-500 font-semibold tracking-wide">
        {subtitle}
      </p>
      ;
    </>
  );
};

export default ModalHeading;
