import React from "react";
import { auth } from "../services/firebase.js";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
  const handleSignout = async () => {
    await signOut(auth);
  };

  return <button onClick={handleSignout}>Logout</button>;
};

export default LogoutButton;
