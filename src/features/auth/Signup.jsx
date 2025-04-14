import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";

const Signup = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <div className="mx-auto grid  lg:w-1/2 py-8 ">
      <h1 className="text-center text-red-400 md:text-amber-200 sm:text-left lg:text-zinc-700 lg:custom-h2">
        Signup
      </h1>
      <form onSubmit={handleLogin} className="grid">
        <div>
          <label> Names </label>
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
  );
};

export default Signup;
