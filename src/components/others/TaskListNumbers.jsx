import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="px-9 py-6 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-bold">New Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-bold">Completed Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-3xl font-bold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-bold">Active Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-400 text-black">
        <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-bold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
