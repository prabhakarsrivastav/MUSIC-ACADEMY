import React, { useState, useEffect } from 'react';
import {
    Search, Bell, MessageSquare, Moon, Sun, Menu, LayoutGrid, Mail,
    User, Settings, LogOut, ChevronDown, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CommandPalette from './CommandPalette';

const Header = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); // Use context

    // Theme State
    const [isDark, setIsDark] = useState(false);

    // Search State
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

    const handleLogout = () => {
        logout(); // Use context logout
        navigate('/login');
    };

    // Keyboard shortcut for Command Palette
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsCommandPaletteOpen(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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

    // Mobile Menu State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleUserIconClick = () => {
        if (window.innerWidth < 768) {
            setIsMobileMenuOpen(true);
        } else {
            toggleDropdown('profile');
        }
    };

    return (
        <>
            <header className="h-20 px-4 md:px-8 grid grid-cols-4 md:flex items-center justify-between transition-all duration-300 bg-transparent flex-shrink-0 relative z-40 rounded-b-3xl md:rounded-none shadow-sm md:shadow-none bg-white/50 dark:bg-slate-900/50 md:bg-transparent md:dark:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/20 dark:border-white/10 md:border-none gap-0 md:gap-4">

                {/* Left Section: Menu & Search */}
                <div className="contents md:flex items-center gap-4">
                    <div className="flex justify-center md:block">
                        <button
                            onClick={toggleSidebar}
                            className="text-slate-500 hover:text-primary transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 p-2.5 rounded-xl"
                        >
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Expandable Search Bar */}
                    {/* Command Palette Trigger */}
                    <div className="flex justify-center md:block">
                        <button
                            onClick={() => setIsCommandPaletteOpen(true)}
                            className="flex items-center gap-0 md:gap-3 p-2.5 md:px-4 md:py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-slate-500 dark:text-slate-400 transition-colors group"
                        >
                            <Search size={20} className="group-hover:text-primary transition-colors" />

                        </button>
                    </div>

                    <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} />
                </div>

                {/* Right Section: Actions & Profile */}
                <div className="contents md:flex items-center gap-4">

                    {/* Theme Toggle */}
                    <div className="flex justify-center md:block">
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
                    </div>

                    {/* Desktop Only Icons */}
                    <div className="hidden md:flex items-center gap-4">
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
                    </div>

                    {/* Profile Dropdown / Mobile Menu Trigger */}
                    <div className="relative ml-2 flex justify-center md:block">
                        <button
                            onClick={handleUserIconClick}
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
                                <p className="text-sm font-bold text-slate-700 dark:text-white leading-tight">{user?.name || 'Admin User'}</p>
                                <p className="text-[10px] text-slate-500 font-medium">{user?.email || 'Super Admin'}</p>
                            </div>
                            <ChevronDown size={14} className={`hidden md:block text-slate-400 transition-transform duration-300 ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {(activeDropdown === 'profile' && window.innerWidth >= 768) && (
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
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-red-500 group"
                                        >
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

            {/* Mobile Menu Modal - Centered with Blurred Background */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/20 backdrop-blur-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                        >
                            <div className="p-6 text-center border-b border-slate-100 dark:border-slate-800">
                                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-4 border-slate-100 dark:border-slate-800">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrWV5lLvMZ6vQcl1E1Nhz2akbmN32mWdZXODox34Cy7YGMB_0-u7lsVZWeo7wmK0KvRDYlXsqJInCjJMMCLEdv_ro8z7CLbbhiFZ9fNvSHQAN47wGZVDWNLhyG5D7KQfD4aKfeU_vAJyC20h-5hPC6Wg7faYhNvpel2rBKXkgMlG-TQQynQ989mUzTDsC6JOtG4jB_mqd7HQ8aRR1YN_UpqGAx_njVOahc9uwICJFFTmvoMCia8kzMEFq68_XVnbzcFRKSQEdrPIt"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{user?.name || 'Admin User'}</h3>
                                <p className="text-sm text-slate-500">{user?.email || 'Super Admin'}</p>
                            </div>

                            <div className="p-4 grid grid-cols-2 gap-3">
                                <Link
                                    to="/notifications"
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Bell size={24} className="text-slate-600 dark:text-slate-300 mb-2" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Notifications</span>
                                    <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                </Link>

                                <Link
                                    to="/chat"
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Mail size={24} className="text-slate-600 dark:text-slate-300 mb-2" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Messages</span>
                                    <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
                                </Link>

                                <Link
                                    to="/settings"
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Settings size={24} className="text-slate-600 dark:text-slate-300 mb-2" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Settings</span>
                                </Link>

                                <Link
                                    to="/teachers/profile"
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <User size={24} className="text-slate-600 dark:text-slate-300 mb-2" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Profile</span>
                                </Link>
                            </div>

                            <div className="p-4 pt-0">
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-red-500 hover:bg-red-600 transition-colors text-white shadow-lg shadow-red-500/20"
                                >
                                    <LogOut size={18} />
                                    <span className="font-bold">Logout</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );

};

export default Header;
