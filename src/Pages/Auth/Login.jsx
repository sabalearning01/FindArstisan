// import React, { useState } from "react";
// import * as Yup from "yup";
// import { IoMenuOutline } from "react-icons/io5";
// import { LuTextSearch } from "react-icons/lu";
// import { MdArrowDropDown } from "react-icons/md";
// import { BsEye } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
// import Artisan from "../../assets/Artisan.png";
// import x from "../../assets/x.png";
// import ig from "../../assets/ig.png";
// import linkedln from "../../assets/linkedln.png";
// import youtube from "../../assets/youtube.png";
// import CountryCitySelector from "../../Components/CountryCitySelector";
// import { AiOutlineCopyright } from "react-icons/ai";


// const Login = () => {
//   const [activeTab, setActiveTab] = useState("user");
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [menuOpen,setIsMenuOpen] = useState(false);

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//       )
//       .required("Password is required"),
//   });

//   const handleChange = async ({ target: { name, value } }) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     try {
//       await validationSchema.validateAt(name, { [name]: value });
//       console.log(`${name} is valid`);
//     } catch (error) {
//       console.log(`${name} is invalid:`, error.message);
//     }
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev );
//   }

//   return (
//     <div>
//       <div className="max-w h-[92px] bg-[#004646]">
//         <div className="flex justify-between items-center pt-[20px] lg:ml-[100px] lg:mr-[100px]  ">
//           <div className="flex justify-center items-center  ml-2.5">
//             <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
//             <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
//               Findartisan
//             </h6>
//             <div className="hidden lg:block ml-[35px] mt-[5px]">
//               <div className="flex justify-center items-center ]">
//                 <h5 className="font-[DM Sans] text-[#FDFDFD] font-medium text-[16px]">
//                   Explore Services
//                 </h5>
//                 <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center gap-[12px] mr-2.5  ">
//             <button className="font-[DM Sans] text-[16px] cursor-pointer rounded-lg text-[#FDFDFD] font-medium py-[10px] px-[16px]  border-1 border-white lg:hidden ">
//               Hire an Artisan
//             </button>
//             {/* big screen */}
//             <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]  border-1 border-white">
//               Hire an Artisan
//             </button>
//             <IoMenuOutline className="text-white text-2xl sm:block md:block lg:hidden" />
//             <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer bg-[#CC5500] text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]">
//               Become an Artisan
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Screen */}
//       <div className="block lg:hidden">
//         <h2 className=" font-[DM Sans] font-bold text-[32px] mt-[74px] mx-[20px] ">
//           Welcome Back, <span className="text-[#BA4D00] lg:hidden">Login!</span>{" "}
//           <span className="hidden lg:block text-[#008080] ">Login!</span>
//         </h2>

//         {menuOpen && (
//           <div>
            
//             </div>
//         )}

//         <div className="bg-[#F5F5DC] w-[90%] min-h-[74px] rounded-xl mx-5 mt-7 md:w-[94%]">
//           <div className="flex justify-center items-center gap-3 py-3">
//             <button
//               onClick={() => handleTabClick("user")}
//               className={`w-[90%] py-2.5 px-4 rounded-lg text-[18px] cursor-pointer font-medium transition-all duration-300 ease-in-out ${
//                 activeTab === "user"
//                   ? "bg-[#003636] text-white"
//                   : "bg-[#F5F5DC] text-[#788289]"
//               }`}
//             >
//               Log in as a user
//             </button>
//             <button
//               onClick={() => handleTabClick("artisan")}
//               className={`w-[90%] py-2.5 px-4 rounded-lg cursor-pointer text-[18px] font-medium transition-all duration-300 ease-in-out ${
//                 activeTab === "artisan"
//                   ? "bg-[#003636] text-white"
//                   : "bg-[#F5F5DC] text-[#788289]"
//               }`}
//             >
//               Log in as an Artisan
//             </button>
//           </div>
//         </div>
//         {/* Display content based on selected tab */}
//         <form onSubmit={handleSubmit}>
//           <div className="mt-6 ">
//             {activeTab === "user" && (
//               <div>
//                 <input
//                   className="w-[90%] md:w-[94%] h-[70px] mx-[20px] outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6]"
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {/* <label className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="px-4 p-[10px] w-[90%] md:w-[94%] h-[58px] mx-[20px] mt-[28px] text-[#36454F] text-2xl bg-white  border-2 rounded-lg border-[#008080] border-opacity-50 outline-none focus:border-[#008080] "
//                   />
//                   <BsEye
//                     className="absolute top-0 right-8 cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   />
//                   <span className="text-2xl text-[white] text-opacity-80 absolute left-0 top-[-10px] mx-7 px-2 transition duration-200 input-text">
//                     Password{" "}
//                   </span>
//                 </label> */}

