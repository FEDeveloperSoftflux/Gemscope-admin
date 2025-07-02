import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ExportCSVModal = ({ isOpen, onClose }) => {
  const reportData = {
    generated: '6/14/2025',
    totalRecords: 8,
    totalEarnings: '$21,000'
  };

  const earningsData = [
    {
      date: '6/10/2024',
      customerName: 'TechCorp Inc',
      amount: '£150',
      subscriptionPlan: 'Lifetime',
      description: 'Lifetime subscription'
    },
    {
      date: '6/5/2024',
      customerName: 'StartupXYZ',
      amount: '£20',
      subscriptionPlan: 'Pro',
      description: 'Monthly subscription'
    },
    {
      date: '6/10/2024',
      customerName: 'Enterprise Co',
      amount: '£50',
      subscriptionPlan: 'Enterprise',
      description: 'Monthly subscription'
    },
    {
      date: '5/15/2024',
      customerName: 'TechCorp Inc',
      amount: '£150',
      subscriptionPlan: 'Lifetime',
      description: 'Lifetime subscription'
    },
    {
      date: '5/20/2024',
      customerName: 'Local Business',
      amount: '£20',
      subscriptionPlan: 'Pro',
      description: 'Monthly subscription'
    },
    {
      date: '4/12/2024',
      customerName: 'Enterprise Co',
      amount: '£50',
      subscriptionPlan: 'Enterprise',
      description: 'Monthly subscription'
    },
    {
      date: '4/25/2024',
      customerName: 'StartupXYZ',
      amount: '£20',
      subscriptionPlan: 'Pro',
      description: 'Monthly subscription'
    },
    {
      date: '3/8/2024',
      customerName: 'TechCorp Inc',
      amount: '£150',
      subscriptionPlan: 'Lifetime',
      description: 'Lifetime subscription'
    }
  ];

  const getPlanPillClass = (plan) => {
    switch (plan.toLowerCase()) {
      case 'pro':
        return 'pill-pro';
      case 'enterprise':
        return 'pill-enterprise';
      case 'lifetime':
        return 'pill-lifetime';
      default:
        return 'pill-free';
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleExport = () => {
    // Generate CSV content
    const headers = ['Date', 'Customer Name', 'Amount', 'Subscription Plan', 'Description'];
    const csvContent = [
      headers.join(','),
      ...earningsData.map(row => [
        row.date,
        `"${row.customerName}"`,
        row.amount,
        row.subscriptionPlan,
        `"${row.description}"`
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `earnings_report_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-md bg-black/50"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3 
            }}
            className="relative w-full max-w-4xl rounded-2xl border border-gray-700/50 shadow-2xl p-8"
            style={{
              background: 'rgba(26, 26, 26, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-semibold text-white mb-8 font-primary"
            >
              Earnings Report
            </motion.h3>

            {/* Report Summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 rounded-lg p-6 mb-6"
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Report Generated</div>
                  <div className="text-white font-medium">{reportData.generated}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Total Records</div>
                  <div className="text-white font-medium">{reportData.totalRecords}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Total Earnings</div>
                  <div className="text-white font-medium text-2xl">{reportData.totalEarnings}</div>
                </div>
              </div>
            </motion.div>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-lg border border-gray-700"
            >
              <div className="bg-gray-800 px-4 py-3 grid grid-cols-5 gap-4 text-sm font-medium text-gray-300">
                <div>Date</div>
                <div>Customer Name</div>
                <div>Amount</div>
                <div>Subscription Plan</div>
                <div>Description</div>
              </div>
              
              <div className="max-h-64 overflow-y-auto">
                {earningsData.map((row, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border-t border-gray-700 px-4 py-3 grid grid-cols-5 gap-4 text-sm hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="text-gray-300">{row.date}</div>
                    <div className="text-white">{row.customerName}</div>
                    <div className="text-white">{row.amount}</div>
                    <div>
                      <span className={getPlanPillClass(row.subscriptionPlan)}>
                        <span>{row.subscriptionPlan}</span>
                      </span>
                    </div>
                    <div className="text-gray-300">{row.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end gap-4 mt-8"
            >
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleExport}
                className="btn-primary"
              >
                Download CSV
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExportCSVModal;
