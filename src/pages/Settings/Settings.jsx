import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Settings, User, CreditCard, Mail, Bell, Shield,
    Palette, Database, Lock, Save, ChevronRight,
    Upload, MapPin, Clock, Facebook, Instagram, Twitter,
    CheckCircle, AlertCircle, FileText, Globe, Layout, Share2, MoreHorizontal, Plus, Download, Calendar
    , Video
} from 'lucide-react';

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
                {/* Header */}
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 z-10 transition-colors">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        {React.createElement(tabs.find(t => t.id === activeTab)?.icon || Settings, { className: "text-primary", size: 20 })}
                        {tabs.find(t => t.id === activeTab)?.label}
                    </h2>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                            Discard
                        </button>
                        <button
                            onClick={() => showNotification("Settings saved successfully!")}
                            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-4xl mx-auto space-y-8 pb-12"
                    >
                        {/* Dynamic Section Content Placeholder */}
                        {activeTab === 'general' && <GeneralSettingsSection />}
                        {activeTab === 'booking' && <BookingSettingsSection />}
                        {activeTab === 'payment' && <PaymentSettingsSection />}
                        {activeTab === 'email' && <EmailSettingsSection />}
                        {activeTab === 'users' && <UserSettingsSection />}
                        {activeTab === 'appearance' && <AppearanceSettingsSection />}
                        {activeTab === 'integrations' && <IntegrationsSettingsSection />}
                        {activeTab === 'backup' && <BackupSettingsSection />}
                        {activeTab === 'legal' && <LegalSettingsSection />}
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

// --- Sub-Components (Conceptual Placeholders for Phase 1) ---

const GeneralSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Academy Identity" description="Basic information about your music academy.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <InputGroup label="Academy Name" placeholder="e.g. Beethoven Music Academy" defaultValue="Adaggio Music Academy" />
                    <div className="flex gap-4">
                        <InputGroup label="Phone Number" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" />
                        <InputGroup label="Email Address" placeholder="admin@academy.com" defaultValue="contact@adaggio.com" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-slate-400">LOGO</span>
                    </div>
                    <button className="text-sm font-bold text-primary flex items-center gap-2 hover:underline">
                        <Upload size={16} /> Upload Logo
                    </button>
                    <p className="text-xs text-slate-400 mt-2">PNG, JPG up to 2MB</p>
                </div>
            </div>
        </SectionCard>

        <SectionCard title="Location" description="Address displayed on invoices and contact page.">
            <InputGroup label="Full Address" placeholder="123 Music Lane, New York, NY" defaultValue="123 Harmony St, Suite 400, New York, NY 10001" />
            <div className="h-48 bg-slate-100 dark:bg-slate-800/50 rounded-xl mt-4 flex items-center justify-center text-slate-400 border border-slate-200 dark:border-white/5">
                <MapPin size={32} className="mr-2 opacity-50" /> Map Preview (Integration Pending)
            </div>
        </SectionCard>
    </div>
);

const BookingSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Booking Rules" description="Configure how students can book lessons.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Buffer Time (Minutes)" type="number" defaultValue="15" description="Gap between consecutive lessons." />
                <InputGroup label="Max Advance Booking (Days)" type="number" defaultValue="30" description="How far ahead students can book." />
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                    <h4 className="font-bold text-slate-700 dark:text-slate-200">Auto-Confirm Bookings</h4>
                    <p className="text-xs text-slate-500">Automatically confirm bookings without manual approval.</p>
                </div>
                {/* Mock Toggle */}
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
            </div>
        </SectionCard>
        <SectionCard title="Policies" description="Terms displayed during booking.">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Cancellation Policy</label>
                    <textarea className="w-full h-24 p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200" defaultValue="Cancellations must be made at least 24 hours in advance..." />
                </div>
            </div>
        </SectionCard>
    </div>
);

const PaymentSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Payment Gateways" description="Manage your payment providers securely.">
            <div className="space-y-4">
                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">S</div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">Stripe</h4>
                            <p className="text-xs text-emerald-500 font-bold flex items-center gap-1"><CheckCircle size={10} /> Connected</p>
                        </div>
                    </div>
                    <button className="px-3 py-1.5 border border-slate-300 dark:border-white/20 rounded-lg text-xs font-bold hover:bg-white/50 dark:hover:bg-white/10 transition-colors">Configure</button>
                </div>
                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">P</div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">PayPal</h4>
                            <p className="text-xs text-slate-400">Not connected</p>
                        </div>
                    </div>
                    <button className="px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-xs font-bold hover:opacity-90 shadow-md">Connect</button>
                </div>
            </div>
        </SectionCard>
        <SectionCard title="Currency & Tax" description="Set your billing currency and tax rates.">
            <div className="grid grid-cols-2 gap-6">
                <InputGroup label="Currency" defaultValue="USD ($)" />
                <InputGroup label="Default Tax Rate (%)" defaultValue="8.5" />
            </div>
        </SectionCard>
    </div>
);

