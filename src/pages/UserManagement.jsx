import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import CustomerTable from '../components/user-management/CustomerTable';
import ControlSection from '../components/user-management/ControlSection';

const UserManagement = () => {
  // State lifted from CustomerTable
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Handler for delete selected
  const handleDeleteSelected = () => {
    // You may want to show a modal here, or handle deletion
    setSelectedRows([]);
    setSelectAll(false);
    // Add your modal or success logic here
  };

  // Handler for add user (open modal, etc.)
  const handleAddUser = () => {
    // You may want to open a modal here
  };

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
          <p className="text-white/50">
            Manage your customers and their account permissions here.
          </p>
        </div>

        {/* Controls Section above CustomerTable */}
        <ControlSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onDeleteSelected={handleDeleteSelected}
          onAddUser={handleAddUser}
        />

        <CustomerTable
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </motion.div>
    </MainLayout>
  );
};

export default UserManagement;
