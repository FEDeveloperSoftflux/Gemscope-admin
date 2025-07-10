import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navigationItems, userProfile } from "../../utils/constants/navigation.jsx";
import gemaiLogo from "../../assets/icons/Gemai.svg";

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={false}
      animate={{ x: open ? 0 : -250 }}
      transition={{ duration: 0.3 }}
      className={`sidebar w-56 z-50   left-[15px] lg:relative lg:translate-x-0 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
      style={{ boxShadow: open ? '0 0 40px rgba(0,0,0,0.4)' : undefined }}
    >
      {/* Brand Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <img
            src={gemaiLogo}
            alt="GemScope AI"
            className="w-8 h-8"
          />
          <span className="text-xl font-primary font-bold text-white">
            GemScope AI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-3">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-black font-semibold shadow-lg" 
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(99.45deg, #6E09D3 -14.89%, #DDCBF0 21.92%, #F2F2F2 47.17%, #F0DBED 71.06%, #FF6CFB 115.33%)'
                    } : {}}
                  >
                    <div className={`flex items-center justify-center ${
                      isActive ? "text-black" : "text-gray-300"
                    }`}>
                      <IconComponent 
                        className="w-5 h-5" 
                        style={{ color: isActive ? 'black' : 'white' }}
                      />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Elegant Bottom Spacing */}
      <div className="pb-6"></div>
    </motion.div>
  );
};

export default Sidebar;
