import { motion } from 'framer-motion';

const RecentCustomers = () => {
  const customers = [
    {
      id: 1,
      name: 'Asif Qureshi',
      email: 'asif@gmail.com',
      plan: 'Free Plan',
      planType: 'free',
      date: '11 Jan 2025'
    },
    {
      id: 2,
      name: 'Hina Sohail',
      email: 'hina@example.com',
      plan: 'Pro Plan',
      planType: 'pro',
      date: '11 Jan 2025'
    },
    {
      id: 3,
      name: 'Faizan Shah',
      email: 'faizan@gmail.com',
      plan: 'Enterprise Plan',
      planType: 'enterprise',
      date: '11 Jan 2025'
    },
    {
      id: 4,
      name: 'Asif Qureshi',
      email: 'asif@gmail.com',
      plan: 'Lifetime Plan',
      planType: 'lifetime',
      date: '11 Jan 2025'
    }
  ];

  const getPlanPillClass = (planType) => {
    switch (planType) {
      case 'free':
        return 'pill-free';
      case 'pro':
        return 'pill-pro';
      case 'enterprise':
        return 'pill-enterprise';
      case 'lifetime':
        return 'pill-lifetime';
      default:
        return 'pill-free';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="data-table"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">
          Recent Customers
        </h3>
        <button className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {customers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="data-table-row"
          >
            <div className="flex items-center gap-4">
              <div className="user-initials">
                {getInitials(customer.name)}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {customer.name}
                </p>
                <p className="text-sm text-text-secondary">
                  {customer.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={getPlanPillClass(customer.planType)}>
                {customer.plan}
              </span>
              <span className="text-sm text-text-muted">
                {customer.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentCustomers;
