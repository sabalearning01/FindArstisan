import React from "react";
import { LuTextSearch } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <div className="max-w h-[92px] bg-[#004646]">
        <div className="flex justify-between items-center pt-[20px] lg:ml-[100px] lg:mr-[100px]  ">
          <div className="flex justify-center items-center  ml-2.5">
            <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
            <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
              Findartisan
            </h6>
            <div className="hidden lg:block ml-[35px] mt-[5px]">
              <div className="flex justify-center items-center ]">
                <h5 className="font-[DM Sans] text-[#FDFDFD] font-medium text-[16px]">
                  Explore Services
                </h5>
                <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[12px] mr-2.5  ">
            <button className="font-[DM Sans] text-[16px] cursor-pointer rounded-lg text-[#FDFDFD] font-medium py-[10px] px-[16px]  border-1 border-white lg:hidden ">
              Hire an Artisan
            </button>

            <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]  border-1 border-white">
              Hire an Artisan
            </button>
            <IoMenuOutline className="text-white text-2xl sm:block md:block lg:hidden" />
            <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer bg-[#CC5500] text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]">
              Become an Artisan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
