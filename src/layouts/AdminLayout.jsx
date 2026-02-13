import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      <Sidebar isExpanded={isSidebarOpen} setIsExpanded={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
