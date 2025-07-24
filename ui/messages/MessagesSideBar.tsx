"use client";
import TabComponent from "@/ui/display/TabComponent"
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MessageSidebar() {
    const pathname = usePathname();
    const tabsList = [
        {
            id: 1,
            tabName: "Chats",
            href: "/user/messages/chats",
        },
        {
            id: 2,
            tabName: "Requests",
            href: "/user/messages/requests",
        },
    ];

    const [activeTab, setActiveTab] = useState(1);

    return (
        <aside className="w-[320px] border-r border-[#E5E8EB]">
            <div className="border-b border-[#366347] flex items-center justify-center md:justify-start gap-8 py-1 md:px-3 my-4 mr-6">
                {tabsList.map((tab) => (
                <TabComponent
                    key={tab.id}
                    index={tab.id}
                    tabName={tab.tabName}
                    href={tab.href}
                    pathname={pathname}
                    activeTab={activeTab}
                />
                ))}
            </div>
        </aside>
    );
}