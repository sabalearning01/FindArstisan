import React from "react";
import CountryCitySelector from "./CountryCitySelector";
import { LuTextSearch } from "react-icons/lu";
import ig from "../assets/ig.png";
import linkedln from "../assets/linkedln.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="hidden lg:block md:block bg-[#004646] lg:w-[100%] lg:h-[508px]">
        {/* Big screen */}
        <div className="flex  justify-between md:gap-[30px] ml-[100px] mr-[124px] pt-[88px]">
          <div>
            <div className="flex  items-center">
              <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
              <h6 className="font-[DM Sans]  cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
                Findartisan
              </h6>
            </div>
            <p className="Font-[DM Sans] font-normal text-[12px] mt-[16px] text-[#C1C5C8] w-[199.05px] h-[60px]">
              We exist to help you get secure, fast and reliable artisans at
              affordable rate
            </p>
            <div className="pt-[38.24px]">
              <CountryCitySelector className="" />
            </div>
          </div>
          <div>
            <div>
              <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
                For Customers
              </h6>
            </div>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Hire an Artisans
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              How it works
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Log in
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Sign up
            </p>
          </div>

          <div>
            <div>
              <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
                For Artisans
              </h6>
            </div>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8]">
              How it works
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Sign up as Artisan
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Log in
            </p>
          </div>
          <div>
            <div>
              <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
                Support
              </h6>
            </div>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Send us email
            </p>
            <p className="font-[DM Sans] font-medium text-[16px] pt-[16px] text-[#C1C5C8] ">
              Give feedback as <br /> user
            </p>
          </div>
          <div>
            <div>
              <h6 className="Font-[DM Sans] font-medium text-[18px] text-[white]">
                Follow Us
              </h6>
            </div>
            <div>
              <div className="flex items-center pt-[16px]  gap-1.5">
                <img
                  className="w-[20px] h-[20px] cursor-pointer object-contain"
                  src={ig}
                  alt=""
                />
                <p className="font-[DM Sans] font-medium text-[16px]  text-[#C1C5C8]">
                  Instagram
                </p>
              </div>
              <div className="flex  items-center pt-[16px] gap-1.5">
                <img
                  className="w-[20px] h-[20px] cursor-pointer object-contain"
                  src={linkedln}
                  alt=""
                />
                <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
                  Linkedln
                </p>
              </div>
              <div className="flex  items-center pt-[16px] gap-1.5">
                <img
                  className="w-[20px] h-[20px] cursor-pointer object-contain"
                  src={x}
                  alt=""
                />
                <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
                  X/Twitter
                </p>
              </div>
              <div className="flex  items-center pt-[16px] gap-1.5">
                <img
                  className="w-[20px] h-[20px] cursor-pointer object-contain"
                  src={youtube}
                  alt=""
                />
                <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">
                  Youtube
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#007474] ml-[100px] mr-[100px] mt-[60px]" />
        <div className="flex items-center gap-3 ml-[100px] text-[#A3A9AE] mt-[60px]">
          <AiOutlineCopyright />
          <p className="font-[DM Sans] font-medium text-[16px]">
            2025 Fndartisan Technologies.
          </p>{" "}
          <p className="font-[DM Sans] font-medium text-[16px]">
            Terms & Conditions/ Cookies policy / Privacy policy
          </p>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className=" md:hidden bg-[#004646] lg:hidden w-[100%] h-[923.76px] px-[20px] mt-[74px]  pt-[64px]">
        <div className="flex items-center  ">
          <LuTextSearch className="text-white text-3xl" />
          <h5 className="text-[#E6F2F2] text-[28.45px] font-[DM Sans] font-medium">
            Findartisan
          </h5>
        </div>

        <p className="font-[DM Sans] font-normal text-[12px] text-[#C1C5C8] mt-[16px] ">
          We exist to help you get secure, fast and reliable artisans at
          affordable rate
        </p>

        <div className="flex gap-[55px]  pt-[40px]">
          <div>
            <div>
              <h4 className="Font-[DM Sans] font-semibold text-white text-[18px]">
                For Customers
              </h4>
            </div>

            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Hire an artisan
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              How it works
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Log in
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Sign up
            </p>
          </div>
          <div>
            <div>
              <h4 className="Font-[DM Sans] font-semibold text-white text-[18px]">
                For Artisans
              </h4>
            </div>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              How it works
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Sign up as Artisan
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Log in
            </p>
          </div>
        </div>

        <div className="flex  gap-[16px]  pt-[40px]">
          <div>
            <div>
              <h4 className="Font-[DM Sans] font-semibold text-white text-[18px]">
                Supports
              </h4>
            </div>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Send us a mail
            </p>
            <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium pt-[16px]">
              Give feedback as user
            </p>
          </div>

          <div className="">
            <div>
              <h4 className="Font-[DM Sans] font-semibold text-white text-[18px]">
                Follow us
              </h4>
            </div>
            <div>
              <div className=" flex items-center gap-1.5 pt-[16px]">
                <img  className="object-contain" src={ig} alt="Instagram Icon link" />{" "}
                <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium ">
                  Instagram
                </p>
              </div>
              <div className=" flex items-center gap-1.5 pt-[16px]">
                <img className="object-contain" src={linkedln} alt="Linkedln Icon link" />{" "}
                <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium ">
                  Linkedin
                </p>
              </div>
              <div className=" flex items-center gap-1.5 pt-[16px]">
                {" "}
                <img className="object-contain" src={x} alt=" X Icon link" />{" "}
                <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium ">
                  X/Twitter
                </p>
              </div>
              <div className=" flex items-center gap-1.5 pt-[16px]">
                {" "}
                <img className="object-contain" src={youtube} alt="Youtube Icon Link" />{" "}
                <p className="text-[#E6F2F2] font-[DM Sans] text-[16px] font-medium ">
                  Youtube
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[40px]">
          <CountryCitySelector />
        </div>
        <hr className=" w-[100%] bg-[#007474] mt-[60px]" />
        <div className="flex items-center gap-3  text-[#A3A9AE] mt-[60px]">
          <AiOutlineCopyright />
          <p className="font-[DM Sans] font-medium text-[16px]">
            2025 Fndartisan Technologies.
          </p>{" "}
        </div>
        <p className="font-[DM Sans] font-medium text-[16px] text-[#A3A9AE]">
          Terms & Conditions/ Cookies policy / Privacy policy
        </p>
      </div>

      <div />
    </div>
  );
};

export default Footer;
