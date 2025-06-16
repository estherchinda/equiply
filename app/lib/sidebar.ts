import {
  RiToolsLine,
  RiToolsFill,
  RiCalendar2Line,
  RiCalendarFill,
  RiListIndefinite,
  RiListCheck3,
  RiMessage3Line,
  RiMessage3Fill,
  RiNotification2Line,
  RiNotification2Fill,
  RiUser6Line,
  RiUser6Fill,
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
      name: "Profile",
      href: "/user/profile",
      icon: RiUser6Line,
      iconActive: RiUser6Fill,
      hasUnread: false,
    },
    {
      name: "Rentals",
      href: "/user/rentals",
      icon: RiCalendar2Line,
      iconActive: RiCalendarFill,
      hasUnread: false,
    },
    {
      name: "Listings",
      href: "/user/listings",
      icon: RiListIndefinite,
      iconActive: RiListCheck3,
      hasUnread: false,
    },
    {
      name: "Messages",
      href: "/user/messages",
      icon: RiMessage3Line,
      iconActive: RiMessage3Fill,
      hasUnread: false,
    },
    {
      name: "Notifications",
      href: "/user/notifications",
      icon: RiNotification2Line,
      iconActive: RiNotification2Fill,
      hasUnread: true,
    },
  ];