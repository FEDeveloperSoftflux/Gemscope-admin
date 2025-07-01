import React from 'react';
import { motion } from 'framer-motion';
import {
  EllipsisVerticalIcon,
  LockClosedIcon,
  TrashIcon,
  NoSymbolIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import Dropdown from '../ui/Dropdown';

const UserActionsDropdown = ({ user, onAction }) => {
  const handleAction = (actionType) => {
    onAction(actionType, user);
  };

  const actions = [
    {
      id: 'change-password',
      label: 'Change Password',
      className: 'text-white hover:bg-gray-700/50',
      onClick: () => handleAction('change-password')
    },
    {
      id: 'delete',
      label: 'Delete User',
      className: 'text-white bg-red-600/20 hover:bg-red-600/30',
      onClick: () => handleAction('delete')
    },
    {
      id: 'block',
      label: 'Block User',
      className: 'text-white hover:bg-gray-700/50',
      onClick: () => handleAction('block')
    },
    {
      id: 'upgrade',
      label: 'Upgrade',
      className: 'text-white hover:bg-gray-700/50',
      onClick: () => handleAction('upgrade')
    },
    {
      id: 'downgrade',
      label: 'Downgrade',
      className: 'text-white hover:bg-gray-700/50',
      onClick: () => handleAction('downgrade')
    }
  ];

  return (
    <Dropdown
      trigger={
        <motion.button 
          className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <EllipsisVerticalIcon className="w-5 h-5" />
        </motion.button>
      }
      align="right"
    >
      {actions.map((action) => (
        <motion.button
          key={action.id}
          onClick={action.onClick}
          className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-700/30 last:border-b-0 ${action.className}`}
          whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
          style={{ minWidth: '160px' }}
        >
          {action.label}
        </motion.button>
      ))}
    </Dropdown>
  );
};

export default UserActionsDropdown;
