// import Link from "next/link";

// type TabComponentProps = {
//     tabName: string;
//     href: string;
//     pathname: string;
//     activeTab?: number;
//     index?: number;
// }

// export default function TabComponent({
//     tabName, 
//     href,
//     pathname,
//     activeTab = 1,
//     index,
// }: TabComponentProps) {
//     const isActive = pathname === href;
//     return (
//         <div className={`${isActive || activeTab === index ? "border-b-2 border-white" : ""} hover:cursor-pointer hover:text-[#1A352A]`}>
//             <Link href={href} className={`${isActive || activeTab === index ? 'text-white' : 'text-[#94C7A8]'} text-sm`}>{ tabName }</Link>
//         </div>
//     )
// }

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TabType {
  tabName: string;
  id: number;
}

type TabProps = {
  data: Array<TabType>;
  renderContent?: (activeTabId: number) => React.ReactNode;
  width?: string;
//   onTabChange?: (tabId: number) => void;
};

export default function TabComponent({ 
    data,
    renderContent,
    width,
    // onTabChange,
 }: TabProps) {

  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // onTabChange?.(index);
  }

  return (
    <div className="w-full space-y-4">
      {/* Tabs */}
      <div className={`${width ? `w-${width}`: 'w-full'} relative h-14 flex items-center gap-4 p-2 bg-[#264533] rounded-lg overflow-x-auto`}>
        {data.map((d) => {
          const isActive = activeTab === d.id;
          return (
            <div key={d.id} onClick={() => handleTabChange(d.id)} className="relative z-10">
              {isActive && (
                <motion.div
                  layoutId="tab"
                  className="absolute inset-0 z-0 bg-white rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div
                className={`relative z-10 px-3 md:px-6 h-10 flex items-center justify-center font-bold text-xs md:text-sm cursor-pointer whitespace-nowrap ${
                  isActive ? "text-[#242424]" : "text-[#a39898]"
                }`}
              >
                {d.tabName}
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {renderContent?.(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}