import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import GoogleAuth from "./GoogleAuth";
import Artisan from '../assets/Artisan.png'
import Tab from "./Tab";
import Tab2 from "./Tab2";

const AuthInput = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character"
      )
      .required("Password is required"),
  });

  const handleChange = async ({ target: { name, value } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Data:", formData);
      setErrors({});
    } catch (err) {
      const formErrors = {};
      err.inner.forEach((e) => {
        formErrors[e.path] = e.message;
      });
      setErrors(formErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      
     <div className="hidden lg:block"> <img src={Artisan} alt="Artisan Image" /></div>
     
    <div>
    
         <h2 className="hidden lg:block  font-[DM Sans] font-bold text-[32px] mt-[74px] mx-[20px] ">
          Welcome Back, <span className="text-[#BA4D00] lg:hidden">Login!</span>{" "}
          <span className="hidden lg:block text-[#008080] ">Login!</span>
        </h2>
        
      {/* <Tab className=" lg:block" /> */}
      <form onSubmit={handleSubmit}>
      <Tab/>
      {/* <Tab2 className="block lg:hidden"/> */}
        <div className="mt-6">
          {activeTab === "user" && (
            <div>
              {/* Email */}
              <input
                className="w-[90%]  md:w-[90%] lg:w-[94%] h-[70px] mx-[20px] outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6]"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm ml-[20px] mt-1">{errors.email}</p>
              )}

              {/* Password */}
              <div className="relative mt-[30px] w-[90%] lg:w-[94%] mx-[20px]">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 py-3 text-lg border-2 border-gray-400 rounded-lg outline-none bg-inherit transition-all duration-200 focus:border-[#008080] hover:border-[#008080]"
                />
                <BsEye
                  className="absolute top-5 right-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-3 text-xl text-gray-500 transition-all duration-200 bg-gray-200 px-1 pointer-events-none
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
                    peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#008080]"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm ml-[20px] mt-1">{errors.password}</p>
              )}

              <Link to="/forgot-password"
                className="block font-[DM Sans] text-right text-[16px] text-[#008080] mt-2 md:mr-[5px] mr-[20px] hover:underline"
              >
                Forgot Password?
              </Link>

              {/* Submit */}
              <button
                type="submit"
                className="w-[90%] md:w-[90%] lg:w-[94%] bg-[#BA4D00] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] font-[DM Sans] font-semibold text-[#FEFEFC]"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex justify-between items-center mt-[28px] mx-[20px]">
                <hr className="w-[20%] md:w-[25px] lg:w-[30%] border border-[#C1C5C8]" />
                <p className="font-[DM Sans] text-[18px] font-medium text-[#788289]">
                  or continue with
                </p>
                <hr className="w-[20%] md:w-[25px] lg:w-[30%] border border-[#C1C5C8]" />
              </div>

              {/* Google Login */}
              <button className="flex justify-center items-center md:w-[90%] lg:w-[94%] cursor-pointer gap-[10px] h-[56px] w-[90%] font-[DM Sans] border border-[#5E6A72] bg-[white] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]">
                {/* <FcGoogle /> Google */}
                <GoogleAuth/>
              </button>

              {/* Switch to Signup */}
              <p className="text-center font-[DM Sans] font-medium text-[18px] text-[#36454F] mt-[28px]">
                Don’t have an account?{" "}
                <Link to="/sign-up" className="text-[#CC5500] font-semibold cursor-pointer">
                  Create Account!
                </Link>
              </p>
            </div>
          )}
            {activeTab === "artisan" && (
              <p className="text-lg font-medium text-gray-700">
                Welcome Artisan! Please proceed to log in as an artisan.
              </p>
            )}
          
        </div>
      
      </form>
      </div>
    </div>
  );
};

export default AuthInput;
