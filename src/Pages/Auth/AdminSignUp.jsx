import React, { useState } from "react";
import Adminpicture from "../../assets/Adminpicture.png";
import hamsearch from "../../assets/hamsearch.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      toast.success("Registration successful!");
      formik.resetForm();
    },
  });

  return (
    <div className="flex flex-col lg:flex-row justify-between min-h-screen bg-gray-100">
      <ToastContainer position="top-right" />

      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 px-4 py-8">
        <div className="flex flex-col items-center">
          <img
            src={hamsearch}
            alt="Search Icon"
            className="w-[50px] h-[50px] lg:w-[73px] lg:h-[54px] object-contain mt-6"
          />
          <h2 className="text-xl lg:text-2xl font-medium text-center font-[DM Sans] mt-2">
            Findartisan
          </h2>
          <h2 className="text-[#BA4D00] text-xl lg:text-2xl font-medium text-center font-[DM Sans] mt-2">
            Admin Dashboard
          </h2>
          <h2 className="text-[#007474] text-lg lg:text-xl font-bold font-[DM Sans] mt-6">
            Create an account
          </h2>

          <form onSubmit={formik.handleSubmit} className="w-full max-w-[580px] mt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[48px] bg-[#FAEEE6] px-4 border border-gray-300 rounded-md"
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p className="text-red-500 text-sm">{formik.errors.firstname}</p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[48px] bg-[#FAEEE6] px-4 border border-gray-300 rounded-md"
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p className="text-red-500 text-sm">{formik.errors.lastname}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[48px] bg-[#FAEEE6] px-4 border border-gray-300 rounded-md"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[48px] bg-[#FAEEE6] px-4 border border-gray-300 rounded-md pr-10"
              />
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>

            <div className="flex flex-col mt-4">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[48px] bg-[#FAEEE6] px-4 border border-gray-300 rounded-md"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full lg:w-[400px] h-[48px] bg-[#CC5500] text-white px-8 py-2 rounded-md"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm">
              <hr className="flex-grow border-gray-300" />
              <span>or Register with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-400 py-3 rounded-md hover:bg-gray-100 transition-colors mt-4"
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

            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/control-panel" className="text-[#003636] font-semibold underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block w-1/2">
        <img src={Adminpicture} className="w-full h-full object-cover" alt="Admin" />
      </div>
    </div>
  );
};

export default AdminSignUp;
