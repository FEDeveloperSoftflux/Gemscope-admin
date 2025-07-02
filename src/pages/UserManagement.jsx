import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import CustomerTable from '../components/user-management/CustomerTable';

const UserManagement = () => {
  return (
    <MainLayout pageTitle="User Management">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2 font-primary">
            Customer Database
          </h2>
          <p className="text-gray-400">
            Manage your customers and their account permissions here.
          </p>
        </div>

        <CustomerTable />
      </motion.div>
    </MainLayout>
  );
};

export default UserManagement;
