import React from "react";

const ModalInputs = ({ placeholder, onChange }) => {
  return (
    <>
      <input
        type="text"
        className="rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent px-4 py-2 ring-0 "
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export const Wrapper = ({ children }) => {
  return <div className="mt-8">{children}</div>;
};

export default ModalInputs;
