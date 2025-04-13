import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";

const Signup = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <div className="mx-auto flex">
      <form onSubmit={handleLogin}>
        <label> Name </label>
        <input type="text" />
        <label> Email Id</label>
        <input type="email" />
        <label> Password</label>
        <input type="password" />
        <label> Confirm password</label>
        <input type="password" />
        <button type="Submit">create an account</button>
      </form>
    </div>
  );
};

export default Signup;
