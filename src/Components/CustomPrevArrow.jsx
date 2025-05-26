import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="bg-[#008080] rounded-4xl cursor-pointer"
  >
    <FaArrowLeft
      alt="Previous"
      className="w-10 h-10"
    />
  </div>
);



export default CustomPrevArrow
