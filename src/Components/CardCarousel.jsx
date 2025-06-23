import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = new Array(6).fill({
  rating: 5,
  text: "I needed a skilled carpenter to build custom shelves for my home office, and this platform made it so easy! I found a talented artisan within minutes, and the work was flawless. Highly recommend for anyone looking for quality craftsmanship!",
  author: "Sarah M.",
});

const TestimonialCard = ({ text, author }) => (
  <div className="bg-teal-700 text-white rounded-lg p-4 mx-2">
    <div className="flex items-center mb-2">
      {"⭐".repeat(5)} <span className="ml-2">(5/5)</span>
    </div>
    <p className="text-sm mb-2">"{text}"</p>
    <p className="font-bold">{author}</p>
  </div>
);

const Card = () => {
  const baseSettings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-[70px] bg-teal-900 py-10 space-y-8 overflow-hidden">
      {/* Top Row - Normal Direction */}
      <div>
        <Slider {...baseSettings}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={`top-${i}`} {...t} />
          ))}
        </Slider>
      </div>

      {/* Bottom Row - Opposite Direction */}
      <div>
        <Slider {...{ ...baseSettings, rtl: true }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={`bottom-${i}`} {...t} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
