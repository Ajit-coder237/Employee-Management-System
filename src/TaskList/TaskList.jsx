import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto justify-start items-center gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl hover:bg-emerald-500 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quo veritatis dolor repellendus iure soluta tenetur reprehenderit,
          quia culpa voluptates distinctio assumenda sit.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl hover:bg-emerald-500 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quo veritatis dolor repellendus iure soluta tenetur reprehenderit,
          quia culpa voluptates distinctio assumenda sit.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl hover:bg-emerald-500 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quo veritatis dolor repellendus iure soluta tenetur reprehenderit,
          quia culpa voluptates distinctio assumenda sit.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-600 rounded-xl hover:bg-emerald-500 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quo veritatis dolor repellendus iure soluta tenetur reprehenderit,
          quia culpa voluptates distinctio assumenda sit.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gray-400 rounded-xl hover:bg-emerald-500 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">6th November 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quo veritatis dolor repellendus iure soluta tenetur reprehenderit,
          quia culpa voluptates distinctio assumenda sit.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
