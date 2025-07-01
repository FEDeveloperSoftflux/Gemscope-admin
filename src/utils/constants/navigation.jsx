import React from "react";

// Custom icon components from assets
const DashboardIcon = () => (
  <img
    src="/src/assets/icons/dashboard.svg"
    alt="Dashboard"
    className="w-5 h-5"
  />
);

const UserIcon = () => (
  <img
    src="/src/assets/icons/user.svg"
    alt="User Management"
    className="w-5 h-5"
  />
);

const ReportingIcon = () => (
  <img
    src="/src/assets/icons/reporting.svg"
    alt="Reporting"
    className="w-5 h-5"
  />
);

const SettingsIcon = () => (
  <img 
    src="/src/assets/icons/setting.svg" 
    alt="Settings" 
    className="w-5 h-5" 
  />
);

export const navigationItems = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    iconPath: "/src/assets/icons/dashboard.svg",
    path: "/",
    active: true,
  },
  {
    id: "user-management",
    name: "User Management",
    icon: UserIcon,
    iconPath: "/src/assets/icons/user.svg",
    path: "/users",
    active: false,
  },
  {
    id: "reporting",
    name: "Reporting",
    icon: ReportingIcon,
    iconPath: "/src/assets/icons/reporting.svg",
    path: "/reporting",
    active: false,
  },
  {
    id: "settings",
    name: "Settings",
    icon: SettingsIcon,
    iconPath: "/src/assets/icons/setting.svg",
    path: "/settings",
    active: false,
  },
];

export const userProfile = {
  name: "Jaydeep",
  email: "jaydeep@gmail.com",
  avatar:
    "https://www.freepik.com/free-photo/look-there-happy-attractive-young-man-with-stubble-posing-against-blank-blue-studio-wall_11528363.htm",
  initials: "J",
};
