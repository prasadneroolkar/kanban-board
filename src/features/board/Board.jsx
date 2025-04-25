import React from "react";
import useAuth from "../../context/AuthContext";

const Board = () => {
  const { user } = useAuth();
  return (
    <div>
      <p>user details</p>
      <p>{user.uid}</p>
    </div>
  );
};

export default Board;
