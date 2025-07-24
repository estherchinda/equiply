"use client";
import { useState } from "react";
import { notifications } from "@/types/notifications";
import NotificationRow from "@/ui/notifs/NotificationRow";
import Heading from "@/ui/display/HeadingComponent";
import EmptyState from "@/ui/display/EmptyState";
import { RiFolder5Line } from "react-icons/ri";
import type {
  NotificationStatus,
  NotificationType,
} from "@/types/notifications";

export default function NotificationsPageComponent() {
  const [notifs, setNotifs] = useState(notifications);

  const markAsRead = (id: string) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: "read" } : n))
    );
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
    <EmptyState text="No notifications yet" icon={<RiFolder5Line/>} />
  ) : (
    <section>
      {/* <h1 className="text-[32px] font-bold leading-10">Notifications</h1> */}

      {/* Today */}
      {todayNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Today" />
          {todayNotifs.map((notif) => (

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

      {/* Yesterday */}
      {yesterdayNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Yesterday" />
          {yesterdayNotifs.map((notif) => (
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

      {/* Last Week */}
      {lastWeekNotifs.length > 0 && (
        <div className="my-10">
          <Heading content="Last Week" />
          {lastWeekNotifs.map((notif) => (
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

      {/* olderNotifications */}
      {notifs.length > 0 && notifs.length > todayNotifs.length + yesterdayNotifs.length + lastWeekNotifs.length && (
        <div className="my-10">
          <Heading content="Older Notifications" />
          {notifs
            .filter((n) => n.date < weekAgoISO)
            .map((notif) => (
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
    </section>
  );
}