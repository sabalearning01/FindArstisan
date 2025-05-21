import React,{useState} from 'react'


const CardWithTab = () => {
      const [activeTab, setActiveTab] = useState("user");
        const handleTabClick = (tab) => {
            setActiveTab(tab);
          };
  return (
     <div className="block lg:hidden bg-[#F5F5DC] w-[98%] ml-[2px] mr-[2px]  min-h-[72px] rounded-xl   mt-7">
            <div className="flex justify-center items-center gap-3 py-3">
              <button
                onClick={() => handleTabClick("user")}
                className={`w-[50%] cursor-pointer p-[12px] rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "user"
                    ? "bg-[#003636] text-white"
                    : "bg-[#F5F5DC] text-[#788289]"
                }`}
              >
                For Artisans
              </button>
              <button
                onClick={() => handleTabClick("artisan")}
                className={`w-[50%]  cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "artisan"
                    ? "bg-[#003636] text-white"
                    : "bg-[#F5F5DC] text-[#788289]"
                }`}
              >
                 For Users
              </button>
            </div>
          </div>
    
  )
}

export default CardWithTab
