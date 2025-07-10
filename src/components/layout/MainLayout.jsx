import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to open sidebar (for hamburger)
  const openSidebar = () => setSidebarOpen(true);
  // Function to close sidebar (for overlay/hamburger)
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="main-layout">
      {/* Hamburger button (only on small screens, outside sidebar) */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-gray-800 text-white focus:outline-none"
        onClick={openSidebar}
        aria-label="Open sidebar"
        style={{ display: sidebarOpen ? 'none' : 'block' }}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Sidebar with open/close state */}
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />
      {/* Overlay for small screens when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div className="main-content">
        <Header pageTitle={pageTitle} />
        <main className="content-area">
          <div className="content-wrapper">
            {children}
            <div className="pb-16"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
