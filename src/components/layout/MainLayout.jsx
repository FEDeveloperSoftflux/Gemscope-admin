import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Header pageTitle={pageTitle} onMenuToggle={toggleSidebar} />
        <main className="content-area">
          <div className="content-wrapper">
            {children}
            <div className="pb-16"></div>
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;
