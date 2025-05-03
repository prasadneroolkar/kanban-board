import React from "react";

const ButtonWrapper = ({ children }) => {
  return (
    <div className="mt-4 flex justify-center items-center mt-3 flex-col space-y-6">
      {children}
    </div>
  );
};

export default ButtonWrapper;
