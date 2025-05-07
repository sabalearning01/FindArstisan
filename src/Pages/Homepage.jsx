import React, { useState } from "react";
import Header from "../Components/Header";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Ellipse1 from "../assets/Ellipse1.png";
import Rounded from "../assets/Rounded.png";
import Carousel from "../Components/Carousel";
// import sparklingline from "../assets/sparklingline.png";
// import Slider from "../Components/Slider";
import CategoryCarousel from "../Components/CategoryCarousel";
import CategoryTabs from "../Components/CategoryTabs";
import ArtisanType from "../Components/ArtisanType";
import ArtisanTypeSmall from "../Components/ArtisanTypeSmall";

const Homepage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `Api_endpoint?name=${encodeURIComponent(
          name
        )}&location=${encodeURIComponent(location)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  return (
    <div>
      <Header />
      <div className="bg-[#004646] w-[100%] h-[1090px] lg:h-[1210px]">
        <h2 className="font-[DM Sans] font-bold lg:font-semibold pt-[61px] lg:pt-[91px] text-[32px]  lg:text-[62px] text-white text-center mx-[20px] lg:mx-[273px]">
          Hire <span className="text-[#E8B18A]">verified</span> &{" "}
          <span className="text-[#E8B18A]">Artisans</span> trusted with reviews.
        </h2>

        <div className="w-[90%] relative z-10 h-[200px] lg:w-[790px] lg:h-[88px] rounded-lg mt-[64px] m-auto bg-[#FDFDFD]">
          {/* Mobile Screen */}
          <form onSubmit={handleSubmit}>
            <div className="lg:hidden pt-[16px] ml-[16px]">
              <CiSearch className="absolute left-6 top-[28px]" />
              <input
                type="text"
                placeholder="Search by name"
                value={name}
                onChange={handleNameChange}
                className="w-[90%] text-[16px] p-2 pl-6.5 font-normal font-[DM Sans]"
              />
              <div className="pt-[16px]">
                <CiLocationOn className="absolute left-6 top-[85px]" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                  className="w-[90%] text-[16px] p-2 pl-6.5 font-normal font-[DM Sans]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[90%] mt-[16px] cursor-pointer bg-[#CC5500] rounded-lg text-white px-[32px] py-[14px]"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Big Screen */}
          <form onSubmit={handleSubmit}>
            <div className="hidden lg:flex justify-between items-center rounded-lg py-[16px] pl-[23px] pr-[12px]">
              <div className="flex justify-center items-center relative">
                <CiSearch className="absolute left-3" />
                <input
                  type="text"
                  placeholder="Search by name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-[375px] h-[56px] text-[#5E6A72] text-[16px] p-2 pl-8 font-normal font-[DM Sans]"
                />
              </div>
              <div className="flex justify-center items-center relative">
                <CiLocationOn className="absolute left-[14px]" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                  className="w-[236px] h-[56px] text-[#5E6A72] text-[16px] p-2 pl-8 font-normal font-[DM Sans]"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer h-[56px] w-[111px] bg-[#CC5500] rounded-lg text-white px-[32px] py-[14px]"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

        {isLoading ? (
          <div className="mt-4 text-white text-center">Loading...</div>
        ) : (
          results.length > 0 && (
            <div className="mt-8 text-white px-4">
              <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
              <ul className="space-y-2">
                {results.map((item, index) => (
                  <li key={index} className="bg-[#008080] p-3 rounded">
                    {item.name} - {item.location}
                  </li>
                ))}
              </ul>
            </div>
          )
        )} */}
       <div className=" relative z-50  md:flex   justify-center items-center  mt-[16px] lg:mt-[16px]">
        <p className="font-[DM Sans] font-medium text-[16px] lg:text-[18px] text-white">Last Search:</p>
        <button className="cursor-pointer bg-[#008080] px-[16px] py-[8px] rounded-4xl text-[#FDFDFD] font-semibold text-[16px] font-[DM Sans] ml-[16px] rounded-4xl">BrickLayer</button>
        <button className="cursor-pointer bg-[#008080] px-[16px] py-[8px] rounded-4xl text-[#FDFDFD] font-semibold text-[16px] font-[DM Sans] ml-[16px] rounded-4xl">Rewire Mechanic</button>
        <button className="cursor-pointer bg-[#008080] px-[16px] py-[8px] rounded-4xl text-[#FDFDFD] font-semibold text-[16px] font-[DM Sans] ml-[16px] rounded-4xl">Electrician</button>
        <button className="cursor-pointer bg-[#008080] px-[16px] py-[8px] rounded-4xl text-[#FDFDFD] font-semibold text-[16px] font-[DM Sans] ml-[16px] rounded-4xl">Carpenter</button>
        <button className="cursor-pointer bg-[#008080] px-[16px] py-[8px] rounded-4xl text-[#FDFDFD] font-semibold text-[16px] font-[DM Sans] ml-[16px] rounded-4xl">Solar</button>
       </div>
       

        <div
          className="hidden lg:block relative bottom-[300px] lg:w-auto lg:h-[712px] bg-no-repeat "
          style={{ backgroundImage: `url(${Ellipse1})` }}
        ></div>

        <div
          className="hidden lg:block relative bottom-[750px] left-[950px] lg:w-[312px] lg:h-[712px] bg-no-repeat"
          style={{ backgroundImage: `url(${Rounded})` }}
        ></div>

        <Carousel className=" " />
      </div>

      <CategoryCarousel />

      <h2 className=" text-[32px] lg:text-[44px] font-[DM Sans] font-semibold mt-[64px] lg:mt-[104px] ml-[20px] mr-[20px] lg:mx-[100px] text-[#36454F]">
        Discover Popular Search Categories
      </h2>
      {/* <CategoryTabs /> */}

      {/* <ArtisanType />
      <ArtisanTypeSmall/>
      <div className="flex justify-center items-center">
        <button className="cursor-pointer bg-[#CC5500] px-[24px] py-[16px] rounded-4xl text-[#FDFDFD] font-semibold text-[18px] font-[DM Sans]">
          View All Home & Garden
        </button>
      </div> */}
    </div>
  );
};

export default Homepage;
