import React from "react";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../constants";
import BgPattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="absolute">
      <div className="bg-mirageBlue flex flex-col lg:flex-row gap-y-10 items-center  justify-between  text-white w-screen px-[40px] py-[31px] lg:px-[165px] lg:py-[38pxS] relative overflow-hidden  bottom-0 left-0 ">
        {/* Logo */}
        <Logo />
        <ul className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-[31px]  ml-4 z-[100]">
          {menuLinks.map((menu, index) => (
            <li>
              <NavLink
                to={menu.link}
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
                className={`
                   hover:text-accent transition-colors duration-150 cursor-pointer text-[15px] leading-[18px] opacity-[.7] mix-blend-normal font-bold `}
                key={index}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-6 z-[100]">
          <AiFillFacebook
            className="cursor-pointer hover:text-accent"
            size={24}
          />
          <AiOutlineTwitter
            className="cursor-pointer hover:text-accent"
            size={24}
          />
          <AiOutlineLinkedin
            className="cursor-pointer hover:text-accent"
            size={24}
          />
        </div>
        <img
          src={BgPattern}
          alt="background pattern"
          className="absolute top-[177px] lg:top-[-177px] right-[-100px]  "
        />
      </div>
    </footer>
  );
};

export default Footer;
