
import React from "react";
import Artisans from "../assets/Artisan.png";
import Tab from "../Components/Tab";
import Tab2 from '../Components/Tab2';

const AuthInput = () => {
  return (
    <div>
      <div className="block lg:hidden">
      <h2 className="font-[DM Sans] text-[32px] font-bold text-[#36454F] mt-[74px] ml-[20px]">
        Welcome Back, <span className="text-[#BA4D00]">Login!</span>
      </h2>

      <Tab2/>
      
      </div>
      <div className="hidden  lg:block">
      <div className="flex justify-between items-center">
        <img src ={Artisans} alt="Artisan Image" className="w-[100%] h-[100%]"/>
        <Tab2/>
      </div>
      </div>
    </div>
  );
};

export default AuthInput;
