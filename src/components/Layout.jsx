import React from "react";
import Board from "../components/board/Board";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Board />
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
