"use client";

import PasswordInput from "@/ui/forms/PasswordInput";
import Button from "@/ui/forms/Button";

import { useState, ChangeEvent } from "react";

export default function ResetPasswordPage() {
  const [userData, setUserData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      newPassword: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      confirmPassword: e.target.value,
    }));
  };

  const handleResetPassword = () => {
    console.log("Password reset successfully!");
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-10 px-5 bg-[#122117] text-white space-y-5">
      <h1 className="font-bold text-[28px] text-center">Reset your password</h1>
      <p className="text-center">
        Enter the email address associated with your account, and{" "}
        <br className="hidden md:block" /> we&apos;ll email you a link to reset
        your password.
      </p>
      <div className="w-full md:w-[500px] space-y-8">
        <PasswordInput
          value={userData.newPassword}
          onChange={handleNewPasswordChange}
          placeholder="New password"
          label="New password"
          isLabelShown={false}
        />
        <PasswordInput
          value={userData.confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm new password"
          label="Confirm new password"
          isLabelShown={false}
        />
        <div className="w-full">
          <Button content="Reset password" onClick={handleResetPassword} />
        </div>
      </div>
    </section>
  );
}
