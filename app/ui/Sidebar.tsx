"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiHome6Line,
  RiHome6Fill,
  RiCalendar2Line,
  RiCalendarFill,
  RiListIndefinite,
  RiListCheck3,
  RiMessage3Line,
  RiMessage3Fill,
  RiNotification2Line,
  RiNotification2Fill,
  RiUser6Line,
  RiUser6Fill,
} from "react-icons/ri";

export default function Sidebar() {
  const navigations = [
    {
      name: "Dashboard",
      href: "/user/dashboard",
      icon: RiHome6Line,
      iconActive: RiHome6Fill,
    },
    {
      name: "Rentals",
      href: "/user/rentals",
      icon: RiCalendar2Line,
      iconActive: RiCalendarFill,
    },
    {
      name: "Listings",
      href: "/user/listings",
      icon: RiListIndefinite,
      iconActive: RiListCheck3,
    },
    {
      name: "Messages",
      href: "/user/messages",
      icon: RiMessage3Line,
      iconActive: RiMessage3Fill,
    },
    {
      name: "Notifications",
      href: "/user/notifications",
      icon: RiNotification2Line,
      iconActive: RiNotification2Fill,
    },
    {
      name: "Profile",
      href: "/user/profile",
      icon: RiUser6Line,
      iconActive: RiUser6Fill,
    },
  ];

  const pathname = usePathname();
  return (
    <aside className="hidden md:flex w-64 h-screen bg-[#122117] text-white p-4 fixed top-0 left-0 border-r border-[#E5E8EB] flex-col gap-10 z-20">
      <Link href={"/profile"} className="flex items-center mt-2.5">
        <Image
          src={"/logo.svg"}
          alt="Equiply 2025."
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>

      <section className="space-y-5">
        {navigations.map((nav, index) => {
            const isActive = pathname.startsWith(nav.href);
            const Icon = isActive ? nav.iconActive : nav.icon;
          return (
            <Link key={index} href={nav.href}>
              <div
                className={`flex items-center gap-2 h-10 w-full rounded-3xl py-2 px-5 mb-3 ${
                  isActive
                    ? "bg-[#264533] text-white"
                    : "text-white hover:bg-[#1a352a] transition-colors"
                }`}
              >
                <Icon className={`${isActive && 'text-[#94C7A8]'} text-[21px]`} />
                <span className="text-sm font-medium">{nav.name}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </aside>
  );
}
