import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none mt-3 bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="mt-8 w-full text-white outline-none bg-emerald-600 py-3 px-5 rounded-full text-xl"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
