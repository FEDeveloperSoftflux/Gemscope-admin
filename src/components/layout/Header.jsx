import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { navigationItems, userProfile } from "../../utils/constants/navigation.jsx";
import notificationIcon from "../../assets/icons/notification.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import UserDropdown from "../ui/UserDropdown";

const Header = ({ pageTitle = "Dashboard" }) => {
  const location = useLocation();
  
  // Find the current page's icon
  const currentPage = navigationItems.find(item => item.path === location.pathname);
  const currentIcon = currentPage?.iconPath || dashboardIcon;
  
  return (
    <header className="header">
      <div className="flex items-center gap-4">
        {/* Module Icon and Page Title */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#202020'}}>
            <img
              src={currentIcon}
              alt={pageTitle}
              className="w-5 h-5"
            />
          </div>
          <h1 className="text-xl font-primary font-semibold text-white">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notification Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" style={{backgroundColor: '#202020'}}>
            <img
              src={notificationIcon}
              alt="Notifications"
              className="w-5 h-5 text-gray-400"
            />
            {/* Notification dot */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </motion.div>

        {/* User Profile Dropdown */}
        <UserDropdown user={userProfile} />
      </div>
    </header>
  );
};

export default Header;
