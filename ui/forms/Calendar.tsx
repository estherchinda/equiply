"use client";

import { useState } from "react";

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

// Utility functions
const formatMonthYear = (date: Date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
};

const isSameMonth = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth();
};

const isAfter = (date1: Date, date2: Date) => {
  return date1.getTime() > date2.getTime();
};

const isBefore = (date1: Date, date2: Date) => {
  return date1.getTime() < date2.getTime();
};

const addMonths = (date: Date, months: number) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

const startOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const CalendarMonth = ({ 
  month, 
  selectedRange, 
  onDateSelect, 
  isSelecting,
  tempStart 
}: { 
  month: Date;
  selectedRange: DateRange;
  onDateSelect: (date: Date) => void;
  isSelecting: boolean;
  tempStart?: Date;
}) => {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = getDaysInMonth(year, monthIndex);
  const firstDayOfWeek = getFirstDayOfMonth(year, monthIndex);
  const today = startOfDay(new Date());

  const isInRange = (date: Date) => {
    if (isSelecting && tempStart) {
      const start = startOfDay(tempStart);
      const current = startOfDay(date);
      return current.getTime() >= start.getTime();
    }
    if (!selectedRange.from || !selectedRange.to) return false;
    const start = startOfDay(selectedRange.from);
    const end = startOfDay(selectedRange.to);
    const current = startOfDay(date);
    return current.getTime() >= start.getTime() && current.getTime() <= end.getTime();
  };

  const isRangeStart = (date: Date) => {
    if (isSelecting && tempStart) return isSameDay(date, tempStart);
    return selectedRange.from ? isSameDay(date, selectedRange.from) : false;
  };

  const isRangeEnd = (date: Date) => {
    if (isSelecting && tempStart) return false;
    return selectedRange.to ? isSameDay(date, selectedRange.to) && !isSameDay(selectedRange.from!, selectedRange.to) : false;
  };

  // Create array of days for the month
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, monthIndex, i));
  }

  // Create empty cells for days before month starts
  const emptyDays = Array(firstDayOfWeek).fill(null);

  return (
    <div className="bg-white border rounded-md p-2 w-[240px]">
      {/* Month Header */}
      <div className="text-center mb-2">
        <h3 className="text-sm font-semibold text-green-700">
          {formatMonthYear(month)}
        </h3>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5">
        {/* Empty cells for days before month starts */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-6"></div>
        ))}
        
        {/* Calendar days */}
        {days.map(day => {
          const isPastDate = isBefore(day, today);
          const isSelected = isRangeStart(day) || isRangeEnd(day);
          const inRange = isInRange(day);
          const isDisabled = isPastDate;

          return (
            <button
              key={day.toISOString()}
              onClick={() => !isDisabled && onDateSelect(day)}
              disabled={isDisabled}
              className={`
                h-6 w-6 text-xs rounded transition-all duration-200 relative
                ${isDisabled 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'hover:bg-green-100 cursor-pointer'
                }
                ${isSelected 
                  ? 'bg-green-500 text-white font-semibold' 
                  : ''
                }
                ${inRange && !isSelected 
                  ? 'bg-green-700 text-white' 
                  : ''
                }
                ${!isDisabled && !isSelected && !inRange 
                  ? 'text-gray-700 hover:text-green-700' 
                  : ''
                }
              `}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function Calendar({
  selectedRange,
  onSelect,
  month,
  setMonth,
}: Props) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    if (!isSelecting) {
      // Start new selection
      setTempStartDate(date);
      setIsSelecting(true);
      onSelect({ from: date, to: undefined });
    } else {
      // Complete selection
      const startDate = tempStartDate!;
      const endDate = isAfter(date, startDate) ? date : startDate;
      const finalStartDate = isAfter(date, startDate) ? startDate : date;
      
      onSelect({ from: finalStartDate, to: endDate });
      setIsSelecting(false);
      setTempStartDate(null);
    }
  };

  const nextMonth = () => {
    setMonth(addMonths(month, 1));
  };

  const prevMonth = () => {
    setMonth(addMonths(month, -1));
  };

  // Determine if we need two calendars
  const needsTwoCalendars = () => {
    if (isSelecting && tempStartDate) {
      return !isSameMonth(tempStartDate, month);
    }
    return selectedRange.from && selectedRange.to && !isSameMonth(selectedRange.from, selectedRange.to);
  };

  const getSecondMonth = () => {
    return addMonths(month, 1);
  };

  const numberOfMonths = needsTwoCalendars() ? 2 : 1;

  return (
    <div className="bg-white border rounded-md p-3">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={prevMonth}
          className="p-1 hover:bg-gray-100 rounded text-green-700 font-bold"
        >
          ←
        </button>
        <div className="text-green-700 font-semibold text-sm">
          {formatMonthYear(month)}
          {numberOfMonths === 2 && ` - ${formatMonthYear(getSecondMonth())}`}
        </div>
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-gray-100 rounded text-green-700 font-bold"
        >
          →
        </button>
      </div>

      {/* Calendar(s) Container */}
      <div className="flex gap-3 items-start justify-center">
        <CalendarMonth
          month={month}
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          isSelecting={isSelecting}
          tempStart={tempStartDate ?? undefined}
        />
        
        {numberOfMonths === 2 && (
          <CalendarMonth
            month={getSecondMonth()}
            selectedRange={selectedRange}
            onDateSelect={handleDateSelect}
            isSelecting={isSelecting}
            tempStart={tempStartDate ?? undefined}
          />
        )}
      </div>

      {/* Instructions */}
      <div className="mt-3 text-xs text-gray-500 text-center">
        {isSelecting 
          ? "Click on an end date to complete your selection" 
          : "Click on a date to start selecting a range"
        }
      </div>
    </div>
  );
}