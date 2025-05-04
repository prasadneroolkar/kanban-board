import React, { useEffect, useState } from "react";
import TaskCard from "../board/TaskCard";
import useColor from "../../hooks/useColor.js";

const Columns = () => {
  const { randomColor } = useColor();
  // console.log("randomColor", randomColor());
  const [first, setfirst] = useState();

  const changeColor = () => {
    const colorvalue = randomColor();
    setfirst(colorvalue);
  };

  // useEffect(() => {}, []);

  return (
    <div className="min-w-[280px]">
      <h3 className="space-x-2 flex items-center">
        <span className={`rounded-full ${first} w-4 h-4 inline-block`}></span>
        <span className="text-dark-text tracking-widest font-semibold">
          Todo (2)
        </span>
      </h3>
      <TaskCard />
      <TaskCard />

      <button type="button" onClick={changeColor}>
        chnage
      </button>
    </div>
  );
};

export default Columns;
