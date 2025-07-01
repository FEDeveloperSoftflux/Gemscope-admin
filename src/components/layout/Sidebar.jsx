import { motion } from 'framer-motion';
import { navigationItems, userProfile } from '../../utils/constants/navigation';

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="sidebar w-64 z-40"
    >
      {/* Brand Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/icons/brand.svg"
            alt="GemScope AI"
            className="w-8 h-8"
          />
          <span className="text-xl font-primary font-bold text-white">
            GemScope AI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <motion.a
                  href={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`sidebar-nav-item ${item.active ? 'active' : ''}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">Theme</span>
          <div className="flex items-center gap-1 bg-card-alt-bg rounded-full p-1">
            <button className="toggle-button">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </button>
            <button className="toggle-button active">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-t border-gray-800">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="user-profile cursor-pointer"
        >
          <div className="user-initials bg-gradient-to-r from-purple-500 to-blue-500">
            {userProfile.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate">
              {userProfile.name}
            </p>
            <p className="text-sm text-text-secondary truncate">
              {userProfile.email}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
