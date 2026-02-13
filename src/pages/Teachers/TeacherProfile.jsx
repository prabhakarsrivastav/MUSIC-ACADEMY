
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
                                    <section className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-sm border border-primary/5">
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Professional Bio</h2>
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
                                </motion.div>
                            )}

                            {/* LECTURES TAB */}
                            {activeTab === 'lectures' && (
                                <motion.div
                                    key="lectures"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            <BookOpen className="text-primary" size={24} /> Assigned Courses
                                        </h2>
                                        <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                                            <PlusSquare size={16} /> Assign New
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { title: "Advanced Piano Sonata", subject: "Classical Techniques", room: "Room 4B", students: 12, time: "Mon/Wed 10:00 AM", status: "In Progress", color: "green" },
                                            { title: "Jazz Theory III", subject: "Harmony & Improvisation", room: "Studio C", students: 8, time: "Tue/Thu 2:00 PM", status: "Upcoming", color: "blue" },
                                            { title: "Ensemble Performance", subject: "Group Practice", room: "Main Hall", students: 24, time: "Fri 4:00 PM", status: "Scheduled", color: "purple" }
                                        ].map((lecture, i) => (
                                            <div key={i} className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-primary/5 shadow-sm group hover:border-primary/30 transition-all">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`px-2.5 py-1 bg-${lecture.color}-100 dark:bg-${lecture.color}-950/30 text-${lecture.color}-600 text-[10px] font-bold rounded-lg uppercase tracking-wider`}>
                                                        {lecture.status}
                                                    </div>
                                                    <button className="text-slate-300 group-hover:text-primary transition-colors">
                                                        <Settings size={16} />
                                                    </button>
                                                </div>
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{lecture.title}</h3>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{lecture.subject}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{lecture.time}</p>
                                                        <p className="text-xs text-slate-500">Weekly</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6 pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Grid className="text-slate-400" size={16} />
                                                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">{lecture.room}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Users className="text-slate-400" size={16} />
                                                        <span className="text-slate-600 dark:text-slate-300 font-bold text-xs">{lecture.students} Students</span>
                                                    </div>
                                                    <div className="flex-1"></div>
                                                    <button className="text-xs font-bold text-primary hover:underline">View Syllabus</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* SCHEDULE TAB */}
                            {activeTab === 'schedule' && (
                                <motion.div
                                    key="schedule"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            <Calendar className="text-primary" size={24} /> Weekly Schedule
                                        </h2>
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                <ChevronLeft size={20} className="text-slate-500" />
                                            </button>
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 py-2">Oct 23 - Oct 29</span>
                                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                <ChevronRight size={20} className="text-slate-500" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-4">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                                            <div key={day} className="space-y-3">
                                                <div className="text-center pb-2 border-b border-slate-100 dark:border-slate-800">
                                                    <span className="text-xs font-bold text-slate-500 uppercase">{day}</span>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-white">{23 + i}</p>
                                                </div>
                                                {/* Mock Schedule Items */}
                                                {i % 2 === 0 && (
                                                    <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors">
                                                        <p className="text-xs font-bold text-primary mb-1">10:00 AM</p>
                                                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-1">Piano Sonata</p>
                                                        <p className="text-[10px] text-slate-500 mt-1">Room 4B</p>
                                                    </div>
                                                )}
                                                {i === 1 || i === 3 ? (
                                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                                                        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">02:00 PM</p>
                                                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-1">Jazz Theory</p>
                                                        <p className="text-[10px] text-slate-500 mt-1">Studio C</p>
                                                    </div>
                                                ) : null}
                                                {i === 4 && (
                                                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-900/30 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                                                        <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">04:00 PM</p>
                                                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-1">Ensemble</p>
                                                        <p className="text-[10px] text-slate-500 mt-1">Main Hall</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* PERFORMANCE TAB */}
                            {activeTab === 'performance' && (
                                <motion.div
                                    key="performance"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-primary/5 shadow-sm">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg text-green-600">
                                                    <Users size={18} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-500">Retention Rate</span>
                                            </div>
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white">94%</p>
                                            <p className="text-xs text-green-500 font-bold mt-1">+2.4% vs last term</p>
                                        </div>
                                        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-primary/5 shadow-sm">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg text-yellow-600">
                                                    <Star size={18} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-500">Avg. Rating</span>
                                            </div>
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white">4.9/5</p>
                                            <p className="text-xs text-slate-400 font-bold mt-1">Based on 85 reviews</p>
                                        </div>
                                        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-primary/5 shadow-sm">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600">
                                                    <Clock size={18} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-500">Punctuality</span>
                                            </div>
                                            <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                                            <p className="text-xs text-slate-400 font-bold mt-1">No late arrivals</p>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-sm border border-primary/5">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Student Feedback</h3>
                                        <div className="space-y-6">
                                            {[1, 2, 3].map((item) => (
                                                <div key={item} className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-6 last:pb-0">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">S{item}</div>
                                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</span>
                                                        </div>
                                                        <div className="flex text-yellow-400">
                                                            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} fill="currentColor" />)}
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">"Prof. Dubois is incredibly patient and his explanations of complex jazz theories are so easy to grasp. I've improved so much in just one semester."</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* DOCUMENTS TAB */}
                            {activeTab === 'documents' && (
                                <motion.div
                                    key="documents"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                >
                                    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                            <FileText className="text-primary" size={20} /> Employment Documents
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                { name: "Teacher_Contract_2024.pdf", size: "1.2MB", date: "2 days ago", color: "red" },
                                                { name: "Tax_Forms_T4.pdf", size: "850KB", date: "Last month", color: "red" },
                                                { name: "Background_Check.pdf", size: "2.1MB", date: "1 year ago", color: "green" }
                                            ].map((doc, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors group cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <FileText className={`text-${doc.color}-500`} size={24} />
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{doc.name}</p>
                                                            <p className="text-[10px] text-slate-500 font-medium">Updated {doc.date} • {doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                                        <Download size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-primary/5">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                            <BookOpen className="text-primary" size={20} /> Academic Resources
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                { name: "Curriculum_Plan_Adv_Piano.pdf", size: "4.5MB", date: "1 month ago", color: "blue" },
                                                { name: "Jazz_Improv_Worksheets.zip", size: "12MB", date: "3 months ago", color: "yellow" },
                                            ].map((doc, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors group cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <FileText className={`text-${doc.color}-500`} size={24} />
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{doc.name}</p>
                                                            <p className="text-[10px] text-slate-500 font-medium">Updated {doc.date} • {doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                                        <Download size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                            <button className="w-full py-2 mt-4 text-xs font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                                                + Upload New Resource
                                            </button>
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

export default TeacherProfile;
