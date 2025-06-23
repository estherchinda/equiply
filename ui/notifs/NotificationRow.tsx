"use client";

import { useState } from "react";
import {
  RiTruckLine,
  RiStarSmileLine,
  RiEBikeLine,
  RiVerifiedBadgeLine,
  RiTimeLine,
  RiMore2Fill,
} from "react-icons/ri";
import { IconType } from "react-icons";
import type {
  NotificationStatus,
  NotificationType,
} from "@/types/notifications";
import Modal from "../display/Modal";

type RowProps = {
  id: string;
  message: string;
  time: string;
  type: NotificationType;
  status?: NotificationStatus;
  markAsRead?: () => void;
};

// Map each type to its respective icon
const typeIcons: Record<NotificationType, IconType> = {
  rental: RiTruckLine,
  reviews: RiStarSmileLine,
  delivery: RiEBikeLine,
  follower: RiVerifiedBadgeLine,
  reminder: RiTimeLine,
};

export default function NotificationRow({
  id,
  message,
  time,
  type,
  status = "read",
  markAsRead,
}: RowProps) {
  const Icon = typeIcons[type];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    if (status === "unread" && markAsRead) {
      markAsRead();
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={handleModalOpen}
        className={`w-full h-[72px] flex items-center justify-start md:p-4 gap-4 hover:cursor-pointer my-2 rounded-2xl`}
      >
        <div className="bg-[#264533] h-10 w-10 md:h-12 md:w-12 rounded-lg flex justify-center items-center text-white text-lg md:text-xl relative">
          <Icon />
          {status === "unread" && (
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 absolute -top-0.5 -right-0.5"></span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium leading-6 truncate ">{message}</h3>
          <p className="text-xs md:text-sm font-normal text-[#94C7A8] leading-5">
            {time}
          </p>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="hidden md:flex text-xl group h-7 w-7 justify-center items-center rounded-lg hover:bg-[#264533]"
        >
          <RiMore2Fill className="group-hover:cursor-pointer" />
        </button>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          type={type}
          message={message}
        />
      )}
    </>
  );
}