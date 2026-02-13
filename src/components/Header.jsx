import React, { useState, useEffect } from 'react';
import {
    Search, Bell, MessageSquare, Moon, Sun, Menu, LayoutGrid, Mail,
    User, Settings, LogOut, ChevronDown, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    // Theme State
    const [isDark, setIsDark] = useState(false);

    // Search State
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Dropdown States
    const [activeDropdown, setActiveDropdown] = useState(null); // 'notifications', 'messages', 'profile'

    // Toggle Theme
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <header className="h-20 px-8 flex items-center justify-between transition-all duration-300 bg-transparent flex-shrink-0 relative z-50">

            {/* Left Section: Menu & Search */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="text-slate-500 hover:text-primary transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 p-2.5 rounded-xl"
                >
                    <Menu size={24} />
                </button>

                {/* Expandable Search Bar */}
                <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64 bg-white dark:bg-slate-800 shadow-lg' : 'w-10 bg-transparent'} rounded-xl overflow-hidden`}>
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`text-slate-500 hover:text-primary transition-colors p-2.5 ${isSearchOpen ? 'hover:bg-slate-50 dark:hover:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl'}`}
                    >
                        {isSearchOpen ? <Search size={20} className="text-primary" /> : <Search size={24} />}
                    </button>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`bg-transparent border-none outline-none text-sm px-2 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 w-full ${isSearchOpen ? 'opacity-100' : 'opacity-0'}`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {isSearchOpen && (
                        <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="p-2 text-slate-400 hover:text-slate-600">
                            <X size={16} />
                        </button>
                    )}
                </div>
            </div>

            {/* Right Section: Actions & Profile */}
            <div className="flex items-center gap-4">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="text-slate-500 hover:text-primary transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 p-2.5 rounded-xl relative overflow-hidden"
                >
                    <AnimatePresence mode='wait' initial={false}>
                        <motion.div
                            key={isDark ? 'dark' : 'light'}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isDark ? <Sun size={24} /> : <Moon size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </button>

                {/* Messages Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('messages')}
                        className={`relative text-slate-500 hover:text-primary transition-colors p-2.5 rounded-xl ${activeDropdown === 'messages' ? 'bg-slate-100 text-primary dark:bg-slate-800' : 'hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
                    >
                        <Mail size={24} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    {/* Mock Dropdown Content */}
                    <AnimatePresence>
                        {activeDropdown === 'messages' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 origin-top-right"
                            >
                                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <h3 className="font-bold text-slate-800 dark:text-white">Messages</h3>
                                    <span className="text-xs font-bold text-primary cursor-pointer hover:underline">Mark all read</span>
                                </div>
                                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-800/50 last:border-0 flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
                                                JD
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 dark:text-white">John Doe</p>
                                                <p className="text-xs text-slate-500 line-clamp-1">Hey, I wanted to ask about the piano lesson schedule for next week...</p>
                                                <p className="text-[10px] text-slate-400 mt-1">2 mins ago</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center">
                                    <Link to="/chat" className="text-sm font-bold text-primary hover:underline">View all in Chat</Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Notifications Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('notifications')}
                        className={`relative text-slate-500 hover:text-primary transition-colors p-2.5 rounded-xl ${activeDropdown === 'notifications' ? 'bg-slate-100 text-primary dark:bg-slate-800' : 'hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
                    >
                        <Bell size={24} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    {/* Mock Dropdown Content */}
                    <AnimatePresence>
                        {activeDropdown === 'notifications' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 origin-top-right"
                            >
                                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                    <h3 className="font-bold text-slate-800 dark:text-white">Notifications</h3>
                                    <span className="text-xs font-bold text-slate-400">Clear all</span>
                                </div>
                                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                    {[1, 2, 3, 4].map((_, i) => (
                                        <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-800/50 last:border-none flex gap-3">
                                            <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${i === 0 ? 'bg-primary' : 'bg-slate-300'}`}></div>
                                            <div>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                                    <span className="font-bold text-slate-800 dark:text-white">Sarah Connor</span> booked a new lesson.
                                                </p>
                                                <p className="text-[10px] text-slate-400 mt-1">10:30 AM</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Profile Dropdown */}
                <div className="relative ml-2">
                    <button
                        onClick={() => toggleDropdown('profile')}
                        className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrWV5lLvMZ6vQcl1E1Nhz2akbmN32mWdZXODox34Cy7YGMB_0-u7lsVZWeo7wmK0KvRDYlXsqJInCjJMMCLEdv_ro8z7CLbbhiFZ9fNvSHQAN47wGZVDWNLhyG5D7KQfD4aKfeU_vAJyC20h-5hPC6Wg7faYhNvpel2rBKXkgMlG-TQQynQ989mUzTDsC6JOtG4jB_mqd7HQ8aRR1YN_UpqGAx_njVOahc9uwICJFFTmvoMCia8kzMEFq68_XVnbzcFRKSQEdrPIt"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-bold text-slate-700 dark:text-white leading-tight">Admin User</p>
                            <p className="text-[10px] text-slate-500 font-medium">Super Admin</p>
                        </div>
                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {activeDropdown === 'profile' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 origin-top-right"
                            >
                                <div className="p-2 border-b border-slate-50 dark:border-slate-800">
                                    <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white group">
                                        <Settings size={18} className="group-hover:text-primary transition-colors" />
                                        <span className="text-sm font-bold">Settings</span>
                                    </Link>
                                    <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white group">
                                        <User size={18} className="group-hover:text-primary transition-colors" />
                                        <span className="text-sm font-bold">My Profile</span>
                                    </Link>
                                </div>
                                <div className="p-2">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-red-500 group">
                                        <LogOut size={18} className="group-hover:text-red-600 transition-colors" />
                                        <span className="text-sm font-bold">Logout</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;
