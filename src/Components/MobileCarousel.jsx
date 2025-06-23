import React from 'react';
import Slider from 'react-slick';
import clean from '../assets/clean.png';
import paint from '../assets/paint.png';
import pest from '../assets/pest.png';
import gardener from '../assets/gardener.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft } from 'react-icons/fa6';

// Custom arrows
const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className=" bg-[#008080] px-[24px] py-[15px] text-[#FDFDFD] rounded-4xl absolute right-[50px] top-[300px] transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <FaArrowLeft alt="Next" className="" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className=" bg-[#008080] px-[24px] py-[15px] text-[#FDFDFD] rounded-4xl absolute left-[50px] top-[300px] transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <FaArrowLeft
      alt="Previous"
      className="rotate-180"
    />
  </div>
);

const services = [
  { name: 'Cleaning', image: clean },
  { name: 'Painting & Decorating', image: paint },
  { name: 'Pest Control', image: pest },
  { name: 'Gardeners', image: gardener },
];

const MobileCarousel = () => {
  const settings = {
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="lg:hidden block px-6 relative">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md text-gray-800 font-medium shadow-md">
                {service.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileCarousel;
