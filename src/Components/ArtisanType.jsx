// import React from "react";
// import Slider from 'react-slick';
// import clean from "../assets/clean.png";
// import paint from "../assets/paint.png";
// import pest from "../assets/pest.png";
// import gardener from "../assets/gardener.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ArtisansType = [
//   {
//     name: "Gardeners",
//     image: gardener,
//   },
//   {
//     name: " House Cleaning",
//     image: clean,
//   },
//   {
//     name: "Painting & Decorating",
//     image: paint,
//   },
//   {
//     name: "Pest Control",
//     image: pest,
//   },
// ];

// const ArtisanType = () => {
//   const settings = {
//     // dots: true,
//     // infinite: true,
//     arrows: false, // Add this line
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024, // below 1024px
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768, // below 768px
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480, // below 480px
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex">
//       <Slider {...settings}>
//         {ArtisansType.map((ArtisansType, index) => (
//           <div key={index} className="px-2">
//             <div>
//               <img
//                 src={ArtisanType.image}
//                 alt={ArtisanType.name}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md text-gray-800 font-medium shadow-md">
//                 {ArtisanType.name}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ArtisanType;


import React from 'react';
import Slider from 'react-slick';
import clean from '../assets/clean.png';
import paint from '../assets/paint.png';
import pest from '../assets/pest.png';
import gardener from '../assets/gardener.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ArtisansType = [
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

const ArtisanType = () => {
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
    <div className="hidden lg:block px-6 mt-[64px] mx-[100px] my-[100px]">
      <Slider {...settings}>
        {ArtisansType.map((ArtisansType, index) => (
          <div key={index} className="  px-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={ArtisansType.image}
                alt={ArtisansType.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className=" absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md text-gray-800 font-medium shadow-md">
                {ArtisansType.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtisanType;
