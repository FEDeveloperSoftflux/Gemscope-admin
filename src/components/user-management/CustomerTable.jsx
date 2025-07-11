import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import AddUserModal from './AddUserModal';
import UserActionsDropdown from './UserActionsDropdown';
import SuccessModal from '../ui/SuccessModal';
import ConfirmationModal from '../ui/ConfirmationModal';
import ChangePasswordModal from '../ui/ChangePasswordModal';
import UpgradeSubscriptionModal from '../ui/UpgradeSubscriptionModal';
import addIcon from '../../assets/icons/add.svg';
import crownIcon from '../../assets/icons/crown.svg';
// Remove import ControlSection from './ControlSection';

const CustomerTable = ({
  searchTerm,
  setSearchTerm,
  selectAll,
  setSelectAll,
  selectedRows,
  setSelectedRows,
  statusFilter,
  setStatusFilter
}) => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [successModal, setSuccessModal] = useState({
    isOpen: false,
    title: '',
    message: ''
  });
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null,
    user: null
  });
  const [changePasswordModal, setChangePasswordModal] = useState({
    isOpen: false,
    user: null
  });
  const [upgradeModal, setUpgradeModal] = useState({
    isOpen: false,
    user: null
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
        setChangePasswordModal({
          isOpen: true,
          user: user
        });
        break;
      case 'delete':
        setConfirmationModal({
          isOpen: true,
          title: 'Confirmation!',
          message: 'Are you sure you want to delete this user?',
          user: user,
          onConfirm: () => handleDeleteUser(user)
        });
        break;
      case 'block':
        setConfirmationModal({
          isOpen: true,
          title: 'Confirmation!',
          message: 'Are you sure you want to block this user?',
          user: user,
          onConfirm: () => handleBlockUser(user)
        });
        break;
      case 'upgrade':
        setUpgradeModal({
          isOpen: true,
          user: user
        });
        break;
      case 'downgrade':
        // Show success modal directly for downgrade
        setSuccessModal({
          isOpen: true,
          title: 'Plan Downgraded!',
          message: `${user.name}'s subscription has been downgraded successfully.`
        });
        break;
      default:
        console.log('Unknown action:', actionType);
    }
  };

  const handleDeleteUser = (user) => {
    console.log('Deleting user:', user);
    // Implement actual delete logic here
    setSuccessModal({
      isOpen: true,
      title: 'Successfully Deleted!',
      message: `${user.name} has been removed from the system.`
    });
  };

  const handleBlockUser = (user) => {
    console.log('Blocking user:', user);
    // Implement actual block logic here
    setSuccessModal({
      isOpen: true,
      title: 'User Blocked!',
      message: `${user.name} has been blocked successfully.`
    });
  };

  const handleChangePassword = (passwordData) => {
    console.log('Changing password:', passwordData);
    // Implement actual password change logic here
    setSuccessModal({
      isOpen: true,
      title: 'Password Changed!',
      message: 'Password has been updated successfully.'
    });
  };

  const handleUpgradeSubscription = (upgradeData) => {
    console.log('Upgrading subscription:', upgradeData);
    // Implement actual upgrade logic here
    setSuccessModal({
      isOpen: true,
      title: 'Subscription Updated!',
      message: 'Subscription has been updated successfully.'
    });
  };

  const closeSuccessModal = () => {
    setSuccessModal({
      isOpen: false,
      title: '',
      message: ''
    });
  };

  const closeConfirmationModal = () => {
    setConfirmationModal({
      isOpen: false,
      title: '',
      message: '',
      onConfirm: null,
      user: null
    });
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModal({
      isOpen: false,
      user: null
    });
  };

  const closeUpgradeModal = () => {
    setUpgradeModal({
      isOpen: false,
      user: null
    });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="data-table"
    >
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
        <thead>
  <tr className=" bg-black rounded-lg">
    <th className="text-left py-4 px-4 text-gray-400 font-medium rounded-l-2xl">Customer</th>
    <th className="text-left py-4 px-4 text-gray-400 font-medium">Personal Details</th>
    <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
    <th className="text-left py-4 px-4 text-gray-400 font-medium">Subscription Plan</th>
    <th className="text-left py-4 px-4 text-gray-400 font-medium rounded-r-2xl">Actions</th>
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
                  <div className="flex items-center gap-2">
                    <span className={getPlanPillClass(customer.plan)}>
                      <span>{customer.plan}</span>
                    </span>
                    {customer.plan.toLowerCase() === 'lifetime' && (
                      <img src={crownIcon} alt="Crown" className="w-4 h-4" />
                    )}
                  </div>
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
      <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-800">
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

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmationModal.isOpen}
        onClose={closeConfirmationModal}
        onConfirm={confirmationModal.onConfirm}
        title={confirmationModal.title}
        message={confirmationModal.message}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={changePasswordModal.isOpen}
        onClose={closeChangePasswordModal}
        onSubmit={handleChangePassword}
        user={changePasswordModal.user}
      />

      {/* Upgrade Subscription Modal */}
      <UpgradeSubscriptionModal
        isOpen={upgradeModal.isOpen}
        onClose={closeUpgradeModal}
        onSubmit={handleUpgradeSubscription}
        user={upgradeModal.user}
      />
    </motion.div>
  );
};

export default CustomerTable;
