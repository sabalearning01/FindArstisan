import React, { useState } from "react";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUpLady from "../../assets/SignUpLady.png";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
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
        toast.success("Artisan registered successfully!");
      } else {
        toast.info("User registration is not implemented yet.");
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
        toast.error(`Error: ${err.response.data.message || "Something went wrong!"}`);
      } else {
        toast.error("Network or server error.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <ToastContainer />
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img src={SignUpLady} alt="Sign Up" className="object-cover h-full w-full" />
      </div>

      <div className="flex-1 px-6 sm:px-10 lg:px-20 py-10 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Sign Up Now to <span className="text-[#008080]">Hire Skilled Artisans</span>
        </h2>

        <div className="bg-[#F5F5DC] rounded-xl">
          <div className="flex justify-center gap-2 sm:gap-3 py-3">
            {["user", "artisan"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`w-full py-2 px-4 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 ${
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

        <form className="mt-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}

            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

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
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
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

          <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm">
            <hr className="flex-grow border-gray-300" />
            <span>or Sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

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
