import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  // setLocalStorage();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin[0].email === email &&
      authData.admin[0].password === password
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };
  const alerts = () => {
    console.alert("unknown error");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard
          handleLogout={handleLogout}
          data={loggedInUserData}
        />
      ) : (
        { alerts }
      )}
    </>
  );
};

export default App;
