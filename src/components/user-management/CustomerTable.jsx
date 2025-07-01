import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import AddUserModal from './AddUserModal';
import UserActionsDropdown from './UserActionsDropdown';
import SuccessModal from '../ui/SuccessModal';

const CustomerTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [successModal, setSuccessModal] = useState({
    isOpen: false,
    title: '',
    message: ''
  });

  // Mock customer data matching the reference image
  const customers = [
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Cancelled', plan: 'Free', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Pro', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Enterprise', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Cancelled', plan: 'Free', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Pro', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Lifetime', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Cancelled', plan: 'Free', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Pro', initials: 'MJ' },
    { id: '01', name: 'Mike Johnson', email: 'mje@example.com', status: 'Active', plan: 'Enterprise', initials: 'MJ' },
  ];

  const getStatusColor = (status) => {
    return status === 'Active' ? '#10B981' : '#EF4444';
  };

  const getPlanPillClass = (plan) => {
    switch (plan.toLowerCase()) {
      case 'free': return 'pill-free';
      case 'pro': return 'pill-pro';
      case 'enterprise': return 'pill-enterprise';
      case 'lifetime': return 'pill-lifetime';
      default: return 'pill-free';
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(customers.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (index) => {
    const newSelectedRows = [...selectedRows];
    const selectedIndex = newSelectedRows.indexOf(index);
    
    if (selectedIndex === -1) {
      newSelectedRows.push(index);
    } else {
      newSelectedRows.splice(selectedIndex, 1);
    }
    
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === customers.length);
  };

  const handleAddUser = (userData) => {
    console.log('Adding new user:', userData);
    // Here you would typically send the data to your API
    // For now, we'll just add it to the local state
    const newUser = {
      id: String(customers.length + 1).padStart(2, '0'),
      name: userData.name,
      email: userData.email,
      status: 'Active',
      plan: userData.planType,
      initials: userData.name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
    setUsers([...users, newUser]);
    
    // Show success modal
    setSuccessModal({
      isOpen: true,
      title: 'User Added Successfully!',
      message: `${userData.name} has been added to the system.`
    });
  };

  const handleUserAction = (actionType, user) => {
    console.log(`Action ${actionType} for user:`, user);
    
    switch (actionType) {
      case 'change-password':
        // Implement password change logic
        setSuccessModal({
          isOpen: true,
          title: 'Password Changed!',
          message: `Password for ${user.name} has been updated successfully.`
        });
        break;
      case 'delete':
        // Implement delete user logic
        setSuccessModal({
          isOpen: true,
          title: 'Successfully Deleted!',
          message: `${user.name} has been removed from the system.`
        });
        break;
      case 'block':
        // Implement block user logic
        setSuccessModal({
          isOpen: true,
          title: 'User Blocked!',
          message: `${user.name} has been blocked successfully.`
        });
        break;
      case 'upgrade':
        // Implement upgrade logic
        setSuccessModal({
          isOpen: true,
          title: 'User Upgraded!',
          message: `${user.name}'s plan has been upgraded successfully.`
        });
        break;
      case 'downgrade':
        // Implement downgrade logic
        setSuccessModal({
          isOpen: true,
          title: 'User Downgraded!',
          message: `${user.name}'s plan has been downgraded successfully.`
        });
        break;
      default:
        console.log('Unknown action:', actionType);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModal({
      isOpen: false,
      title: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="data-table"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 font-primary">Customer Database</h3>
          <p className="text-gray-400">Manage your customers and their account permissions here.</p>
        </div>
        <motion.button 
          onClick={() => setIsAddUserModalOpen(true)}
          className="btn-primary flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src="/src/assets/icons/add.svg" alt="Add" className="w-5 h-5" />
          Add User
        </motion.button>
      </div>

      {/* Controls Section */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none w-64"
            />
          </div>

          {/* Select All Checkbox */}
          <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
            />
            Select All
          </label>
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Customer</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Personal Details</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Subscription Plan</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
              >
                {/* Customer ID with Checkbox */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelect(index)}
                      className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
                    />
                    <span className="text-gray-400">{customer.id}</span>
                  </div>
                </td>

                {/* Personal Details */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="user-initials">
                      {customer.initials}
                    </div>
                    <div>
                      <div className="text-white font-medium">{customer.name}</div>
                      <div className="text-gray-400 text-sm">{customer.email}</div>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <span
                    className="text-sm font-medium"
                    style={{ color: getStatusColor(customer.status) }}
                  >
                    {customer.status}
                  </span>
                </td>

                {/* Subscription Plan */}
                <td className="py-4 px-4">
                  <span className={getPlanPillClass(customer.plan)}>
                    {customer.plan}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <UserActionsDropdown 
                    user={customer} 
                    onAction={handleUserAction}
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-purple-400 bg-purple-500/20 rounded">1</button>
            <button className="px-3 py-1 text-gray-400 hover:text-white transition-colors">2</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-1 text-gray-400 hover:text-white transition-colors">9</button>
            <button className="px-3 py-1 text-gray-400 hover:text-white transition-colors">10</button>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Add User Modal */}
      <AddUserModal 
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onAddUser={handleAddUser}
      />

      {/* Success Modal */}
      <SuccessModal 
        isOpen={successModal.isOpen}
        onClose={closeSuccessModal}
        title={successModal.title}
        message={successModal.message}
      />
    </motion.div>
  );
};

export default CustomerTable;
