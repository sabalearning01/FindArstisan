import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import bg from "../assets/bg.png";
import profilepic from "../assets/profilepic.png";
import Vector from "../assets/Vector.png";
import cert from "../assets/cert.png";
import UserSlider from "../Components/UserSlider";
import VideoUserSlider from "../Components/VideoUserSlider";
import CardSlider1 from "../Components/CardSlider1";
import useOnlineStatus from "../Components/useOnlineStatus";

const UserProfile = () => {
  const isOnline = useOnlineStatus();

  const tabs = [
    { label: "Profile" },
    { label: "Projects Gallery" },
    { label: "Reviews(8)" },
    { label: "Chats" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      {/* Background Banner */}
      <img
        className="w-full h-36 md:h-52 object-cover"
        src={bg}
        alt="Profile Background"
      />

      {/* Profile Top Section */}
      <div className="relative max-w-6xl mx-auto px-4 mt-[-50px] flex flex-col md:flex-row justify-between items-center">
        {/* Profile Info */}
        <div className="flex items-start gap-4">
          <img
            className="w-[300px] h-[300px] rounded-full border-4 border-white object-cover"
            src={profilepic}
            alt="Justina Bryan Profile"
          />
          <div>
            <div className="flex items-center gap-2 mt-[115px]">
              <h4 className="text-xl font-semibold text-[#36454F]">
                Justina Bryan
              </h4>
              <img className="w-4 h-4" src={Vector} alt="Verified Icon" />
            </div>
            <p className="text-gray-600 text-sm">Plumber</p>
            <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Pricing & Book Now */}
        <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            <h4 className="text-lg font-bold text-[#36454F]">$15/hr</h4>
            {isOnline && <span className="text-sm text-green-600">Online</span>}
            {!isOnline && (
              <span className="text-sm text-red-600">Offline</span>
            )}    

          </div>
          <button className="bg-[#CC5500] text-white text-base font-bold rounded-lg px-6 py-2">
            Book Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mt-10 max-w-6xl mx-auto px-4 flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.label
                ? "text-[#8A5C00] border-b-2 border-[#8A5C00]"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white text-gray-800 max-w-6xl mx-auto px-4 py-6 mt-4 rounded-md shadow-sm">
        {/* Profile Tab Content */}
        {activeTab === "Profile" && (
          <>
            {/* About Me & Business Info */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Me */}
              <div>
                <h5 className="text-lg font-medium text-[#1E262B] mb-2">
                  About Me
                </h5>
                <div className="bg-[#E6F2F2] p-4 rounded">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis delectus veniam ipsam. Labore laudantium aliquam
                    alias nisi minima quis animi, placeat assumenda aliquid
                    laborum harum facilis cumque quibusdam dolores eum.
                  </p>
                </div>
              </div>

              {/* Business Name & Availability */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-medium text-[#1E262B] mb-1">
                    Business Name
                  </h5>
                  <div className="bg-[#E6F2F2] p-3 rounded">
                    <p>God’s Blessings Plumber Works</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-[#1E262B] mb-1">
                    Availability
                  </h5>
                  <div className="bg-[#E6F2F2] p-3 rounded">
                    <p>Full-time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Recognitions */}
            <div className="mt-10">
              <h5 className="text-xl font-medium text-[#1E262B] mb-4">
                Certifications & Recognitions
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#E6F2F2] p-4 rounded">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      className="w-full h-48 object-cover rounded"
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                    />
                    <div className="w-full bg-[#B0D8D8] py-1 mt-2 text-center text-sm font-medium">
                      Certifications & Recognitions
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Projects Gallery Tab Content */}
        {activeTab === "Projects Gallery" && (
          <div>
            <h3 className="text-[#1E262B]  font-[DM Sans] font-medium text-[20px]">
              Pictures
            </h3>
            <UserSlider />
            <h3 className="text-[#1E262B] mt-6 font-[DM Sans] font-medium text-[20px]">
              Videos
            </h3>
            <VideoUserSlider />
          </div>
        )}

        {/* Reviews Tab Content */}

        {activeTab === "Reviews(8)" && (
          <div>
            <h3 className="text-[#1E262B]  font-[DM Sans] font-medium text-[18px] mt-[36px]">
              What customers are saying about our services...
            </h3>

            <CardSlider1 />

            <h3 className="font-[DM Sans] font-medium text-[#313F48] text-[18px] mt-[36px]">
              Share your experience with us
            </h3>
            <hr className="border-[#C1C5C8]" />
            <form className="flex justify-between items-center">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Steve Job"
                  className="rounded-sm mt-[10px] ml-4.5 bg-[#E6F2F2] px-[10px] py-[8px] w-[400px] h-[32px]"
                />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Stevejob@gmail.com"
                  className="rounded-sm mt-[10px] ml-5.5 bg-[#E6F2F2] px-[10px] py-[8px] w-[400px] h-[32px]"
                />
                <br />

                <label>Service</label>
                <input
                  type="text"
                  placeholder="Plumbing"
                  className="rounded-sm mt-[10px] ml-2.5 bg-[#E6F2F2] px-[10px] py-[8px] w-[400px] h-[32px]"
                />
                <br />
                <label>Rate</label>
                <div className="flex items-center"><CiStar  className="text-yellow-500"/> <CiStar  className="text-yellow-500"/>   <CiStar  className="text-yellow-500"/><CiStar  className="text-yellow-500"/><CiStar  className="text-yellow-500"/></div>
              </div>
              <div>
                {/* <label className="">Message</label> */}
                <textarea
                  className="w-[610px] h-[165px] mt-[10px] bg-[#E6F2F2] rounded-2xl pl-2.5 pt-2.5"
                  placeholder="Type here...|"
                ></textarea>
              </div>
            </form>
          </div>
        )}

        {/* Chats Tab Content */}
        {activeTab === "Chats" && (
          <p>Chat history or messages would appear here.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
