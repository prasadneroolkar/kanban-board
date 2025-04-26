import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return <div>{user ? children : navigate("/")}</div>;
};

export default PrivateRoute;
