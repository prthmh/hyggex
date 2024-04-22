import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className=" w-[191px] h-[39px]">
        <img src="/hy-logo.webp" className="size-full" alt="logo" />
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-lg font-normal text-[#3A3740]">Home</div>
        <div className="text-lg font-normal text-[#3A3740]">Flashcard</div>
        <div className="text-lg font-normal text-[#3A3740]">Contact</div>
        <div className="text-lg font-normal text-[#3A3740]">FAQ</div>
        <button className=" w-32 h-12 rounded-[32px] py-3 px-10 bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
