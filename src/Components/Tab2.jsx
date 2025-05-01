import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


const Tab2 = () => {
      const [activeTab, setActiveTab] = useState("user");
       const [formData, setFormData] = useState({ email: "", password: "" }); 
      const handleTabClick = (tab) => {
            setActiveTab(tab);
          };


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
  return (
    <div>
      {/* Mobile Screen */}
       {/* <div className="block lg:hidden">
         <h2 className=" font-[DM Sans] font-bold text-[32px] mt-[74px] mx-[20px] ">
          Welcome Back, <span className="text-[#BA4D00] lg:hidden">Login!</span>{" "}
          <span className="hidden lg:block text-[#008080] ">Login!</span>
        </h2> */}

        {/* {menuOpen && (
          <div>
            
            </div>
        )} */}

        <div className="bg-[#F5F5DC] w-[90%] min-h-[74px] rounded-xl mx-5 mt-7 md:w-[94%]">
          <div className="flex justify-center items-center gap-3 py-3">
            <button
              onClick={() => handleTabClick("user")}
              className={`w-[90%] py-2.5 px-4 rounded-lg text-[18px] cursor-pointer font-medium transition-all duration-300 ease-in-out ${
                activeTab === "user"
                  ? "bg-[#003636] text-white"
                  : "bg-[#F5F5DC] text-[#788289]"
              }`}
            >
              Log in as a user
            </button>
            <button
              onClick={() => handleTabClick("artisan")}
              className={`w-[90%] py-2.5 px-4 rounded-lg cursor-pointer text-[18px] font-medium transition-all duration-300 ease-in-out ${
                activeTab === "artisan"
                  ? "bg-[#003636] text-white"
                  : "bg-[#F5F5DC] text-[#788289]"
              }`}
            >
              Log in as an Artisan
            </button>
          </div>
        </div>
        {/* Display content based on selected tab
        <form onSubmit={handleSubmit}>
          <div className="mt-6 ">
            {activeTab === "user" && (
              <div>
                <input
                  className="w-[90%] md:w-[94%] h-[70px] mx-[20px] outline-0 rounded-lg px-[16px] py-[17px] bg-[#E6E6E6]"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                /> */}
                {/* <label className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="px-4 p-[10px] w-[90%] md:w-[94%] h-[58px] mx-[20px] mt-[28px] text-[#36454F] text-2xl bg-white  border-2 rounded-lg border-[#008080] border-opacity-50 outline-none focus:border-[#008080] "
                  />
                  <BsEye
                    className="absolute top-0 right-8 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                  <span className="text-2xl text-[white] text-opacity-80 absolute left-0 top-[-10px] mx-7 px-2 transition duration-200 input-text">
                    Password{" "}
                  </span>
                </label> */}

                {/* <a
                  href="#"
                  className="block text-sm text-indigo-600 mt-2 hover:underline"
                >
                  Forgot Password?
                </a>
                {/* <p className="font-[DM Sans] text-[16px] font-medium text-[#008080] text-right mr-[20px] mt-[16px]">
                  Forgot Password?
                </p> */}
                {/* <button className="w-[90%] md:w-[95%] bg-[#BA4D00] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] font-[DM Sans] font-semibold text-[#FEFEFC]">
                  Login
                </button>

                <div className="flex justify-between items-center mt-[28px] mx-[20px]">
                  <hr className="w-[20%] border border-[#C1C5C8]" />
                  <p className="font-[DM Sans] text-[18px] font-medium text-[#788289]">
                    or continue with{" "}
                  </p>{" "}
                  <hr className="w-[20%] border border-[#C1C5C8]" />
                </div>
                <button className="flex justify-center items-center md:w-[95%] cursor-pointer gap-[10px]  h-[56px] w-[90%] font-[DM Sans]  border border-[#5E6A72] bg-[white] px[32px] py-[17px] mx-[20px] mt-[28px] rounded-lg text-[18px] text-[#36454F]">
                  <FcGoogle /> Google
                </button>
                <p className=" text-center font-[DM Sans] font-medium text-[18px] text-[#36454F] mt-[28px]">
                  Don’t have an account?{" "}
                  <span className="font-[DM Sans] text-[18px] text-[#CC5500] font-semibold">
                    Create Account!
                  </span>
                </p>
                <div className="max-w h-[923.76px] mt-[64px] bg-[#004646]"></div>
              </div>
            )}
            {activeTab === "artisan" && (
              <p className="text-lg font-medium text-gray-700">
                Welcome Artisan! Please proceed to log in as an artisan.
              </p>
            )}
          </div>
        </form> */}
      {/* </div>  */}
    </div>
  )
}

export default Tab2
