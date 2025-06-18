import React, { useState } from "react";
import bg from "../assets/bg.png";
import profilepic from "../assets/profilepic.png";
import Vector from "../assets/Vector.png";
// import { Check, CheckCircle } from "lucide-react";
import cert from "../assets/cert.png";

const UserProfile = () => {
  const tabs = [
    { label: "Profile", content: "This is the Profile tab content." },
    { label: "Projects Gallery", content: "Projects Gallery goes here." },
    { label: "Reviews(8)", content: "Here are 8 user reviews." },
    { label: "Chats", content: "Chat history or messages would appear here." },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <img
        className="w-[100%] h-[143px] lg:h-[200px]"
        src={bg}
        alt="Background"
      />

      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            className="rounded-full absolute left-24 top-36  border-4 object-contain border-[#FDFDFD] border-solid"
            src={profilepic}
            alt=""
          />
          <div>
            <div className="flex justify-between  gap-2.5 ml-[500px] ">
              <h4 className="font-[DM Sans] text-[#36454F] font-medium text-[24px]">
                Justina Bryan
              </h4>
              <img className="object-contain " src={Vector} alt="" />
            </div>
            <p className="ml-[500px]">Plumber</p>
            <p className="ml-[500px]">Lagos, Nigeria</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-5 mr-[100px] ">
            <h4 className="font-[DM Sans] font-bold text-[#36454F] text-[24px]">
              $15/hr
            </h4>
            <h4 className="text-[16px] font-medium text-[#5E6A72]">Online</h4>
          </div>
          <button className="text-[#FDFDFD] text-[24px] font-[DM Sans] font-bold rounded-lg px-[32px] py-[14px] bg-[#CC5500]">
            Book Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200 mt-[150px] mx-[150px] my-[150px] m-auto gap-[100px]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex-1 sm:flex-none px-4 py-3 text-sm font-medium text-center transition-all duration-200
              ${
                activeTab === tab.label
                  ? "text-[#8A5C00] bg-white border-b-2 border-[#8A5C00]"
                  : "text-[#5E6A72] bg-white hover:text-#5E6A72"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white text-gray-800 ml-[100px] mr-[100px] p-4 sm:p-6 mt-2 rounded-md shadow-sm">
        {tabs.map((tab) =>
          tab.label === activeTab ? (
            <div key={tab.label} className="text-base">
              {tab.content}
            </div>
          ) : null
        )}
      </div>

      <div className="mt-[66px] flex justify-between items-center gap-4 ml-[50px] mr-[50px]">
        <div>
          <p className="text-[18px] font-[DM Sans] font-medium text-[#1E262B">
            About me
          </p>
          <div className="w-[580px] h-[168px] bg-[#E6F2F2]">
            <p className="px-[24px] py-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              delectus veniam ipsam. Labore laudantium aliquam alias nisi minima
              quis animi, placeat assumenda aliquid laborum harum facilis cumque
              quibusdam dolores eum.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[18px] font-[DM Sans] font-medium text-[#1E262B]">
            Business Name
          </p>
          <div className="bg-[#E6F2F2] w-[580px] h-[56px]">
            <p className="p-3">God’s Blessings Plumber Works</p>
          </div>
          <p className="text-[18px] font-[DM Sans] font-medium text-[#1E262B]">
            Availability
          </p>
          <div className="bg-[#E6F2F2] w-[580px] h-[56px]">
            <p className="p-3 ">Full-time</p>
          </div>
        </div>
      </div>

      <h5 className=" ml-[50px] mt-[66px] text-[#1E262B] font-[DM Sans] font-medium text-[20px]">
        Certifications & Recognitions
      </h5>
      <div className="w-[100%] h-[316px] mb-[40px] bg-[#E6F2F2] flex justify-between items-center  gap-2.5">
        <div className="ml-[50px]">
          <img className="w-[400px] h-[200px]" src={cert} alt="" />
          <div className="w-[398px] h-[20px] bg-[#B0D8D8]">
            <p className="text-center">Certifications & Recognitions</p>
          </div>
        </div>

        <div>
          <img className="w-[400px] h-[200px]" src={cert} alt="" />
          <div className="w-[398px] h-[20px] bg-[#B0D8D8]">
            <p className="text-center">Certifications & Recognitions</p>
          </div>
        </div>

        <div className="mr-[50px]">
          <img className="w-[400px] h-[200px]" src={cert} alt="" />
          <div className="w-[398px] h-[20px] bg-[#B0D8D8]">
            <p className="text-center">Certifications & Recognitions</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UserProfile;
