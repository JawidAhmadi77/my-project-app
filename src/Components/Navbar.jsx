
import React, { useState, useEffect } from "react";
import { logo, close, menu } from "../assets/index";
import { navLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState("Home");   
  const [toggle, setToggle] = useState(false);    
 

 

  // 🔹 Reusable Links Component
  const RenderLinks = ({ isMobile = false }) => (
    <ul
      className={`list-none flex ${
        isMobile ? "flex-col items-start space-y-4" : "hidden sm:flex items-center"
      }`}
    >
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`cursor-pointer ${
            index === navLinks.length - 1 ? "mr-0" : isMobile ? "" : "mr-10"
          } ${active === nav.title ? "text-white" : "text-dimWhite"}`}
          onClick={() => setActive(nav.title)}
        >
          <a href="#">{nav.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="relative flex items-center justify-between w-full py-6">
      {/* 🔹 Logo */}
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      {/* 🔹 Desktop Links */}
      <RenderLinks />

   

      {/* 🔹 Mobile Menu Toggle */}
      <div className="relative flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="#"
          className="w-[28px] h-[28px] cursor-pointer object-contain z-50 relative"
          onClick={() => setToggle(!toggle)}
        />

        {/* 🔹 Overlay Background (Blur) */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-1000 ${
            toggle ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setToggle(false)}
        ></div>

        {/* 🔹 Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[220px] bg-white dark:bg-gray-900 z-40 p-6 rounded-l-xl transform transition-transform duration-500 ease-in-out pt-20 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <RenderLinks isMobile />

        
        </div>
      </div>
    </nav>
  );
}