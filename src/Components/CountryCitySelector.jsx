import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: lucide-react icons (install if not already)

const CountryCitySelector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
        setSelectedCountry(sorted.find(c => c.name.common === "Nigeria")); // default
      });
  }, []);

  const handleSelect = (e) => {
    const country = countries.find((c) => c.cca2 === e.target.value);
    setSelectedCountry(country);
  };

  return (
    <div className="relative w-[205px] h-[48px]">
      <select
        onChange={handleSelect}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
        defaultValue={selectedCountry?.cca2}
      >
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>

      <div className="flex items-center justify-between bg-teal-800 text-white px-4 py-2 rounded-md space-x-3">
        <div className="flex items-center space-x-2">
          {selectedCountry && (
            <img
              src={selectedCountry.flags.png}
              alt={selectedCountry.name.common}
              className="w-5 h-4 object-cover rounded-sm"
            />
          )}
          <span className="text-sm">
            {selectedCountry ? `${selectedCountry.name.common}` : "Select Country"}
          </span>
        </div>
        <ChevronDown size={16} />
      </div>
    </div>
  );
};

export default CountryCitySelector;

