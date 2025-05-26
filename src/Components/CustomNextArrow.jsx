import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

 const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <FaArrowRight className="w-10 h-10" />
  </div>
);

export default CustomNextArrow;
