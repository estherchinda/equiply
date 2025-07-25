"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import ProfileImageComponent from "@/ui/display/ProfileImageComponent";
import { useSidebar } from "@/context/SidebarContext";
import NotificationTab from "./NotificationTab";

export default function Navigation() {
  const links = ["About", "How it works", "Pricing"];
  const pathname = usePathname();
  const { openMobile } = useSidebar();

  const website = pathname.startsWith("/user");
  return (
    <nav
      className={`h-[65px] w-full pr-7 md:px-10 py-3 bg-[#122117] flex ${
        website ? "justify-end" : "justify-between"
      } items-center border-b border-[#E5E8EB]`}
    >
      {!website && (
        <Link href={"/"} className="">
          <Image
            src={"/equiply-logo.png"}
            alt="Equiply 2025."
            width={120}
            height={120}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>
      )}

      {website ? (
        <div className="hidden md:flex gap-3">
          <NotificationTab/>
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

      {website && (
        <div className="md:hidden flex items-center gap-3 ml-3">
          <RiMenu2Fill
            onClick={openMobile}
            className="text-white text-3xl hover:cursor-pointer hover:text-[#A6F2C4] transition-colors duration-300 sticky top-0"
          />
          <NotificationTab/>
          <div>
            <ProfileImageComponent />
          </div>
        </div>
      )}
    </nav>
  );
}