//                 <a
//                   href="#"
//                   className="block text-sm text-indigo-600 mt-2 hover:underline"
//                 >
//                   Forgot Password?
//                 </a>
//                 {/* <p className="font-[DM Sans] text-[16px] font-medium text-[#008080] text-right mr-[20px] mt-[16px]">
//                   Forgot Password?
//                 </p> */}
//                 <button className="w-[90%] md:w-[95%] bg-[#BA4D00] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] font-[DM Sans] font-semibold text-[#FEFEFC]">
//                   Login
//                 </button>

//                 <div className="flex justify-between items-center mt-[28px] mx-[20px]">
//                   <hr className="w-[20%] border border-[#C1C5C8]" />
//                   <p className="font-[DM Sans] text-[18px] font-medium text-[#788289]">
//                     or continue with{" "}
//                   </p>{" "}
//                   <hr className="w-[20%] border border-[#C1C5C8]" />
//                 </div>
//                 <button className="flex justify-center items-center md:w-[95%] cursor-pointer gap-[10px]  h-[56px] w-[90%] font-[DM Sans]  border border-[#5E6A72] bg-[white] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]">
//                   <FcGoogle /> Google
//                 </button>
//                 <p className=" text-center font-[DM Sans] font-medium text-[18px] text-[#36454F] mt-[28px]">
//                   Don’t have an account?{" "}
//                   <span className="font-[DM Sans] text-[18px] text-[#CC5500] font-semibold">
//                     Create Account!
//                   </span>
//                 </p>
//                 <div className="max-w h-[923.76px] mt-[64px] bg-[#004646]"></div>
//               </div>
//             )}
//             {activeTab === "artisan" && (
//               <p className="text-lg font-medium text-gray-700">
//                 Welcome Artisan! Please proceed to log in as an artisan.
//               </p>
//             )}
//           </div>
//         </form>
//       </div>
//       {/* Big Screen */}
//       <div className=" flex justify-between items-center ]">
//         <img
//           className="hidden lg:block object-contain w-[620px] "
//           src={Artisan}
//           alt="Image of an artisan"
//         />
//         <div>
//           <h2 className="hidden lg:block font-[DM Sans] font-bold text-[32px] ml-[20px] ">
//             Welcome Back,{" "}
//             <span className="text-[#008080] font-[DM Sans] font-bold text-[32px]">
//               Login!
//             </span>
//           </h2>

//           <div className="hidden lg:block bg-[#F5F5DC] w-[540px] ml-[20px] mr-[20px]  min-h-[74px] rounded-xl   mt-7">
//             <div className="flex justify-center items-center gap-3 py-3">
//               <button
//                 onClick={() => handleTabClick("user")}
//                 className={`w-[90%] cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//                   activeTab === "user"
//                     ? "bg-[#003636] text-white"
//                     : "bg-[#F5F5DC] text-[#788289]"
//                 }`}
//               >
//                 Log in as a user
//               </button>
//               <button
//                 onClick={() => handleTabClick("artisan")}
//                 className={`w-[90%]  cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//                   activeTab === "artisan"
//                     ? "bg-[#003636] text-white"
//                     : "bg-[#F5F5DC] text-[#788289]"
//                 }`}
//               >
//                 Log in as an Artisan
//               </button>
//             </div>
//           </div>
//           {/* Display content based on selected tab */}
//           <form className="hidden lg:block" onSubmit={handleSubmit}>
//             <div className="mt-6 ">
//               {activeTab === "user" && (
//                 <div>
//                   <input
//                     className="w-[94%] h-[70px] mx-[20px] outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6]"
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {/* <label className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       className="px-4 p-[10px] w-[90%] h-[58px] mx-[20px] mt-[28px] text-[#36454F] text-2xl bg-white  border-2 rounded-lg border-[#008080] border-opacity-50 outline-none focus:border-[#008080] focus:text-white"
//                     />
//                     <BsEye
//                       className="absolute top-0 right-8 cursor-pointer"
//                       onClick={togglePasswordVisibility}
//                     />
//                     <span className="text-2xl text-[white] text-opacity-80 absolute left-0 top-[-10px] mx-7 px-2 transition duration-200 input-text">
//                       Password{" "}
//                     </span>
//                   </label> */}

