"use client";

import EmailInput from "@/app/ui/forms/EmailInput";
import PasswordInput from "@/app/ui/forms/PasswordInput";
import Input from "@/app/ui/forms/Input";
import Button from "@/app/ui/forms/Button";
import Link from "next/link";

import { useState, ChangeEvent } from "react";

export default function SignUpPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-full py-10 px-5 bg-[#122117] text-white space-y-5">
      <h1 className="font-bold text-[28px] text-center">Sign up</h1>
      <div className="w-full md:w-[500px] space-y-8">
        <Input
          value={userData.name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          label="Full Name"
        />
        <EmailInput
          value={userData.email}
          onChange={handleEmailChange}
          placeholder="Email address"
          label="Email address"
        />
        <PasswordInput
          value={userData.password}
          onChange={handlePasswordChange}
          placeholder="Password"
          label="Enter password"
        />
        <div className="w-full">
          <Button content="Sign up" href="/user/home" />
        </div>
        <p className="text-[#94C7A8] text-sm leading-5 font-normal text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="inline-block ml-1 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
