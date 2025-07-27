import {
  RiToolsLine,
  RiToolsFill,
  // RiCalendar2Line,
  // RiCalendarFill,
  RiListIndefinite,
  RiListCheck3,
  RiMessage3Line,
  RiMessage3Fill,
  // RiNotification2Line,
  // RiNotification2Fill,
  RiUser6Line,
  RiUser6Fill,
  // RiTeamLine,
  // RiTeamFill,
} from "react-icons/ri";

export const navigations = [
    {
      name: "Tools",
      href: "/user/tools",
      icon: RiToolsLine,
      iconActive: RiToolsFill,
      hasUnread: false,
    },
    {
      name: "Your Listings",
      href: "/user/listings",
      icon: RiListIndefinite,
      iconActive: RiListCheck3,
      hasUnread: false,
    },
    {
      name: "Profile",
      href: "/user/profile",
      icon: RiUser6Line,
      iconActive: RiUser6Fill,
      hasUnread: false,
    },
    {
      name: "Support",
      href: "/user/messages/chat", // actually "chats"
      icon: RiMessage3Line,
      iconActive: RiMessage3Fill,
      hasUnread: false,
    },
  ];