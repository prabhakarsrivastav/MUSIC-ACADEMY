import React from 'react';
import { motion } from 'framer-motion';
import {
    Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
    Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
    Clock, Radio, Megaphone, PlusSquare, ArrowUpRight,
} from 'lucide-react';

const Dashboard = () => {
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
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <main className="flex-1 overflow-y-auto bg-accent-cream dark:bg-background-dark/90 flex flex-col h-full">
            {/* Top Navbar */}
            {/* Top Navbar */}
            {/* Top Navbar */}
            {/* Top Navbar */}

            <motion.div
                className="p-8 space-y-5 max-w-[1600px] mx-auto w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="relative overflow-hidden bg-gradient-to-r from-primary via-[#ff7043] to-primary rounded-2xl p-8 flex items-center justify-between text-white shadow-xl shadow-primary/20 min-h-[220px]">
                    <div className="z-10 flex flex-col justify-center">
                        <h1 className="text-3xl font-extrabold mb-2">Welcome back, Admin!</h1>
                        <p className="text-white/80 font-medium mb-8">Here's what's happening with your academy today.</p>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1 px-2">
                            <div className="px-6 py-2 flex flex-col items-center">
                                <span className="text-xl font-bold">1,248</span>
                                <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">New Students</span>
                            </div>
                            <div className="w-px h-8 bg-white/20"></div>
                            <div className="px-6 py-2 flex flex-col items-center">
                                <span className="text-xl font-bold">92%</span>
                                <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Attendance</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 transform">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <Megaphone size={180} />
                            </div>
                            <img alt="Welcome Illustration" className="w-full h-full object-contain relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCpEMbYNHskvls66qw70LvkT-vHRxMdJLsye9QlT611Y71RtfxUEt4wDI8RKk4wODPd4ir8m6FBz6rbwJSegUPCFoSbXDzu7CYJT7rcVXYqj7W5j3k1RM3fK6y_n2fEEv1BpXnndPHfsA-Odt-OagAJzTBA_HvPZfrO_JZPRyTqgiN_CJeCafrVPsXHyQcXLY4AWKpjxZu0qUdWZ1NCxHuHf5vRtR-CtnRogEe_ecNunnbez7LeMU7LLGFjsYDEWDAwNyeV1r4cXq" />
                        </div>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
                </motion.div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Students */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Users size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Total Students</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">1,284</h3>
                        </div>
                    </motion.div>
                    {/* Total Teachers */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <FileCheck size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">Stable</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Total Teachers</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">48</h3>
                        </div>
                    </motion.div>
                    {/* Bookings Today */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <Calendar size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Bookings (Today)</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">142</h3>
                        </div>
                    </motion.div>
                    {/* Revenue This Month */}
                    <motion.div variants={itemVariants} className="bg-primary p-6 rounded-2xl shadow-xl shadow-primary/20 flex flex-col justify-between text-white hover:scale-[1.02] transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                                <DollarSign size={24} />
                            </div>
                            <span className="text-[11px] font-bold bg-white/20 px-2 py-1 rounded-full">+8.4%</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white/70">Revenue (Dec)</p>
                            <h3 className="text-2xl font-extrabold">$42,850.00</h3>
                        </div>
                    </motion.div>
                    {/* Pending Approvals */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                                <Clock size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">Priority</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Pending Approvals</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">12</h3>
                        </div>
                    </motion.div>
                    {/* Live Classes */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <Radio size={24} />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-[11px] font-bold text-red-500">Live</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Live Classes</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">8</h3>
                        </div>
                    </motion.div>
                    {/* Upcoming Lessons */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                <Clock size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-gray-400">Next 24h</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Upcoming Lessons</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">312</h3>
                        </div>
                    </motion.div>
                    {/* New Messages */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                                <Mail size={24} />
                            </div>
                            <span className="text-[11px] font-bold text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded-full">New</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">New Messages</p>
                            <h3 className="text-2xl font-extrabold text-charcoal dark:text-white">24</h3>
                        </div>
                    </motion.div>
                </div>
                {/* Main Visualization Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Revenue Chart Card */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-xl font-extrabold text-charcoal dark:text-white">Revenue Overview</h3>
                                <p className="text-sm text-gray-400">Financial performance vs. previous period</p>
                            </div>
                            <div className="flex bg-background-light dark:bg-background-dark/50 p-1 rounded-xl">
                                <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-gray-500 hover:text-charcoal transition-all">Daily</button>
                                <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white dark:bg-background-dark shadow-sm text-primary">Weekly</button>
                                <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-gray-500 hover:text-charcoal transition-all">Monthly</button>
                            </div>
                        </div>
                        {/* Mockup Line Chart */}
                        <div className="h-[300px] w-full relative group">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#ff5724" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#ff5724" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,250 Q100,240 200,180 T400,150 T600,80 T800,40" fill="none" stroke="#ff5724" strokeLinecap="round" strokeWidth="4"></path>
                                <path d="M0,250 Q100,240 200,180 T400,150 T600,80 T800,40 L800,300 L0,300 Z" fill="url(#chartGradient)"></path>
                                <circle cx="200" cy="180" fill="#ff5724" r="6" stroke="white" strokeWidth="2"></circle>
                                <circle cx="400" cy="150" fill="#ff5724" r="6" stroke="white" strokeWidth="2"></circle>
                                <circle cx="600" cy="80" fill="#ff5724" r="6" stroke="white" strokeWidth="2"></circle>
                                {/* Axes Labels Mock */}
                                <g className="text-[10px] fill-gray-400 font-bold uppercase tracking-widest">
                                    <text x="0" y="295">Mon</text>
                                    <text x="133" y="295">Tue</text>
                                    <text x="266" y="295">Wed</text>
                                    <text x="400" y="295">Thu</text>
                                    <text x="533" y="295">Fri</text>
                                    <text x="666" y="295">Sat</text>
                                    <text x="780" y="295">Sun</text>
                                </g>
                            </svg>
                        </div>
                    </motion.div>
                    {/* Bookings Heat Map */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5">
                        <h3 className="text-xl font-extrabold text-charcoal dark:text-white mb-2">Bookings Density</h3>
                        <p className="text-sm text-gray-400 mb-6">Peak class hours this week</p>
                        <div className="grid grid-cols-8 gap-1.5">
                            <div className="h-6 w-full"></div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">M</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">T</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">W</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">T</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">F</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">S</div>
                            <div className="text-[9px] font-bold text-gray-400 text-center uppercase">S</div>
                            {/* Hour labels and blocks */}
                            <div className="text-[9px] font-bold text-gray-400 flex items-center justify-end pr-2">09:00</div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="h-8 rounded-md bg-primary/5"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/40"></div>
                            <div className="h-8 rounded-md bg-primary/5"></div>
                            <div className="text-[9px] font-bold text-gray-400 flex items-center justify-end pr-2">12:00</div>
                            <div className="h-8 rounded-md bg-primary/30"></div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/60"></div>
                            <div className="h-8 rounded-md bg-primary/80"></div>
                            <div className="h-8 rounded-md bg-primary/40"></div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="text-[9px] font-bold text-gray-400 flex items-center justify-end pr-2">15:00</div>
                            <div className="h-8 rounded-md bg-primary/60"></div>
                            <div className="h-8 rounded-md bg-primary/40"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="h-8 rounded-md bg-primary/50"></div>
                            <div className="h-8 rounded-md bg-primary/90"></div>
                            <div className="h-8 rounded-md bg-primary/60"></div>
                            <div className="h-8 rounded-md bg-primary/30"></div>
                            <div className="text-[9px] font-bold text-gray-400 flex items-center justify-end pr-2">18:00</div>
                            <div className="h-8 rounded-md bg-primary"></div>
                            <div className="h-8 rounded-md bg-primary/90"></div>
                            <div className="h-8 rounded-md bg-primary/80"></div>
                            <div className="h-8 rounded-md bg-primary/70"></div>
                            <div className="h-8 rounded-md bg-primary/60"></div>
                            <div className="h-8 rounded-md bg-primary/40"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="text-[9px] font-bold text-gray-400 flex items-center justify-end pr-2">21:00</div>
                            <div className="h-8 rounded-md bg-primary/30"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/5"></div>
                            <div className="h-8 rounded-md bg-primary/20"></div>
                            <div className="h-8 rounded-md bg-primary/10"></div>
                            <div className="h-8 rounded-md bg-primary/5"></div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-[10px] text-gray-400 font-bold uppercase">Low Activity</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded bg-primary/10"></div>
                                <div className="w-3 h-3 rounded bg-primary/30"></div>
                                <div className="w-3 h-3 rounded bg-primary/60"></div>
                                <div className="w-3 h-3 rounded bg-primary"></div>
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase">Peak</span>
                        </div>
                    </motion.div>
                </div>
                {/* Footer Section Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                    {/* Popular Instruments Donut */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5">
                        <h3 className="text-xl font-extrabold text-charcoal dark:text-white mb-6">Instruments</h3>
                        <div className="relative w-48 h-48 mx-auto mb-8">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle className="text-primary/10" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12"></circle>
                                <circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="62.8" strokeWidth="12"></circle>
                                <circle className="text-orange-300" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="188.4" strokeWidth="12"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-extrabold text-charcoal dark:text-white">75%</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Piano / Guitar</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Piano</span>
                                </div>
                                <span className="text-sm font-bold">45%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Guitar</span>
                                </div>
                                <span className="text-sm font-bold">30%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Others</span>
                                </div>
                                <span className="text-sm font-bold">25%</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* Recent Activity */}
                    <motion.div variants={itemVariants} className="xl:col-span-2 bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-extrabold text-charcoal dark:text-white">Recent Activity</h3>
                            <button className="text-primary text-sm font-bold hover:underline">View All</button>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 z-10 border-2 border-white dark:border-background-dark">
                                        <UserPlus size={18} />
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-100 dark:bg-gray-800 -mt-2"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-charcoal dark:text-white">New Student Registered</p>
                                    <p className="text-xs text-gray-500 mt-1">Clara Thompson joined the Piano Fundamentals class.</p>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">12 Minutes Ago</span>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 z-10 border-2 border-white dark:border-background-dark">
                                        <CreditCard size={18} />
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-100 dark:bg-gray-800 -mt-2"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-charcoal dark:text-white">Payment Confirmed</p>
                                    <p className="text-xs text-gray-500 mt-1">Invoice #29402 for Winter Semester was paid in full.</p>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">45 Minutes Ago</span>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10 border-2 border-white dark:border-background-dark">
                                        <CheckCircle size={18} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-charcoal dark:text-white">Teacher Approval Required</p>
                                    <p className="text-xs text-gray-500 mt-1">Sébastien Roche applied for Violin Instructor position.</p>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-2">2 Hours Ago</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Quick Actions */}
                    <motion.div variants={itemVariants} className="bg-primary/5 dark:bg-background-dark/30 p-8 rounded-2xl border border-primary/10 flex flex-col">
                        <h3 className="text-xl font-extrabold text-charcoal dark:text-white mb-6">Quick Actions</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-background-dark rounded-xl border border-primary/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <UserPlus size={14} />
                                </div>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Add Teacher</span>
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-background-dark rounded-xl border border-primary/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <PlusSquare size={14} />
                                </div>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Create Class</span>
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-background-dark rounded-xl border border-primary/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <DollarSign size={14} />
                                </div>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Pending Payments</span>
                            </button>
                            <button className="flex items-center gap-3 px-4 py-3 bg-primary rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:translate-y-[-2px] transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                                    <Megaphone size={14} />
                                </div>
                                <span className="text-sm font-bold text-white">Send Announcement</span>
                            </button>
                        </div>
                        <div className="mt-auto pt-8">
                            <div className="bg-white dark:bg-background-dark p-4 rounded-xl border border-primary/5">
                                <p className="text-[10px] font-extrabold text-gray-400 uppercase mb-3">Today's Quote</p>
                                <p className="text-xs italic text-gray-600 dark:text-gray-400">"Where words fail, music speaks."</p>
                                <p className="text-[10px] font-bold text-primary mt-2">— Hans Christian Andersen</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
};

export default Dashboard;