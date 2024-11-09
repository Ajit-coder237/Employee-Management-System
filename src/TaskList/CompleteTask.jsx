import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">6th November 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quo
        veritatis dolor repellendus iure soluta tenetur reprehenderit, quia
        culpa voluptates distinctio assumenda sit.
      </p>
      <div className="mt-5 flex justify-center items-center">
        <button className="rounded-md h-1/2 px-1 py-1 text-sm font-semibold bg-red-500">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
