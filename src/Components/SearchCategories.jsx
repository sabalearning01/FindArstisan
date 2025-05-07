import React from 'react'
import Slider from "react-slick";
const searchcategories = [
    "Home & Garden",
    "Health & Wellbeing",
    "Wedding & Events",
    "Business Services",
    "Painting & Decoration",
    "All Categories",
  ];
  

const SearchCategories = () => {
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
    <div className='bg-[#F8F8E8] w-[100%] h-[62px] lg:mx-[100px] lg:my-[100px] lg:h-[92px] '>
         <Slider {...settings}>
            {searchcategories.map((searchcategories, index)=>{
                <div key={index} className=''>

                </div>
            })}
         </Slider>
    </div>
  )
}

export default SearchCategories
