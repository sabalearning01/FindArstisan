// import React, { useState } from 'react';
// import Users from '../Components/Users';
// import Artisan from '../Components/Artisan';

// const CardWithTab = () => {
//   const [activeTab, setActiveTab] = useState("user");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       {/* Tab Buttons Container */}
//       <div className="block lg:hidden bg-[#F5F5DC] w-[98%] ml-[2px] mr-[2px] min-h-[72px] rounded-xl mt-7">
//         <div className="flex justify-center items-center gap-3 py-3">
//           <button
//             onClick={() => handleTabClick("user")}
//             className={`w-[50%] cursor-pointer p-[12px] rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "user"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             For Artisans
//           </button>
//           <button
//             onClick={() => handleTabClick("artisan")}
//             className={`w-[50%] cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "artisan"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             For Users
//           </button>
//         </div>
//       </div>

//       {/* Tab Content Outside the Styled Container */}
//       <div className="w-[98%] block lg:hidden  mx-auto mt-4 ">
//         {activeTab === "user" && (
//           <div className='block lg:-hidden'>
//             {/* <h2 className="text-xl font-semibold mb-2">Welcome, Artisan!</h2>
//             <p className="text-gray-700">Here you can manage your services, view requests, and respond to users.</p> */}
//             <Users/>
//           </div>
//         )}

//         {activeTab === "artisan" && (
//           <div className='block lg:hidden'>
//             {/* <h2 className="text-xl font-semibold mb-2">Welcome, User!</h2>
//             <p className="text-gray-700">Find skilled artisans near you, check their profiles, and send service requests.</p> */}
//             <Artisan/>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CardWithTab;

// import React, { useState } from 'react';
// import Users from '../Components/Users';
// import Artisan from '../Components/Artisan';

// const CardWithTab = () => {
//   const [activeTab, setActiveTab] = useState("artisan");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       {/* Tab Buttons Container */}
//       <div className="block lg:hidden bg-[#F5F5DC] w-[98%] ml-[2px] mr-[2px] min-h-[72px] rounded-xl mt-7">
//         <div className="flex justify-center items-center gap-3 py-3">
//           {/* Fixed: "For Artisans" now activates the 'artisan' tab */}
//           <button
//             onClick={() => handleTabClick("artisan")}
//             className={`w-[50%] cursor-pointer p-[12px] rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "artisan"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             For Artisans
//           </button>
//           {/* Fixed: "For Users" now activates the 'user' tab */}
//           <button
//             onClick={() => handleTabClick("user")}
//             className={`w-[50%] cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
//               activeTab === "user"
//                 ? "bg-[#003636] text-white"
//                 : "bg-[#F5F5DC] text-[#788289]"
//             }`}
//           >
//             For Users
//           </button>
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="w-[98%] block lg:hidden mx-auto mt-4">
//         {activeTab === "artisan" && (
//           <div className="block lg:hidden">
//             <Artisan />
//           </div>
//         )}

//         {activeTab === "user" && (
//           <div className="block lg:hidden">
//             <Users/>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CardWithTab;

import React, { useState } from 'react';
// import Users from '../Components/Users';
import Artisan from '../Components/Artisan';
import { Users } from 'lucide-react';

const CardWithTab = () => {
  const [activeTab, setActiveTab] = useState("artisan"); // ✅ Use lowercase

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Tab Buttons Container */}
      <div className="block lg:hidden bg-[#F5F5DC] w-[98%] ml-[2px] mr-[2px] min-h-[72px] rounded-xl mt-7">
        <div className="flex justify-center items-center gap-3 py-3">
          <button
            onClick={() => handleTabClick("artisan")}
            className={`w-[50%] cursor-pointer p-[12px] rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
              activeTab === "artisan"
                ? "bg-[#003636] text-white"
                : "bg-[#F5F5DC] text-[#788289]"
            }`}
          >
            For Artisans
          </button>
          <button
            onClick={() => handleTabClick("user")}
            className={`w-[50%] cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
              activeTab === "user"
                ? "bg-[#003636] text-white"
                : "bg-[#F5F5DC] text-[#788289]"
            }`}
          >
            For Users
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-[98%] block lg:hidden mx-auto mt-4">
        {activeTab === "artisan" && (
          <div className="block lg:hidden">
            <Artisan />
          </div>
        )}

        {activeTab === "user" && (
          <div className="block lg:hidden">
              <Users />
          </div>
        )}
      </div>
    </>
  );
};

export default CardWithTab;
