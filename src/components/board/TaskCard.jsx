import React from "react";

const TaskCard = () => {
  return (
    <div className="bg-white rounded-lg dark:bg-darkbg shadow-shadow my-5 px-3 py-6 shadow-lg  hover:text-theme cursor-pointer group">
      <p className="dark:text-white font-bold tracking-wide group-hover:text-theme  text-base ">
        Build UI for onboarding flow
      </p>
      <p className="text-gray-500 text-xs mt-2 font-bold tracking-wide">
        1 of 3 completed task{" "}
      </p>
    </div>
  );
};

export default TaskCard;
