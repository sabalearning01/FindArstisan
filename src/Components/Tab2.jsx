// import React, { useState } from "react";
// import { BsEye, BsEyeSlash } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
// import * as Yup from "yup";
// import GoogleAuth from "./GoogleAuth";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "Minimum 6 characters")
//     .required("Password is required"),
// });

// const Tab2 = () => {
//   const [activeTab, setActiveTab] = useState("user");
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // Loading state

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setErrors({});
//     setFormData({ email: "", password: "" });
//   };

//   const handleChange = async ({ target: { name, value } }) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     try {
//       await validationSchema.validateAt(name, { [name]: value });
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     } catch (error) {
//       setErrors((prev) => ({ ...prev, [name]: error.message }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     // try {
//     //   await validationSchema.validate(formData, { abortEarly: false });
//     //   console.log("Form Data:", formData);
//     //   setErrors({});

//     //   // Send login request
//     //   const response = await fetch("https://artisan-dic2.onrender.com/auth/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(formData),
//     //   });

//     //   const data = await response.json();

//     //   console.log(data)

//     //   if (response.ok) {
//     //     console.log("Login successful:", data);
//     //     // You can store token or redirect the user here
//     //   } else {
//     //     console.error("Login failed:", data.message);
//     //     // Optionally show this in UI
//     //   }
//     // } catch (err) {
//     //   if (err.name === "ValidationError") {
//     //     const formErrors = {};
//     //     err.inner.forEach((e) => {
//     //       formErrors[e.path] = e.message;
//     //     });
//     //     setErrors(formErrors);
//     //   } else {
//     //     console.error("Unexpected error:", err);
//     //   }
//     // }

//     try {
//       await validationSchema.validate(formData, { abortEarly: false });
//       setErrors({});

//       const response = await fetch(
//         "https://artisan-dic2.onrender.com/auth/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         // Optionally store token or redirect
//       } else {
//         console.error("Login failed:", data.message);
//         // Optional: show error message to user
//       }
//     } catch (err) {
//       if (err.name === "ValidationError") {
//         const formErrors = {};
//         err.inner.forEach((e) => {
//           formErrors[e.path] = e.message;
//         });
//         setErrors(formErrors);
//       } else {
//         console.error("Unexpected error:", err);
//       }
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="w-[90%] mx-5 mt-7 md:w-[94%]">
//       <div className="hidden lg:block mt-[74px]">
//         <h2 className="font-[DM Sans] text-[32px] font-bold text-[#36454F]  ml-[20px]">
//           Welcome Back, <span className="text-[#008080]">Login!</span>
//         </h2>
//       </div>

//       {/* Tab Buttons with background */}
//       <div className="bg-[#F5F5DC] rounded-xl">
//         <div className="flex justify-center items-center gap-3 py-3">
//           <button
//             onClick={() => handleTabClick("user")}
//             className={`w-[90%] py-2.5 px-4 rounded-lg text-[18px] cursor-pointer font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "user"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             Log in as a User
//           </button>
//           <button
//             onClick={() => handleTabClick("artisan")}
//             className={`w-[90%] py-2.5 px-4 rounded-lg text-[18px] cursor-pointer font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "artisan"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             Log in as an Artisan
//           </button>
//         </div>
//       </div>

//       {/* Form Section (no background) */}
//       <form onSubmit={handleSubmit} className="mt-6">
//         <input
//           className="w-[100%] md:w-[100%] h-[70px]  outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6] text-[#36454F]"
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && (
//           <p className="text-red-500 ml-[20px] mt-1">{errors.email}</p>
//         )}

//         <div className="relative mt-[28px]">
//           <input
//             className="px-[16px] py-[17px] w-[100%] md:w-[100%] h-[70px] bg-white border-2 rounded-lg border-[#008080] border-opacity-50 outline-none text-[#36454F]"
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <span
//             className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#36454F]"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
//           </span>
//         </div>
//         {errors.password && (
//           <p className="text-red-500 ml-[20px] mt-1">{errors.password}</p>
//         )}

//         <button
//          onClick={handleSubmit}
//           type="submit"
//           className="w-[100%] cursor-pointer md:w-[100%] bg-[#BA4D00] px-[32px] py-[17px]  mt-[28px] rounded-lg text-[18px] font-semibold text-white"
//         >
//           Login
//         </button>
// {/*
//         <button
//           onClick={handleSubmit}
//           type="submit"
//           disabled={loading}
//           className={`w-full cursor-pointer bg-[#BA4D00] px-[32px] py-[17px] mt-[28px] rounded-lg text-[18px] font-semibold text-white ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button> */}

//         <div className="flex justify-between items-center mt-[28px] mx-[20px]">
//           <hr className="w-[20%] border border-[#C1C5C8]" />
//           <p className="text-[18px] text-[#788289] font-medium">
//             or continue with
//           </p>
//           <hr className="w-[20%] border border-[#C1C5C8]" />
//         </div>

//         {/* <button
//           type="button"
//           className="flex justify-center items-center gap-[10px] h-[56px] w-[90%] md:w-[95%] font-medium border border-[#5E6A72] bg-white px-[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]"
//         >
//           <FcGoogle size={20} /> Google
//         </button> */}
//         <button className="flex justify-center items-center gap-[10px] h-[56px] w-[100%] md:w-[100%] font-medium border border-[#5E6A72] bg-white px-[32px] py-[17px]  mt-[28px] rounded-lg text-[18px] text-[#36454F]">
//           {" "}
//           <GoogleAuth />
//         </button>

//         <p className="text-center font-medium text-[18px] text-[#36454F] mt-[28px]">
//           Don’t have an account?{" "}
//           <span className="text-[#CC5500] font-semibold cursor-pointer">
//             Create Account!
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Tab2;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup";
import toast from "react-hot-toast";
import GoogleAuth from "./GoogleAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Tab2 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setFormData({ email: "", password: "" });
  };

  const handleChange = async ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const response = await fetch(
        "https://artisan-dic2.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");

        setTimeout(() => {
          navigate("/dashboard"); // Replace with your actual route
        }, 1500);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        const formErrors = {};
        err.inner.forEach((e) => {
          formErrors[e.path] = e.message;
        });
        setErrors(formErrors);
      } else {
        console.error("Unexpected error:", err);
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="w-[90%] mx-5 mt-7 md:w-[94%]">
      {/* Header */}
      <div className="hidden lg:block mt-[74px]">
        <h2 className="font-[DM Sans] text-[32px] font-bold text-[#36454F] ml-[20px]">
          Welcome Back, <span className="text-[#008080]">Login!</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="bg-[#F5F5DC] rounded-xl">
        <div className="flex justify-center items-center gap-3 py-3">
          {["user", "artisan"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-full py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#003636] text-white"
                  : "bg-[#F5F5DC] text-[#788289]"
              }`}
            >
              Log in as {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full h-[70px] rounded-lg px-4 py-4 bg-[#E6E6E6] text-[#36454F] outline-0"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>
        )}

        <div className="relative mt-[28px]">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full h-[70px] px-4 py-4 pr-12 bg-white border-2 rounded-lg border-[#008080]/50 outline-none text-[#36454F]"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#36454F]"
          >
            {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors.password}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-[28px] bg-[#BA4D00] py-4 rounded-lg text-white text-[18px] font-semibold ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center mt-[28px] gap-3">
          <hr className="w-1/4 border-[#C1C5C8]" />
          <p className="text-[18px] text-[#788289]">or continue with</p>
          <hr className="w-1/4 border-[#C1C5C8]" />
        </div>

        {/* GoogleAuth */}
        <button
          type="button"
          className="flex justify-center items-center gap-[10px] h-[56px] w-full border border-[#5E6A72] bg-white px-4 py-4 mt-6 rounded-lg text-[18px] text-[#36454F]"
        >
          <GoogleAuth />
        </button>

      

        {/* Footer */}
        <p className="text-center text-[18px] text-[#36454F] mt-[28px]">
          Don’t have an account?{" "}
          <span className="text-[#CC5500] font-semibold cursor-pointer">
            Create Account!
          </span>
        </p>
      </form>
    </div>
  );
};

export default Tab2;
