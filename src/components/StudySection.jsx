import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";
import { FaRedoAlt } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const StudySection = () => {
  return (
    <div className="w-full">
      <h2 className=" font-bold text-3xl bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-left font-montserrat">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="flex justify-center gap-10 mt-8 text-lg font-semibold">
        <div className=" border-b-2 border-[#06286E] text-[#06286E] pb-1 px-3 ">
          Study
        </div>
        <div className=" text-[#696671] pb-1 px-3 border-b-2 border-transparent hover:border-[#06286E] hover:text-[#06286E] cursor-pointer ">
          Quiz
        </div>
        <div className=" text-[#696671] pb-1 px-3 border-b-2 border-transparent hover:border-[#06286E] hover:text-[#06286E] cursor-pointer">
          Test
        </div>
        <div className=" text-[#696671] pb-1 px-3 border-b-2 border-transparent hover:border-[#06286E] hover:text-[#06286E] cursor-pointer">
          Game
        </div>
        <div className=" text-[#696671] pb-1 px-3 border-b-2 border-transparent hover:border-[#06286E] hover:text-[#06286E] cursor-pointer">
          Others
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div
          className=" h-[394px] w-[700px] bg-[#06286E] rounded-[42px] flex justify-center items-center text-4xl text-white font-bold relative"
          style={{
            background:
              "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)",
          }}
        >
          9 + 6 + 7x - 2x - 3{" "}
          <div className=" absolute text-white top-8 left-8">
            <MdLightbulbOutline size={30} />
          </div>
          <div className=" absolute text-white top-8 right-8">
            <MdVolumeUp size={30} />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex justify-between items-center w-[612px]">
          <div className="">
            <FaRedoAlt size={30} className=" text-[#06286E]" />
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-2 text-white">
              <IoChevronBack size={30} />
            </div>
            <div className="text-[#202B37] text-2xl font-bold">1/10</div>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-2 text-white">
              <IoChevronForward size={30} />
            </div>
          </div>
          <div>
            <MdFullscreen size={46} className=" text-[#06286E]" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className=" w-[217px] h-[125px]">
          <img src="/hyggex-2.webp" alt="logo" className="size-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-2 text-white">
            <FaPlus size={30} />
          </div>
          <span className=" font-semibold text-2xl bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
            Create Flashcard
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudySection;
