
import React, { useState } from 'react';
import {
    Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
    Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
    Clock, Radio, Megaphone, PlusSquare, ArrowUpRight, BookOpen, Layers, MessageCircle,
    ChevronLeft, ChevronRight, LayoutDashboard, Home, LineChart, Star, Activity, Briefcase, MapPin,
    AtSign, Phone, BadgeCheck, Edit, UserX, Send, FileText, Download, History, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const StudentProfile = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <span>Management</span>
                <ChevronRight size={14} />
                <Link to="/users" className="hover:text-primary transition-colors">Students</Link>
                <ChevronRight size={14} />
                <span className="text-primary font-medium">Clara Deschamps</span>
            </div>

            <motion.div
                className="flex flex-col lg:grid lg:grid-cols-10 gap-6 lg:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left Sidebar (30%) */}
                <aside className="lg:col-span-3 space-y-6">
                    {/* Profile Card */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-sm border border-primary/5 flex flex-col items-center text-center">
                        <div className="relative mb-6">
                            <div className="w-32 h-32 rounded-full border-4 border-primary/10 p-1">
                                <img alt="Clara Deschamps" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAApMXMuWARaK58945oEtDLGxONfLEMZ8f5QDpUSAK_HzNvlOlruahMwcKNp8UJDjf2NOj6xAmyZOjYApGlXvGOcXnwAu_5JS35OqzQj1CGrwZu8PvS03GDZUVwKNZb1duLvClc-dWqDTfS6iCdd85HkoMTJXK6WUsgDfMv_HupR9C4tlm17yTWKzYfy_J4T1Cf1tKqEAQBSgQnAcqChO99eJiAnoCOB-KViRROVkyEEIEwvee9sThfqpkddBKOaKX5yCB4FOgrGYY8" />
                            </div>
                            <span className="absolute bottom-1 right-2 bg-emerald-500 border-4 border-white dark:border-slate-900 w-6 h-6 rounded-full" title="Active"></span>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Clara Deschamps</h1>
                        <p className="text-primary font-medium mb-4">Intermediate Piano Student</p>
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full">ACTIVE</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full">GRADE 5</span>
                        </div>
                        <div className="w-full space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <AtSign className="text-primary" size={18} />
                                <span>clara.d@example.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone className="text-primary" size={18} />
                                <span>+1 (514) 555-0123</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                                <MapPin className="text-primary" size={18} />
                                <span>123 Maple Ave, Montreal, QC</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <User className="text-primary" size={18} />
                                <span>Parent: Marie Deschamps</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Attendance</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">96%</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Practice Avg</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">4.5h</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Assignments</p>
                            <div className="flex items-center gap-1">
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
                                <span className="text-xs text-emerald-500 font-bold">/ 12</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Next Exam</p>
                            <p className="text-[10px] font-bold text-slate-900 dark:text-white pt-2">Aug 15, 2024</p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                            <Edit size={18} /> Edit Student Details
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Message
                            </button>
                            <button className="py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                                <FileText size={18} /> Report
                            </button>
                        </div>
                    </motion.div>
                </aside>

                {/* Right Content Area (70%) */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Navigation Tabs */}
                    <div className="sticky top-0 z-10 bg-background-light dark:bg-background-dark pt-2 pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:static lg:pt-0 lg:pb-0">
                        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900/50 p-1.5 rounded-xl flex items-center gap-1 overflow-x-auto no-scrollbar shadow-sm border border-primary/5">
                            {['Overview', 'Classes', 'Payments', 'Notes'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-4 md:px-6 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all flex-1 md:flex-none ${activeTab === tab.toLowerCase()
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Main Content Sections */}
                    <motion.div variants={itemVariants} className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {/* OVERVIEW TAB */}
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-8"
                                >
                                    {/* Current Focus */}
                                    <section className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-sm border border-primary/5">
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Current Focus</h2>
                                        </div>
                                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                                            <p>Clara is currently preparing for her Grade 5 RCM examination. Her focus this term is on improving finger dexterity in scales and refining dynamics in her performance pieces. She has shown significant improvement in her sight-reading abilities.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Repertoire</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-4 bg-background-light dark:bg-slate-800 rounded-xl border border-primary/10">
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Sonata inside C Major, K 545</p>
                                                    <p className="text-xs text-slate-500">W.A. Mozart - 1st Movement</p>
                                                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-3 overflow-hidden">
                                                        <div className="h-full bg-primary w-[75%]"></div>
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-background-light dark:bg-slate-800 rounded-xl border border-primary/10">
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Prelude in E Minor, Op. 28</p>
                                                    <p className="text-xs text-slate-500">F. Chopin</p>
                                                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-3 overflow-hidden">
                                                        <div className="h-full bg-primary w-[40%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Achievements */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <BadgeCheck className="text-primary" size={20} /> Achievements
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600">
                                                        <Star size={20} fill="currentColor" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white text-sm">Consistent Practice</p>
                                                        <p className="text-xs text-slate-500">Practiced 7 days in a row</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                                                        <Music size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white text-sm">Recital Star</p>
                                                        <p className="text-xs text-slate-500">Performed in Spring Recital</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Activity className="text-primary" size={20} /> Recent Activity
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex gap-3 relative before:absolute before:left-[5px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800 last:before:hidden">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0 z-10"></div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Music Theory Quiz</p>
                                                        <p className="text-xs text-slate-500">Scored 92% • Yesterday</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 relative before:absolute before:left-[5px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800 last:before:hidden">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0 z-10"></div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Piano Lesson</p>
                                                        <p className="text-xs text-slate-500">Attended • 2 days ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* CLASSES TAB */}
                            {activeTab === 'classes' && (
                                <motion.div
                                    key="classes"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-4"
                                >
                                    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/5 shadow-sm group hover:border-primary/30 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="px-2.5 py-1 bg-green-100 dark:bg-green-950/30 text-green-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                                                In Progress
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Mon/Wed 4:00 PM</span>
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                <Piano size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Intermediate Piano</h3>
                                                <p className="text-sm text-slate-500">One-on-One Instruction</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <img className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeeLb1RNy41VfGcuvblwqYmMCAUToxMcOhjlnY2xQIyCVa3yzclmn5mhjRdH7T_vzFpNga2UPd6VUVmKPa-TA1Ig5yY2xMpXSB6Lu38yohMQsaDZa7OXbTymVxvSH2ltUDN406K8lwjHZRuD9--r6mnYU7ErQp_np03MJojsIfH43PeIg5DG76094P2IQpbtAe4h9g7hyeVwdM0VETU9JgB1mKYbJ7miTwGq7rgMoC6ovGjyx8yOUkXD1_7KYdJpCUA7byLv0qRWAt" alt="Teacher" />
                                            <div>
                                                <p className="text-xs font-bold text-slate-900 dark:text-white">Prof. Julien Dubois</p>
                                                <p className="text-[10px] text-slate-500">Instructor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/5 shadow-sm group hover:border-primary/30 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950/30 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                                                Upcoming
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Fri 5:00 PM</span>
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                                <BookOpen size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Music Theory Lvl 3</h3>
                                                <p className="text-sm text-slate-500">Group Class • Room 4B</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">LC</div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-900 dark:text-white">Prof. L. Caron</p>
                                                <p className="text-[10px] text-slate-500">Instructor</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* PAYMENTS TAB */}
                            {activeTab === 'payments' && (
                                <motion.div
                                    key="payments"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            <CreditCard className="text-primary" size={24} /> Payment History
                                        </h2>
                                        <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                                            Send Invoice
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                                    <th className="py-3 font-bold text-xs text-slate-500 uppercase">Invoice</th>
                                                    <th className="py-3 font-bold text-xs text-slate-500 uppercase">Date</th>
                                                    <th className="py-3 font-bold text-xs text-slate-500 uppercase">Amount</th>
                                                    <th className="py-3 font-bold text-xs text-slate-500 uppercase">Status</th>
                                                    <th className="py-3 font-bold text-xs text-slate-500 uppercase text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                {[
                                                    { id: "#INV-2024-001", date: "Oct 01, 2024", amount: "$180.00", status: "Paid", color: "text-emerald-500 bg-emerald-500/10" },
                                                    { id: "#INV-2024-002", date: "Sep 01, 2024", amount: "$180.00", status: "Paid", color: "text-emerald-500 bg-emerald-500/10" },
                                                    { id: "#INV-2024-003", date: "Aug 01, 2024", amount: "$180.00", status: "Paid", color: "text-emerald-500 bg-emerald-500/10" },
                                                ].map((inv, i) => (
                                                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                        <td className="py-3 text-sm font-bold text-slate-900 dark:text-white">{inv.id}</td>
                                                        <td className="py-3 text-sm text-slate-500">{inv.date}</td>
                                                        <td className="py-3 text-sm font-bold text-slate-900 dark:text-white">{inv.amount}</td>
                                                        <td className="py-3">
                                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${inv.color}`}>{inv.status}</span>
                                                        </td>
                                                        <td className="py-3 text-right">
                                                            <button className="text-primary hover:underline text-xs font-bold">Download</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}

                            {/* NOTES TAB */}
                            {activeTab === 'notes' && (
                                <motion.div
                                    key="notes"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Teacher Notes</h3>
                                            <button className="text-primary text-xs font-bold hover:underline">+ Add Note</button>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5 shrink-0">
                                                    <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeeLb1RNy41VfGcuvblwqYmMCAUToxMcOhjlnY2xQIyCVa3yzclmn5mhjRdH7T_vzFpNga2UPd6VUVmKPa-TA1Ig5yY2xMpXSB6Lu38yohMQsaDZa7OXbTymVxvSH2ltUDN406K8lwjHZRuD9--r6mnYU7ErQp_np03MJojsIfH43PeIg5DG76094P2IQpbtAe4h9g7hyeVwdM0VETU9JgB1mKYbJ7miTwGq7rgMoC6ovGjyx8yOUkXD1_7KYdJpCUA7byLv0qRWAt" alt="Prof" />
                                                </div>
                                                <div className="bg-background-light dark:bg-slate-800 p-4 rounded-xl rounded-tl-none flex-1">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-sm font-bold text-slate-900 dark:text-white">Prof. Dubois</span>
                                                        <span className="text-xs text-slate-500">Oct 15, 2024</span>
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">Great progress on the Mozart sonata today. We need to work more on the evenness of the scales in the left hand. Assigned exercises 4-8 in Hanon.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default StudentProfile;
