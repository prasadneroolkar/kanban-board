import { React, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Form from "../../components/form-components/Form";
import Input from "../../components/form-components/Input";
import FormButton from "../../components/form-components/FormButton";

const Signup = () => {
  const [loginChecked, setloginChecked] = useState(true);
  const [signupChecked, setsignupChecked] = useState(false);

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm({ criteriaMode: "all" });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: signupErrors },
  } = useForm({ criteriaMode: "all" });

  const onLoginSubmit = async (data) => {
    console.log("Login Form Data:", data);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // navigate("/board"); // redirect to board after login
      console.log("logged in successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  const onSignupSubmit = async (data) => {
    console.log("Signup Form Data:", JSON.stringify(data));
    if (data.password !== data.confpass) {
      console.log("Passwords do not match.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Signup   successfully");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log("Login checked", loginChecked);
    console.log("Signup checked", signupChecked);
  }, [loginChecked, signupChecked]);

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
      <div className="relative mx-auto grid  max-w-[400px] overflow-hidden p-[30px]  bg-purple-gradient  shadow-[0px_0px_24px_#5C5696] rounded-[5px]">
        <div className="w-full overflow-hidden z-1">
          <div className="relative flex h-[50px] w-full my-[30px] justify-between border-1 border-gray-400 rounded-[50px] bg-white">
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
            <Form
              onSubmit={handleSubmitLogin(onLoginSubmit)}
              className={`grid w-[50%] duration-[0.6s] ease-in-expo h-full gap-2.5 ${
                loginChecked !== true ? "ml-[-50%]" : "ml-0"
              }`}
            >
              <Input
                InputIcon={MailIcon}
                placeholder="Email Address"
                register={registerLogin}
                Inputname="email"
                errorMsg="Email is required"
                errors={loginErrors}
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                }}
              />

              <Input
                InputIcon={LockOpenIcon}
                placeholder="Password"
                register={registerLogin}
                Inputname="password"
                errorMsg="Password is required"
                errors={loginErrors}
              />

              <FormButton buttonText="Login" />
            </Form>

            {/* Signup form */}
            <Form
              onSubmit={handleSubmitSignup(onSignupSubmit)}
              className={`grid w-[50%] h-full duration-[0.6s] ease-in-expo `}
            >
              <Input
                InputIcon={PersonIcon}
                placeholder="Name"
                register={registerSignup}
                Inputname="name"
                errorMsg="Name is required"
                errors={signupErrors}
                rules={{
                  pattern: {
                    value: /^[A-Za-z][A-Za-z ]*$/,
                    message: "Alphabets only.",
                  },
                  minLength: {
                    value: 3,
                    message: " Name must min 3 characters",
                  },
                }}
              />
              <Input
                InputIcon={MailIcon}
                placeholder="Email Address"
                register={registerSignup}
                Inputname="email"
                errorMsg="Email is required"
                errors={signupErrors}
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                }}
              />

              <Input
                InputIcon={LockOpenIcon}
                placeholder="Password"
                register={registerSignup}
                Inputname="password"
                errorMsg="Password is required"
                errors={signupErrors}
                rules={{
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
              />

              <Input
                InputIcon={LockOpenIcon}
                placeholder="Confirm Password"
                register={registerSignup}
                Inputname="confpass"
                errorMsg="Password is required"
                errors={signupErrors}
              />

              <FormButton buttonText="create an account" />
            </Form>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 clip">
          <span className="absolute rotate-45 h-[400px] w-[200px] bg-[#7E7BB9] top-[220px] right-[-250px] rounded-[60px]"></span>
          <span className="absolute rotate-45 h-[540px] w-[190px] bg-lilac-gradient top-[-24px] right-[0px] rounded-[32px]"></span>
          <span className="absolute rotate-45 h-[220px] w-[220px] bg-[#6C63AC] top-[-172px] right-[0px] rounded-[32px]"></span>
          <span className="absolute rotate-45 h-[520px] w-[520px] bg-[#fff] top-[-50px] right-[120px] rounded-[0_72px_0_0]"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
