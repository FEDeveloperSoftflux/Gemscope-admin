import { motion } from "framer-motion";
import React from "react";

const RecentAISearches = () => {
  const searches = [
    {
      id: 1,
      user: "Hina Sohail",
      query: "Silver market.NET projects",
      plan: "Free Plan",
      planType: "free",
      date: "11 Jan 2025",
    },
    {
      id: 2,
      user: "Asif Qureshi",
      query: "Best AI trading bots",
      plan: "Pro Plan",
      planType: "pro",
      date: "11 Jan 2025",
    },
    {
      id: 3,
      user: "Faizan Shah",
      query: "Crypto market analysis",
      plan: "Enterprise Plan",
      planType: "enterprise",
      date: "11 Jan 2025",
    },
    {
      id: 4,
      user: "Asif Qureshi",
      query: "Best AI trading bots",
      plan: "Lifetime Plan",
      planType: "lifetime",
      date: "11 Jan 2025",
    },
  ];

  const getPlanPillClass = (planType) => {
    switch (planType) {
      case "free":
        return "pill-free";
      case "pro":
        return "pill-pro";
      case "enterprise":
        return "pill-enterprise";
      case "lifetime":
        return "pill-lifetime";
      default:
        return "pill-free";
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="data-table"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Recent AI Prompt Searches</h3>
        <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          <img 
            src="/src/assets/icons/view.svg" 
            alt="View" 
            className="w-4 h-4"
          />
          View All
        </button>
      </div>

      <div className="space-y-4">
        {searches.map((search, index) => (
          <motion.div
            key={search.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="data-table-row"
          >
            <div className="flex items-center gap-4">
              <div className="user-initials">{getInitials(search.user)}</div>
              <div>
                <p className="font-semibold text-white">{search.user}</p>
                <p className="text-sm text-text-secondary">{search.query}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={getPlanPillClass(search.planType)}>
                <span>{search.plan}</span>
              </span>
              <span className="text-sm text-text-muted">{search.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentAISearches;
