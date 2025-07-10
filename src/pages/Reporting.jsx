import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentArrowDownIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

import MainLayout from '../components/layout/MainLayout';
import StatsCard from '../components/dashboard/StatsCard';
import EarningsChart from '../components/reporting/EarningsChart';
import PlanUpgradeReport from '../components/reporting/PlanUpgradeReport';
import ExportCSVModal from '../components/ui/ExportCSVModal';

// Import custom SVG icons
import userIcon from '../assets/icons/user.svg';
import statsIcon from '../assets/icons/stats.svg';
import trendingIcon from '../assets/icons/trending.svg';

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

const Reporting = () => {
  const [exportModalOpen, setExportModalOpen] = useState(false);

  return (
    <MainLayout pageTitle="Reporting">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-primary">
            Reporting Panel
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Track your income and analyse your financial performance
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="dashboard-grid">
          <StatsCard
            title="Revenue Last Month"
            value="$0"
            subtitle="Previous month earnings"
            growth="+12.5%"
            icon={StatsIcon}
            type="default"
          />

          <StatsCard
            title="Total Earnings"
            value="$45,670"
            subtitle="Lifetime earnings"
            growth="+12.5%"
            icon={TrendingIcon}
            type="earnings"
          />

          <StatsCard
            title="Projected Revenue Next Month"
            value="$2,670"
            subtitle="Estimated revenue"
            growth="+12.5%"
            icon={UserIcon}
            type="users"
          />
        </div>

        {/* Controls Section */}
        <div className="mb-6 space-y-4">
          {/* First Row - Filter Dropdowns and Export Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              {/* Filter Dropdowns */}
              <select className="bg-gray-800/50 text-white px-3 sm:px-4 py-2 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none hover:bg-gray-700/50 transition-all duration-200 cursor-pointer text-sm">
                <option className="bg-gray-800 text-white">All Clients</option>
                <option className="bg-gray-800 text-white">Active Clients</option>
                <option className="bg-gray-800 text-white">Inactive Clients</option>
              </select>

              <select className="bg-gray-800/50 text-white px-3 sm:px-4 py-2 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none hover:bg-gray-700/50 transition-all duration-200 cursor-pointer text-sm">
                <option className="bg-gray-800 text-white">All Plans</option>
                <option className="bg-gray-800 text-white">Free</option>
                <option className="bg-gray-800 text-white">Pro</option>
                <option className="bg-gray-800 text-white">Enterprise</option>
                <option className="bg-gray-800 text-white">Lifetime</option>
              </select>
            </div>

            {/* Export Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                onClick={() => setExportModalOpen(true)}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <DocumentArrowDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Export CSV</span>
                <span className="sm:hidden">CSV</span>
              </motion.button>

              <motion.button 
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-all duration-200 text-xs sm:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <DocumentArrowDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Export PDF</span>
                <span className="sm:hidden">PDF</span>
              </motion.button>
            </div>
          </div>

          {/* Second Row - Date Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-gray-400 text-sm font-medium">Date Range:</span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative">
                <input
                  type="date"
                  className="bg-gray-800/50 text-white px-3 sm:px-4 py-2 pl-8 sm:pl-10 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none hover:bg-gray-700/50 transition-all duration-200 w-full sm:w-36 text-sm [color-scheme:dark]"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <span className="text-gray-400 text-center sm:text-left text-sm">to</span>

              <div className="relative">
                <input
                  type="date"
                  className="bg-gray-800/50 text-white px-3 sm:px-4 py-2 pl-8 sm:pl-10 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none hover:bg-gray-700/50 transition-all duration-200 w-full sm:w-36 text-sm [color-scheme:dark]"
                  style={{
                    colorScheme: 'dark'
                  }}
                />
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <EarningsChart />
        </div>

        {/* Plan Upgrade Report */}
        <div>
          <PlanUpgradeReport />
        </div>

        {/* Export CSV Modal */}
        <ExportCSVModal
          isOpen={exportModalOpen}
          onClose={() => setExportModalOpen(false)}
        />
      </motion.div>
    </MainLayout>
  );
};

export default Reporting;
