import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
    Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
    Clock, Radio, Megaphone, PlusSquare, ArrowUpRight, BookOpen, Layers, MessageCircle,
    ChevronLeft, ChevronRight, LayoutDashboard, Home, LineChart, PieChart,
    Globe, Palette, Share2, Database, Lock, User, RotateCcw, Tag
} from 'lucide-react';




const MotionLink = motion(Link);

const Sidebar = ({ isExpanded, setIsExpanded }) => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('dashboard'); // Default to dashboard

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
        // { id: 'live', icon: Radio, label: 'Live Classes' },
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
            { to: '/bookings/list', label: 'Booking List', icon: Calendar },
            { to: '/bookings/analytics', label: 'Analytics', icon: PieChart },
            // { to: '/bookings/schedule', label: 'Schedule', icon: Clock },
        ],
        /* live: [
             { to: '/live-classes', label: 'Active Classes', icon: Radio },
             { to: '/recordings', label: 'Recordings', icon: Server },
         ],*/
        payments: [
            { to: '/finance', label: 'Billing', icon: CreditCard },
            { to: '/finance/transactions', label: 'Transactions', icon: DollarSign },
            { to: '/finance/invoices', label: 'Invoices', icon: FileCheck },
            { to: '/finance/refunds', label: 'Refunds', icon: RotateCcw },
            { to: '/finance/payouts', label: 'Teacher Payouts', icon: Users },
            { to: '/finance/coupons', label: 'Coupons', icon: Tag },
            { to: '/finance/reports', label: 'Reports', icon: LineChart },
        ],
        reviews: [
            //  { to: '/reviews', label: 'All Reviews', icon: MessageCircle },
            { to: '/chat', label: 'Chats', icon: MessageSquare },
            { to: '/chat/support', label: 'Support & Help', icon: HelpCircle },
        ],
        settings: [
            { to: '/settings?tab=general', label: 'General', icon: Globe },
            { to: '/settings?tab=booking', label: 'Booking Rules', icon: Clock },
            { to: '/settings?tab=payment', label: 'Payments', icon: CreditCard },
            { to: '/settings?tab=email', label: 'Email & SMTP', icon: Mail },
            { to: '/settings?tab=users', label: 'Users & Roles', icon: User },
            { to: '/settings?tab=appearance', label: 'Appearance', icon: Palette },
            { to: '/settings?tab=integrations', label: 'Integrations', icon: Share2 },
            { to: '/settings?tab=backup', label: 'Backup & Data', icon: Database },
            { to: '/settings?tab=legal', label: 'Legal Policies', icon: Lock },
            { to: '/documentation', label: 'Documentation', icon: HelpCircle },
        ],
    };

    const sidebarVariants = {
        expanded: { width: "16rem", opacity: 1, x: 0 },
        collapsed: { width: 0, opacity: 0, x: -20 }
    };

    return (
        <>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                        className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            <aside
                className={`fixed inset-y-0 left-0 z-50 h-full flex transition-transform duration-300 lg:relative lg:translate-x-0 lg:h-screen lg:transition-none
                ${isExpanded ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
                bg-sidebar-light-secondary dark:bg-sidebar-dark-secondary border-r border-primary/10 overflow-hidden`}
            >
                {/* Primary Icon Rail */}
                <div className="w-20 flex flex-col items-center py-6 border-r border-primary/25 bg-white dark:bg-slate-950 z-20 h-full">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 mb-8 cursor-pointer hover:scale-105 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
                        <Music size={24} />
                    </div>

                    <div className="flex-1 flex flex-col gap-4 w-full px-2 overflow-y-auto no-scrollbar">
                        {basicNavItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleCategoryClick(item.id)}
                                className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all shrink-0
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
                <AnimatePresence mode='wait'>
                    {isExpanded && (
                        <motion.div
                            key="secondary-sidebar"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "16rem", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex flex-col bg-sidebar-light-secondary dark:bg-sidebar-dark-secondary h-full overflow-hidden"
                        >
                            <div className="p-6 h-20 flex items-center justify-between border-b border-primary/5 min-w-[16rem]">
                                <h2 className="font-extrabold text-lg text-charcoal dark:text-white tracking-tight whitespace-nowrap">
                                    {basicNavItems.find(i => i.id === activeCategory)?.label}
                                </h2>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-400 hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/5 lg:hidden"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-gray-400 hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/5 hidden lg:block"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                            </div>

                            <div className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar min-w-[16rem]">
                                {subMenus[activeCategory]?.map((link) => {
                                    const isActive = location.pathname === link.to;

                                    return (
                                        <MotionLink
                                            key={link.to}
                                            to={link.to}
                                            onClick={() => {
                                                if (window.innerWidth < 1024) setIsExpanded(false);
                                            }}
                                            initial="rest"
                                            whileHover="hover"
                                            animate="rest"
                                            className={`relative group flex items-center px-4 py-3 rounded-xl font-medium text-sm whitespace-nowrap overflow-hidden transition-colors
                                            ${isActive
                                                    ? 'text-primary font-bold'
                                                    : 'text-gray-500 dark:text-gray-400'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-sidebar-bg"
                                                    className="absolute inset-0 z-0 bg-primary/10 rounded-xl"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}

                                            {!isActive && (
                                                <motion.div
                                                    className="absolute inset-0 z-0 bg-primary/5 rounded-xl"
                                                    variants={{
                                                        rest: { x: '-100%', opacity: 0 },
                                                        hover: { x: '0%', opacity: 1 }
                                                    }}
                                                    transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
                                                />
                                            )}

                                            <div className="relative z-10 flex items-center gap-3 transition-colors duration-200 group-hover:text-primary">
                                                <link.icon size={18} />
                                                <span>{link.label}</span>
                                            </div>
                                        </MotionLink>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </aside>
        </>
    );
};

export default Sidebar;
