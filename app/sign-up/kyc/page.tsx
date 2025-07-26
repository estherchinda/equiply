"use client";


import Input from "@/ui/forms/Input";
import Button from "@/ui/forms/Button";
import Link from "next/link";

import { useState, ChangeEvent } from "react";
import { FaCaretLeft } from "react-icons/fa";

export default function SignUpKYCPage() {
  const [userData, setUserData] = useState({
    nin: "",
    state: "",
    lga: "",
    dob: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10 px-5 bg-[#122117] text-white space-y-5">
      <h1 className="font-bold text-[28px] text-center">Continue Registration</h1>
      <div className="w-full md:w-[500px] space-y-6">
        <Input
          value={userData.nin}
          onChange={handleInputChange}
          placeholder="Enter your NIN"
          label="National Identification Number"
        />
        <Input
        value={userData.state}
        onChange={handleInputChange}
        placeholder="Enter your State"
        label="State"
        />
        <Input
        value={userData.lga}
        onChange={handleInputChange}
        placeholder="Enter your LGA"
        label="Local Government Area"
        />
        <Input
        value={userData.dob}
        onChange={handleInputChange}
        placeholder="Day / Month / Year"
        label="Date of Birth"
        />
        <div className="w-full">
          <Button content="Proceed" href="/user/tools" />
        </div>
        <p className="text-[#94C7A8] text-sm leading-5 font-normal text-center">
          <Link href={"/sign-up"} className="ml-1 hover:underline flex justify-center items-center gap-1">
            <FaCaretLeft/>
            Back
          </Link>
        </p>
      </div>
    </section>
  );
}
