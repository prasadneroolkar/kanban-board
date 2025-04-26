import React from "react";
import Board from "../components/board/Board";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="grid grid-cols-[minmax(261px,_auto)_1fr] *:h-dvh relative top-[82px]">
        <Sidebar />
        <Board />
      </div>
    </>
  );
};

export default Layout;
