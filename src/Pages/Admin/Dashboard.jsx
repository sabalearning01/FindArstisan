import React, { useState } from "react";
// import { CiSearch, CiLocationOn } from "react-icons/ci";
import AdminSideBar from "../../Components/AdminSideBar";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { User } from "lucide-react";
import AdminSearch from "../../Components/AdminSearch";
import { FaUserTie } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdHourglassBottom } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import DashboardBarChart from "../../Components/DashboardBarChart";
import {
  LayoutDashboard,
  Users,
  // User,
  Briefcase,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    id: 1,
    title: "Total Artisan",
    icon: <FaUserTie />,
    value: 600,
  },
  {
    id: 2,
    title: "Total Users",
    icon: <FaUserFriends />,
    value: 1000,
  },
  {
    id: 3,
    title: "Active Services",
    icon: <MdOutlineSettingsSuggest />,
    value: 900,
  },
  {
    id: 4,
    title: "Pending Orders",
    icon: <MdHourglassBottom />,
    value: 100,
  },
  {
    id: 5,
    title: "Completed Orders",
    icon: <FaCheckCircle />,
    value: 900,
  },
  {
    id: 6,
    title: "Total Revenue",
    icon: <CiBadgeDollar />,
    value: 700,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-3.5 p-4">
        <AdminSearch />
        <select className="border rounded px-2 py-1">
          <option value="last30days">Last 30 Days</option>
          <option value="last60days">Last 60 Days</option>
          <option value="last90days">Last 90 Days</option>
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>{`Year ${year}`}</option>
          ))}
        </select>
        <IoMenuOutline
          onClick={handleToggle}
          className=" w-[90%] object-contain text-5xl lg:hidden block"
        />
      </div>

      {toggle && (
        <div onClick={handleToggle} className="bg-teal-900 rounded-sm">
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <LayoutDashboard className=" text-white " />
            <a href="/">
              <p className="pl-[10px]  text-white">Overview</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <Users className="text-white " />
            <a href="/">
              <p className="pl-[10px]  text-white">Artisans</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <User className=" text-white" />
            <a href="/">
              <p className="pl-[10px]  text-white">Customers</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <Briefcase className=" text-white" />
            <a href="/">
              <p className="pl-[10px]  text-white">Services</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <ShoppingCart className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px]  text-white">Orders</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <CreditCard className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px]  text-white">Transactions</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <MessageSquare className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px]  text-white">Feedbacks</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <BarChart2 className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px] text-white">Analytics</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <Settings className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px]  text-white">Settings</p>
            </a>
          </div>
          <div className="flex items-center gap-2 pl-1.5 font-[DM Sans] pt-3.5  ">
            <LogOut className=" text-white" />{" "}
            <a href="/">
              <p className="pl-[10px]  text-white">Logout</p>
            </a>
          </div>
        </div>
      )}

      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Data.map((item) => (
            <div
              key={item.id}
              className="bg-[#E6F2F2] p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-2">
                <div className="text-3xl text-[#BF5A07] mr-2">{item.icon}</div>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 items-center p-4">
        <DashboardBarChart />

        <div className="bg-[#E6F2F2] w-[50%] h-[500px] rounded-xl">
          <div className="flex items-center">
            {" "}
            <MdMessage className="text-[#BA4D00] w-[30px] h-[30px]" />
            <h3 className="font-bold font-[DM Sans] text-[16px] lg:text-[20px] text-[#36454F]">
              Recent Feedbacks
            </h3>{" "}
          </div>
          <div className="mt-[17px] bg-[#FAEEE6] w-[100%] h-[32px]">
            <p className="text-[#36454F] text-center font-[DM Sans] font-normal text-[12px] lg:text-[18px] ">
              <span className="text-[#CC5500]">John Doe:</span> "Great service!"
            </p>
          </div>
          <div className="mt-[17px] bg-white w-[100%] h-[32px]">
            <p className="lg:p-2  text-center text-[#36454F] text-[12px] lg:text-[18px] font-normal font-[DM Sans] ">
              <span className="text-[#CC5500]">Sarah Smith:</span> "Quick and
              reliable.
            </p>
          </div>

          <div className="mt-[17px] bg-[#FAEEE6] w-[100%] h-[70px]">
            <p className="lg:p-2 p-1 text-[#36454F] text-center font-[DM Sans] font-normal text-[12px] lg:text-[18px] ">
              <span className="text-[#CC5500]">John Doe:</span> "Great service
              and i am definately coming back!"
            </p>
          </div>

          <div className="mt-[17px] bg-[#FAEEE6] w-[100%] h-[32px]">
            <p className="lg:p-2  text-[#36454F] text-center font-[DM Sans] font-normal text-[12px] lg:text-[18px] ">
              <span className="text-[#CC5500]">John Doe:</span> "Great service!"
            </p>
          </div>

          <div className="mt-[17px] bg-[#FAEEE6] w-[100%] h-[70px]">
            <p className="lg:p-2 p-1 text-[#36454F] text-center font-[DM Sans] font-normal text-[12px] lg:text-[18px] ">
              <span className="text-[#CC5500]">John Doe:</span> "Great service
              and i am definately coming back!"
            </p>
          </div>

          <div className="mt-[17px] bg-[#FAEEE6] w-[100%] h-[70px]">
            <p className="lg:p-2 p-1 text-[#36454F] text-center font-[DM Sans] font-normal text-[12px] lg:text-[18px] ">
              <span className="text-[#CC5500]">John Doe:</span> "Great service
              and i am definately coming back!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
