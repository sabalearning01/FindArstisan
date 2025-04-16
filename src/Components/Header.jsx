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
            <div className="hidden md:block lg:block ml-[35px] mt-[5px]">
              {/* <div className="flex justify-center items-center ]">
                <h5 className="font-[DM Sans] text-[#FDFDFD] font-medium text-[16px]">
                  Explore Services
                </h5>
                <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
              </div> */}
              <div className="relative inline-block text-left group">
  <button className="inline-flex items-center text-white font-semibold">
    Explore Services
    {/* <svg class="ml-1 w-4 h-4" fill="white" viewBox="0 0 20 20">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.186l3.71-3.954a.75.75 0 011.08 1.04l-4.25 4.53a.75.75 0 01-1.08 0l-4.25-4.53a.75.75 0 01.02-1.06z"/>
    </svg> */}
     <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
  </button>

  
  <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Graphic Design</a>
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO Services</a>
  </div>
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
            <IoMenuOutline className="text-white text-2xl  sm:block md:hidden lg:hidden" />
            <button className="hidden md:block lg:block font-[DM Sans] cursor-pointer bg-[#CC5500] text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]">
              Become an Artisan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
