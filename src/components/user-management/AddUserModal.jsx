import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Modal from '../ui/Modal';

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
    planType: 'Free Trial',
    subscriptionPeriod: '7'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    onClose();
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'User',
      planType: 'Free Trial',
      subscriptionPeriod: '7'
    });
  };

  const handleCancel = () => {
    onClose();
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'User',
      planType: 'Free Trial',
      subscriptionPeriod: '7'
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-white mb-2 font-primary">
            Add New User
          </h2>
          <p className="text-gray-400">
            Create a new user account with custom subscription settings
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password*
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Role and Plan Type Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Support">Support</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Plan Type
              </label>
              <div className="relative">
                <select
                  name="planType"
                  value={formData.planType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="Free Trial">Free Trial</option>
                  <option value="Free">Free</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Lifetime">Lifetime</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Subscription Period */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Subscription Period (Days)
            </label>
            <input
              type="number"
              name="subscriptionPeriod"
              value={formData.subscriptionPeriod}
              onChange={handleInputChange}
              placeholder="7"
              min="1"
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <UserIcon className="w-5 h-5" />
              Add User
            </motion.button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUserModal;
