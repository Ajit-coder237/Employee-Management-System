import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto justify-start items-center gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idX) => {
        if (elem.active) {
          return <AcceptTask key={idX} />;
        }
        if (elem.newTask) {
          return <NewTask key={idX} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idX} />;
        }
        if (elem.failed) {
          return <FailedTask key={idX} />;
        }
      })}
    </div>
  );
};

export default TaskList;
