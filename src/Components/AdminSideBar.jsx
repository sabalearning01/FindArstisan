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
import { useNavigate } from "react-router-dom";
  
  const AdminSideBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Overview",
      icon: <LayoutDashboard size={18} />,
      path: "/dashboard",
    },
    {
      label: "Artisans",
      icon: <Users size={18} />,
      path: "/dashboard/artisans",
    },
    {
      label: "Customers",
      icon: <User size={18} />,
      path: "/dashboard/customers",
    },
    {
      label: "Services",
      icon: <Briefcase size={18} />,
      path: "/dashboard/services",
    },
    {
      label: "Orders",
      icon: <ShoppingCart size={18} />,
      path: "/dashboard/order",
    },
    {
      label: "Transactions",
      icon: <CreditCard size={18} />,
      path: "/dashboard/transactions",
    },
    {
      label: "Feedbacks",
      icon: <MessageSquare size={18} />,
      path: "/dashboard/feedback",
    },
    {
      label: "Analytics",
      icon: <BarChart2 size={18} />,
      path: "/dashboard/analytics",
    },
    {
      label: "Settings",
      icon: <Settings size={18} />,
      path: "/dashboard/settings",
    },
    { label: "Logout", icon: <LogOut size={18} />, path: "/dashboard/logout" },
  ];

  return (
    <div className="bg-[#003030] w-[346px] h-100% lg:block hidden">
      <div className="font-[Montserrat] text-white text-[20px] font-bold p-4  ">
        Admin Dashboard
      </div>
      <ul className="font-[Montserrat] text-white">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-7 hover:bg-[#CC5600E3] cursor-pointer"
            onClick={() => navigate(item.path)}
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
