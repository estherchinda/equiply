"use client";

import Image from "next/image";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

export default function Navigation() {
  const links = ["About", "How it works", "Contact"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[65px] w-full pr-7 md:px-10 py-3 bg-[#122117] flex justify-between items-center border-b border-[#E5E8EB]">
      <Image src={"/logo.svg"} alt="Equiply 2025." width={200} height={200} style={{'width': 'auto', 'height': 'auto'}} />

      <ul className="text-white gap-9 hidden md:flex">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:text-[#A6F2C4] nav-link"
          >
            {link}
          </li>
        ))}
      </ul>

      <RiMenu2Fill onClick={toggleMenu} className="text-white text-3xl md:hidden hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300" />

      {isMenuOpen && (
        <section>

        </section>
      )}
    </nav>
  );
}
