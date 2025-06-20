// src/components/CountryDropdown.jsx

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SelectCountry = () => {
  const countries = [
    {
      name: "Lagos Nigeria",
      code: "NG",
      flag: "https://flagcdn.com/w40/ng.png",
    },
    {
      name: "Accra Ghana",
      code: "GH",
      flag: "https://flagcdn.com/w40/gh.png",
    },
    {
      name: "Nairobi Kenya",
      code: "KE",
      flag: "https://flagcdn.com/w40/ke.png",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-teal-800 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.code}
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-sm">{selectedCountry.name}</span>
        </div>
        <ChevronDown size={18} />
      </button>

      {isOpen && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded shadow-lg text-sm">
          {countries.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={country.flag}
                alt={country.code}
                className="w-5 h-5 rounded-sm"
              />
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectCountry;
