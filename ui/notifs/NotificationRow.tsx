"use client";

import { useState } from "react";
import {
  RiTruckLine,
  RiStarSmileLine,
  RiEBikeLine,
  RiVerifiedBadgeLine,
  RiTimeLine,
  // RiMore2Fill,
} from "react-icons/ri";
import { IconType } from "react-icons";
import type {
  NotificationStatus,
  NotificationType,
} from "@/types/notifications";
import Modal from "../display/Modal";

type RowProps = {
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
        className={`w-full h-[72px] flex items-center justify-start gap-2 hover:cursor-pointer`}
      >
        <div
          className="bg-[#1a352a] h-6 w-6 md:h-8 md:w-8 rounded-lg flex justify-center items-center text-white text-lg md:text-lg relative"
        >
          <Icon />
          {status === "unread" && (
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 absolute -top-0.5 -right-0.5"></span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium leading-6 truncate ">{message}</h3>
          <p
            className="text-[10px] md:text-xs font-normal text-[#94C7A8] leading-5"
          >
            {time}
          </p>
        </div>
        {/* <button
          onClick={(e) => e.stopPropagation()}
          className="hidden md:flex text-xl group h-7 w-7 justify-center items-center rounded-lg hover:bg-[#264533]"
        >
          <RiMore2Fill className="group-hover:cursor-pointer" />
        </button> */}
      </div>

      {isModalOpen && (
        <Modal onClose={handleModalClose} isOpen={isModalOpen}>
          <h2 className="text-xl font-semibold mb-2 capitalize">
                {type === 'follower' ? 'New Follower' : type}
              </h2>
              <p className="text-sm">{message}</p>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-[#94C7A8] text-[#122117] hover:bg-[#79b691] hover:cursor-pointer"
                >
                  Okay
                </button>
              </div>
        </Modal>
      )}
    </>
  );
}
