import React from "react";
import { CiSearch } from "react-icons/ci";
const AdminSearch = () => {
  return (
    <div>
      {/* Search Input with Icon */}
      <div className="relative w-[568px] h-[55px]">
        <input
          type="text"
          placeholder="Search"
          className="font-[Montserrat] font-normal text-[#00000099] w-full h-full pl-12 pr-4 text-xl border border-gray-300 rounded-md"
        />
        <CiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default AdminSearch;
