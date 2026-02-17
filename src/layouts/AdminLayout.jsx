import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(window.innerWidth >= 1024);

  // Optional: Listen for resize events to auto-fix state if needed, but not strictly necessary for simple cases
  // React.useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //        setIsSidebarOpen(true);
  //     } else {
  //        setIsSidebarOpen(false);
  //     }
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      <Sidebar isExpanded={isSidebarOpen} setIsExpanded={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
