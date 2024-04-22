import React from "react";
import { GoHome } from "react-icons/go";
import ForwardArrow from "./ForwardArrow";

const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-1 my-10 self-start">
      <div>
        <GoHome size={30} className=" text-[#696671]" />
      </div>
      <ForwardArrow />
      <div className="text-lg font-medium text-[#696671]">Flashcard</div>
      <ForwardArrow />
      <div className="text-lg font-medium text-[#696671]">Mathematics</div>
      <ForwardArrow />
      <div className="text-lg font-medium text-[#06286E]">
        Relation and Function
      </div>
    </div>
  );
};

export default BreadCrumb;
