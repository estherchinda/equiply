"use client";

import { userListings } from "@/lib/equipments";
import { useState } from "react";
import Heading from "../display/HeadingComponent";
import SearchInput from "../forms/SearchInput";
import Dropdown from "../forms/Dropdown";
import Button from "../forms/Button";
import Image from "next/image";
import Link from "next/link";
import Tag from "../display/Tag";

export default function ListingsComponent() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const [equipmentType, setEquipmentType] = useState("All Equipment Types");
  const [availability, setAvailibility] = useState("All Available");

  const equipmentOptions = [
    "All Equipment Types",
    ...Array.from(new Set(userListings.map((u) => u.name))),
  ];
  const availbilityOptions = [
    "All Available",
    ...Array.from(new Set(userListings.map((u) => u.availability))),
  ];

  const filteredOrders = userListings.filter((order) => {
    const matchesQuery = order.name.toLowerCase().includes(query.toLowerCase());
    const matchesEquipmentType =
      equipmentType === "All Equipment Types" || order.name === equipmentType;
    const matchesAvailability =
      availability === "All Available" || order.availability === availability;

    return matchesQuery && matchesEquipmentType && matchesAvailability;
  });

  const head = [
    "Item",
    "Name",
    "Description",
    "Rental Rate",
    "Availability",
    "Actions",
  ];

  return (
    <section>
      {userListings.length === 0 ? (
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
            subtitle="Start sharing your equipment and earning today."
            className="text-center"
          />
          <Button content="Create Listing" href="/user/tools" />
        </section>
      ) : (
        <section className="space-y-3">
          <Heading content="Your listings" />
          <SearchInput
            placeholder="Search list"
            value={query}
            onChange={handleSearch}
          />
          <div className="flex gap-3 items-center my-3">
            <Dropdown
              options={equipmentOptions}
              onSelect={setEquipmentType}
              selected={equipmentType}
              width="200px"
            />
            <Dropdown
              options={availbilityOptions}
              onSelect={setAvailibility}
              selected={availability}
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
                <Link href="" className="underline text-sm text-[#9EB8A8]">
                  Support Center
                </Link>
              </section>
            ) : (
              <div className="w-full border border-[#366347] rounded-[12px] bg-[#122117] overflow-x-auto my-5">
                <table className="w-full">
                  <thead className="bg-[#1C3324]">
                    <tr className="border-b border-[#4A5D4A]">
                      {head.map((title, idx) => (
                        <th
                          key={idx}
                          className="text-left py-4 px-6 text-white font-medium whitespace-nowrap text-sm"
                        >
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, idx) => (
                      <tr
                        key={order.id || idx}
                        className="border-b border-[#4A5D4A] text-sm"
                      >
                        <td className="py-6 px-6">
                          <div className="h-14 w-14 rounded-full relative overflow-hidden">
                            <Image
                            src={order.image}
                            alt="Image of tool"
                            fill
                            className="object-cover"
                            />
                          </div>
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          {order.name}
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          {order.description}
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          ₦ {order.pricePerDay}/day
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          <Tag text={order.availability} />
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed capitalize">
                          Edit
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}
    </section>
  );
}
