import { React, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Signup = () => {
  const [loginChecked, setloginChecked] = useState(true);
  const [signupChecked, setsignupChecked] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log("Login checked", loginChecked);
    console.log("Signup checked", signupChecked);
  }, [loginChecked, signupChecked]);

  useEffect(() => {}, [loginChecked]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login");
  };

  const handleLoginToggle = () => {
    setloginChecked(true);
    setsignupChecked(false);
  };

  const handleSignupToggle = () => {
    setsignupChecked(true);
    setloginChecked(false);
  };

  return (
    <div className="bg-[linear-gradient(90deg,_#C7C5F4,_#776BCC)] h-screen grid items-center">
      <div className="mx-auto grid  lg:w-1/2 py-8 bg-primary max-w-[400px] p-[30px] overflow-hidden shadow-[0px_0px_24px_#5C5696] rounded-[5px]">
        <div className="relative flex h-[50px] w-full my-[30px] justify-between border-1 border-gray-400 rounded-[50px] overflow-hidden bg-[url(/img/mountains.jpg)]">
          <input
            type="radio"
            name="toggle"
            defaultChecked
            id="login"
            className="hidden peer/login"
            onChange={handleLoginToggle}
          />
          <input
            type="radio"
            name="toggle"
            id="signup"
            className=" hidden peer/signup"
            // onChange={() => setsignupChecked(true)}
          />
          <label
            htmlFor="login"
            className="size-full capitalize text-base text-lg font-medium z-1 text-center leading-[48px] peer-checked/login:text-white duration-[0.6s] ease-initial"
            onClick={handleLoginToggle}
          >
            login
          </label>
          <label
            htmlFor="signup"
            className="size-full capitalize text-base text-lg font-medium z-1 text-center leading-[48px] peer-checked/signup:text-white duration-[0.6s] ease-initial"
            onClick={handleSignupToggle}
          >
            Signup
          </label>
          <div className="absolute h-full w-[50%] left-0 z-0 rounded-[50px] bg-linear-to-r from-theme to-purple-300 peer-checked/signup:left-1/2 peer-checked/login:left-0 duration-[0.6s] ease-in-expo"></div>
        </div>
        <div className="flex w-[200%] overflow-hidden">
          {/* Login form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`grid size-full duration-[0.6s] ease-in-expo  ${
              loginChecked !== true ? "ml-[-50%]" : "ml-0"
            }`}
          >
            <div className={` grid items-center my-2.5`}>
              {/* <div> */}
              <PersonIcon className=" mb-[-25px] text-theme" />
              <input
                className=" border-b-2 border-gray-300 pl-[30px] w-[75%] placeholder:text-gray-500 z-[1] focus-visible:outline-0 hover:border-b-theme duration-[0.1s] ease-in"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z][A-Za-z ]*$/,
                    message: "Alphabets only.",
                  },
                  minLength: {
                    value: 3,
                    message: " Name must min 3 characters",
                  },
                })}
                aria-invalid={errors.Name ? "true" : "false"}
                placeholder="Name"
              />
              {/* </div> */}
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) => {
                  console.log(Object.entries(messages).length);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p
                          className="text-xs text-red-600  leading-[12px] mb-0.5"
                          key={type}
                        >
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />
            </div>
            <div className="grid items-center my-2.5">
              <MailIcon className=" mb-[-25px] text-theme" />
              <input
                className=" border-b-2 border-gray-300 pl-[30px] w-[75%] placeholder:text-gray-500 z-[1] focus-visible:outline-0 hover:border-b-theme duration-[0.1s] ease-in"
                {...register("email", {
                  required: "Email is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Email Address"
              />
              {errors.email && (
                <p
                  className="text-xs text-red-600  leading-[12px] mb-0.5"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid items-center my-2.5">
              <LockOpenIcon className=" mb-[-25px] text-theme" />
              <input
                className=" border-b-2 border-gray-300 pl-[30px] w-[75%] placeholder:text-gray-500 z-[1] focus-visible:outline-0 hover:border-b-theme duration-[0.1s] ease-in"
                {...register("password", {
                  required: "Password is required",
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="Password"
              />
              {errors.password && (
                <p
                  className="text-xs text-red-600  leading-[12px] mb-0.5"
                  role="alert"
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="grid items-center my-2.5">
              <LockOpenIcon className=" mb-[-25px] text-theme" />

              <input
                className=" border-b-2 border-gray-300 pl-[30px] w-[75%] placeholder:text-gray-500 z-[1] focus-visible:outline-0 hover:border-b-theme duration-[0.1s] ease-in"
                {...register("confpass", {
                  required: "Re-enter password",
                })}
                aria-invalid={errors.confpass ? "true" : "false"}
                placeholder="Confirm Password"
              />
              {errors.confpass && (
                <p
                  className="text-xs text-red-600  leading-[12px] mb-0.5"
                  role="alert"
                >
                  {errors.confpass.message}
                </p>
              )}
            </div>
            <button type="Submit">create an account</button>
          </form>

          {/* Signup form */}
          <form
            onSubmit={handleLogin}
            className={`grid size-full duration-[0.6s] ease-in-expo`}
          >
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
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
