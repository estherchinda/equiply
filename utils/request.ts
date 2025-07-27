import { useState } from "react";
import { isAfter, addMonths } from "date-fns";

type DateRange = {
  from?: Date;
  to?: Date;
};

export const calculateDays = (from: Date, to: Date) => {
  return Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
};

export const formatPrice = (from?: Date, to?: Date, rate = 500) => {
  if (!from || !to) return `NGN${rate} / day`;
  const days = calculateDays(from, to);
  return `NGN${rate * days} / ${days} day${days > 1 ? 's' : ''}`;
};

export const getSecondMonth = (current: Date) => addMonths(current, 1);

export default function useDateRange(onChange?: (range: DateRange) => void, onContinue?: (range: DateRange) => void) {
  const [selectedRange, setSelectedRange] = useState<DateRange>({});
  const [isSelecting, setIsSelecting] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // 👉 Handles selecting the start and end of range
  const handleDateSelect = (date: Date) => {
    if (!isSelecting) {
      // Start selection
      setTempStartDate(date);
      setIsSelecting(true);
      const newRange = { from: date, to: undefined };
      setSelectedRange(newRange);
      onChange?.(newRange);
    } else {
      // Complete selection
      const startDate = tempStartDate!;
      const endDate = isAfter(date, startDate) ? date : startDate;
      const finalStartDate = isAfter(date, startDate) ? startDate : date;

      const finalRange = { from: finalStartDate, to: endDate };
      setSelectedRange(finalRange);
      setIsSelecting(false);
      setTempStartDate(null);
      onChange?.(finalRange);
    }
  };

  // 👉 Month navigation
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const getSecondMonth = () => addMonths(currentMonth, 1);

  // 👉 Final submit
  const handleContinue = () => {
    if (selectedRange.from && selectedRange.to) {
      onContinue?.(selectedRange);
    }
  };

  // 👉 Price calculation
  const formatPrice = () => {
    if (!selectedRange.from || !selectedRange.to) return "NGN 500 / day";
    const days =
      Math.ceil(
        (selectedRange.to.getTime() - selectedRange.from.getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1;
    return `NGN ${500 * days} / ${days} day${days > 1 ? "s" : ""}`;
  };

  return {
    selectedRange,
    currentMonth,
    isSelecting,
    tempStartDate,
    handleDateSelect,
    setSelectedRange,
    nextMonth,
    prevMonth,
    getSecondMonth,
    handleContinue,
    formatPrice,
  };
}
