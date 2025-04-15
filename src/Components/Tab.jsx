import React,{useState} from 'react'

const Tab = () => {
    const [activeTab, setActiveTab] = useState("user");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <div>
      {/* <div className="bg-[#F5F5DC] w-[90%]  min-h-[74px] rounded-xl mx-5 mt-7 md:w-[94%]">
          <div className="flex justify-center items-center gap-3 py-3">
            <button
              onClick={() => handleTabClick("user")}
              className={`w-[90%] py-2.5 px-4 rounded-lg text-[18px] cursor-pointer font-medium transition-all duration-300 ease-in-out ${
                activeTab === "user"
                  ? "bg-[#003636] text-white"
                  : "bg-[#F5F5DC] text-[#788289]"
              }`}
            >
              Log in as a user
            </button>
            <button
              onClick={() => handleTabClick("artisan")}
              className={`w-[90%] py-2.5 px-4 rounded-lg cursor-pointer text-[18px] font-medium transition-all duration-300 ease-in-out ${
                activeTab === "artisan"
                  ? "bg-[#003636] text-white"
                  : "bg-[#F5F5DC] text-[#788289]"
              }`}
            >
              Log in as an Artisan
            </button>
          </div>
        </div> */}

        <div className="hidden lg:block bg-[#F5F5DC] w-[540px] ml-[20px] mr-[20px]  min-h-[74px] rounded-xl   mt-7">
            <div className="flex justify-center items-center gap-3 py-3">
              <button
                onClick={() => handleTabClick("user")}
                className={`w-[90%] cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "user"
                    ? "bg-[#003636] text-white"
                    : "bg-[#F5F5DC] text-[#788289]"
                }`}
              >
                Log in as a user
              </button>
              <button
                onClick={() => handleTabClick("artisan")}
                className={`w-[90%]  cursor-pointer py-2.5 px-4 rounded-lg text-[18px] font-medium transition-all duration-300 ease-in-out ${
                  activeTab === "artisan"
                    ? "bg-[#003636] text-white"
                    : "bg-[#F5F5DC] text-[#788289]"
                }`}
              >
                Log in as an Artisan
              </button>
            </div>
          </div>
    </div>
  )
}

export default Tab

