import { IoChevronDown } from "react-icons/io5";

const FaqDorpdown = ({ children }) => {
  return (
    <div className="w-[848px] p-5 flex justify-between items-center border border-[#082299] rounded-[12px]">
      {children}
      <IoChevronDown size={24} className=" text-[#28262C]" />
    </div>
  );
};

export default FaqDorpdown;
