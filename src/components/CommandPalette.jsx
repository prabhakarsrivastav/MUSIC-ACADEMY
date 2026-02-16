import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Search, Command, X, ArrowRight, LayoutDashboard, Users, CreditCard, MessageSquare, Settings, HelpCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Define available commands/routes
    const commands = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            icon: <LayoutDashboard size={18} />,
            path: '/',
            section: 'Navigation'
        },
        {
            id: 'users',
            title: 'Students & Users',
            icon: <Users size={18} />,
            path: '/users',
            section: 'Navigation'
        },
        {
            id: 'chat',
            title: 'Messages',
            icon: <MessageSquare size={18} />,
            path: '/chat',
            section: 'Navigation'
        },
        {
            id: 'finance',
            title: 'Finance Overview',
            icon: <CreditCard size={18} />,
            path: '/finance', // Assuming main finance route or redirect
            section: 'Finance'
        },
        {
            id: 'transactions',
            title: 'Transactions',
            icon: <FileText size={18} />,
            path: '/finance/transactions',
            section: 'Finance'
        },
        {
            id: 'invoices',
            title: 'Invoices',
            icon: <FileText size={18} />,
            path: '/finance/invoices',
            section: 'Finance'
        },
        {
            id: 'payouts',
            title: 'Teacher Payouts',
            icon: <CreditCard size={18} />,
            path: '/finance/payouts',
            section: 'Finance'
        },
        {
            id: 'analytics',
            title: 'Analytics',
            icon: <LayoutDashboard size={18} />, // Reusing icon or finding better match
            path: '/analytics', // Assuming route exists
            section: 'Navigation'
        },
        {
            id: 'support',
            title: 'Help & Support',
            icon: <HelpCircle size={18} />,
            path: '/support',
            section: 'General'
        },
        {
            id: 'settings',
            title: 'Settings',
            icon: <Settings size={18} />,
            path: '/settings',
            section: 'General'
        }
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Reset selection on search change
    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    handleSelect(filteredCommands[selectedIndex]);
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredCommands]);

    const handleSelect = (command) => {
        navigate(command.path);
        onClose();
        setSearchQuery('');
    };

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, x: '-50%' }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-1/2 left-1/2 w-[90%] md:w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-[101] overflow-hidden flex flex-col max-h-[80vh] md:max-h-[600px]"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800">
                            <Search className="text-slate-400 mr-3" size={20} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search pages..."
                                className="flex-1 bg-transparent border-none outline-none text-lg text-slate-800 dark:text-white placeholder:text-slate-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2 font-mono text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                    <span className="text-xs">ESC</span>
                                </kbd>
                            </div>
                        </div>

                        {/* Results List */}
                        <div className="overflow-y-auto p-2 custom-scrollbar flex-1">
                            {filteredCommands.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredCommands.map((cmd, index) => (
                                        <div
                                            key={cmd.id}
                                            onClick={() => handleSelect(cmd)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${index === selectedIndex
                                                ? 'bg-primary/10 text-primary dark:bg-white/5 dark:text-white'
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`${index === selectedIndex ? 'text-primary dark:text-white' : 'text-slate-400'}`}>
                                                    {cmd.icon}
                                                </div>
                                                <span className="font-medium text-sm">{cmd.title}</span>
                                            </div>
                                            {index === selectedIndex && (
                                                <ArrowRight size={16} className="opacity-50" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center text-slate-500">
                                    <p>No results found.</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-[10px] text-slate-400">
                            <div className="flex gap-4">
                                <span><span className="font-bold">↑↓</span> to navigate</span>
                                <span><span className="font-bold">↵</span> to select</span>
                            </div>
                            <span>Global Command Palette</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CommandPalette;
