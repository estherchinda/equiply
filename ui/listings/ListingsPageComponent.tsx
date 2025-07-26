"use client";


import ListingsComponent from "./ListingsComponent";
import RentalsComponent from "./OrdersComponent";
import TabComponent from "@/ui//display/TabComponent";

export default function ListingsPageComponent() {
  const tabs = [
    { tabName: "Orders", id: 1 },
    { tabName: "Listings", id: 2 },
  ];

  return (
    <section className="py-3 md:mx-10">
      <div className="flex flex-row-reverse justify-between items-center">
        <TabComponent
        data={tabs}
        renderContent={(tabId => {
          if (tabId === 1) {
            return <RentalsComponent/>
          } else {
            return <ListingsComponent/>
          }
        })}
        />
      </div>
    </section>
  );
}