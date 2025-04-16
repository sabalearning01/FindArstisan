import React, { useState } from "react";
import Artisan from "../../assets/Artisan.png";
import Header from "../../Components/Header";
import Tab from "../../Components/Tab";
import Footer from "../../Components/Footer";
import AuthInput from "../../Components/AuthInput";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-between items-center">
        <div className="hidden md:block lg:block">
          <img src={Artisan} alt="Artisan" className="w-[100%] h-[100%]" />
        </div>
        <div>
          <div className="block ">
            <h2 className=" font-[DM Sans] font-bold text-[32px] mt-[74px] mx-[20px] ">
              Welcome Back,{" "}
              <span className="text-[#BA4D00] md:hidden lg:hidden">Login!</span>{" "}
              <span className="hidden md:block lg:block md:text-[#008080] lg:text-[#008080] ">
                Login!
              </span>
            </h2>
            <div>
              <Tab />
              <AuthInput />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
