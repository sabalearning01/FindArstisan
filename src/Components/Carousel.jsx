import React from 'react';
import Slider from 'react-slick';
import clean from '../assets/clean.png';
import paint from '../assets/paint.png';
import pest from '../assets/pest.png';
import gardener from '../assets/gardener.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const services = [
  {
    name: 'Cleaning',
    image: clean,
  },
  {
    name: 'Painting & Decorating',
    image: paint,
  },
  {
    name: 'Pest Control',
    image: pest,
  },
  {
    name: 'Gardeners',
    image: gardener,
  },
];

const Carousel = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    arrows: false,  // Add this line
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
    <div className="px-6 relative top-[50px]  lg:top-[-1100px]">
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

export default Carousel;
