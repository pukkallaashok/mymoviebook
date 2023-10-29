import React, { useState } from "react";
import { bgImg } from "../Utilits/constants";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={bgImg} alt="bgImg" />
      </div>
      <div className="">
        <form className="absolute  mx-auto  bg-black w-3/12 right-0 left-0 p-12 my-40 rounded-lg bg-opacity-70">
          <h1 className=" text-white font-bold text-3xl my-4">
            {isSignIn ? "Sign IN" : "Sign UP"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="text-white font-bold px-10 p-2 my-4 w-full rounded-lg bg-gray-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="text-white font-bold px-10 p-2 my-4 w-full rounded-lg bg-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white font-bold px-10 p-2 my-4 w-full rounded-lg bg-gray-500"
          />
          <button className="bg-indigo-600 text-white px-10 w-full my-6 p-2 rounded-lg">
            SignIN
          </button>
          <p className=" text-white m-2 py-10">
            {!isSignIn ? "New to Netflix? " : "Already a menber "}
            <span className="font-bold cursor-pointer" onClick={handleSignIn}>
              {isSignIn ? " Sign IN " : " Sign UP "}
            </span>
            Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
