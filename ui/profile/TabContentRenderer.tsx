"use client";

import TabComponent from "@/ui/display/TabComponent"
import { tabsList } from "@/types/tabs"
import { usePathname } from "next/navigation"

export default function TabContentRenderer () {
    const pathname = usePathname();
    return (
        <div className="border-b border-[#366347] flex items-center justify-center md:justify-start gap-8 py-1 md:px-3 my-4">
            {tabsList.map((tab) => (
              <TabComponent
                key={tab.id}
                tabName={tab.tabName}
                href={tab.href}
                pathname={pathname}
              />
            ))}
        </div>
    )
}