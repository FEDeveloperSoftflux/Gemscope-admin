import { motion } from 'framer-motion';
import { BellIcon } from '@heroicons/react/24/outline';
import { userProfile } from '../../utils/constants/navigation';

const Header = ({ pageTitle = 'Dashboard' }) => {
  return (
    <header className="header">
      <div className="flex items-center gap-4">
        {/* Logo and Page Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <img
              src="/src/assets/icons/brand.svg"
              alt="GemScope AI"
              className="w-6 h-6"
            />
          </div>
          <h1 className="text-2xl font-primary font-semibold text-white">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
            <BellIcon className="w-5 h-5 text-gray-400" />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </motion.div>

        {/* User Profile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="user-profile cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={userProfile.name}
            className="user-avatar"
          />
          <div className="hidden md:block">
            <p className="font-semibold text-white">{userProfile.name}</p>
            <p className="text-sm text-text-secondary">{userProfile.email}</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
