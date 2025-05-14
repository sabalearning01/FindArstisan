import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const accordionData = [
  {
    id: 1,
    question: "What types of artisans can join your team?",
    answer: "We welcome electricians, plumbers, carpenters, painters, and more."
  },
  {
    id: 2,
    question: "What types of artisans can join your team?",
    answer: "We welcome electricians, plumbers, carpenters, painters, and more."
  },

  {
    id: 3,
    question: "What types of artisans can join your team?",
    answer: "We welcome electricians, plumbers, carpenters, painters, and more."
  },

  {
    id: 4,
    question: "What types of artisans can join your team?",
    answer: "We welcome electricians, plumbers, carpenters, painters, and more."
  },
  {
    id: 5,
    question: "What types of artisans can join your team?",
    answer: "We welcome electricians, plumbers, carpenters, painters, and more."
  },
  // Add more items if needed
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 bg-[#E6F2F2] p-4">
      {accordionData.map((item, index) => (
        <div key={item.id} className="bg-[#FAFAEF] p-4 rounded shadow-sm">
          <button
            className="flex justify-between items-center w-full font-semibold text-left"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="text-xl transform transition-transform duration-300">
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
