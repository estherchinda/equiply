"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigations } from "../../lib/sidebar";
import { notifications } from "../../types/notifications";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import { useSidebar } from "@/app/context/SidebarContext";


export default function Sidebar() {
  const { collapsed, toggleCollapse } = useSidebar();
  const pathname = usePathname();

  const unreadNotifications = notifications.filter(
    (n) => n.status === "unread"
  );
  const Icon = collapsed ? RiArrowLeftWideLine : RiArrowRightWideLine;

  return (
    <aside
      className={`hidden md:flex ${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-[#122117] text-white px-4 py-6 fixed top-0 left-0 border-r border-[#E5E8EB] flex-col justify-between gap-10 z-20 transition-all duration-300 ease-in-out`}
    >
      <div className={`flex ${collapsed ? 'flex-col-reverse' : 'flex-row'} justify-between items-center`}>
        <Link href={"/profile"} className="flex items-center mt-2.5">
          <Image
            src={collapsed ? "/favicon.png" :"/logo.svg"}
            alt="Equiply 2025."
            width={collapsed ? 20 : 250}
            height={collapsed ? 20 : 250}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <button
        onClick={toggleCollapse}
        className="text-white text-2xl transition-all"
        >
          <Icon />
        </button>
      </div>

      <section className="space-y-5">
        {navigations.map((nav, index) => {
          const isActive = pathname.startsWith(nav.href);
          const Icon = isActive ? nav.iconActive : nav.icon;
          return (
            <Link key={index} href={nav.href}>
              <div
                className={`flex ${collapsed ? 'justify-center h-10 w-10' : 'justify-between h-10 w-full'} items-center rounded-3xl py-2 px-5 mb-3 ${
                  isActive
                    ? "bg-[#264533] text-white"
                    : "text-white hover:bg-[#1a352a] transition-colors duration-300"
                }`}
              >
                <div
                  className={`flex items-center gap-2`}
                  title={collapsed ? nav.name : ""}
                >
                  <Icon
                    className={`${isActive && "text-[#94C7A8]"} text-[21px]`}
                  />
                  {!collapsed && (
                    <span className="text-sm font-medium transition-opacity duration-200">
                      {nav.name}
                    </span>
                  )}
                </div>
                {nav.hasUnread && (
                  <span className={`${collapsed ? 'h-3 w-3' : 'h-6 w-6'} rounded-full bg-red-500 flex justify-center items-center text-xs`}>
                    {!collapsed && unreadNotifications.length}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </section>

      <div className="w-full flex justify-center items-center">
        <a 
        href="https://www.linkedin.com/in/air-str/" 
        target="_blank" 
        className={`${collapsed ? 'text-[10px]' : 'text-xs'} text-center nav-link`}
        >&copy; Built by air_str</a>
      </div>
    </aside>
  );
}
