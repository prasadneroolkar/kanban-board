import { React, useState, useEffect, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase.js";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Form from "../../components/form-components/Form";
import Input from "../../components/form-components/Input";
import FormButton from "../../components/form-components/FormButton";
import { useNavigate } from "react-router-dom";

const DualComponent = () => {
  const [loginChecked, setloginChecked] = useState(true);
  const [signupChecked, setsignupChecked] = useState(false);

  const navigate = useNavigate();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    reset: loginReset,
    formState: { errors: loginErrors },
  } = useForm({ criteriaMode: "all" });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    reset: signupReset,
    formState: { errors: signupErrors },
  } = useForm({ criteriaMode: "all" });

  const onLoginSubmit = async (data) => {
    console.log("Login Form Data:", data);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      console.log("user", user);

      // Fetch user data from Firestore
      const userRef = doc(db, "Users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        console.log("User data from Firestore:", userData);
        // You can now store this in context, state, or navigate
      } else {
        console.log("No user data found in Firestore");
      }

      navigate("/board"); // redirect to board after login
      // alert("logged in successfully");
      loginReset();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/board");
    } catch (error) {
      console.log("Google sign-in error:", error.message);
    }
  };

  const onSignupSubmit = async (data) => {
    console.log("Signup Form Data:", JSON.stringify(data));
    if (data.password !== data.confpass) {
      console.log("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      // await updateProfile(user, {
      //   displayName: data.name,
      // });
      console.log("data.name:", data.name);
      console.log("user.uid:", user.uid);
      console.log("db instance:", db);

      console.log("Firestore doc path:", `users/${user.uid}`);
      try {
        const docRef = doc(db, "Users", user.uid);
        await setDoc(docRef, {
          uid: user.uid,
          name: data.name,
          email: data.email,
        });
        // alert("User document successfully written!");
      } catch (error) {
        console.error("Error writing document:", error.code, error.message);
      }

      alert("Signup   successfully");
      signupReset();
    } catch (err) {
      console.log(err.message);
    }
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

              <FormButton buttonText="Login" className="my-4" />
              <p className="size-full text-center  ">
                <span className="relative bg-white rounded-[50%] border border-[#D4D3E8]  before-border after-border p-[5px] z-[1]">
                  or
                </span>
              </p>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="  bg-white flex justify-center gap-4 items-center p-[16px_20px] text-theme w-auto uppercase border-[1px] border-[#D4D3E8] text-sm font-bold rounded-3xl shadow-[0px_2px_2px_#5C5696] text-left my-4 mx-[1px] cursor-pointer"
              >
                <p className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    id="google"
                  >
                    <path
                      fill="#fbbb00"
                      d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                    ></path>
                    <path
                      fill="#518ef8"
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                    ></path>
                    <path
                      fill="#28b446"
                      d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                    ></path>
                    <path
                      fill="#f14336"
                      d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                    ></path>
                  </svg>
                </p>
                Sign in with Google
              </button>
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

export default DualComponent;
