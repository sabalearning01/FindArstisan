import React from 'react';
import clean from '../assets/clean.png';
import paint from '../assets/paint.png';
import pest from '../assets/pest.png';
import gardener from '../assets/gardener.png';

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
        >
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md text-gray-800 font-medium shadow-md">
            {service.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
