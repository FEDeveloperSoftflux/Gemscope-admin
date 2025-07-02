import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const UpgradeSubscriptionModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  user 
}) => {
  const [formData, setFormData] = useState({
    subscriptionPlan: 'Enterprise',
    subscriptionDays: '0'
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ subscriptionPlan: 'Enterprise', subscriptionDays: '0' });
    onClose();
  };

  const handleCancel = () => {
    setFormData({ subscriptionPlan: 'Enterprise', subscriptionDays: '0' });
    onClose();
  };

  const planOptions = [
    'Free',
    'Pro',
    'Enterprise',
    'Lifetime'
  ];

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
            className="relative w-full max-w-md rounded-2xl border border-gray-700/50 shadow-2xl p-8"
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
              className="text-2xl font-semibold text-white mb-2 font-primary"
            >
              Upgrade Subscription
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm mb-8"
            >
              Upgrade subscription for {user?.name || 'Mike Johnson'}
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Subscription Plan */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Subscription plan
                </label>
                <div className="relative">
                  <select
                    name="subscriptionPlan"
                    value={formData.subscriptionPlan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none appearance-none pr-12"
                  >
                    {planOptions.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Subscription Days */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Subscription days
                </label>
                <div className="relative">
                  <select
                    name="subscriptionDays"
                    value={formData.subscriptionDays}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none appearance-none pr-12"
                  >
                    <option value="0">0</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="180">180</option>
                    <option value="365">365</option>
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Upgrade
                </button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpgradeSubscriptionModal;
