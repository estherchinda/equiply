"use client";

import { useState } from "react";
import Calendar from "./Calendar";
import { format } from "date-fns";
import { FaArrowRightLong } from "react-icons/fa6";

type DateRange = {
  from?: Date;
  to?: Date;
};

export default function DateRangePicker() {
  const [range, setRange] = useState<DateRange>({});
  const [showCalendar, setShowCalendar] = useState(false);
  const [month, setMonth] = useState(new Date()); // current visible month

  const formatRange = (range: DateRange) => {
    if (!range.from) return "";
    if (!range.to) return format(range.from, "dd MMM yyyy");
    return `${format(range.from, "dd MMM")} - ${format(range.to, "dd MMM yyyy")}`;
  };

  return (
    <div className="relative w-full max-w-sm my-6">
      <input
        type="text"
        readOnly
        onClick={() => setShowCalendar((prev) => !prev)}
        value={formatRange(range)}
        placeholder="Select date range"
        className="w-full p-3 bg-transparent text-white border border-[#264533] rounded-md shadow-sm outline-none focus:ring-2 focus:ring-[#264533]"
      />

      {showCalendar && (
        <div className="absolute z-10 mt-2 bg-[#264533] border border-[#264533] rounded-xl shadow-lg p-4">
          <div
            className="flex justify-end w-full cursor-pointer text-white mb-2"
            onClick={() =>
              setMonth(
                new Date(month.getFullYear(), month.getMonth() + 1)
              )
            }
          >
            <FaArrowRightLong />
          </div>

          <Calendar
            selectedRange={range}
            onSelect={(newRange) => {
              setRange(newRange);
              if (newRange.from && newRange.to) {
                setShowCalendar(false);
              }
            }}
            month={month}
            setMonth={setMonth}
          />

          <p className="text-[10px] mt-2 text-white">
            You can pick a date 3 days ahead your current day. This allows us prepare the logistics for your equipment.
          </p>
        </div>
      )}
    </div>
  );
}
