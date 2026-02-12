
import React, { useState } from 'react';
import {
    Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
    Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
    Clock, Radio, Megaphone, PlusSquare, ArrowUpRight, BookOpen, Layers, MessageCircle,
    ChevronLeft, ChevronRight, LayoutDashboard, Home, LineChart, Star, Activity, Briefcase, MapPin,
    AtSign, Phone, BadgeCheck, Edit, UserX, Send, FileText, Download, History
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeacherProfile = () => {
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
                <Link to="/teachers" className="hover:text-primary transition-colors">Teachers</Link>
                <ChevronRight size={14} />
                <span className="text-primary font-medium">Prof. Julien Dubois</span>
            </div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-10 gap-8"
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
                                <img alt="Julien Dubois" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeeLb1RNy41VfGcuvblwqYmMCAUToxMcOhjlnY2xQIyCVa3yzclmn5mhjRdH7T_vzFpNga2UPd6VUVmKPa-TA1Ig5yY2xMpXSB6Lu38yohMQsaDZa7OXbTymVxvSH2ltUDN406K8lwjHZRuD9--r6mnYU7ErQp_np03MJojsIfH43PeIg5DG76094P2IQpbtAe4h9g7hyeVwdM0VETU9JgB1mKYbJ7miTwGq7rgMoC6ovGjyx8yOUkXD1_7KYdJpCUA7byLv0qRWAt" />
                            </div>
                            <span className="absolute bottom-1 right-2 bg-green-500 border-4 border-white dark:border-slate-900 w-6 h-6 rounded-full" title="Active"></span>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Prof. Julien Dubois</h1>
                        <p className="text-primary font-medium mb-4">Senior Piano Instructor</p>
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">ACTIVE</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full">FULL-TIME</span>
                        </div>
                        <div className="w-full space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <AtSign className="text-primary" size={18} />
                                <span>j.dubois@lamusique.edu</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone className="text-primary" size={18} />
                                <span>+1 (514) 555-0192</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                                <MapPin className="text-primary" size={18} />
                                <span>42nd Rue, Montreal, QC</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <BadgeCheck className="text-primary" size={18} />
                                <span>Employee ID: <span className="font-mono text-slate-900 dark:text-slate-200">AL-902</span></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Classes</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">42</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Students</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">120</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Rating</p>
                            <div className="flex items-center gap-1">
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">4.9</p>
                                <Star className="text-yellow-500 fill-current" size={14} />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-primary/5 shadow-sm">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Attendance</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">98%</p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                            <Edit size={18} /> Edit Profile
                        </button>
                        <button className="w-full py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            <PlusSquare size={18} /> Assign Class
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Message
                            </button>
                            <button className="py-3 bg-red-50 dark:bg-red-950/30 text-red-600 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2">
                                <UserX size={18} /> Disable
                            </button>
                        </div>
                    </motion.div>
                </aside>

                {/* Right Content Area (70%) */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Navigation Tabs */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900/50 p-1.5 rounded-xl flex items-center gap-1 overflow-x-auto no-scrollbar shadow-sm border border-primary/5">
                        {['Overview', 'Lectures', 'Schedule', 'Performance', 'Documents'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`px-6 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${activeTab === tab.toLowerCase()
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>

                    {/* Main Content Sections */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Bio & Overview Section */}
                        {activeTab === 'overview' && (
                            <section className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-sm border border-primary/5">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Teacher Overview</h2>
                                </div>
                                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-sm">
                                    <p className="mb-4">With over 15 years of international performance experience, Prof. Julien Dubois brings a wealth of knowledge to Académie Lamusique. Specializing in classical piano and contemporary jazz improvisation, he has mentored hundreds of students from foundational levels to professional certification.</p>
                                    <p>His teaching philosophy emphasizes technical precision combined with emotional expression, ensuring that students develop a unique musical voice while maintaining rigorous academic standards.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Qualifications</h3>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                    <GraduationCap className="text-primary" size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Masters in Music Performance</p>
                                                    <p className="text-xs text-slate-500">McGill University, 2012</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                    <BadgeCheck className="text-primary" size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Steinway Certified Educator</p>
                                                    <p className="text-xs text-slate-500">New York, 2015</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Specialties & Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['Classical Piano', 'Jazz Theory', 'Music Composition', 'Sight Reading', 'RCM Preparation'].map((skill) => (
                                                <span key={skill} className="px-4 py-2 bg-background-light dark:bg-slate-800 rounded-lg text-xs font-bold border border-primary/10 text-slate-600 dark:text-slate-300">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Lectures Section */}
                        <section className="space-y-4">
                            <div className="flex justify-between items-center px-2">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <BookOpen className="text-primary" size={24} /> Current Lectures
                                </h2>
                                <button className="text-primary text-sm font-bold hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Lecture Card 1 */}
                                <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/5 shadow-sm group hover:border-primary/30 transition-all cursor-pointer hover:shadow-md">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="px-2.5 py-1 bg-green-100 dark:bg-green-950/30 text-green-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">In Progress</div>
                                        <button className="text-slate-300 group-hover:text-primary transition-colors">
                                            <Settings size={16} />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Advanced Piano Sonata</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Subject: Classical Techniques</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Grid className="text-slate-400" size={16} />
                                            <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">Room 4B</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Users className="text-slate-400" size={16} />
                                            <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">12 Students</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Lecture Card 2 */}
                                <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/5 shadow-sm group hover:border-primary/30 transition-all cursor-pointer hover:shadow-md">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950/30 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">Starts 2:00 PM</div>
                                        <button className="text-slate-300 group-hover:text-primary transition-colors">
                                            <Settings size={16} />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Jazz Theory III</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Subject: Harmony & Improvisation</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Grid className="text-slate-400" size={16} />
                                            <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">Studio C</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Users className="text-slate-400" size={16} />
                                            <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">8 Students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Activity Log & Documents */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Documents */}
                            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <FileText className="text-primary" size={20} /> Documents
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-red-500" size={24} />
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Teacher_Contract.pdf</p>
                                                <p className="text-[10px] text-slate-500 font-medium">Updated 2 days ago • 1.2MB</p>
                                            </div>
                                        </div>
                                        <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                            <Download size={18} />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-blue-500" size={24} />
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Curriculum_Plan_2024.pdf</p>
                                                <p className="text-[10px] text-slate-500 font-medium">Updated 1 month ago • 4.5MB</p>
                                            </div>
                                        </div>
                                        <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                            <Download size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Activity Log */}
                            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <History className="text-primary" size={20} /> Activity Log
                                </h3>
                                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
                                    <div className="relative">
                                        <span className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-sm"></span>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Profile updated by Admin</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Today at 10:45 AM</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-900 shadow-sm"></span>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Assigned to "Studio C" Room</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Yesterday at 3:20 PM</p>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-900 shadow-sm"></span>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Attendance marked for Class #402</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Oct 24, 2023 at 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default TeacherProfile;