// Define other sections as null for now to avoid errors if they are rendered
// --- Email & SMTP Settings ---
const EmailSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="SMTP Configuration" description="Configure your email server for outgoing messages.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="SMTP Host" placeholder="smtp.example.com" defaultValue="smtp.gmail.com" />
                <InputGroup label="SMTP Port" placeholder="587" defaultValue="587" />
                <InputGroup label="Username" placeholder="user@example.com" defaultValue="admin@adaggio.com" />
                <InputGroup label="Password" type="password" placeholder="••••••••" defaultValue="password123" />
            </div>
            <div className="mt-4 flex items-center gap-2">
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
                    Test Connection
                </button>
            </div>
        </SectionCard>
        <SectionCard title="Email Templates" description="Customize automated email notifications.">
            <div className="space-y-4">
                {['Booking Confirmation', 'Payment Receipt', 'Welcome Email'].map((template) => (
                    <div key={template} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-primary shadow-sm group-hover:shadow-md transition-shadow">
                                <FileText size={18} />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200">{template}</span>
                        </div>
                        <button className="text-xs font-bold text-primary hover:underline">Edit Template</button>
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);

// --- User Management Settings ---
const UserSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Team Members" description="Manage access for administrators and staff.">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            <th className="py-3 px-2">User</th>
                            <th className="py-3 px-2">Role</th>
                            <th className="py-3 px-2">Status</th>
                            <th className="py-3 px-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { name: 'Admin User', email: 'admin@adaggio.com', role: 'Super Admin', status: 'Active' },
                            { name: 'Sarah Connor', email: 'sarah@adaggio.com', role: 'Manager', status: 'Active' },
                            { name: 'John Doe', email: 'john@adaggio.com', role: 'Instructor', status: 'Invite Sent' },
                        ].map((user, idx) => (
                            <tr key={idx} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-100">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-2">
                                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-4 px-2">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Active'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-4 px-2 text-right">
                                    <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                        <MoreHorizontal size={16} /> {/* Placeholder icon usage */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <button className="w-full py-2.5 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-500 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                    <User size={16} /> Invite New Member
                </button>
            </div>
        </SectionCard>
    </div>
);

// --- Appearance & Branding Settings ---
const AppearanceSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Theme Preferences" description="Customize implementation appearance.">
            <div className="grid grid-cols-3 gap-4">
                {['Light', 'Dark', 'System'].map((theme) => (
                    <div key={theme} className={`
                        p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center gap-3 relative overflow-hidden
                        ${theme === 'Light' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'}
                    `}>
                        <div className={`w-full h-20 rounded-lg shadow-sm ${theme === 'Light' ? 'bg-white border border-slate-200' :
                            theme === 'Dark' ? 'bg-slate-900 border border-slate-800' :
                                'bg-gradient-to-br from-white to-slate-900 border border-slate-200'
                            }`} />
                        <span className={`font-bold text-sm ${theme === 'Light' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>{theme}</span>
                        {theme === 'Light' && <div className="absolute top-2 right-2 text-primary"><CheckCircle size={16} fill="currentColor" className="text-white" /></div>}
                    </div>
                ))}
            </div>
        </SectionCard>
        <SectionCard title="Brand Colors" description="Set your primary brand color used across buttons and links.">
            <div className="flex gap-4">
                {['#ff5724', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'].map((color) => (
                    <div key={color} className="relative group cursor-pointer">
                        <div
                            className="w-10 h-10 rounded-full shadow-sm ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 transition-transform active:scale-90"
                            style={{ backgroundColor: color, ringColor: color === '#ff5724' ? color : 'transparent' }}
                        />
                        {color === '#ff5724' && (
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <CheckCircle size={16} />
                            </div>
                        )}
                    </div>
                ))}
                <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <Plus size={18} /> {/* Placeholder icon usage */}
                </button>
            </div>
        </SectionCard>
    </div>
);

// --- Integrations Settings ---
const IntegrationsSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Connected Apps" description="Manage third-party integrations.">
            <div className="space-y-4">
                {[
                    { name: 'Google Calendar', icon: Calendar, status: 'Connected', description: 'Sync lessons and events.' },
                    { name: 'Zoom', icon: Video, status: 'Connect', description: 'Generate meeting links automatically.' },
                    { name: 'QuickBooks', icon: FileText, status: 'Connect', description: 'Sync invoices and payments.' },
                ].map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.status === 'Connected' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                                }`}>
                                <app.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-white">{app.name}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{app.description}</p>
                            </div>
                        </div>
                        <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${app.status === 'Connected'
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20'
                            : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/10'
                            }`}>
                            {app.status === 'Connected' ? 'Manage' : 'Connect'}
                        </button>
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);


// --- Backup & Data Settings ---
const BackupSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Data Export" description="Download a copy of your data.">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Database size={20} className="text-slate-400" />
                    <div>
                        <p className="font-bold text-sm">Export All Data (JSON)</p>
                        <p className="text-xs text-slate-500">Includes students, bookings, and payments.</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                    <Download size={16} /> Download
                </button>
            </div>
        </SectionCard>
        <SectionCard title="Automatic Backups" description="Configure scheduled backups.">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                    <h4 className="font-bold text-slate-700 dark:text-slate-200">Daily Nightly Backup</h4>
                    <p className="text-xs text-slate-500">Last backup: Today at 3:00 AM</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
            </div>
        </SectionCard>
    </div>
);

// --- Legal Settings ---
const LegalSettingsSection = () => (
    <div className="space-y-6">
        <SectionCard title="Legal Documents" description="Manage terms and policies visible to users.">
            <div className="space-y-4">
                {[
                    { name: 'Terms of Service', updated: '2 months ago' },
                    { name: 'Privacy Policy', updated: '1 month ago' },
                    { name: 'Cookie Policy', updated: '6 months ago' },
                ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <FileText size={18} className="text-slate-400" />
                            <div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-white">{doc.name}</h4>
                                <p className="text-xs text-slate-500">Last updated: {doc.updated}</p>
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-400" />
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);


// --- Reusable UI Helpers ---

const SectionCard = ({ title, description, children }) => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-glow">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
            {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>}
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const InputGroup = ({ label, type = "text", placeholder, defaultValue, description }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
        />
        {description && <p className="text-xs text-slate-400">{description}</p>}
    </div>
);

export default SettingsPage;
