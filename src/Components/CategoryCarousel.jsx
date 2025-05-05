// import React from "react";
import Slider from "react-slick";
import { Sparkles } from "lucide-react"; // Optional icon lib (Lucide or use your own SVG)

const categories = [
  "Home & Garden",
  "Health & Wellbeing",
  "Wedding & Events",
  "Business Services",
  "Tech Services",
];

const CategoryCarousel = () => {
  const settings = {
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="bg-[#008080] py-4 px-6">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="flex  justify-center">
            <div className="flex items-center gap-2 font-[DM Sans] text-[28px] font-medium text-[#FDFDFD]">
              <Sparkles size={16} />
              <span className="text-sm">{category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
