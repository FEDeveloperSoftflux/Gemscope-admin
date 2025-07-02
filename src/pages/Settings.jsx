import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PencilIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import MainLayout from '../components/layout/MainLayout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Change Password');
  const [formData, setFormData] = useState({
    name: 'Jaydeep',
    email: 'jjdmehta@gmail.com'
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const tabs = [
    'Personal Information',
    'Change Password',
    'Notification Settings'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <MainLayout pageTitle="Settings">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2 font-primary">
            Account Settings
          </h2>
          <p className="text-gray-400">
            Manage your account preferences and notification settings
          </p>
        </div>

        {/* Tab Navigation - Black Bar */}
        <div className="bg-black rounded-xl p-2 mb-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 text-center ${
                  activeTab === tab
                    ? 'text-black font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  background: activeTab === tab 
                    ? 'linear-gradient(99.45deg, #6E09D3 -14.89%, #DDCBF0 21.92%, #F2F2F2 47.17%, #F0DBED 71.06%, #FF6CFB 115.33%)'
                    : 'transparent'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="chart-container"
        >
          {activeTab === 'Personal Information' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 font-primary">
                Personal Information
              </h3>
              <p className="text-gray-400 mb-8">
                Update your personal details
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none pr-12"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    E-Mail Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none pr-12"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={handleSaveChanges}
                  className="btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Change Password' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 font-primary">
                Change Password
              </h3>
              <p className="text-gray-400 mb-8">
                Update your account password
              </p>

              <div className="space-y-6">
                <div className="max-w-md">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none pr-12"
                      placeholder="Enter your current password"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showCurrentPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none pr-12"
                        placeholder="Enter your new password"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showNewPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none pr-12"
                        placeholder="Confirm new password"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end max-w-2xl mt-8">
                  <button className="btn-primary">
                    Update password
                  </button>
                </div>
              </div>
            </div>
          )}

{activeTab === 'Notification Settings' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 font-primary">
                Notification Settings
              </h3>
              <p className="text-gray-400 mb-8">
                Choose what notifications you'd like to receive
              </p>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">Email Alerts</div>
                    <div className="text-gray-400 text-sm">Receive important notifications via email</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-pink-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">Subscription Plan Notices</div>
                    <div className="text-gray-400 text-sm">Get Notified when a customer upgrades or downgrades their subscription</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-pink-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">User Signup Notices</div>
                    <div className="text-gray-400 text-sm">Receive notifications when new users sign up</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-pink-500"></div>
                  </label>
                </div>

                <button className="btn-primary">
                  Save Notification Settings
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Settings;
