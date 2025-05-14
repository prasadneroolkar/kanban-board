import React, { useState, Suspense } from "react";
import Board from "../components/board/Board";
import Header from "../components/header/Header";
import CreateNewBoard from "../components/modal/CreateNewBoard";
import EditBoard from "../components/modal/EditBoard";
import { useModal } from "../context/ModalContext";

const Layout = () => {
  const { closeModal, modeType } = useModal();

  return (
    <>
      <Header />

      <div className="grid grid-cols-[minmax(261px,_auto)_1fr] *:h-dvh relative top-[82px] overflow-hidden">
        <Board />
      </div>
      <Suspense fallback={<div>Loading modal...</div>}>
        {modeType === "edit" && <EditBoard onClose={closeModal} />}
        {modeType === "create" && <CreateNewBoard onClose={closeModal} />}
      </Suspense>
    </>
  );
};

export default Layout;
