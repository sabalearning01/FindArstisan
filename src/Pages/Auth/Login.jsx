import React, { useState } from "react";
// import * as Yup from "yup";
// import { IoMenuOutline } from "react-icons/io5";
// import { LuTextSearch } from "react-icons/lu";
// import { MdArrowDropDown } from "react-icons/md";
// import { BsEye } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
import Artisan from "../../assets/Artisan.png";

import CountryCitySelector from "../../Components/CountryCitySelector";
import { AiOutlineCopyright } from "react-icons/ai";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";
import Footer from "../../Components/Footer";
import AuthInput from "../../Components/AuthInput";

const Login = () => {

  return (
    <div>
      <Header />

      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <img src={Artisan} alt="Artisan" className="w-[100%] h-[100%]" />
        </div>
        <div>
          <div className="block ">
            <h2 className=" font-[DM Sans] font-bold text-[32px] mt-[74px] mx-[20px] ">
              Welcome Back,{" "}
              <span className="text-[#BA4D00] lg:hidden">Login!</span>{" "}
              <span className="hidden lg:block  lg:text-[#008080] ">
                Login!
              </span>
            </h2>
            <div>
              <Tab />
              <AuthInput/>
            </div>
          </div>
         
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Login;
