'use client';

import EmailInput from "@/components/ui/forms/EmailInput"
import Button from "@/components/ui/Button";
import Link from "next/link";

import { useState, ChangeEvent } from "react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-[70vh] py-10 px-5 bg-[#122117] text-white space-y-5">
            <h1 className="font-bold text-[28px] text-center">Forgot password</h1>
            <p className="text-center">Enter the email address associated with your account, and <br className="hidden md:block" /> we&apos;ll email you a link to reset your password.</p>
            <div className="w-full md:w-[500px] space-y-8">
                <EmailInput value={email} onChange={handleEmailChange} label="Email address" placeholder="youremail@example.com" />
                <div className="flex justify-center">
                    <Button content="Send reset link" href="/login/reset-password" />
                </div>
            </div>
            <Link href={"/login"} className="inline-block nav-link text-sm text-[#94C7A8] leading-5 font-normal">Back to login</Link>
        </section>
    )
}