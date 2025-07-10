import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import StatsCard from "../components/dashboard/StatsCard";
import EarningsChart from "../components/dashboard/EarningsChart";
import RecentCustomers from "../components/dashboard/RecentCustomers";
import RecentAISearches from "../components/dashboard/RecentAISearches";
import React from "react";

// Import custom SVG icons
import userIcon from "../assets/icons/user.svg";
import statsIcon from "../assets/icons/stats.svg";
import trendingIcon from "../assets/icons/trending.svg";

// Custom icon components
const UserIcon = () => (
  <img src={userIcon} alt="Users" className="w-6 h-6" />
);

const StatsIcon = () => (
  <img src={statsIcon} alt="Stats" className="w-6 h-6" />
);

const TrendingIcon = () => (
  <img src={trendingIcon} alt="Trending" className="w-6 h-6" />
);

const Dashboard = () => {
  return (
    <MainLayout pageTitle="Dashboard">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Welcome Section */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-primary">
              Welcome back!
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Here's what's happening with your platform today.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="toggle-button active text-xs px-2 sm:px-3 py-1 sm:py-1.5">
              Monthly
            </button>
            <button className="toggle-button text-xs px-2 sm:px-3 py-1 sm:py-1.5 font-medium">
              Yearly
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="dashboard-grid">
          <StatsCard
            title="Total Active Users"
            value="4,322"
            subtitle="Currently active platform users"
            growth="+12.5%"
            icon={UserIcon}
            type="default"
          />

          <StatsCard
            title="Total Earnings"
            value="$182,350"
            subtitle="+$6,750 vs last month"
            growth="+12.5%"
            icon={TrendingIcon}
            type="earnings"
          />

          <StatsCard
            title="New Users This Week"
            value="87"
            subtitle="+87 vs last Week"
            growth="+12.5%"
            icon={StatsIcon}
            type="users"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-6">
          <EarningsChart />
        </div>

        {/* Data Tables Section */}
        <div className="dashboard-section">
          <RecentCustomers />
          <RecentAISearches />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Dashboard;
