import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ControlPanel = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex justify-center items-center">
      <div>
        <h5 className="font-[DM Sans] text-[24px] text-[#007474] mt-[195.5px]">
          Login to{" "}
          <span className="text-[20px] text-[#BA4D00]">Control Panel</span>
        </h5>

        <input
          className="bg-[#E6E6E6] mt-[28px] px-[15px] py-[16px] w-[540px] rounded-xl"
          type="text"
          placeholder="Username: admin"
        />

        <br />
        <label className="text-[18px] text-[#36454F] font-[DM Sans] font-medium">Password</label>
        <br />

        <div className="relative mt-2">
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
          <input
            className="bg-[#E6E6E6] pl-4 pr-[15px] py-[16px] w-[540px] rounded-xl"
            type={showPassword ? "text" : "password"}
            placeholder="*******"
          />
        </div>

        <p className="text-[#007474] text-right mt-[16px]">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password
          </a>
        </p>

        <button className="mt-[28px] cursor-pointer bg-[#BA4D00] text-white rounded-lg w-[540px] mb-[102.5px] py-[17px] px-[32px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
