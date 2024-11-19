import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-5 flex justify-center items-center">
        <button className="rounded-md h-1/2 px-1 py-1 text-sm font-semibold bg-yellow-500 text-black">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
