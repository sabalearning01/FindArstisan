// import React, { useState } from "react";
// import { LuTextSearch } from "react-icons/lu";
// import { MdArrowDropDown } from "react-icons/md";
// import { IoMenuOutline } from "react-icons/io5";
// const Header = () => {
//   const [menuOpen, setIsMenuOpen] = useState(false);
//   const [selectOption, setSelectOption] = useState("Explore Services");

//   const Toggle = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const handleSelectOption = (option) => {
//     setSelectOption(option);
//     console.log(option);
//   };

//   return (
//     <div>
//       <div className="w-[100%] h-[92px] bg-[#004646]">
//         <div className="flex justify-between items-center pt-[20px]   lg:ml-[100px] lg:mr-[100px]  ">
//           <div className="flex justify-center items-center  ml-2.5">
//             <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
//             <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
//               Findartisan
//             </h6>
//             <div className="hidden md:block lg:block ml-[35px] mt-[5px]">
//               <div className="relative lg:block md:hidden inline-block text-left group">
//                 <button className="inline-flex items-center text-white font-semibold">
//                   Explore Services
//                   <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
//                 </button>

//                 <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleSelectOption("Web Development")}
//                   >
//                     Web Development
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleSelectOption("Graphic Design")}
//                   >
//                     Graphic Design
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={() => handleSelectOption("SEO Services")}
//                   >
//                     SEO Services
//                   </a>

//                   {/* {selectOption && (
//                     <p className="mt-4 text-green-700">
//                       You selected: <strong>{selectOption}</strong>
//                     </p>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center gap-[12px] mr-2.5  ">
//             <button className="font-[DM Sans] text-[16px] cursor-pointer rounded-lg text-[#FDFDFD] font-medium py-[10px] px-[16px]  border-1 border-white lg:hidden ">
//               Hire an Artisan
//             </button>

//             <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]  border-1 border-white">
//               Hire an Artisan
//             </button>
//             <IoMenuOutline
//               onClick={Toggle}
//               className="text-white text-2xl  sm:block md:block lg:hidden"
//             />

//             {/* Conditional rendering */}
//             {menuOpen && (
//               <div
//                 onClick={Toggle}
//                 className="bg-black text-white w-[80%] h-[250px] absolute top-20 left-0  flex justify-center items-center z-40"
//               >
//                 <h3>Great</h3>
//               </div>
//             )}

//             <button className="hidden md:hidden lg:block font-[DM Sans] cursor-pointer bg-[#CC5500] text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]">
//               Become an Artisan
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { LuTextSearch } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Explore Services");

  const Toggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSelectOption = (option) => {
    setSelectOption(option);
    console.log(option);
  };

  return (
    <div>
      <div className="w-full h-[92px] bg-[#004646]">
        <div className="flex justify-between items-center pt-[20px] lg:mx-[100px] mx-3">
          {/* Left Section */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center gap-2">
              <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
              <h6 className="font-[DM Sans] cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
                Findartisan
              </h6>
            </Link>

            {/* Dropdown */}
            <div className="hidden md:block lg:block ml-[35px] mt-[5px]">
              <div className="relative group inline-block text-left">
                <button className="inline-flex items-center text-white font-semibold">
                  {selectOption}
                  <MdArrowDropDown className="text-[#FDFDFD] mt-[5px]" />
                </button>

                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleSelectOption("Web Development")}
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleSelectOption("Graphic Design")}
                  >
                    Graphic Design
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleSelectOption("SEO Services")}
                  >
                    SEO Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center gap-[12px]">
            {/* Mobile: Hire an Artisan */}
            <Link to="/login">
              <button className="font-[DM Sans] text-[16px] cursor-pointer rounded-lg text-[#FDFDFD] font-medium py-[10px] px-[16px] border-1 border-white lg:hidden">
                Hire an Artisan
              </button>
            </Link>

            {/* Desktop: Hire an Artisan */}
            <Link to="/signup">
              <button className="hidden lg:block font-[DM Sans] cursor-pointer text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px] border-1 border-white">
                Hire an Artisan
              </button>
            </Link>

            <IoMenuOutline
              onClick={Toggle}
              className="text-white text-2xl block lg:hidden cursor-pointer"
            />

            {/* Conditional Mobile Menu */}
            {menuOpen && (
              <div
                onClick={Toggle}
                className="bg-black text-white w-[80%] h-[250px] absolute top-20 left-0 flex justify-center items-center z-40"
              >
                <h3>Great</h3>
              </div>
            )}

            {/* Desktop: Become an Artisan */}
            <Link to="/signup">
              <button className="hidden lg:block font-[DM Sans] cursor-pointer bg-[#CC5500] text-[16px] rounded-lg text-[#FDFDFD] font-medium py-[14px] px-[32px]">
                Become an Artisan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
