import React from "react";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import userIcon from "../../assets/icons/user.svg";
import reportingIcon from "../../assets/icons/reporting.svg";
import settingIcon from "../../assets/icons/setting.svg";

// Custom icon components from assets with dynamic styling
const DashboardIcon = ({ className, style }) => (
  <img
    src={dashboardIcon}
    alt="Dashboard"
    className={`w-4 h-4 ${className || ""}`}
    style={{
      filter: style?.color === "black" ? "brightness(0)" : "none",
      ...style,
    }}
  />
);

const UserIcon = ({ className, style }) => (
  <img
    src={userIcon}
    alt="User Management"
    className={`w-4 h-4 ${className || ""}`}
    style={{
      filter: style?.color === "black" ? "brightness(0)" : "none",
      ...style,
    }}
  />
);

const ReportingIcon = ({ className, style }) => (
  <img
    src={reportingIcon}
    alt="Reporting"
    className={`w-4 h-4 ${className || ""}`}
    style={{
      filter: style?.color === "black" ? "brightness(0)" : "none",
      ...style,
    }}
  />
);

const SettingsIcon = ({ className, style }) => (
  <img
    src={settingIcon}
    alt="Settings"
    className={`w-4 h-4 ${className || ""}`}
    style={{
      filter: style?.color === "black" ? "brightness(0)" : "none",
      ...style,
    }}
  />
);

export const navigationItems = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    iconPath: dashboardIcon,
    path: "/",
    active: true,
  },
  {
    id: "user-management",
    name: "User Management",
    icon: UserIcon,
    iconPath: userIcon,
    path: "/users",
    active: false,
  },
  {
    id: "reporting",
    name: "Reporting",
    icon: ReportingIcon,
    iconPath: reportingIcon,
    path: "/reporting",
    active: false,
  },
  {
    id: "settings",
    name: "Settings",
    icon: SettingsIcon,
    iconPath: settingIcon,
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
