import { React, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";

const Signup = () => {
  const [loginChecked, setloginChecked] = useState(true);
  const [signupChecked, setsignupChecked] = useState(false);

  useEffect(() => {
    console.log(loginChecked);
    console.log(signupChecked);
  }, [loginChecked, signupChecked]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  return (
    <div className="bg-theme ">
      <div className="mx-auto grid  lg:w-1/2 py-8 bg-primary max-w-[400px] p-[30px] overflow-hidden">
        <div className="relative flex h-[50px] w-full my-[30px] justify-between border-1 border-gray-400 rounded-[50px] overflow-hidden">
          <input
            type="radio"
            name="toggle"
            defaultChecked
            id="login"
            className="hidden peer/login"
            onChange={() => setloginChecked(!loginChecked)}
          />
          <input
            type="radio"
            name="toggle"
            id="signup"
            className=" hidden peer/signup"
            onChange={() => setsignupChecked(!signupChecked)}
          />
          <label
            htmlFor="login"
            className="size-full capitalize text-base text-lg font-medium z-1 text-center leading-[48px] peer-checked/login:text-white duration-[0.6s] ease-initial"
          >
            login
          </label>
          <label
            htmlFor="signup"
            className="size-full capitalize text-base text-lg font-medium z-1 text-center leading-[48px] peer-checked/signup:text-white duration-[0.6s] ease-initial"
          >
            Signup
          </label>
          <div className="absolute h-full w-[50%] left-0 z-0 rounded-[50px] bg-linear-to-r from-theme to-purple-300 peer-checked/signup:left-1/2 peer-checked/login:left-0 duration-[0.6s] ease-in-expo"></div>
        </div>
        <div className="flex w-[200%] overflow-hidden">
          {/* Login form */}
          <form onSubmit={handleLogin} className="grid size-full">
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

          {/* Signup form */}
          <form onSubmit={handleLogin} className="grid size-full">
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
    </div>
  );
};

export default Signup;
