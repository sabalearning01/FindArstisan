import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const searchcategories = [
  "Home & Garden",
  "Health & Wellbeing",
  "Wedding & Events",
  "Business Services",
  "Painting & Decoration",
  "All Categories",
];

const SearchCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-[#F8F8E8]  ml-[20px] mt-[40px] w-[90%] lg:w-[85%] py-4 px-4 rounded-full lg:mx-[100px] lg:my-[100px]'>
      <Slider {...settings}>
        {searchcategories.map((category, index) => (
          <div key={index} className="px-2 ">
            <button
              onClick={() => setActiveIndex(index)}
              className={`text-sm cursor-pointer px-4 py-2 rounded-2xl whitespace-nowrap transition-all duration-300 font-medium ${
                activeIndex === index
                  ? 'bg-[#008080] text-white'
                  : 'bg-[#EAF3F4] text-black'
              }`}
            >
              {category}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SearchCategories;
