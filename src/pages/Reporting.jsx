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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2 font-primary">
            Reporting Panel
          </h2>
          <p className="text-gray-400">
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
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            {/* Filter Dropdowns */}
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none">
              <option>All Clients</option>
              <option>Active Clients</option>
              <option>Inactive Clients</option>
            </select>

            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none">
              <option>All Plans</option>
              <option>Free</option>
              <option>Pro</option>
              <option>Enterprise</option>
              <option>Lifetime</option>
            </select>

            {/* Date Filters */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="From Date"
                  className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none w-32"
                />
                <CalendarIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="To Date"
                  className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none w-32"
                />
                <CalendarIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setExportModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <DocumentArrowDownIcon className="w-4 h-4" />
              Export CSV
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              <DocumentArrowDownIcon className="w-4 h-4" />
              Export PDF
            </button>
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
