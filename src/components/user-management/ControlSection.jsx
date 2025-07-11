import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/outline';
import addIcon from '../../assets/icons/add.svg';

const ControlSection = ({
  searchTerm,
  setSearchTerm,
  selectAll,
  setSelectAll,
  selectedRows,
  setSelectedRows,
  statusFilter,
  setStatusFilter,
  onDeleteSelected,
  onAddUser
}) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full justify-between">
      {/* Left controls: Search + Select All in a row, Delete below on mobile */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 sm:gap-4 w-full sm:w-auto">
        {/* Row: Search + Select All */}
        <div className="flex flex-row items-center gap-1 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative w-70 sm:w-64">
            <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black text-white pl-8 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 rounded-lg border border-gray-600 focus:border-white focus:outline-none w-full placeholder-gray-400 text-xs sm:text-sm"
            />
          </div>
          {/* Select All Checkbox */}
          <label className="flex items-center gap-1 sm:gap-2 text-gray-400 cursor-pointer w-auto text-sm sm:text-sm ml-3">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={() => setSelectAll(!selectAll)}
              className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
            />
            <span>Select All</span>
          </label>
        </div>
        {/* Delete Button - below on mobile, inline on desktop */}
        {(selectAll || selectedRows.length > 0) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-red-600/20 border border-red-600/30 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors w-full sm:w-auto justify-center text-xs sm:text-sm mt-1 sm:mt-0"
            onClick={onDeleteSelected}
          >
            <TrashIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Delete ({selectedRows.length})</span>
          </motion.button>
        )}
      </div>
      {/* Right controls: Status Filter, Add User */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 w-full= sm:w-auto">
        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-800/50 text-white px-2 sm:px-4 py-2 sm:py-2 rounded-lg border border-gray-600/50 focus:border-purple-500 focus:outline-none hover:bg-gray-700/50 transition-all duration-200 cursor-pointer w-50 sm:min-w-[120px] sm:w-auto text-xs sm:text-sm"
        >
          <option className="bg-gray-800 text-white">All Status</option>
          <option className="bg-gray-800 text-white">Active</option>
          <option className="bg-gray-800 text-white">Cancelled</option>
        </select>
        {/* Add User Button */}
        <motion.button 
          onClick={onAddUser}
          className="btn-primary flex items-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl w-50 sm:w-auto justify-center mx-auto sm:mx-0 text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-2"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={addIcon} alt="Add" className="w-3 h-3 sm:w-4 sm:h-4 filter brightness-0" />
          <span>Add User</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ControlSection;
