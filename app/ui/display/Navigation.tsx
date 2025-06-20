"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import SearchInput from "@/app/ui/forms/SearchInput";
import ProfileImageComponent from "@/app/ui/display/ProfileImageComponent";
import { navigations } from "../../lib/sidebar";

export default function Navigation() {
  const links = ["About", "How it works", "Contact"];
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [query, setQuery] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <nav className={`h-[65px] w-full pr-7 md:px-10 py-3 bg-[#122117] flex ${pathname.startsWith("/user") ?'justify-end' : 'justify-between'} items-center border-b border-[#E5E8EB]`}>
      {!pathname.startsWith('/user') && <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="Equiply 2025."
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>}

      {pathname.startsWith("/user") ? (
        <div className="hidden md:flex gap-3">
          <SearchInput value={query} onChange={handleSearch} />
          <div>
            <ProfileImageComponent />
          </div>
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

      <RiMenu2Fill
        onClick={toggleMenu}
        className="text-white text-3xl md:hidden hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300 sticky top-0"
      />

      {isMenuOpen && (
        <div className="flex justify-center items-center absolute top-20 right-0 w-full">
          <section className="bg-[#264533] w-[90%] md:hidden flex justify-start items-center p-2 z-10 rounded-xl shadow-lg">
            <ul className="text-white text-sm font-light w-full">
              {!pathname.startsWith("/user")
                ? links.map((link, index) => (
                    <li
                      key={index}
                      className="hover:cursor-pointer hover:text-[#A6F2C4] py-1.5 px-4"
                    >
                      {link}
                    </li>
                  ))
                : navigations.map((nav, index) => {
                    const isActive = pathname.startsWith(nav.href);
                    const Icon = isActive ? nav.iconActive : nav.icon;
                    return (
                      <Link href={nav.href} key={index}>
                        <li className="hover:cursor-pointer hover:text-[#A6F2C4] py-1.5 px-4 flex items-center gap-1">
                          <Icon
                            className={`${
                              isActive && "text-[#94C7A8]"
                            } text-sm`}
                          />
                          <span>{nav.name}</span>
                        </li>
                      </Link>
                    );
                  })}
            </ul>
          </section>
        </div>
      )}
    </nav>
  );
}
