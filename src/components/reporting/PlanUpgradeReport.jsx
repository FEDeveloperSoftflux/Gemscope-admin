import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/24/outline';

const PlanUpgradeReport = () => {
  const upgradeData = [
    {
      id: 1,
      name: 'Asif Qureshi',
      email: 'asif@email.com',
      initials: 'AQ',
      fromPlan: 'Free Plan',
      toPlan: 'Pro Plan',
      date: '8 Jan 2025'
    },
    {
      id: 2,
      name: 'Hina Sohail',
      email: 'asif@email.com',
      initials: 'AQ',
      fromPlan: 'Free Plan',
      toPlan: 'Lifetime',
      date: '8 Jan 2025'
    },
    {
      id: 3,
      name: 'Faizan Shah',
      email: 'asif@email.com',
      initials: 'AQ',
      fromPlan: 'Pro',
      toPlan: 'Lifetime',
      date: '8 Jan 2025'
    },
    {
      id: 4,
      name: 'Asif Qureshi',
      email: 'asif@email.com',
      initials: 'AQ',
      fromPlan: 'Free Plan',
      toPlan: 'Enterprise',
      date: '8 Jan 2025'
    }
  ];

  const getPlanPillClass = (plan) => {
    switch (plan.toLowerCase()) {
      case 'free':
      case 'free plan':
        return 'pill-free';
      case 'pro':
      case 'pro plan':
        return 'pill-pro';
      case 'enterprise':
        return 'pill-enterprise';
      case 'lifetime':
        return 'pill-lifetime';
      default:
        return 'pill-free';
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="chart-container"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-white font-primary">
          Plan Upgrade Report
        </h3>
        <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs sm:text-sm">
          <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Show All</span>
          <span className="sm:hidden">All</span>
        </button>
      </div>

      <div className="space-y-4">
        {upgradeData.map((upgrade, index) => (
          <motion.div
            key={upgrade.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                {upgrade.initials}
              </div>
              
              <div className="min-w-0 flex-1">
                <div className="text-white font-medium text-sm sm:text-base truncate">{upgrade.name}</div>
                <div className="text-gray-400 text-xs sm:text-sm truncate">{upgrade.email}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                <span className={`${getPlanPillClass(upgrade.fromPlan)} text-xs`}>
                  <span>{upgrade.fromPlan}</span>
                </span>
                
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                
                <span className={`${getPlanPillClass(upgrade.toPlan)} text-xs`}>
                  <span>{upgrade.toPlan}</span>
                </span>
              </div>

              <div className="text-gray-400 text-xs sm:text-sm">
                {upgrade.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlanUpgradeReport;
