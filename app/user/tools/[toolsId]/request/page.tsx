"use client";

import Heading from "@/ui/display/HeadingComponent";
import Button from "@/ui/forms/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useDateRange from "@/utils/request";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import AgentModal from "./AgentModal";

type DateRange = {
  from?: Date;
  to?: Date;
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

const isBefore = (date1: Date, date2: Date) => {
  return date1.getTime() < date2.getTime();
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
    return selectedRange.to ? isSameDay(date, selectedRange.to) && selectedRange.from && !isSameDay(selectedRange.from, selectedRange.to) : false;
  };

  // Create array of days for the month
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, monthIndex, i));
  }

  // Create empty cells for days before month starts
  const emptyDays = Array(firstDayOfWeek).fill(null);

  return (
    <div className="flex-1">
      {/* Month Header */}
      <div className="text-center mb-4">
        <h3 className="text-white font-medium text-sm">
          {formatMonthYear(month)}
        </h3>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={`${day}-${index}`} className="text-center text-xs font-medium text-white py-2 w-8">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="h-8 w-8"></div>
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
                h-8 w-8 text-sm rounded-full transition-all duration-200 relative flex items-center justify-center font-medium
                ${isDisabled 
                  ? 'text-gray-700 cursor-not-allowed' 
                  : ''
                }
                ${isSelected 
                  ? 'bg-[#0d2b1f] border cursor-pointer text-white font-bold' 
                  : ''
                }
                ${inRange && !isSelected 
                  ? 'bg-[#244135] border cursor-pointer text-white' 
                  : ''
                }
                ${!isDisabled && !isSelected && !inRange 
                  ? 'text-gray-300 hover:text-white hover:bg-[#1a352a] cursor-pointer' 
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


// Next.js page component - no custom props needed
export default function RequestPage() {
  // Handle date changes internally or use state management
  const handleDateChange = (range: DateRange) => {
    console.log('Date range changed:', range);
    // Handle the date change logic here
  };

  const handleContinue = (range: DateRange) => {
    console.log('Continue with range:', range);
    // Handle continue logic here (navigation, state updates, etc.)
  };

  const {
    selectedRange,
    currentMonth,
    handleDateSelect,
    nextMonth,
    prevMonth,
    // handleContinue: hookHandleContinue,
    formatPrice,
    isSelecting,
    tempStartDate,
  } = useDateRange(handleDateChange, handleContinue);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgentList, setIsAgentList] = useState(false);

  return (
    <div className="min-h-screen text-white p-6">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium leading-6 space-x-2">
             <span className="text-[#94C7A8]">Equipment</span>
             <span className="text-[#94C7A8]">/</span>
             <span>Choose Dates</span>
         </p>
          <h1 className="text-2xl font-bold mb-2">Choose Dates</h1>
          <p className="text-gray-400 text-sm">
            Select the date(s) you would like to rent the equipment for.
          </p>
        </div>

        {/* Date Input Display */}
        <div className="mb-6">
          <div className="bg-transparent border border-gray-600 rounded-lg p-3 text-gray-400">
            {selectedRange.from && selectedRange.to 
              ? `${selectedRange.from.toLocaleDateString()} - ${selectedRange.to.toLocaleDateString()}`
              : "Select date or a date range"
            }
          </div>
        </div>

        <div className="flex justify-between items-center w-full gap-6">
          <div>
            {/* Navigation */}
            <div className="flex justify-between items-center mb-6 w-[400px]">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-[#1a352a] cursor-pointer rounded text-white"
              >
                <FaArrowLeftLong/>
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-[#1a352a] cursor-pointer rounded text-white"
              >
                <FaArrowRightLong/>
              </button>
            </div>

            {/* Dual Calendar */}
            <div className="flex gap-8 mb-8 w-[400px]">
              <CalendarMonth
                month={currentMonth}
                selectedRange={selectedRange}
                onDateSelect={handleDateSelect}
                isSelecting={isSelecting}
                tempStart={tempStartDate ?? undefined}
              />
            </div>
          </div>
          <div className="w-full relative">
            {/* Availability Section */}
            <div className="mb-6">
              <Heading content="Availability" marginBottom="5" />
              <p className="text-gray-400 text-sm">
                This equipment is available on the selected dates.
              </p>
            </div>

            {/* Price Section */}
            <div className="mb-8">
              <Heading content="Price" marginBottom="5" />
              <p className="text-gray-400 text-sm">
                {formatPrice()}
              </p>
            </div>
            <div className="absolute bottom-8 right-0">
              <label htmlFor="agent" className="text-base space-x-2 flex items-center">
                <input 
                type="checkbox" 
                name="agent" 
                id="agent" 
                className="h-[18px] w-[18px] rounded-2xl accent-[#587262] border-white border"
                onClick={() => setIsAgentList(true)}
                />
                <span>I do not have experience operating this tool.</span>
              </label>
            </div>
          </div>
        </div>

            <div className="justify-end flex w-full gap-5">
              <div className="w-[200px]">
                <Button
                  isSecondary
                  content="Back"
                  onClick={() => window.history.back()}
                />
              </div>
            <div className="w-[200px]">
              {/* Continue Button */}
              <Button
                content="Continue"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            </div>
        {/* Confirmation Modal */}
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          // onConfirm={() => {
          //   hookHandleContinue();
          //   setIsModalOpen(false);
          // }}
        />

        {isAgentList && (
          <AgentModal
          isOpen={isAgentList}
          onClose={() => setIsAgentList(false)}
          />
        )}
      </div>
    );
}