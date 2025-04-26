import React from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary flex justify-between p-4 items-center z-10">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-auto w-[50px]" />
        <p className="md:text-3xl ml-4 font-bold text-base tracking-wide">
          TaskTrex
        </p>
        <p className="md:ml-20 text-2xl font-bold capitalize text-base tracking-wide">
          platform launch
        </p>
      </div>
      <div>
        <Button buttonName="add New task" />
      </div>
    </header>
  );
};

export default Header;
