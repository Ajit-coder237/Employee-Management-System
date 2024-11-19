import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employeeData = JSON.parse(localStorage.getItem("employees")) || [];

  console.log(employeeData);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-60">
      <div className="mb-2 flex justify-between rounded bg-red-400 py-2 px-4">
        <h2 className="bg-red-600 w-1/5">Employee Name</h2>
        <h3 className="bg-red-600 w-1/5">New Task</h3>
        <h5 className="bg-red-600 w-1/5">Active Task</h5>
        <h5 className="bg-red-600 w-1/5">Completed Task</h5>
        <h5 className="bg-red-600 w-1/5">Failed Task</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {employeeData.map((elem, index) => (
          <div
            key={index}
            className="mb-2 flex justify-between rounded bg-red-400 py-2 px-4"
          >
            <h2 className="bg-red-600 w-1/5">{elem.firstName}</h2>
            <h3 className="bg-red-600 w-1/5">
              {elem.tasks.map(
                (task, taskIndex) =>
                  task.active && <span key={taskIndex}>{task.title}</span>
              )}
            </h3>
            <h5 className="bg-red-600 w-1/5">Status</h5>
            <h5 className="bg-red-600 w-1/5">Status</h5>
            <h5 className="bg-red-600 w-1/5">Status</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
