import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Music, Grid, GraduationCap, Users, Calendar, CreditCard, Piano, Settings, HelpCircle,
  Server, Search, Bell, MessageSquare, UserPlus, FileCheck, CheckCircle, Mail, DollarSign,
  Clock, Radio, Megaphone, PlusSquare, ArrowUpRight, ChevronLeft, ChevronRight, Eye, X, Phone, User
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

  // Pagination State for new sections
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [recentPage, setRecentPage] = useState(1);
  const itemsPerPage = 5;

  // Modal State
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null); // 'booking' or 'registration'

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  // Mock Data
  const upcomingBookings = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    time: `${9 + (i % 5)}:00 AM`,
    date: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : `Oct ${24 + i}`,
    student: ["Alice", "Bob", "Charlie", "David", "Eve"][i % 5],
    teacher: ["Mr. Smith", "Ms. Jones", "Dr. Brown"][i % 3],
    course: ["Piano", "Violin", "Guitar"][i % 3],
    room: `Room ${101 + (i % 3)}`,
    status: 'Scheduled',
    duration: '1 Hour',
    notes: 'Please prepare the scales.'
  }));

  const recentRegistrations = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    date: `Oct ${20 - i}, 2023`,
    student: ["Frank", "Grace", "Heidi", "Ivan", "Judy"][i % 5],
    email: `student${i}@example.com`,
    phone: `+1 (555) 123-456${i}`,
    courseInterest: ["Piano", "Violin", "Guitar", "Vocal"][i % 4],
    status: ["New", "Contacted", "Enrolled"][i % 3],
    method: ["Online Form", "Walk-in", "Referral"][i % 3]
  }));

  const totalUpcomingPages = Math.ceil(upcomingBookings.length / itemsPerPage);
  const totalRecentPages = Math.ceil(recentRegistrations.length / itemsPerPage);

  const currentUpcoming = upcomingBookings.slice((upcomingPage - 1) * itemsPerPage, upcomingPage * itemsPerPage);
  const currentRecent = recentRegistrations.slice((recentPage - 1) * itemsPerPage, recentPage * itemsPerPage);


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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between group hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col justify-between hover:shadow-lg transition-all card-glow">
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
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow">
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
            {/* Recharts Area Chart */}
            <div className="h-[300px] w-full relative group">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { month: "Jan", income: 4500, expenses: 3200 },
                    { month: "Feb", income: 5200, expenses: 3500 },
                    { month: "Mar", income: 4800, expenses: 4100 },
                    { month: "Apr", income: 6100, expenses: 3800 },
                    { month: "May", income: 5900, expenses: 4400 },
                    { month: "Jun", income: 7200, expenses: 4800 },
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff5724" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ff5724" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9d71fd" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#9d71fd" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(200,200,200,0.2)" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    dy={10}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    labelStyle={{ color: '#6b7280', marginBottom: '4px' }}
                    cursor={{ stroke: '#ff5724', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area
                    type="natural"
                    dataKey="expenses"
                    stroke="#9d71fd"
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                    strokeWidth={3}
                  />
                  <Area
                    type="natural"
                    dataKey="income"
                    stroke="#ff5724"
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          {/* Bookings Heat Map */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow">
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

        {/* New Sections: Upcoming & Recent Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-charcoal dark:text-white">Upcoming Bookings</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setUpcomingPage(Math.max(1, upcomingPage - 1))}
                  disabled={upcomingPage === 1}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => setUpcomingPage(Math.min(totalUpcomingPages, upcomingPage + 1))}
                  disabled={upcomingPage === totalUpcomingPages}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Time</th>
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Student</th>
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {currentUpcoming.map((booking) => (
                    <tr key={booking.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2 font-bold text-charcoal dark:text-white text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                          {booking.time}
                        </div>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs font-bold text-gray-500">{booking.date}</span>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="font-bold text-charcoal dark:text-white text-sm">{booking.student}</div>
                        <div className="text-xs text-gray-500">{booking.course}</div>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => openModal(booking, 'booking')}
                          className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Recent Registrations */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-charcoal dark:text-white">Recent Registrations</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setRecentPage(Math.max(1, recentPage - 1))}
                  disabled={recentPage === 1}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => setRecentPage(Math.min(totalRecentPages, recentPage + 1))}
                  disabled={recentPage === totalRecentPages}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Student</th>
                    <th className="pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {currentRecent.map((reg) => (
                    <tr key={reg.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-3 pr-4">
                        <span className="text-xs font-bold text-gray-500">{reg.date}</span>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="font-bold text-charcoal dark:text-white text-sm">{reg.student}</div>
                        <div className="text-xs text-gray-500">{reg.courseInterest}</div>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => openModal(reg, 'registration')}
                          className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Global Details Modal */}
        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 m-auto w-full max-w-md h-fit bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {modalType === 'booking' ? 'Booking Details' : 'Registration Details'}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {modalType === 'booking' ? `ID: #${selectedItem.id + 1000}` : `Date: ${selectedItem.date}`}
                      </p>
                    </div>
                    <button onClick={closeModal} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                      <X size={20} className="text-slate-400" />
                    </button>
                  </div>

                  {modalType === 'booking' ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                          {selectedItem.student.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{selectedItem.student}</p>
                          <p className="text-xs text-slate-500">Student</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Time</p>
                          <p className="font-bold text-slate-700 dark:text-slate-200">{selectedItem.time}</p>
                        </div>
                        <div className="p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Date</p>
                          <p className="font-bold text-slate-700 dark:text-slate-200">Today</p>
                        </div>
                        <div className="p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Vertical</p>
                          <p className="font-bold text-slate-700 dark:text-slate-200">{selectedItem.course}</p>
                        </div>
                        <div className="p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Room</p>
                          <p className="font-bold text-slate-700 dark:text-slate-200">{selectedItem.room}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <p className="text-xs font-bold text-primary uppercase mb-2">Instructor</p>
                        <p className="font-bold text-slate-900 dark:text-white">{selectedItem.teacher}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 font-bold text-lg">
                          {selectedItem.student.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{selectedItem.student}</p>
                          <p className="text-xs text-slate-500">New Applicant</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail size={16} className="text-slate-400" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{selectedItem.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={16} className="text-slate-400" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{selectedItem.phone}</span>
                        </div>
                      </div>
                      <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase">Interest</span>
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-bold">
                            {selectedItem.courseInterest}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-400 uppercase">Method</span>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{selectedItem.method}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                          Approve
                        </button>
                        <button className="flex-1 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                          Contact
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Footer Section Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Popular Instruments Donut */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow">
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
          <motion.div variants={itemVariants} className="xl:col-span-2 bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-primary/5 card-glow">
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