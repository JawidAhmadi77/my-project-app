import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../data/ProjectData";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-dimgreen">
      <div className="flex items-center justify-between px-6 mx-auto py-7 max-w-7xl">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-white "
        >
          <h1 className="px-1 text-xl text-yellow-400 border-4 border-yellow-400">
            A
          </h1>
          {navData.logo}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden space-x-8 font-bold md:flex text-dimWhite text-md">
          {navData.links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-white pb-1"
                    : "hover:text-white"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden space-x-8 md:flex">
          {navData.social.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer">
              <item.icon className="text-2xl hover:text-yellow-400" />
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden focus:outline-none bg-dimgreen"
        >
          <FaBars />
        </button> */}
        <div
          className="cursor-pointer md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-6 py-6 space-y-3 font-bold transition-all duration-1000 bg-dimgreen md:hidden text-md text-dimWhite">
          {navData.links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-400"
                  : "block hover:text-yellow-400"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex pt-2 space-x-4">
            {navData.social.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noreferrer">
                <item.icon className="text-2xl hover:text-yellow-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
