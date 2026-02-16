import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Settings, User, CreditCard, Mail, Bell, Shield,
    Palette, Database, Lock, Save, ChevronRight,
    Upload, MapPin, Clock, Facebook, Instagram, Twitter,
    CheckCircle, AlertCircle, FileText, Globe, Layout, Share2, MoreHorizontal, Plus, Download, Calendar
    , Video, UserPlus
} from 'lucide-react';

// Import new components
import GeneralSettings from '../../components/settings/GeneralSettings';
import BookingSettings from '../../components/settings/BookingSettings';
import PaymentSettings from '../../components/settings/PaymentSettings';
import EmailSettings from '../../components/settings/EmailSettings';
import UserSettings from '../../components/settings/UserSettings';
import AppearanceSettings from '../../components/settings/AppearanceSettings';
import IntegrationsSettings from '../../components/settings/IntegrationsSettings';
import BackupSettings from '../../components/settings/BackupSettings';
import LegalSettings from '../../components/settings/LegalSettings';

const SettingsPage = () => {
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'general';
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const tabs = [
        { id: 'general', label: 'General Settings', icon: Globe },
        { id: 'booking', label: 'Booking Rules', icon: Clock },
        { id: 'payment', label: 'Payments & Billing', icon: CreditCard },
        { id: 'email', label: 'Email & SMTP', icon: Mail },
        { id: 'users', label: 'Users & Roles', icon: User },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'integrations', label: 'Integrations', icon: Share2 },
        { id: 'backup', label: 'Backup & Data', icon: Database },
        { id: 'legal', label: 'Legal Policies', icon: Lock },
    ];

    return (
        <div className="flex h-full bg-background-light dark:bg-background-dark overflow-hidden font-display text-slate-800 dark:text-slate-100">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                {tabs.find(t => t.id === activeTab)?.label || 'Settings'}
                            </h2>
                            <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
                                <Link to="/">Dashboard</Link>
                                <ChevronRight size={14} />
                                <span>Settings</span>
                                <ChevronRight size={14} />
                                <span className="text-primary font-medium">
                                    {tabs.find(t => t.id === activeTab)?.label || 'General'}
                                </span>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-5 py-3 bg-white/50 dark:bg-white/5 border border-white dark:border-white/10 rounded-xl font-medium hover:bg-white dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-200 shadow-sm">
                                <Download size={20} className="text-primary" />
                                Discard
                            </button>
                            <button
                                onClick={() => showNotification("Settings saved successfully!")}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <Save size={20} />
                                Save changes
                            </button>
                        </div>
                    </header>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-4xl mx-auto space-y-8 pb-12"
                    >
                        {/* Dynamic Section Content Placeholder */}
                        {activeTab === 'general' && <GeneralSettings />}
                        {activeTab === 'booking' && <BookingSettings />}
                        {activeTab === 'payment' && <PaymentSettings />}
                        {activeTab === 'email' && <EmailSettings />}
                        {activeTab === 'users' && <UserSettings />}
                        {activeTab === 'appearance' && <AppearanceSettings />}
                        {activeTab === 'integrations' && <IntegrationsSettings />}
                        {activeTab === 'backup' && <BackupSettings />}
                        {activeTab === 'legal' && <LegalSettings />}
                        {/* Add placeholders for other sections... */}
                        {!['general', 'booking', 'payment', 'email', 'users', 'appearance', 'integrations', 'backup', 'legal'].includes(activeTab) && (
                            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                                <Settings size={48} className="mb-4 opacity-20" />
                                <p>Section content needed for: {activeTab}</p>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Notification Toast */}
                <AnimatePresence>
                    {notification && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className={`fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 text-white font-bold backdrop-blur-md
                                ${notification.type === 'success' ? 'bg-emerald-500/90 shadow-emerald-500/20' : 'bg-red-500/90 shadow-red-500/20'}`}
                        >
                            {notification.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                            {notification.message}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SettingsPage;
