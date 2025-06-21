"use client";

import { useState, useMemo } from "react";
import { tabsList } from "@/app/types/tabs";
import Image from "next/image";
import Button from "@/app/ui/forms/Button";
import Heading from "@/app/ui/display/HeadingComponent";
import TabComponent from "@/app/ui/display/TabComponent";

// Import tabs
import All from "@/app/ui/profile/AllTab";
import AvailableEquipments from "@/app/ui/profile/AvailableEquipmentsTab";
import RentalHistory from "@/app/ui/profile/RentalHistoryTab";
import Reviews from "@/app/ui/profile/ReviewsTab";
import About from "@/app/ui/profile/AboutTab";

// Custom hook for localStorage
const useLocalStorage = (key: string, initialValue: number) => {
  const [storedValue, setStoredValue] = useState<number>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: number | ((val: number) => number)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};

// Profile header component
const ProfileHeader = () => (
  <section className="h-fit lg:p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
    <div className="flex flex-row items-center gap-4">
      <div className="h-32 w-32 rounded-full overflow-hidden">
        <Image
          src="/pfp.jpeg"
          alt="Profile Image"
          height={128}
          width={128}
          className="rounded-full object-cover h-full w-full"
        />
      </div>
      <div>
        <Heading content="Ethan Carter" />
        <p className="text-sm text-[#94C7A8] font-normal leading-6">
          Farmer in Kastina, Nigeria
        </p>
      </div>
    </div>
    <div className="w-[80%] md:w-[480px] flex items-center gap-3 mt-5 lg:mt-0">
      <Button content="Message" isSecondary={true} />
      <Button content="Follow" />
    </div>
  </section>
);

// Tab navigation component
interface TabNavigationProps {
  activeTab: number;
  onTabChange: (id: number) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => (
  <div className="border-b border-[#366347] flex items-center gap-8 py-1 md:px-3 my-4">
    {tabsList.map(tab => (
      <TabComponent 
        key={tab.id} 
        tabName={tab.tabName} 
        index={tab.id} 
        activeTab={activeTab} 
        changeTab={() => onTabChange(tab.id)} 
      />
    ))}
  </div>
);

// Tab content renderer
const TabContentRenderer = ({ activeTab }: { activeTab: number }) => {
  const tabComponents = useMemo(() => ({
    1: All,
    2: AvailableEquipments,
    3: Reviews,
    4: RentalHistory,
    5: About,
  }), []);

  const ActiveComponent = tabComponents[activeTab as keyof typeof tabComponents];
  
  return ActiveComponent ? <ActiveComponent /> : null;
};

export default function ProfileDisplay() {
  const [activeTab, setActiveTab] = useLocalStorage('profileActiveTab', 1);

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <section className="py-3 md:mx-10">
      <ProfileHeader />
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={handleActiveTab} 
      />
      <TabContentRenderer activeTab={activeTab} />
    </section>
  );
}