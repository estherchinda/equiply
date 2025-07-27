"use client";

import Modal from "@/ui/display/Modal";
import Heading from "@/ui/display/HeadingComponent";
import Button from "@/ui/forms/Button";
import Image from "next/image";
import { BsCalendar2 } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";


type BookingTabProps = {
    heading: string;
    subheading: string;
    subtitle?: string;
    image?: string;
    icon?: React.ReactNode;
}
const BookingTab = ({heading, subheading, subtitle, image, icon}: BookingTabProps) => {
    return (
        <div>
          <h3 className="font-bold text-lg leading-[23px]">{heading}</h3>
          <div className="w-full flex justify-between items-center bg-[#1C3324] p-2.5 mt-2">
            <div className="gap-4 flex items-center">
                {image ? (
                <div className="relative overflow-hidden w-[40px] h-[40px]">
                    <Image
                      src={image}
                      alt="Equipment Image"
                      fill
                      className="rounded-2xl object-cover"
                    />
                </div>
                ) : (
                <div className="w-[40px] h-[40px] rounded-2xl bg-[#29382E] flex items-center justify-center text-white">
                    {icon}
                </div>
                )}
              <div>
                <h2 className="text-base leading-6">{subheading}</h2>
                <p className="text-sm leading-5 text-[#9EB8A8]">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default function ConfirmModal({
  isOpen,
  onClose,
//   onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
//   onConfirm: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="700px">
      <p className="text-sm font-medium leading-6 space-x-2 text-[#94C7A8] mb-5">
        <span>Equipment</span>
        <span>/</span>
        <span>Drone</span>
        <span>/</span>
        <span className="text-white">Confirm Booking</span>
      </p>
      <Heading content="Confirm Booking" />
      <div className="space-y-4 my-5">
        <BookingTab
        heading="Equipment"
        subheading="Tractor"
        subtitle="Available in 8km"
        image="/tools/drone-2.svg"
        />
        <BookingTab
          heading="Rental Period"
          subheading="2 days"
          subtitle="June 1 - June 3"
          icon={<BsCalendar2 className="w-5 h-5" />}
        />
        <BookingTab
          heading="Price"
          subheading="₦ 10,000"
          icon={<FaNairaSign className="text-xl"/>}
        />
      </div>
      <div>
        <h3 className="font-bold text-lg leading-[23px]">Terms and Conditions</h3>
        <p className="text-sm leading-6">By confirming this booking, you agree to abide by the terms and conditions set forth by Equiply and the equipment owner. Please review these terms carefully before proceeding.</p>
      </div>
        <div className="flex justify-between mt-6 items-center">
            <div className="w-[180px]">
                <button 
                onClick={onClose} 
                className="h-10 py-4 px-6 rounded-full bg-[#29382E] text-white flex justify-center items-center cursor-pointer font-semibold"
                >Cancel</button>
            </div>
            <div className="w-[240px]">
                <Button content="Confirm Booking" href="/user/listings" />
            </div>
        </div>
    </Modal>
  );
}
