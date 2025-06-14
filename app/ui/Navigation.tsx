"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import SearchInput from "@/app/ui/forms/SearchInput";;

export default function Navigation() {
  const links = ["About", "How it works", "Contact"];
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[65px] w-full pr-7 md:px-10 py-3 bg-[#122117] flex justify-between items-center border-b border-[#E5E8EB]">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Equiply 2025." width={200} height={200} style={{'width': 'auto', 'height': 'auto'}} priority />
      </Link>

    {pathname.startsWith("/user") ? (
      <div className="hidden md:flex gap-3">
        <SearchInput />
        <Link href={"/user/profile"} className="h-[40px] w-[50px] rounded-full overflow-hidden">
          <Image
            src="/pfp.jpeg"
            alt="Profile picture"
            width={50}
            height={40}
            className="w-full h-full object-cover rounded-full"
            style={{'width': 'auto', 'height': 'auto'}}
          />
        </Link>
      </div>
    ) : (
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
    )}

      <RiMenu2Fill onClick={toggleMenu} className="text-white text-3xl md:hidden hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300" />

      {isMenuOpen && (
        <div className="flex justify-center items-center absolute top-20 right-0 w-full">
          <section className="bg-[#A6F2C4] w-[90%] md:hidden flex justify-start items-center p-2 border-t border-[#E5E8EB] z-10 rounded-xl shadow-lg">
            <ul className="text-[#122117] text-sm font-light w-full">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:text-[#A6F2C4] border-b border-[#122117] py-1.5 px-4"
                >
                  {link}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </nav>
  );
}
