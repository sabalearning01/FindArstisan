import React from "react";
import {
  LayoutDashboard,
  Users,
  User,
  Briefcase,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSideBar = () => {
  const menuItems = [
    { label: "Overview", icon: <LayoutDashboard size={18} /> },
    { label: "Artisans", icon: <Users size={18} /> },
    { label: "Customers", icon: <User size={18} /> },
    { label: "Services", icon: <Briefcase size={18} /> },
    { label: "Orders", icon: <ShoppingCart size={18} /> },
    { label: "Transactions", icon: <CreditCard size={18} /> },
    { label: "Feedbacks", icon: <MessageSquare size={18} /> },
    { label: "Analytics", icon: <BarChart2 size={18} /> },
    { label: "Settings", icon: <Settings size={18} /> },
    { label: "Logout", icon: <LogOut size={18} /> },
  ];

  return (
    <div className="bg-[#003030] w-[346px] h-full">
      <div className="font-[Montserrat]  text-white text-3xl font-bold p-4">Admin Dashboard</div>
      <ul className=" font-[Montserrat] text-white">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-4 hover:bg-[#CC5600E3] cursor-pointer"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSideBar;
