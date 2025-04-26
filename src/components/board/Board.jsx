import React from "react";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../../components/LogoutButton";

const Board = () => {
  const { user } = useAuth();
  return (
    <div className="size-full bg-amber-800">
      <p>User details:</p>
      {user ? (
        <>
          <p>{user.uid}</p>
          <p>{user.email}</p>
          <p>{user.name || "No name available"}</p>{" "}
        </>
      ) : (
        <p>Loading...</p> // Show loading state if user is null
      )}
      <LogoutButton />
    </div>
  );
};

export default Board;
