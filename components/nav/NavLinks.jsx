"use client";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { handleToggleMenu } from "./handleToggleMenu";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const linkActiveStyles =
    "text-white bg-primary md:bg-transparent md:text-primary font-bold";
  return (
    <div className="menu">
      <div
        className="icon-container overflow-hidden"
        onClick={() => {
          handleToggleMenu(setIsMenuOpen);
        }}
      >
        <div className="toggle-menu-icon flex flex-col gap-1.5 items-end md:hidden group">
          <span className="w-8 h-[2px] bg-black duration-300 group-hover:bg-primary"></span>
          <span
            className={`${
              isMenuOpen ? "w-5" : "w-8"
            } h-[2px] bg-black duration-300 group-hover:bg-primary`}
          ></span>
          <span className="w-8 h-[2px] bg-black duration-300 group-hover:bg-primary"></span>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen ? "left-0 opacity-100" : "left-[-100vw] opacity-0"
        } md:left-0 md:opacity-100 ease-[cubic-bezier(0.8,_-0.4,_0.5,_1)] duration-750 navLinks absolute top-[100%] w-full bg-gray-50 md:bg-transparent z-50 flex flex-col md:relative md:flex-row md:items-center md:gap-3 md:gap-5`}
      >
        {navLinks.map((link) => {
          return (
            <li
              key={link.key}
              className={`duration-300 hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary px-2 py-3 md:py-0 md:px-0 ${
                link.link === pathname ? linkActiveStyles : ""
              }`}
            >
              <Link href={link.link}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
