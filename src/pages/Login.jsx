import React, { useState } from "react";
import Input_box from "../components/Input_box";
// image
import Login_image from "../assets/Login.jpg";
// react router dom
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className=" flex h-screen">
      <img src={Login_image} alt="" className="flex-1 h-full w-[20rem]" />
      <div className="flex-1 flex justify-center items-center">
        <div className=" flex flex-col space-y-4 p-[3rem] rounded-lg w-[70%]">
          <h1 className="font-merianda text-3xl">Welcome Back</h1>
          <p className="text-gray-400">Welcome back! Please enter your details</p>
          <div className="flex flex-col space-y-4">
            <Input_box
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input_box
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            href=""
            className="text-right text-blue-600 font-semibold hover:drop-shadow-[0_1px_1px_rgba(37,99,235,0.15)]"
          >
            Forgot password
          </a>
          <button className="button hover:bg-white" onClick={handleLogin}>
            Log In
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:drop-shadow-[0_1px_1px_rgba(37,99,235,0.15)]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
