import { NavLink } from "react-router-dom";
import { navData } from "../data/ProjectData";

export default function Footer() {
  return (
    <footer className="pt-10 text-gray-500 bg-gray-200">
      <div className="flex flex-col items-center justify-between px-6 py-6 mx-auto md:flex-row max-w-7xl">
        {/* Links */}
        <ul className="flex mb-4 space-x-4 font-bold text-md md:mb-0">
          {navData.links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-black border-b-2 " : "hover:text-black"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {navData.social.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer">
              <item.icon className="text-2xl hover:text-dimgreen" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-center text-gray-500">© 2025 MyWebsite</p>
    </footer>
  );
}
