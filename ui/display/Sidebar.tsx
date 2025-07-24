"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigations } from "../../lib/sidebar";
import { notifications } from "../../types/notifications";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import { useSidebar } from "@/context/SidebarContext";

export default function Sidebar() {
  const { collapsed, toggleCollapse, mobileOpen, closeMobile } = useSidebar();
  const pathname = usePathname();

  const unreadNotifications = notifications.filter(
    (n) => n.status === "unread"
  );
  const Icon = collapsed ? RiArrowLeftWideLine : RiArrowRightWideLine;

  return (
    <>
      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={`
    fixed top-0 left-0 h-full bg-[#122117] text-white border-r border-[#E5E8EB] z-40
    transition-all duration-300 ease-in-out
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0
    ${collapsed ? "md:w-20" : "md:w-64"} 
    w-64
    flex flex-col gap-10 px-4 py-6
  `}
      >
        {/* Header */}
        <div
          className={`flex ${
            collapsed ? "flex-col-reverse gap-4 w-[30px]" : "flex-row"
          } justify-between items-center`}
        >
          <Link href={"/user/profile/all"} className="flex items-center mt-2.5">
            <Image
              src={collapsed ? "/favicon.svg" : "/equiply-logo.png"}
              alt="Equiply 2025."
              width={collapsed ? 20 : 250}
              height={collapsed ? 20 : 250}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>
          <button
            onClick={toggleCollapse}
            className="text-white text-[21px] h-10 w-10 hover:bg-[#264533] transition-all flex justify-center items-center rounded-full hover:cursor-pointer"
          >
            <Icon />
          </button>
        </div>

        {/* Navigation */}
        <section className="space-y-5">
          {navigations.map((nav, index) => {
            const isActive = pathname.startsWith(nav.href);
            const Icon = isActive ? nav.iconActive : nav.icon;
            return (
              <Link key={index} href={nav.href} onClick={closeMobile}>
                <div
                  className={`flex ${
                    collapsed
                      ? "justify-center h-10 w-10"
                      : "justify-between h-10 w-full"
                  } items-center rounded-3xl py-2 px-5 mb-3 ${
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
                    <span
                      className={`${
                        collapsed ? "h-3 w-3" : "h-6 w-6"
                      } rounded-full bg-red-500 flex justify-center items-center text-xs`}
                    >
                      {!collapsed && unreadNotifications.length}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </section>

        {/* Footer */}
        <div className="w-full flex justify-center self-end mt-28">
          <a
            href="https://www.linkedin.com/in/air-str/"
            target="_blank"
            className={`${
              collapsed ? "text-[10px]" : "text-xs"
            } text-center nav-link`}
          >
            &copy; Built by air_str
          </a>
        </div>
      </aside>
    </>
  );
}
