export type NotificationType =
  | "rental"
  | "reviews"
  | "delivery"
  | "follower"
  | "reminder";

export type NotificationStatus = "read" | "unread";

export type Notification = {
  id: string;
  message: string;
  time: string;
  type: string;
  date: string;
  status: "read" | "unread";
  markAsRead: () => void;
};

export const notifications = [
  {
    id: "1",
    message: "Don't forget to return the power generator today.",
    time: "08:00 AM",
    type: "reminder",
    status: "unread",
    date: "2025-06-23",
  },
  {
    id: "2",
    message:
      "Your rental request for the wheelbarrow has been approved by Ada.",
    time: "09:45 AM",
    type: "rental",
    status: "unread",
    date: "2025-06-15",
  },
  {
    id: "3",
    message: "Someone just followed your profile.",
    time: "01:20 PM",
    type: "follower",
    status: "unread",
    date: "2025-06-16",
  },
  {
    id: "4",
    message:
      "Your item 'Plough Machine' has been delivered to the drop-off location.",
    time: "03:10 PM",
    type: "delivery",
    status: "unread",
    date: "2025-06-14",
  },
  {
    id: "5",
    message:
      "James left a review on your listing: 'Excellent equipment, smooth rental experience.'",
    time: "05:55 PM",
    type: "reviews",
    status: "unread",
    date: "2025-06-13",
  },
  {
    id: "6",
    message: "Reminder: You scheduled maintenance for the rototiller tomorrow.",
    time: "11:30 AM",
    type: "reminder",
    status: "unread",
    date: "2025-06-16",
  },
  {
    id: "7",
    message: "The sprayer you requested is currently unavailable.",
    time: "07:00 AM",
    type: "rental",
    status: "unread",
    date: "2025-06-16",
  },
  {
    id: "8",
    message: "Amaka just followed you. Say hello!",
    time: "12:10 PM",
    type: "follower",
    status: "unread",
    date: "2025-06-15",
  },
  {
    id: "9",
    message: "Your delivery for the water pump has been delayed.",
    time: "04:45 PM",
    type: "delivery",
    status: "unread",
    date: "2025-06-14",
  },
  {
    id: "10",
    message: "New review received: 'Highly recommend. Very reliable.'",
    time: "02:30 PM",
    type: "reviews",
    status: "unread",
    date: "2025-06-15",
  },
  {
    id: "11",
    message: "You have a pending return for the soil tiller.",
    time: "06:15 PM",
    type: "reminder",
    status: "unread",
    date: "2025-06-16",
  },
  {
    id: "12",
    message: "Your rental for the seed planter starts tomorrow.",
    time: "08:40 AM",
    type: "rental",
    status: "unread",
    date: "2025-06-15",
  },
  {
    id: "13",
    message: "Blessing started following your tool listings.",
    time: "10:05 AM",
    type: "follower",
    status: "unread",
    date: "2025-06-16",
  },
  {
    id: "14",
    message: "You received a delivery update: 'Out for delivery - Cultivator'",
    time: "01:50 PM",
    type: "delivery",
    status: "unread",
    date: "2025-06-15",
  },
  {
    id: "15",
    message: "You have a new review waiting for your response.",
    time: "09:20 PM",
    type: "reviews",
    status: "unread",
    date: "2025-06-13",
  },
];