//                   <div className="relative mt-[30px] w-[94%] ml-[20px]">
//                     <input
//                       id="password"
//                       type="password"
//                       placeholder=" "
//                       className="peer w-[100%] px-4 py-3 text-lg border-2 border-gray-400 rounded-lg outline-none bg-inherit transition-all duration-200 focus:border-[#008080] hover:border-[#008080]"
//                     />
//                     <BsEye
//                       className="absolute top-5 lg:right-4 cursor-pointer"
//                       onClick={togglePasswordVisibility}
//                     />
//                     <label
//                       htmlFor="password"
//                       className="absolute left-4 top-3 text-xl text-gray-500 transition-all duration-200 bg-gray-200 px-1 pointer-events-none
//                peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
//                peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#008080]"
//                     >
//                       Password
//                     </label>
//                   </div>

//                   <p className="font-[DM Sans] text-[16px] font-medium text-[#008080] text-right mr-[12px] mt-[16px]">
//                     Forgot Password?
//                   </p>
//                   <button className="w-[94%] bg-[#BA4D00] px[32px] py-[17px] mx-[20px] mt-[28px] cursor-pointer rounded-lg text-[18px] font-[DM Sans] font-semibold text-[#FEFEFC]">
//                     Login
//                   </button>

//                   <div className="flex justify-between items-center mt-[28px] mx-[20px]">
//                     <hr className="w-[20%] border border-[#C1C5C8]" />
//                     <p className="font-[DM Sans] text-[18px] font-medium text-[#788289]">
//                       or continue with{" "}
//                     </p>{" "}
//                     <hr className="w-[20%] border border-[#C1C5C8]" />
//                   </div>
//                   <button className="flex justify-center items-center gap-[10px] cursor-pointer h-[56px] w-[94%] font-[DM Sans]  border border-[#5E6A72] bg-[white] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]">
//                     <FcGoogle /> Google
//                   </button>
//                   <p className=" text-left font-[DM Sans] font-medium text-[18px] ml-[20px] text-[#36454F] mt-[28px]">
//                     Don’t have an account?{" "}
//                     <span className="font-[DM Sans] text-[18px] text-[#CC5500] font-semibold">
//                       Create Account!
//                     </span>
//                   </p>
//                 </div>
//               )}
//               {activeTab === "artisan" && (
//                 // <p className="text-lg font-medium text-gray-700">
//                 //   Welcome Artisan! Please proceed to log in as an artisan.
//                 // </p>
//                 <div>
//                   <input
//                     className="w-[94%] h-[70px] mx-[20px] outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6]"
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
                      
//                       <div className="relative mt-[30px] w-[94%] ml-[20px]">
//                     <input
//                       id="password"
//                       type="password"
//                       placeholder=" "
//                       className="peer w-[100%] px-4 py-3 text-lg border-2 border-gray-400 rounded-lg outline-none bg-inherit transition-all duration-200 focus:border-[#008080] hover:border-[#008080]"
//                     />
//                     <BsEye
//                       className="absolute top-5 lg:right-4 cursor-pointer"
//                       onClick={togglePasswordVisibility}
//                     />
//                     <label
//                       htmlFor="password"
//                       className="absolute left-4 top-3 text-xl text-gray-500 transition-all duration-200 bg-gray-200 px-1 pointer-events-none
//                peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg 
//                peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#008080]"
//                     >
//                       Password
//                     </label>
//                   </div>

//                   <p className="font-[DM Sans] text-[16px] font-medium text-[#008080] text-right mr-[12px] mt-[16px]">
//                     Forgot Password?
//                   </p>
//                   <button className="w-[94%] bg-[#BA4D00] px[32px] py-[17px] mx-[20px] mt-[28px] cursor-pointer rounded-lg text-[18px] font-[DM Sans] font-semibold text-[#FEFEFC]">
//                     Login
//                   </button>

