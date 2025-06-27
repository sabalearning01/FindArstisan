import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Artisan from "../../assets/Artisan.png";

// Validation schema
const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Form = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const endpoint =
        activeTab === "artisan"
          ? "https://artisan-dic2.onrender.com/artisan/register-artisan"
          : "https://your-api.com/user/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Something went wrong");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    reset();
  };

  return (
    <div className="flex justify-between items-center">
      <img className="hidden lg:block" src={Artisan} alt="artisan" />

      <div>
        <div className="hidden lg:block mt-[74px] mr-[100px]">
          <h2 className="font-[DM Sans] text-[32px] font-bold text-[#36454F] ml-[20px]">
            Welcome Back, <span className="text-[#008080]">Login!</span>
          </h2>
        </div>

        <div className="bg-[#F5F5DC] rounded-xl mt-8 mx-[10px] my-[10px] ">
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
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstname")}
                className="lg:w-[94%] w-[92%] mx-[15px] my-[20px]  border border-gray-300 rounded-md p-3"
              />
              {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastname")}
                className="lg:w-[94%] w-[92%] mx-[15px] my-[20px]  border border-gray-300 rounded-md p-3"
              />
              {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="lg:w-[94%] w-[92%] mx-[15px] my-[20px] border border-gray-300 rounded-md p-3"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="lg:w-[94%] w-[92%] mx-[15px] my-[20px] border border-gray-300 rounded-md p-3 pr-10"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="lg:w-[94%] w-[92%] mx-[15px] my-[20px] border border-gray-300 rounded-md p-3 pr-10"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 lg:w-[94%] w-[92%] mx-[15px] my-[20px] bg-[#003636] text-white py-3 rounded-md hover:bg-[#002b2b] transition-colors"
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
            className="mt-4 lg:w-[94%] w-[92%] mx-[15px] my-[20px] border border-gray-400 py-3 rounded-md hover:bg-gray-100 transition-colors"
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

export default Form;
