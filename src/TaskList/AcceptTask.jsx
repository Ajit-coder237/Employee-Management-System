import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">6th November 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
        voluptatibus nulla, repudiandae neque officiis?
      </p>
      <div className="flex justify-between mt-5">
        <button className="bg-green-400 rounded-md h-1/2 px-1 py-1 text-sm font-semibold">
          Marks As Completed
        </button>
        <button className="bg-red-500 h-1/2 rounded-md px-1 py-1 text-sm font-semibold">
          Marks As Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
