"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigations } from "../lib/sidebar";
import { notifications } from "../types/notifications";

export default function Sidebar() {

  const pathname = usePathname();

  const unreadNotifications = notifications.filter(n => n.status === 'unread');

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
                className={`flex justify-between items-center h-10 w-full rounded-3xl py-2 px-5 mb-3 ${
                  isActive
                    ? "bg-[#264533] text-white"
                    : "text-white hover:bg-[#1a352a] transition-colors"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`${isActive && 'text-[#94C7A8]'} text-[21px]`} />
                  <span className="text-sm font-medium">{nav.name}</span>
                </div>
                {nav.hasUnread && <span className="h-6 w-6 rounded-full bg-red-500 flex justify-center items-center text-xs">{unreadNotifications.length}</span>}
                </div>
            </Link>
          );
        })}
      </section>
    </aside>
  );
}
