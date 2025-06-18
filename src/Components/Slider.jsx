import React from "react";
import sparklingLine from "../assets/sparklingline.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderDetails = [
  {
    Title: "Home & Garden",
    image: sparklingLine,
  },
  {
    Title: "Home & Garden",
    image: sparklingLine,
  },
  {
    Title: "Health & Wellbeing",
    image: sparklingLine,
  },
  {
    Title: "Wedding & Events",
    image: sparklingLine,
  },

  { Title: "Business Services", image: sparklingLine },
];

const Slider = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    arrows: false, // Add this line
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // below 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // below 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderDetails.map((sliderDetails, index) => (
          <div key={index} className="px-2">
           <div className="flex justify-between flex-col items-center bg-[#008080] w-[100%] h-[98px]">
            <h1 className="text-white text-[20px] font-bold">{sliderDetails.Title}</h1>
            <img src ={sliderDetails.image} alt={sparklingLine} className="w-[100%] h-[100%] object-cover" />
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider;
