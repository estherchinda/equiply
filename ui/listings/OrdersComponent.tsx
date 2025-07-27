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

  const equipmentOptions = [
    "All Equipment",
    ...Array.from(new Set(userOrders.map((u) => u.equipmentName))),
  ];
  const statusOptions = [
    "All Status",
    ...Array.from(new Set(userOrders.map((u) => u.status))),
  ];

  const filteredOrders = userOrders.filter((order) => {
    const matchesQuery = order.equipmentName
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesEquipment =
      equipment === "All Equipment" || order.equipmentName === equipment;
    const matchesStatus = status === "All Status" || order.status === status;

    return matchesQuery && matchesEquipment && matchesStatus;
  });

  const head = [
    "Item",
    "Name",
    "Rented By",
    "Duration",
    "Status",
    "Location",
    "Actions",
  ];

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
                <Link href={""} className="underline text-sm text-[#9EB8A8]">
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
                          {order.equipmentName}
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          {order.renterName}
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          {formatShortDate(order.startDate)} - {formatShortDate(order.endDate)}
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          <Tag text={order.status} />
                        </td>
                        <td className="py-6 px-6 text-[#A8BFA8] leading-relaxed">
                          {order.location}
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
