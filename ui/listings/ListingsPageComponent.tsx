"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import ListingsComponent from "./ListingsComponent";
import RentalsComponent from "./RentalsComponent";
import Heading from "@/ui/display/HeadingComponent";

export default function ListingsPageComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    { name: "Listings", id: 1 },
    { name: "Rentals", id: 2 },
  ];

  return (
    <section className="py-3 md:mx-10">
      <div className="flex flex-row-reverse justify-between items-center">
        <Heading content="Your tools" />
        <div className="text-sm uppercase space-x-2">
          {tabs.map((tab) => (
            <span
              onClick={() => toggleTab(tab.id)}
              key={tab.id}
              className={`hover:cursor-pointer ${
                activeTab === tab.id ? "text-white" : "text-[#5c7265]"
              }`}
            >
              {tab.name}
            </span>
          ))}
        </div>
      </div>

      {activeTab === 1 ? (
        <ListingsComponent tools={tools} />
      ) : (
        <RentalsComponent />
      )}
    </section>
  );
}