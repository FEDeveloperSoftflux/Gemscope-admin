import React from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Dropdown from './Dropdown';

const UserDropdown = ({ user, smallAvatar }) => {
  const handleAction = (actionType) => {
    console.log(`User action: ${actionType}`);
    // Implement actual actions here
  };

  const userActions = [
    {
      id: 'profile',
      label: 'View Profile',
      icon: UserIcon,
      onClick: () => handleAction('profile')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Cog6ToothIcon,
      onClick: () => handleAction('settings')
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: ArrowRightOnRectangleIcon,
      onClick: () => handleAction('logout'),
      className: 'text-red-400 hover:bg-red-600/20'
    }
  ];

  return (
    <Dropdown
      trigger={
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`flex items-center ${smallAvatar ? 'gap-1 p-1' : 'gap-3 p-2'} cursor-pointer rounded-lg hover:bg-gray-700/50 transition-colors`}
        >
          <div className="flex flex-col items-end">
            <p className={`font-semibold text-white ${smallAvatar ? 'text-xs' : 'text-sm'}`}>{user.name}</p>
            <p className={`${smallAvatar ? 'text-[10px]' : 'text-xs'} text-gray-400`}>{user.email}</p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/look-there-happy-attractive-young-man-with-stubble-posing-against-blank-blue-studio-wall_295783-4776.jpg"
            alt={user.name}
            className={`${smallAvatar ? 'w-10 h-10' : 'w-10 h-10'} rounded-full border-2 border-gray-600`}
          />
          <ChevronDownIcon className="w-4 h-4 text-gray-400" />
        </motion.div>
      }
      align="right"
    >
      {userActions.map((action) => {
        const IconComponent = action.icon;
        return (
          <motion.button
            key={action.id}
            onClick={action.onClick}
            className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-700/30 last:border-b-0 flex items-center gap-3 ${
              action.className || 'text-white hover:bg-gray-700/50'
            }`}
            whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
            style={{ minWidth: '180px' }}
          >
            <IconComponent className="w-4 h-4" />
            {action.label}
          </motion.button>
        );
      })}
    </Dropdown>
  );
};

export default UserDropdown;
