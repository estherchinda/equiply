"use client";

import Heading from "@/ui/display/HeadingComponent";
import Button from "@/ui/forms/Button";

export default function RequestPage() {
    return (
        <section>
            <p className="text-sm font-medium leading-6 space-x-2">
                <span className="text-[#94C7A8]">Equipment</span>
                <span className="text-[#94C7A8]">/</span>
                <span>Choose Dates</span>
            </p>
            <div className="mt-4 space-y-3">
                <Heading content="Choose Dates" />
                <p className="text-sm leading-5 text-[#9EB8A8]">Select the dates you&apos;d like to rent the equipment for.</p>
                {/* <DateRangePicker /> */}
                <Heading content="Availability" />
                <p className="text-sm leading-5 text-white">Please select a date range to see the availability.</p>
                <Heading content="Price" />
                <p className="text-sm leading-5 text-white">Please select a date range to see the price.</p>
                <div className="mt-4 w-[80%]">
                    <Button content="Continue" />
                </div>
            </div>
        </section>
    )
}