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
        <CustomerTable />
      </motion.div>
    </MainLayout>
  );
};

export default UserManagement;
