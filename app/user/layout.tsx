"use client";

import Sidebar from "@/ui/display/Sidebar";
import { useSidebar } from "../../context/SidebarContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden min-h-screen">
      {/* Sidebar wrapper */}
      <div
        className={`flex-none transition-all duration-300 ease-in-out ${
          collapsed ? "md:w-20" : "md:w-64"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className={`flex-grow p-6 md:overflow-y-auto bg-[#122117] text-white transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
}
