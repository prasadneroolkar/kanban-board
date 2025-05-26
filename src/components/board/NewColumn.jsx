import React from "react";
import EditBoard from "../modal/EditBoard";

const NewColumn = () => {
  console.log("NewColumn component");

  const [show, setShow] = React.useState(null);

  return (
    <div
      className=" h-screen dark:bg-[#2b2c3740] flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2   mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[135px] rounded-lg "
      onClick={() => {
        show ? (
          setShow(true)
        ) : (
          <>
            <EditBoard />{" "}
          </>
        );
      }}
    >
      <EditBoard mode="+ New Column" />
    </div>
  );
};

export default NewColumn;
