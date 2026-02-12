import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
