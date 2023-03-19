import React, { useState } from "react";
import Signup_image from "../assets/Signup.jpg";
import Input_box from "../components/Input_box";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, cPassword);
  };
  return (
    <div className=" flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <div className=" flex flex-col space-y-4 p-[3rem] rounded-lg w-[70%]">
          <h1 className="font-merianda text-3xl">Sign Up</h1>
          <p className="text-gray-400">Please enter your details</p>
          <div className="flex flex-col space-y-4">
            <Input_box
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <Input_box
              type="password"
              name="cPassword"
              value={cPassword}
              placeholder="Confirm Password"
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <button className="button hover:bg-white" onClick={handleRegister}>
            Log In
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to = "/login"
              className="text-blue-600 font-semibold hover:drop-shadow-[0_1px_1px_rgba(37,99,235,0.15)]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <img src={Signup_image} alt="" className="flex-1 h-full w-[20rem]" />
    </div>
  );
};

export default Signup;
