import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import caption from "../assets/caption.png";

const projects = [
  { id: 1, title: "Project 1", image: caption },
  { id: 2, title: "Project 2", image: caption },
  { id: 3, title: "Project 3", image: caption },
  { id: 4, title: "Project 4", image: caption },
  { id: 5, title: "Project 5", image: caption },
  { id: 6, title: "Project 6", image: caption },
];

const itemsPerSlide = 3;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
  }),
};
const VideoUserSlider = () => {

  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex(([index]) => [
      (index + 1) % totalSlides,
      1,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getCurrentSlideItems = () => {
    const start = currentIndex * itemsPerSlide;
    return projects.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="bg-[#E6F5F4] py-8">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Slider Content */}
        <div className="relative h-80 px-8">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full flex gap-4"
            >
              {getCurrentSlideItems().map((project) => (
                <div
                  key={project.id}
                  className="flex-1 bg-white rounded-md overflow-hidden shadow text-center"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="py-2 font-medium">{project.title}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VideoUserSlider;
