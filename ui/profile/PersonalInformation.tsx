"use client";

import { useState } from "react";
import Heading from "../display/HeadingComponent";
import Input from "../forms/Input";
import Button from "../forms/Button";

export default function PersonalInformation() {
    const [userData, setUserData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",

    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="space-y-8 my-10">
            <Heading content="Personal Information" subtitle="Manage your personal information." />
            <form action="">
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="First Name"
                        value={userData.firstName}
                        placeholder="Chinedu Emeka"
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Email Address"
                        value={userData.email}
                        placeholder="chineduemeks@gmail.com"
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Phone Number"
                        value={userData.phoneNumber}
                        placeholder="090 1679 6890"
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Address"
                        value={userData.address}
                        placeholder="No 1. Elechi Street, Port Harcourt"
                        onChange={handleInputChange}
                    />
                    <Input
                        label="City"
                        value={userData.city}
                        placeholder="Port Harcourt"
                        onChange={handleInputChange}
                    />
                    <Input
                        label="State"
                        value={userData.state}
                        placeholder="Rivers State"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-end w-full mt-5">
                    <div className="w-[220px]">
                        <Button content="Update Profile" />
                    </div>
                </div>
            </form>
        </div>
    )
}