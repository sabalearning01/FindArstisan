import React from "react";
import { Link } from "react-router-dom";
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
      {/* Desktop and Tablet */}
      <div className="hidden lg:block md:block bg-[#004646] lg:w-[100%] lg:h-[508px]">
        <div className="flex justify-between md:gap-[30px] ml-[100px] mr-[124px] pt-[88px]">
          <div>
            <Link to="/" className="flex items-center">
              <LuTextSearch className="text-white text-2xl lg:text-3xl cursor-pointer" />
              <h6 className="font-[DM Sans] cursor-pointer font-bold text-[17.15px] text-[#E6F2F2] lg:text-[28.45px]">
                Findartisan
              </h6>
            </Link>
            <p className="font-[DM Sans] font-normal text-[12px] mt-[16px] text-[#C1C5C8] w-[199.05px] h-[60px]">
              We exist to help you get secure, fast and reliable artisans at
              affordable rate
            </p>
            <div className="pt-[38.24px]">
              <CountryCitySelector />
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h6 className="font-[DM Sans] font-medium text-[18px] text-white">
              For Customers
            </h6>
            <Link to="/hire-artisan" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Hire an Artisans
            </Link>
            <Link to="/how-it-works" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              How it works
            </Link>
            <Link to="/login" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Log in
            </Link>
            <Link to="/signup" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Sign up
            </Link>
          </div>

          {/* For Artisans */}
          <div>
            <h6 className="font-[DM Sans] font-medium text-[18px] text-white">
              For Artisans
            </h6>
            <Link to="/how-it-works" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              How it works
            </Link>
            <Link to="/signup" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Sign up as Artisan
            </Link>
            <Link to="/login" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Log in
            </Link>
          </div>

          {/* Support */}
          <div>
            <h6 className="font-[DM Sans] font-medium text-[18px] text-white">Support</h6>
            <a href="mailto:support@findartisan.com" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Send us email
            </a>
            <Link to="/feedback" className="block pt-[16px] text-[#C1C5C8] font-[DM Sans] font-medium text-[16px]">
              Give feedback as <br /> user
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="font-[DM Sans] font-medium text-[18px] text-white">Follow Us</h6>
            {[
              { href: "https://instagram.com", label: "Instagram", icon: ig },
              { href: "https://linkedin.com", label: "LinkedIn", icon: linkedln },
              { href: "https://twitter.com", label: "X/Twitter", icon: x },
              { href: "https://youtube.com", label: "Youtube", icon: youtube }
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pt-[16px] gap-1.5"
              >
                <img className="w-[20px] h-[20px] object-contain" src={icon} alt={`${label} icon`} />
                <p className="font-[DM Sans] font-medium text-[16px] text-[#C1C5C8]">{label}</p>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-[#007474] ml-[100px] mr-[100px] mt-[60px]" />
        <div className="flex items-center gap-3 ml-[100px] text-[#A3A9AE] mt-[60px]">
          <AiOutlineCopyright />
          <p className="font-[DM Sans] font-medium text-[16px]">
            2025 Findartisan Technologies.
          </p>
          <Link to="/terms" className="font-[DM Sans] font-medium text-[16px]">
            Terms & Conditions / Cookies policy / Privacy policy
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-[#004646] w-[100%] h-[923.76px] px-[20px] mt-[74px] pt-[64px]">
        <Link to="/" className="flex items-center">
          <LuTextSearch className="text-white text-3xl" />
          <h5 className="text-[#E6F2F2] text-[28.45px] font-[DM Sans] font-medium">Findartisan</h5>
        </Link>
        <p className="font-[DM Sans] font-normal text-[12px] text-[#C1C5C8] mt-[16px]">
          We exist to help you get secure, fast and reliable artisans at affordable rate
        </p>

        {/* Sections similar to above */}
        <div className="flex gap-[55px] pt-[40px]">
          {/* Reuse Link and a href as above */}
          {/* ... (Repeat as above but for mobile layout) */}
        </div>

        {/* Social and Selector */}
        {/* <div className="pt-[40px]">
          <CountryCitySelector />
        </div> */}
        <hr className="w-[100%] bg-[#007474] mt-[60px]" />
        <div className="flex items-center gap-3 text-[#A3A9AE] mt-[60px]">
          <AiOutlineCopyright />
          <p className="font-[DM Sans] font-medium text-[16px]">
            2025 Findartisan Technologies.
          </p>
        </div>
        <Link to="/terms" className="font-[DM Sans] font-medium text-[16px] text-[#A3A9AE]">
          Terms & Conditions / Cookies policy / Privacy policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
