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

// import React, { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";

// // Example static city data (ideally should come from an API)
// const cityData = {
//   Nigeria: ["Lagos", "Abuja", "Kano"],
//   France: ["Paris", "Lyon", "Marseille"],
//   India: ["Delhi", "Mumbai", "Bangalore"],
// };

// const CountryCitySelector = () => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => {
//         const sorted = data.sort((a, b) =>
//           a.name.common.localeCompare(b.name.common)
//         );
//         setCountries(sorted);
//         const defaultCountry = sorted.find((c) => c.name.common === "Nigeria");
//         setSelectedCountry(defaultCountry);
//         setSelectedCity("Lagos");
//       });
//   }, []);

//   const handleCountryChange = (e) => {
//     const country = countries.find((c) => c.cca2 === e.target.value);
//     setSelectedCountry(country);
//     const cities = cityData[country?.name.common];
//     setSelectedCity(cities?.[0] || "");
//   };

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const cityOptions =
//     selectedCountry && cityData[selectedCountry.name.common];

//   return (
//     <div className="w-72 mx-auto space-y-4 mt-10">
//       {/* Invisible native select for countries */}
//       <div className="relative">
//         <select
//           onChange={handleCountryChange}
//           value={selectedCountry?.cca2 || ""}
//           className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
//         >
//           {countries.map((country) => (
//             <option key={country.cca2} value={country.cca2}>
//               {country.name.common}
//             </option>
//           ))}
//         </select>

//         {/* Styled Country Selector */}
//         <div className="flex items-center justify-between bg-teal-800 text-white px-4 py-2 rounded-md space-x-3">
//           <div className="flex items-center space-x-2">
//             {selectedCountry && (
//               <img
//                 src={selectedCountry.flags.png}
//                 alt={selectedCountry.name.common}
//                 className="w-5 h-4 object-cover rounded-sm"
//               />
//             )}
//             <span className="text-sm">
//               {selectedCity && selectedCountry
//                 ? `${selectedCity} ${selectedCountry.name.common}`
//                 : "Select Country"}
//             </span>
//           </div>
//           <ChevronDown size={16} />
//         </div>
//       </div>

//       {/* City Selector */}
//       {cityOptions && (
//         <select
//           onChange={handleCityChange}
//           value={selectedCity}
//           className="w-full px-3 py-2 border rounded-md"
//         >
//           {cityOptions.map((city) => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// };

// export default CountryCitySelector;
