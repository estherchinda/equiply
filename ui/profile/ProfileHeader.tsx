"use client";

import Image from "next/image";
import Heading from "@/ui/display/HeadingComponent";
import { AiOutlineGift } from "react-icons/ai";
import TabComponent from "../display/TabComponent";
import PersonalInformation from "./PersonalInformation";
import PaymentDetails from "./PaymentDetails";
import SystemPreferences from "./SystemPreferences";

export default function ProfileHeader() {
  const tabs = [
    { tabName: "Personal Information", component: <PersonalInformation />, id: 1 },
    { tabName: "Payment Details", component: <PaymentDetails />, id: 2 },
    { tabName: "System Preferences", component: <SystemPreferences />, id: 3 },
  ];
  return (
    <>
      <section className="h-fit lg:p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex flex-row items-center gap-4">
          <div className="h-20 w-20 md:h-32 md:w-32 rounded-full overflow-hidden">
            <Image
              src="/pfp-male.webp"
              alt="Profile Image"
              height={128}
              width={128}
              className="rounded-full object-cover h-full w-full"
            />
          </div>
          <div>
            <Heading content="Chinedu Emeka" marginBottom="0" />
            <p className="text-sm text-[#94C7A8] font-normal leading-6">
              Farmer in Owerri, Nigeria
            </p>
          </div>
        </div>
        <div className="flex items-end gap-2 mt-5 lg:mt-0 text-white group">
          <AiOutlineGift className="group-hover:text-[#94C7A8] cursor-pointer text-2xl" />
          <p className="text-sm group-hover:text-[#94C7A8] cursor-pointer">Refer a friend</p>
        </div>
      </section>
      <TabComponent
      data={tabs}
      renderContent={(tabId => {
        const activeTab = tabs.find(tab => tab.id === tabId);
        return activeTab ? activeTab.component : null;
      })}
      />
    </>
  );
}
