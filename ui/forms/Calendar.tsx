"use client";

import DayPicker from "react-day-picker";
import "react-day-picker/dist/style.css";

type DateRange = {
  from?: Date;
  to?: Date;
};

type Props = {
  selectedRange: DateRange;
  onSelect: (range: DateRange) => void;
  month: Date;
  setMonth: (month: Date) => void;
};

export default function Calendar({
  selectedRange,
  onSelect,
  month,
  setMonth,
}: Props) {
  const numberOfMonths =
    selectedRange.from &&
    selectedRange.to &&
    selectedRange.from.getMonth() !== selectedRange.to.getMonth()
      ? 2
      : 1;

  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={(range: DateRange | undefined) => onSelect(range ?? {})}
      numberOfMonths={numberOfMonths}
      month={month}
      onMonthChange={setMonth}
      pagedNavigation
      classNames={{
        selected: "bg-green-500 text-white",
        range_middle: "bg-green-700 text-white",
        caption_label: "text-white",
      }}
      styles={{
        caption: { color: "white" },
      }}
    />
  );
}
