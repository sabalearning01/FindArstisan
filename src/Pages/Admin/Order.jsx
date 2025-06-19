import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSearch from "../../Components/AdminSearch";
import { FaUserTie } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdHourglassBottom } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import { MdMessage } from "react-icons/md";

const Order = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/dashboard/order");
  };

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

  return (
    <div>
      <AdminSearch />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Data.map((item) => (
            <div key={item.id} className=" p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-3xl text-[#BF5A07] mr-2">{item.icon}</div>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-right">Recent Feedbacks</h1>
    </div>
  );
};

export default Order;
