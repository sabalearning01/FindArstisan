// import React,{useState} from 'react'
// import SignUpLady from '../../assets/SignUpLady.png';

// const SignUp = () => {
// const [activeTab, setActiveTab] = useState("user");
// const [formData, setFormData] = useState({
//     firstname:"",
//     lastname:"",
//     email: "",
//     password: "",
//   });

// const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setErrors({});
//     setFormData({firstname:"", lastname:"", email: "", password: "" });
//   };

//   const [errors, setErrors] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//         <div className='flex justify-between'>
//             <img className='hidden lg:block' src = {SignUpLady}/>

//             <div>
//               <h2 className=' mt-[74px] mx-[20px] my-[20px] font-[DM Sans] text-[32px] font-bold  '>Sign Up Now to <span className='text-[#008080]'>Hire Skilled Artisan</span>s</h2>
//                <div className="bg-[#F5F5DC] rounded-xl">
//         <div className="flex justify-center items-center gap-3 py-3">
//           {["user", "artisan"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabClick(tab)}
//               className={`w-full py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ${
//                 activeTab === tab
//                   ? "bg-[#003636] text-white"
//                   : "bg-[#F5F5DC] text-[#788289]"
//               }`}
//             >
//               Log in as {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SignUp

// import React, { useState } from "react";
// import * as yup from "yup";
// import { Eye, EyeOff } from "lucide-react";
// import SignUpLady from "../../assets/SignUpLady.png";

// const validationSchema = yup.object().shape({
//   firstname: yup.string().required("First name is required"),
//   lastname: yup.string().required("Last name is required"),
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// const SignUp = () => {
//   const [activeTab, setActiveTab] = useState("user");
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setFormData({
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setErrors({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await validationSchema.validate(formData, { abortEarly: false });
//       setErrors({});
//       console.log("Submitting:", { ...formData, role: activeTab });
//     } catch (err) {
//       if (err.inner) {
//         const formattedErrors = err.inner.reduce((acc, curr) => {
//           acc[curr.path] = curr.message;
//           return acc;
//         }, {});
//         setErrors(formattedErrors);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-between">
//       <img
//         className="hidden lg:block w-1/2 object-cover"
//         src={SignUpLady}
//         alt="Person signing up"
//       />

//       <div className="flex-1 px-6 lg:px-16">
//         <h2 className="mt-20 font-[\'DM Sans\'] text-3xl lg:text-2xl font-bold">
//           Sign Up Now to{" "}
//           <span className="text-[#008080]">Hire Skilled Artisans</span>
//         </h2>

//         <div className="bg-[#F5F5DC] rounded-xl mt-8">
//           <div className="flex justify-center gap-3 py-3">
//             {["user", "artisan"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => handleTabClick(tab)}
//                 className={`w-full py-2.5 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
//                   activeTab === tab
//                     ? "bg-[#003636] text-white"
//                     : "bg-[#F5F5DC] text-[#788289]"
//                 }`}
//               >
//                 Sign up as {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         <form className="mt-6" onSubmit={handleSubmit} noValidate>
//           <div className="grid grid-cols-1 gap-4">
//             <div>
//               <input
//                 type="text"
//                 name="firstname"
//                 placeholder="First Name"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#003636]"
//               />
//               {errors.firstname && (
//                 <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 name="lastname"
//                 placeholder="Last Name"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#003636]"
//               />
//               {errors.lastname && (
//                 <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#003636]"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#003636]"
//               />
//               <span
//                 className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//                 onClick={() => setShowPassword((prev) => !prev)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </span>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>

//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#003636]"
//               />
//               <span
//                 className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//                 onClick={() => setShowConfirmPassword((prev) => !prev)}
//               >
//                 {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </span>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 w-full bg-[#BA4D00] text-white py-3 rounded-md hover:bg-[#002b2b] transition-colors"
//           >
//             Sign Up as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//           </button>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <hr className="flex-grow border-gray-400" />
//             <span className="mx-4 text-gray-600 text-sm font-medium whitespace-nowrap">
//               or Sign up with
//             </span>
//             <hr className="flex-grow border-gray-400" />
//           </div>

         

//           <button
//             type="button"
//             className="mt-4 w-full border border-gray-400 py-3 rounded-md hover:bg-gray-100 transition-colors"
//           >
//             <span className="flex justify-center items-center gap-2">
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google"
//                 className="w-5 h-5"
//               />
//               Sign Up with Google
//             </span>
//           </button>

//           <p className="mt-4 text-center text-sm">
//             Already have an account?{" "}
//             <a href="/login" className="text-[#003636] font-semibold underline">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import SignUpLady from "../../assets/SignUpLady.png";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setLoading(true);

      const payload = {
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        password: formData.password,
      };

      if (activeTab === "artisan") {
        await axios.post("https://artisan-dic2.onrender.com/artisan/register-artisan", payload);
        alert("Artisan registered successfully!");
      } else {
        // TODO: Add user registration endpoint here if needed
        alert("User registration is not implemented yet.");
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.inner) {
        const formattedErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else if (err.response) {
        alert(`Error: ${err.response.data.message || "Something went wrong!"}`);
      } else {
        alert("Network or server error.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <img
        className="hidden lg:block w-1/2 object-cover"
        src={SignUpLady}
        alt="Person signing up"
      />

      <div className="flex-1 px-6 lg:px-16">
        <h2 className="mt-20 text-3xl lg:text-2xl font-bold">
          Sign Up Now to <span className="text-[#008080]">Hire Skilled Artisans</span>
        </h2>

        {/* Tabs */}
        <div className="bg-[#F5F5DC] rounded-xl mt-8">
          <div className="flex justify-center gap-3 py-3">
            {["user", "artisan"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`w-full py-2.5 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#003636] text-white"
                    : "bg-[#F5F5DC] text-[#788289]"
                }`}
              >
                Sign up as {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3"
              />
              {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
            </div>

            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3"
              />
              {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 pr-10"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 pr-10"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#003636] text-white py-3 rounded-md hover:bg-[#002b2b] transition-colors"
            disabled={loading}
          >
            {loading ? "Submitting..." : `Sign Up as ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm">
            <hr className="flex-grow border-gray-300" />
            <span>or Sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-up */}
          <button
            type="button"
            className="mt-4 w-full border border-gray-400 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="flex justify-center items-center gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign Up with Google
            </span>
          </button>

          {/* Login redirect */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#003636] font-semibold underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

