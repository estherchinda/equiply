"use client";

import { useState } from "react";
import { RiNotificationLine, RiNotificationFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "./HeadingComponent";
import {
  notifications,
  NotificationStatus,
  NotificationType,
} from "@/types/notifications";
import NotificationRow from "../notifs/NotificationRow";

export default function NotificationTab() {
  const [isTabOpen, setIsTabOpen] = useState(false);

  const openTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  const closeTab = () => setIsTabOpen(false);

  const [notifs, setNotifs] = useState(notifications);

  const markAsRead = (id: string) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: "read" } : n))
    );
  };

  return (
    <div className="relative">
      <div
        onClick={openTab}
        className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white text-2xl cursor-pointer bg-[#264533]"
      >
        {isTabOpen ? <RiNotificationFill /> : <RiNotificationLine />}
      </div>
      {isTabOpen && (
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-20"
              onClick={closeTab}
            />
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-16 bg-[#264533] z-30 rounded-[6px] shadow-md h-[400px] w-[300px] p-4 text-white overflow-y-auto thin-scrollbar"
          >
            <Heading content="Notifications" />
            {notifications.length === 0 ? (
              <div className="flex justify-center items-center h-[50vh]">
                <h2>No notifications yet.</h2>
              </div>
            ) : (
              <div className="space-y-2">
                {notifs.map((notif) => (
                  <NotificationRow
                    key={notif.id}
                    message={notif.message}
                    time={notif.time}
                    status={notif.status as NotificationStatus}
                    type={notif.type as NotificationType}
                    markAsRead={() => markAsRead(notif.id)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
