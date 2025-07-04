import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children, pageTitle }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Header pageTitle={pageTitle} />
        <main className="content-area">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
