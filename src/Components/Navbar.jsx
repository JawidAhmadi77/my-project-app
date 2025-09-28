import { logo } from "../assets/index";
import { navLinks } from "../Constants/index";
import { useState } from "react";

import React from 'react'

export default function Navbar() {
    const [active, setActive] = useState("Home");
  return (
    <div>
        <nav className="flex items-center justify-between w-full py-6">
            <img className="w-[124px] h-[32px]" src={logo} alt="" />

            <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
                {navLinks.map((nav,index) =>{
                    return(
                        <li
                        key={nav.id}
                        className={`font-normal font-poppins text-[16px] cursor-pointer ${active===nav.title ? "text-white" : "text-dimWhite"}${index===navLinks.length-1 ? "mr-0" : "mr-10"}`}
                        onClick={()=>setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
      
    </div>
  )
}
