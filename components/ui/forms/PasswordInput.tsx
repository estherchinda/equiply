"use client";

import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  isLabelShown?: boolean;
}

export default function PasswordInput ({
  value,
  onChange,
  placeholder = "Enter your password",
  label = "Password",
  isLabelShown = true,
}: PasswordInputProps) {

    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-2.5 md:space-y-3">
        {isLabelShown && <label htmlFor="" className="text-sm font-medium leading-6 block">{label}</label>}
        <div className="relative">
            <input
            type={showPassword ? "text" :"password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-[#1C3324] border border-[#366347] rounded-[12px] p-4 h-12 md:h-14 outline-none placeholder:text-[#94C7A8] placeholder:font-light text-white font-normal text-base leading-6 focus:border-[#A6F2C4] focus:ring-1 focus:ring-[#A6F2C4] focus:outline-none transition duration-200"
            autoComplete="password"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-[35%] text-[#A6F2C4] text-lg hover:cursor-pointer">{showPassword ? <GoEye /> : <GoEyeClosed /> }</span>
        </div>
    </div>
  );

}