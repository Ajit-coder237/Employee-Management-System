import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Set initial data in localStorage if necessary
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
      <div className="h-auto w-1/12 p-2 bg-purple-700 inline">
        <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
      </div>
    </>
  );
};

export default AuthProvider;
