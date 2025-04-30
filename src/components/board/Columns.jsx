import React from "react";
import TaskCard from "../board/TaskCard";

const Columns = () => {
  return (
    <div className="min-w-[280px]">
      <h3 className="space-x-2 flex items-center">
        <span className="rounded-full bg-green-500 w-4 h-4 inline-block"></span>
        <span className="text-dark-text tracking-widest font-semibold">
          Todo (2)
        </span>
      </h3>
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default Columns;
