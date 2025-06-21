"use client";

import EmailInput from "@/ui/forms/EmailInput";
import PasswordInput from "@/ui/forms/PasswordInput";
import Button from "@/ui/forms/Button";
import Link from "next/link";

import { useState, ChangeEvent } from "react";

export default function LoginPage() {
  const [userData, setUserData] = useState({
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
  return (
    <section className="flex flex-col items-center justify-center min-h-full py-10 px-5 bg-[#122117] text-white space-y-5">
      <h1 className="font-bold text-[28px] text-center">Welcome back</h1>
      <div className="w-full md:w-[500px] space-y-8">
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
        <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center mb-8">
          <Link
            href={"/login/forgot-password"}
            className="text-[#94C7A8] text-sm leading-5 font-normal inline-block nav-link"
          >
            Forgot password?
          </Link>
          <p className="text-[#94C7A8] text-sm leading-5 font-normal">
            Don&apos;t have an account?{" "}
            <Link
              href={"/sign-up"}
              className="inline-block ml-1 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="w-full">
          <Button content="Login" href="/user/tools" />
        </div>
      </div>
    </section>
  );
}
