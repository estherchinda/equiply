"use client";

import { useState } from "react";
import Heading from "@/ui/display/HeadingComponent";
import SearchInput from "@/ui/forms/SearchInput";
import Dropdown from "@/ui/forms/Dropdown";
import { userOrders } from "@/lib/equipments";
import Image from "next/image";
import Button from "@/ui/forms/Button";
import Tag from "../display/Tag";
import Link from "next/link";
import { formatShortDate } from "@/utils/equipments";

export default function RentalsComponent() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const [equipment, setEquipment] = useState("All Equipment");
  const [status, setStatus] = useState("All Status");

  const equipmentOptions = ["All Equipment", ...Array.from(new Set(userOrders.map(u => u.equipmentName)))];
    const statusOptions = ["All Status", ...Array.from(new Set(userOrders.map(u => u.status)))];


  const filteredOrders = userOrders.filter((order) => {
    const matchesQuery = order.equipmentName.toLowerCase().includes(query.toLowerCase());
    const matchesEquipment = equipment === "All Equipment" || order.equipmentName === equipment;
    const matchesStatus = status === "All Status" || order.status === status;

    return matchesQuery && matchesEquipment && matchesStatus;
});



  return (
    <section>
      {userOrders.length === 0 ? (
        <section className="flex flex-col justify-center items-center gap-3 mt-10">
          <Image
            src={"/orders-empty.svg"}
            alt="No Orders Available"
            width={300}
            height={200}
          />
          <Heading
            content="No orders yet"
            marginBottom="0"
            subtitle="Browse equipment and make your first order."
            className="text-center"
          />
          <Button isSecondary content="Browse Equipment" href="/user/tools" />
        </section>
      ) : (
        <section className="space-y-3">
          <Heading content="Your orders" />
           <SearchInput
              placeholder="Search orders"
              value={query}
              onChange={handleSearch}
            />
          <div className="flex gap-3 items-center my-3">
            <Dropdown
            options={equipmentOptions}
            onSelect={setEquipment}
            selected={equipment}
            width="200px"
            />
            {/* <Dropdown
            options={userOrders.map(u => {
                return `${formatShortDate(u.startDate)} - ${formatShortDate(u.endDate)}`
            })}
            onSelect={() => {}}
            selected=""
            width="200px"
            /> */}
            <Dropdown
            options={statusOptions}
            onSelect={setStatus}
            selected={status}
            width="200px"
            />
          </div>
          <div>
            {query && filteredOrders.length === 0 ? (
                <section>
                    <Heading 
                    content={`Can't find "${query}"`} 
                    subtitle="If this is a mistake, contact our Support Center below." 
                    />
                    <Link href={""} className="underline text-sm text-[#9EB8A8]">Support Center</Link>
                </section>
            ) : filteredOrders.map((u) => (
              <div
                key={u.id}
                className="w-full h-[94px] flex justify-between items-center"
              >
                <div className="gap-4 flex items-center">
                  <div className="relative overflow-hidden w-[70px] h-[70px]">
                    <Image
                      src={u.image}
                      alt={u.equipmentName}
                      fill
                      className="rounded-2xl object-fit"
                    />
                  </div>
                  <div>
                    <h2 className="text-base leading-6">{u.equipmentName}</h2>
                    <p className="text-sm leading-5 text-[#9EB8A8]">
                      Total: ₦ {u.totalPrice}
                    </p>
                    <p className="text-sm leading-5 text-[#9EB8A8]">
                      Rental Date: {formatShortDate(u.startDate)} - {formatShortDate(u.endDate)}
                    </p>
                  </div>
                </div>
                <Link href={""}>
                  <Tag text="View Details" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
