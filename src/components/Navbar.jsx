import React, { useEffect, useRef, useState } from "react";
import { menuLinks } from "../constants";
import Menu from "../assets/shared/mobile/menu.svg";
import Close from "../assets/shared/mobile/close.svg";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // To handle the click outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);
  return (
    <>
      {/* Desktop */}
      <nav className=" hidden md:flex items-center justify-between mx-auto    mt-4  py-4 relative overflow-hidden ">
        {/* logo */}
        <Logo />
        <ul className="flex  lg:gap-x-10   ml-4 z-[100]">
          {menuLinks.map((menu, index) => (
            <li className="mr-10">
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
        <button btn btn-primary>
          Schedule a Demo
        </button>
      </nav>
      {/* Mobile */}
      <nav
        ref={sidebarRef}
        className=" flex md:hidden items-center  justify-between w-[87.2%] mx-auto py-[31px]  relative overflow-hidden "
      >
        {/* logo */}
        <Logo />
        <ul
          className={`fixed flex flex-col bg-mirageBlue shadow-buttonShadow justify-center items-center  min-h-screen w-[75%]  gap-y-[31px] transition-[right] duration-500 z-[1000] ${
            isSidebarOpen ? "top-0 right-0" : " top-0 right-[-100%]"
          } `}
        >
          {menuLinks.map((menu, index) => (
            <li>
              <NavLink
                to={menu.link}
                style={({ isActive }) =>
                  isActive ? { color: "#BA4270" } : undefined
                }
                className={`
                   hover:text-accent text-white transition-colors duration-150 cursor-pointer text-[15px] leading-[18px] opacity-[.7] mix-blend-normal font-bold `}
                key={index}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
          <button btn btn-primary>
            Schedule a Demo
          </button>
          <img
            src={Close}
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            alt="close menu"
            className="absolute top-12 right-[27px] cursor-pointer"
          />
        </ul>
        <img
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="cursor-pointer"
          src={Menu}
          alt="menu"
        />
      </nav>
    </>
  );
};

export default Navbar;
