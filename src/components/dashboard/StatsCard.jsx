import { motion } from 'framer-motion';

const StatsCard = ({
  title,
  value,
  subtitle,
  growth,
  icon: Icon,
  type = 'default'
}) => {
  const getCardClass = () => {
    switch (type) {
      case 'earnings':
        return 'earnings-card';
      case 'users':
        return 'users-card';
      default:
        return 'stats-card';
    }
  };

  const getGrowthColor = () => {
    if (growth && growth.startsWith('+')) {
      return 'text-success';
    } else if (growth && growth.startsWith('-')) {
      return 'text-error';
    }
    return 'text-text-secondary';
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${getCardClass()} hover-lift`}
    >
      <div className="stats-card-content">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-text-secondary text-sm font-medium mb-2">
              {title}
            </p>
            <h3 className="text-stat-primary text-white font-bold">
              {value}
            </h3>
          </div>
          {Icon && (
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-text-secondary text-sm">
            {subtitle}
          </p>
          {growth && (
            <span className={`text-sm font-medium ${getGrowthColor()}`}>
              {growth}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
