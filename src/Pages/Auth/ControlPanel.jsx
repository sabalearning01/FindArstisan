import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Adminpicture from '../../assets/Adminpicture.png'
import hamsearch from "../../assets/hamsearch.png"; // Assuming you have a search icon

const ControlPanel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = async () => {
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);
      // localStorage.setItem("token", data.token);
      // navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center">
      
      <div>
        <img src={hamsearch} alt="Search Icon" className="w-[50px] h-[50px] object-contain mt-6 mx-auto ml-[260px]" />
         <h2 className="text-xl lg:text-2xl font-medium text-center font-[DM Sans] ml-[70px] mt-2">
            Findartisan
          </h2>
          <h2 className="text-[#BA4D00] text-xl lg:text-2xl font-medium text-center font-[DM Sans] ml-[60px] mt-2">
            Admin Dashboard
          </h2>
        <h5 className="font-[DM Sans] ml-[100px] text-[24px] text-[#007474] mt-[88.5px]">
          Login to{" "}
          <span className="text-[20px] text-[#BA4D00]">Control Panel</span>
        </h5>

        {error && (
          <p className="text-red-600 mt-4 text-sm font-medium">{error}</p>
        )}

        <input
          className="bg-[#E6E6E6] ml-[100px] mt-[28px] px-[15px] py-[16px] w-[400px] h-[48px] rounded-xl"
          type="text"
          placeholder="Username: admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <label className="text-[18px] ml-[100px] text-[#36454F] font-[DM Sans] font-medium">
          Password
        </label>
        <br />

        <div className="relative mt-2">
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
          <input
            className="bg-[#E6E6E6] ml-[100px] pl-4 pr-[15px] py-[16px] w-[400px] h-[48px] rounded-xl"
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-[#007474] text-right mt-[16px]">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password
          </a>
        </p>

        <button
          className="mt-[28px] ml-[100px] cursor-pointer bg-[#BA4D00] text-white rounded-lg w-[400px]  py-[17px] px-[32px] disabled:opacity-60"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
         
            <p className="text-center text-sm mt-[30px] ml-[80px]">
              Don't have an account?{" "}
              <a href="/adminsignup" className="text-[#003636] font-semibold underline">
                Sign Up
              </a>
            </p>
      </div>
      <img src={Adminpicture} alt="Admin Panel" className="w-[50%] h-full ml-[100px] object-cover"  />
    </div>
  );
};

export default ControlPanel;
