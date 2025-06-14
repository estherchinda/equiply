"use client";

import { useEffect, useRef, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

type DropdownProps = {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
};

export default function Dropdown({ options, selected, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      <button
        className="h-8 px-3 py-1.5 bg-[#264533] rounded-2xl text-white text-sm flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{selected}</span>
        <RiArrowDownWideFill className="text-[20px]" />
      </button>

      {isOpen && options.length > 0 && (
        <div className="absolute bg-[#264533] rounded-lg shadow-lg mt-2 w-48 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer ${
                selected === option ? "text-[#122117] bg-[#A6F2C4]" : "text-white hover:bg-[#1a352a]"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
