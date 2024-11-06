import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 w-screen">
      <div className="px-10 py-5 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
