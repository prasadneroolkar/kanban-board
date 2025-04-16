import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";

const Signup = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <div className="bg-theme ">
      <div className="mx-auto grid  lg:w-1/2 py-8 bg-primary ">
        <div className="relative flex h-[50px] w-full my-[30px] justify-between border-1 border-gray-50 rounded-2xl">
          <input type="radio" checked id="login" />
          <input type="radio" id="signup" clasName="checked:left-5" />
          <label className="size-full text-white text-lg font-medium">
            login
          </label>
          <label>Signup</label>
          <div className="absolute h-full w-1/2 left-0 z-0 rounded-[50px] bg-linear-to-r from-theme to-purple-300"></div>
        </div>
        <h1 className="text-center text-4xl tracking-wide">Signup</h1>
        <form onSubmit={handleLogin} className="grid">
          <div>
            <label className="bg-mint-500"> Names </label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label> Email Id</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label> Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <label> Confirm password</label>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="Submit">create an account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
