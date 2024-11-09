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

    // localStorage.clear();
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
