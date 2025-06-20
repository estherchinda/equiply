"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import SearchInput from "@/app/ui/forms/SearchInput";
import ProfileImageComponent from "@/app/ui/display/ProfileImageComponent";
import { useSidebar } from "@/app/context/SidebarContext";


export default function Navigation() {
  const links = ["About", "How it works", "Contact"];
  const pathname = usePathname();
  const { openMobile } = useSidebar();

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

      <div className="md:hidden flex items-center gap-3 ml-3">
        <RiMenu2Fill
          onClick={openMobile}
          className="text-white text-3xl hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300 sticky top-0"
        />
        <SearchInput value={query} onChange={handleSearch} />
        <div>
          <ProfileImageComponent />
        </div>
      </div>
    </nav>
  );
}
