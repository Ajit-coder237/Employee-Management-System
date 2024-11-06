import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto justify-start items-center gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between  items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">
          Make a youtube video about importance of web technology knowledge in
          2024
        </h2>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl"></div>
    </div>
  );
};
export default TaskList;
