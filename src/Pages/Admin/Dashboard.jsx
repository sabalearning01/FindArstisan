import React from "react";
import AdminSideBar from "../../Components/AdminSideBar";
import { CiSearch } from "react-icons/ci";
import { User } from "lucide-react";
import AdminSearch from "../../Components/AdminSearch";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
    

      {/* Main Content Wrapper */}
      <div className="flex-1 ">
       
         <AdminSearch/>

        {/* More dashboard content goes here */}

        <div className=" mt-[10px] flex  items-center justify-between">
          <div className="w-[320px] h-[172px] bg-white">
            <div className="flex justify-center items-center">
              <User />
              <h2 className="text-3xl font-bold text-[#003030]">600</h2>
            </div>
            <p className="font-[Montserrat] text-[16px] font-medium">
              Total Artisans
            </p>
          </div>

          <div className="w-[320px] h-[172px] bg-[white]">
            <div className="flex justify-center items-center">
              <User />
              <p className="text-3xl font-bold text-[#003030]">600</p>
            </div>
            <p className="font-[Montserrat] text-[16px] font-medium">
              Total Artisans
            </p>
          </div>

          <div className="w-[320px] h-[172px] bg-[white]">
            <div className="flex justify-center items-center">
              <User />
              <p className="text-3xl font-bold text-[#003030]">600</p>
            </div>
            <p className="font-[Montserrat] text-[16px] font-medium">
              Total Artisans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
