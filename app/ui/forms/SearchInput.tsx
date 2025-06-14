"use client";

import { RiSearchLine } from "react-icons/ri";

type SearchInputProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
};

export default function SearchInput({
    value, 
    onChange, 
    placeholder = "Search"
}: SearchInputProps) {
    return (
        <div className="bg-[#264533] h-10 w-full rounded-xl flex items-center px-3 py-0.5 gap-4 text-[#A6F2C4]">
            <RiSearchLine className="text-[21px]" />
            <input 
            value={value} 
            onChange={onChange} 
            type="text" 
            placeholder={placeholder} 
            className="outline-none placeholder:text-[#A6F2C4]" 
            />
        </div>
    );
}
