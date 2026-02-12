import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
    Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
    Clock, Radio, Megaphone, PlusSquare, ArrowUpRight, BookOpen, Layers, MessageCircle,
    ChevronLeft, ChevronRight, LayoutDashboard, Home, LineChart
} from 'lucide-react';

const Sidebar = () => {
    const [activeCategory, setActiveCategory] = useState('dashboard'); // Default to dashboard
    const [isExpanded, setIsExpanded] = useState(true);

    const handleCategoryClick = (id) => {
        if (activeCategory === id) {
            setIsExpanded(!isExpanded);
        } else {
            setActiveCategory(id);
            setIsExpanded(true);
        }
    };

    const basicNavItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' }, // Added Dashboard
        { id: 'management', icon: Users, label: 'Management' },
        { id: 'booking', icon: Calendar, label: 'Booking' },
        { id: 'live', icon: Radio, label: 'Live Classes' },
        { id: 'payments', icon: DollarSign, label: 'Payments' },
        { id: 'reviews', icon: MessageCircle, label: 'Reviews' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    const subMenus = {
        dashboard: [
            { to: '/', label: 'Dashboard Home', icon: Home },
            { to: '/analytics', label: 'Analytics & Reports', icon: LineChart },
            { to: '/dashboard2', label: 'Dashboard 2', icon: Grid },
        ],
        management: [
            { to: '/users', label: 'User Management', icon: Users },
            { to: '/teachers', label: 'Teacher Management', icon: GraduationCap },
            { to: '/resources', label: 'Inventory & Classes', icon: Piano },
            { to: '/lessons', label: 'Lesson Management', icon: BookOpen },
            { to: '/reviews', label: 'Testimonials', icon: MessageCircle },
        ],
        // ... other subMenus ...
        booking: [
            { to: '/bookings', label: 'All Bookings', icon: Calendar },
            { to: '/schedule', label: 'Schedule', icon: Clock },
        ],
        live: [
            { to: '/live-classes', label: 'Active Classes', icon: Radio },
            { to: '/recordings', label: 'Recordings', icon: Server },
        ],
        payments: [
            { to: '/finance', label: 'Billing', icon: CreditCard },
            { to: '/invoices', label: 'Invoices', icon: FileCheck },
        ],
        reviews: [
            { to: '/chat', label: 'Chats', icon: MessageCircle },
        ],
        settings: [
            { to: '/settings', label: 'General Settings', icon: Settings },
            { to: '/documentation', label: 'Documentation', icon: HelpCircle },
        ]
    };

    const sidebarVariants = {
        expanded: { width: "16rem", opacity: 1, x: 0 },
        collapsed: { width: 0, opacity: 0, x: -20 }
    };

    return (
        <aside className="h-screen bg-white dark:bg-background-dark/50 border-r border-primary/10 flex overflow-hidden hidden lg:flex">
            {/* Primary Icon Rail */}
            <div className="w-20 flex flex-col items-center py-6 border-r border-primary/5 bg-gray-50/50 dark:bg-background-dark/30 z-20">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 mb-8 cursor-pointer hover:scale-105 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
                    <Music size={24} />
                </div>

                <div className="flex-1 flex flex-col gap-4 w-full px-2">
                    {basicNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleCategoryClick(item.id)}
                            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all
                                ${activeCategory === item.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-gray-400 hover:bg-primary/5 hover:text-primary'
                                }`}
                            title={item.label}
                        >
                            <item.icon size={20} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Secondary Sub-menu Rail */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key="secondary-sidebar"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={sidebarVariants}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="flex flex-col bg-white dark:bg-background-dark border-r border-primary/5 overflow-hidden"
                    >
                        <div className="p-6 h-20 flex items-center justify-between border-b border-primary/5 min-w-[16rem]">
                            <h2 className="font-extrabold text-lg text-charcoal dark:text-white tracking-tight whitespace-nowrap">
                                {basicNavItems.find(i => i.id === activeCategory)?.label}
                            </h2>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="text-gray-400 hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/5"
                            >
                                <ChevronLeft size={18} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar min-w-[16rem]">
                            {subMenus[activeCategory]?.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm whitespace-nowrap
                                        ${isActive
                                            ? 'bg-primary/10 text-primary font-bold'
                                            : 'text-gray-500 dark:text-gray-400 hover:bg-primary/5 hover:text-primary'
                                        }`}
                                >
                                    <link.icon size={18} />
                                    <span>{link.label}</span>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    );
};

export default Sidebar;
