import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { navigationItems, userProfile } from "../../utils/constants/navigation.jsx";
import notificationIcon from "../../assets/icons/notification.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import UserDropdown from "../ui/UserDropdown";

const Header = ({ pageTitle = "Dashboard", onMenuToggle }) => {
  const location = useLocation();
  
  // Find the current page's icon
  const currentPage = navigationItems.find(item => item.path === location.pathname);
  const currentIcon = currentPage?.iconPath || dashboardIcon;
  
  return (
    <header className="header">
      <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1 sm:p-1.5 rounded-lg hover:bg-gray-700 transition-colors"
          style={{backgroundColor: '#202020'}}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Module Icon and Page Title */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#202020'}}>
            <img
              src={currentIcon}
              alt={pageTitle}
              className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
            />
          </div>
          <h1 className="text-base sm:text-lg lg:text-xl font-primary font-semibold text-white">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
        {/* User Profile Dropdown */}
        <UserDropdown user={userProfile} smallAvatar />
        
        {/* Notification Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <button className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-all duration-200 border border-gray-600/30 hover:border-gray-500/50" style={{backgroundColor: '#1A1A1A'}}>
            <img
              src={notificationIcon}
              alt="Notifications"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 filter brightness-0 invert"
            />
            {/* Notification dot */}
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 bg-red-500 rounded-full border border-gray-900 animate-pulse"></div>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