//                   <div className="flex justify-between items-center mt-[28px] mx-[20px]">
//                     <hr className="w-[20%] border border-[#C1C5C8]" />
//                     <p className="font-[DM Sans] text-[18px] font-medium text-[#788289]">
//                       or continue with{" "}
//                     </p>{" "}
//                     <hr className="w-[20%] border border-[#C1C5C8]" />
//                   </div>
//                   <button className="flex justify-center items-center gap-[10px] cursor-pointer h-[56px] w-[94%] font-[DM Sans]  border border-[#5E6A72] bg-[white] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]">
//                     <FcGoogle /> Google
//                   </button>
//                   <p className=" text-left font-[DM Sans] font-medium text-[18px] ml-[20px] text-[#36454F] mt-[28px]">
//                     Don’t have an account?{" "}
//                     <span className="font-[DM Sans] text-[18px] text-[#CC5500] font-semibold">
//                       Create Account!
//                     </span>
//                   </p>

//                   </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Mobile screen */}
//       {/* <div className="w-[430px] lg:hidden bg-[#004646]">
//         <div className="flex  items-center">
//           <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
//           <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
//             Findartisan
//           </h6>
//         </div>
//       </div> */}

//       <div className="hidden lg:block lg:bg-[#004646] lg:w-[100%] lg:h-[508px]">
//         {/* Big screen */}
//         <div className="flex  justify-between ml-[100px] mr-[124px] pt-[88px]">
//           <div>
//             <div className="flex  items-center">
//               <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
//               <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
//                 Findartisan
//               </h6>
//             </div>
//             <p className="Font-[DM Sans] font-normal text-[12px] mt-[16px] text-[#C1C5C8] w-[199.05px] h-[60px]">
//               We exist to help you get secure, fast and reliable artisans at
//               affordable rate
//             </p>
//             <CountryCitySelector className="" />
//           </div>
//           <div>
//             <div>
//               <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
//                 For Customers
//               </h6>
//             </div>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Hire an Artisans
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               How it works
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Log in
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Sign up
//             </p>
//           </div>

//           <div>
//             <div>
//               <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
//                 For Artisans
//               </h6>
//             </div>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8]">
//               How it works
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Sign up as Artisan
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Log in
//             </p>
//           </div>
//           <div>
//             <div>
//               <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
//                 Support
//               </h6>
//             </div>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Send us email
//             </p>
//             <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
//               Give feedback as <br /> user
//             </p>
//           </div>
//           <div>
//             <div>
//               <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
//                 Follow Us
//               </h6>
//             </div>
//             <div>
//               <div className="flex items-center pt-[16px]  gap-1.5">
//                 <img
//                   className="w-[20px] h-[20px] cursor-pointer object-contain"
//                   src={ig}
//                   alt=""
//                 />
//                 <p className="font-[DM Sans] font-medium text-[16px]  text-[#C1C5C8]">
//                   Instagram
//                 </p>
//               </div>
//               <div className="flex  items-center pt-[16px] gap-1.5">
//                 <img
//                   className="w-[20px] h-[20px] cursor-pointer object-contain"
//                   src={linkedln}
//                   alt=""
//                 />
//                 <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
//                   Linkedln
//                 </p>
//               </div>
//               <div className="flex  items-center pt-[16px] gap-1.5">
//                 <img
//                   className="w-[20px] h-[20px] cursor-pointer object-contain"
//                   src={x}
//                   alt=""
//                 />
//                 <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
//                   X/Twitter
//                 </p>
//               </div>
//               <div className="flex  items-center pt-[16px] gap-1.5">
//                 <img
//                   className="w-[20px] h-[20px] cursor-pointer object-contain"
//                   src={youtube}
//                   alt=""
//                 />
//                 <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
//                   Youtube
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="border-[#007474] ml-[100px] mr-[100px] mt-[60px]" />
//         <div className="flex items-center gap-3 ml-[100px] text-[#A3A9AE] mt-[60px]">
//           <AiOutlineCopyright />
//           <p className="font-[DM Sans] font-medium text-[16px]">
//             2025 Fndartisan Technologies.
//           </p>{" "}
//           <p className="font-[DM Sans] font-medium text-[16px]">
//             Terms & Conditions/ Cookies policy / Privacy policy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react'
import Header from '../../Components/Header'
import AuthInput from '../../Components/AuthInput'
import Footer from '../../Components/Footer'


const Login = () => {
  return (
    <div>
      {/* <Header/> */}
      <AuthInput/>
      {/* <Footer/> */}
    
    </div>
  )
}

export default Login
