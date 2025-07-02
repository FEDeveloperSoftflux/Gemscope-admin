import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  subtitle,
  growth,
  icon: Icon,
  type = "default",
}) => {
  const getCardClass = () => {
    switch (type) {
      case "earnings":
        return "earnings-card";
      case "users":
        return "users-card";
      default:
        return "stats-card";
    }
  };

  const getGrowthColor = () => {
    if (growth && growth.startsWith("+")) {
      return "text-success";
    } else if (growth && growth.startsWith("-")) {
      return "text-error";
    }
    return "text-text-secondary";
  };

  const getStatUpIconColor = () => {
    switch (type) {
      case "earnings":
      case "users":
        return "#10B981"; // Green for other cards
      default:
        return "#FFFFFF"; // White for first card
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${getCardClass()} hover-lift`}
    >
      <div className="stats-card-content">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-1">
              {title}
            </p>
            <h3 className="text-stat-secondary text-white font-bold">
              {value}
            </h3>
          </div>
          {Icon && (
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-text-secondary text-sm">{subtitle}</p>
          {growth && (
            <div className="flex items-center gap-1">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.2 1.06667C4.6 0.533333 5.4 0.533333 5.8 1.06667L9.8 6.4C10.2944 7.05924 9.82405 8 9 8H1C0.175955 8 -0.294427 7.05924 0.2 6.4L4.2 1.06667Z"
                  fill={getStatUpIconColor()}
                />
              </svg>
              <span className={`text-sm font-medium ${getGrowthColor()}`}>
                {growth}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
