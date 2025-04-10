import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full h-[72px] px-4 sticky top-0 ${scrolled ? "bg-[#fffaee] z-99 shadow-xs" : "bg-transparent z-100"}`}>
      <div className="flex justify-between px-[2px] md:py-[21px] lg:px-[40px] xl:px-[10rem] max-w-screen-2xl mx-auto h-full items-center">
        <div className="w-[48px] md:w-[96px]">
          <img src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/logo.svg" alt="snoopedu logo" />
        </div>
        <div className="flex">
          <ul className="flex gap-2 lg:gap-6 text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
            <Link to={"/aboutus"} className="hover:underline">
              <li>About us</li>
            </Link>
            <Link to={"/programs"} className="hover:underline">
              <li>Programs</li>
            </Link>
            <Link to={"/contact"} className="hover:underline">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="py-2 px-3 md:py-2 md:px-4 font-semibold text-lg md:text-[16px]  text-white hover:text-black cursor-pointer bg-[#30Ba96] rounded-lg">
            Login to Snoopedu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
