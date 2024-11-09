import React, { useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState(false);

  const logOutUser = () => {
    setLoading(true); // Show loading spinner
    localStorage.setItem("loggedInUser", "");

    // Scroll to top smoothly, then reload after delay
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Adjust this duration as needed
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <span className="text-3xl font-semibold">username👋</span>
      </h1>

      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          <span className="text-lg font-medium text-white">Logging out...</span>
        </div>
      ) : (
        <button
          onClick={logOutUser}
          className="bg-red-500 text-lg font-medium  text-white px-5 py-2 rounded-sm"
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
