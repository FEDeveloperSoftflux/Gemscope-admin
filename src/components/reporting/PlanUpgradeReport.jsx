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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white font-primary">
          Plan Upgrade Report
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm">
          <EyeIcon className="w-4 h-4" />
          Show All
        </button>
      </div>

      <div className="space-y-4">
        {upgradeData.map((upgrade, index) => (
          <motion.div
            key={upgrade.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/70 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                {upgrade.initials}
              </div>
              
              <div>
                <div className="text-white font-medium">{upgrade.name}</div>
                <div className="text-gray-400 text-sm">{upgrade.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={getPlanPillClass(upgrade.fromPlan)}>
                  <span>{upgrade.fromPlan}</span>
                </span>
                
                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                
                <span className={getPlanPillClass(upgrade.toPlan)}>
                  <span>{upgrade.toPlan}</span>
                </span>
              </div>

              <div className="text-gray-400 text-sm min-w-0">
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
