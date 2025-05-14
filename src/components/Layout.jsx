import React, { useState } from "react";
import Board from "../components/board/Board";
import Header from "../components/header/Header";
import CreateNewBoard from "../components/modal/CreateNewBoard"
import EditBoard from "../components/modal/EditBoard"


const Layout = () => {
  const [modeType, setModeType] = useState(null);

  const openModal = (type) => setModeType(type);
  const closeModal = () => setModeType(null);

  return (
    <>
      <Header />

      <div className="grid grid-cols-[minmax(261px,_auto)_1fr] *:h-dvh relative top-[82px] overflow-hidden">
        <Board />
      </div>
      {modeType === "create" && }
    </>
  );
};

export default Layout;
