// import React from 'react'
// import AdminSideBar from '../../Components/AdminSideBar'
// import { CiSearch } from "react-icons/ci";
// import {User} from "lucide-react";

// const Dashboard = () => {
//   return (
//     <div className='flex min-h-screen'>

//        <AdminSideBar/>
//       <input type="text" placeholder='Search' className='relative w-[568px] h-[55px] ml-[44px] p-9 text-2xl mt-[10px]'/>
//        <CiSearch className='absolute  top-[39px] right-[845px] text-black'/>

//     </div>
//   )
// }

// export default Dashboard

import React from "react";
import AdminSideBar from "../../Components/AdminSideBar";
import { CiSearch } from "react-icons/ci";
import { User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
    

      {/* Main Content Wrapper */}
      <div className="flex-1 p-6">
        {/* Search Input with Icon */}
        <div className="relative w-[568px] h-[55px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-12 pr-4 text-xl border border-gray-300 rounded-md"
          />
          <CiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-600" />
        </div>

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
