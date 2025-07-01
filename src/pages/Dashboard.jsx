import { motion } from "framer-motion";
import {
  UsersIcon,
  CurrencyDollarIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

import MainLayout from "../components/layout/MainLayout";
import StatsCard from "../components/dashboard/StatsCard";
import EarningsChart from "../components/dashboard/EarningsChart";
import RecentCustomers from "../components/dashboard/RecentCustomers";
import RecentAISearches from "../components/dashboard/RecentAISearches";
import React from "react";

const Dashboard = () => {
  return (
    <MainLayout pageTitle="Dashboard">
      <div className="space-y-4">
        {/* Welcome Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4 flex items-center justify-between"
        >
          <div>
            <h2 className="text-hero text-white font-primary mb-2">
              Welcome back!
            </h2>
            <p className="text-text-secondary">
              Here's what's happening with your platform today.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="toggle-button active text-xs px-3 py-1.5">
              Monthly
            </button>
            <button className="toggle-button text-xs px-3 py-1.5 font-medium">
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <div className="dashboard-grid">
          <StatsCard
            title="Total Active Users"
            value="4,322"
            subtitle="Currently active platform users"
            growth="+12.5%"
            icon={UsersIcon}
            type="default"
          />

          <StatsCard
            title="Total Earnings"
            value="$182,350"
            subtitle="+$6,750 vs last month"
            growth="+12.5%"
            icon={CurrencyDollarIcon}
            type="earnings"
          />

          <StatsCard
            title="New Users This Week"
            value="87"
            subtitle="+87 vs last Week"
            growth="+12.5%"
            icon={UserPlusIcon}
            type="users"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-4">
          <EarningsChart />
        </div>

        {/* Data Tables Section */}
        <div className="dashboard-section">
          <RecentCustomers />
          <RecentAISearches />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
