import React from "react";
import Board from "../components/board/Board";
import Header from "../components/header/Header";
import { Example } from "../components/Example";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="grid grid-cols-[minmax(261px,_auto)_1fr] *:h-dvh relative top-[82px] overflow-hidden">
        <Board />
      </div>
    </>
  );
};

export default Layout;
