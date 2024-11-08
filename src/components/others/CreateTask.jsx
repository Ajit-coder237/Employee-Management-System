import React, { useState } from "react";
// import { useRef } from "react";

const CreateTask = () => {
  // const inputRef = useRef(null);
  // const focusInput = (event) => {
  //   event.preventDefault();
  //   inputRef.current.focus();
  // };
  const [isFocused, setIsFocused] = useState(false);
  

  const handleClick = () => {
    setIsFocused(true);   
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            {/* <input ref={inputRef} type="text" placeholder="Focus on Me" />
            <button onClick={focusInput}>Focus</button> */}
            <input
              onClick={handleClick}
              onBlur={handleBlur}
              className={`text-sm py-1 px-2 w-4/5 rounded outline-none mb-4 ${
                isFocused
                  ? " bg-blue-100 border-[3px] border-blue-600 shadow-md"
                  : "bg-transparent border-[1px] border-gray-400"
              }`}
              type="text"
              placeholder="Make an UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            rows={5}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
