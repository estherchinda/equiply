"use client";
import { useState, useEffect } from "react";
import { notifications } from "@/types/notifications";
import NotificationRow from "@/ui/notifs/NotificationRow";
import Heading from "@/ui/display/HeadingComponent";
import type {
  NotificationStatus,
  NotificationType,
} from "@/types/notifications";

// Simple localStorage utilities
const getReadNotifications = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();
  
  try {
    const stored = localStorage.getItem('readNotifications');
    if (stored) {
      const ids = JSON.parse(stored) as string[];
      return new Set(ids);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return new Set();
};

const saveReadNotifications = (readIds: Set<string>) => {
  if (typeof window === 'undefined') return;
  
  try {
    const idsArray = Array.from(readIds);
    localStorage.setItem('readNotifications', JSON.stringify(idsArray));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export default function NotificationsPageComponent() {
  const [notifs, setNotifs] = useState(notifications);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());

  // Load read notifications from localStorage on mount
  useEffect(() => {
    const storedReadIds = getReadNotifications();
    setReadIds(storedReadIds);
    
    // Update notifications with read status from localStorage
    setNotifs(prev => 
      prev.map(n => ({
        ...n,
        status: storedReadIds.has(n.id) ? "read" : n.status
      }))
    );
  }, []);

  const markAsRead = (id: string) => {
    // Update local state
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: "read" } : n))
    );
    
    // Update localStorage
    const newReadIds = new Set(readIds);
    newReadIds.add(id);
    setReadIds(newReadIds);
    saveReadNotifications(newReadIds);
  };

  // Get date strings in ISO format (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayISO = yesterday.toISOString().split("T")[0];

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekAgoISO = weekAgo.toISOString().split("T")[0];

  // Filter notifications
  const todayNotifs = notifs.filter((n) => n.date === today);

  const yesterdayNotifs = notifs.filter((n) => n.date === yesterdayISO);

  const lastWeekNotifs = notifs.filter((n) => {
    return n.date >= weekAgoISO && n.date < yesterdayISO;
  });

  return todayNotifs.length === 0 &&
    yesterdayNotifs.length === 0 &&
    lastWeekNotifs.length === 0 ? (
    <section className="h-screen flex justify-center items-center">
      No notifications yet
    </section>
  ) : (
    <section>
      <h1 className="text-[32px] font-bold leading-10">Notifications</h1>

      {/* Today */}
      {todayNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Today" />
          {todayNotifs.map((notif) => (
            <NotificationRow
              key={notif.id}
              id={notif.id}
              message={notif.message}
              time={notif.time}
              status={notif.status as NotificationStatus}
              type={notif.type as NotificationType}
              markAsRead={() => markAsRead(notif.id)}
            />
          ))}
        </div>
      )}

      {/* Yesterday */}
      {yesterdayNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Yesterday" />
          {yesterdayNotifs.map((notif) => (
            <NotificationRow
              key={notif.id}
              id={notif.id}
              message={notif.message}
              time={notif.time}
              status={notif.status as NotificationStatus}
              type={notif.type as NotificationType}
              markAsRead={() => markAsRead(notif.id)}
            />
          ))}
        </div>
      )}

      {/* Last Week */}
      {lastWeekNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Last Week" />
          {lastWeekNotifs.map((notif) => (
            <NotificationRow
              key={notif.id}
              id={notif.id}
              message={notif.message}
              time={notif.time}
              status={notif.status as NotificationStatus}
              type={notif.type as NotificationType}
              markAsRead={() => markAsRead(notif.id)}
            />
          ))}
        </div>
      )}

      {/* olderNotifications */}
      {notifs.length > 0 && notifs.length > todayNotifs.length + yesterdayNotifs.length + lastWeekNotifs.length && (
        <div className="my-10">
          <Heading content="Older Notifications" />
          {notifs
            .filter((n) => n.date < weekAgoISO)
            .map((notif) => (
              <NotificationRow
                key={notif.id}
                id={notif.id}
                message={notif.message}
                time={notif.time}
                status={notif.status as NotificationStatus}
                type={notif.type as NotificationType}
                markAsRead={() => markAsRead(notif.id)}
              />
            ))}
        </div>
      )}
    </section>
  );
}