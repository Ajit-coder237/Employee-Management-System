import React from "react";

const Header = ({ handleLogout }) => {
  const handleClick = () => {
    handleLogout();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello{" "}
        <span className="text-3xl font-semibold">
          Ajit Pandey IT Department👋
        </span>
      </h1>
      <button
        onClick={handleClick}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
