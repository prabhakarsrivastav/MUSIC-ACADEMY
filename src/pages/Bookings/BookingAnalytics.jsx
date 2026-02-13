import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Calendar, CheckCircle, Clock, XCircle, TrendingUp, TrendingDown,
    MoreHorizontal, Filter, Download, ChevronDown, Search, ArrowRight,
    User, Music, MapPin, DollarSign, Activity, PieChart, ChevronLeft, ChevronRight, Edit, Trash2, Eye
} from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import DatePicker from '../../components/ui/DatePicker';

const BookingAnalytics = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    // State for interactive chart
    const [activeView, setActiveView] = useState("day");

    // State for Peak Booking Time Calendar
    const [heatmapDate, setHeatmapDate] = useState(new Date());
    const [showHeatmapDatePicker, setShowHeatmapDatePicker] = useState(false);

    // Mock Data for different views
    const chartData = {
        day: Array.from({ length: 30 }, (_, i) => ({
            date: new Date(2024, 3, i + 1).toISOString(),
            bookings: Math.floor(Math.random() * 20) + 10
        })),
        month: [
            { date: "2024-01-01", bookings: 320 },
            { date: "2024-02-01", bookings: 280 },
            { date: "2024-03-01", bookings: 350 },
            { date: "2024-04-01", bookings: 420 },
            { date: "2024-05-01", bookings: 380 },
            { date: "2024-06-01", bookings: 450 },
            { date: "2024-07-01", bookings: 400 },
            { date: "2024-08-01", bookings: 480 },
            { date: "2024-09-01", bookings: 520 },
            { date: "2024-10-01", bookings: 490 },
            { date: "2024-11-01", bookings: 460 },
            { date: "2024-12-01", bookings: 510 },
        ],
        year: [
            { date: "2019-01-01", bookings: 3200 },
            { date: "2020-01-01", bookings: 2800 },
            { date: "2021-01-01", bookings: 4100 },
            { date: "2022-01-01", bookings: 4800 },
            { date: "2023-01-01", bookings: 5400 },
        ]
    };

    // Mock Data
    const recentBookings = [
        { id: 1, student: "Emma Wilson", service: "Piano Lesson", date: "Oct 24, 2023", time: "14:00 - 15:00", status: "Confirmed", amount: "$60.00" },
        { id: 2, student: "Liam Chen", service: "Violin Masterclass", date: "Oct 24, 2023", time: "16:30 - 17:30", status: "Pending", amount: "$85.00" },
        { id: 3, student: "Sofia Rodriguez", service: "Vocal Coaching", date: "Oct 25, 2023", time: "10:00 - 11:00", status: "Confirmed", amount: "$70.00" },
        { id: 4, student: "James Smith", service: "Guitar Lesson", date: "Oct 25, 2023", time: "13:00 - 14:00", status: "Cancelled", amount: "$55.00" },
        { id: 5, student: "Olivia Brown", service: "Music Theory", date: "Oct 26, 2023", time: "09:00 - 10:00", status: "Confirmed", amount: "$45.00" },
    ];

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Booking Analytics</h2>
                    <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
                        <Link to="/">Dashboard</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Booking Analytics</span>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-primary/10 shadow-sm">
                        <button className="px-4 py-1.5 text-sm font-medium bg-primary text-white rounded shadow-sm">This Month</button>
                        <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Last Month</button>
                        <button className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors">Custom</button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-primary/10 rounded-lg hover:bg-primary/5 transition-all shadow-sm">
                        <Download className="text-primary" size={20} />
                        <span className="font-medium">Export Report</span>
                    </button>
                </div>
            </header>

            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Bookings */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Calendar className="text-primary" size={48} />
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Total Bookings</p>
                        <div className="flex items-end gap-3 mt-2">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">482</h3>
                            <span className="text-green-500 text-sm font-bold flex items-center mb-1">
                                <TrendingUp size={16} className="mr-1" /> 15%
                            </span>
                        </div>
                        <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[75%] rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Confirmed */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <CheckCircle className="text-emerald-500" size={48} />
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Confirmed Bookings</p>
                        <div className="flex items-end gap-3 mt-2">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">412</h3>
                            <span className="text-green-500 text-sm font-bold flex items-center mb-1">
                                <TrendingUp size={16} className="mr-1" /> 8%
                            </span>
                        </div>
                        <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Pending */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Clock className="text-amber-500" size={48} />
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Pending Request</p>
                        <div className="flex items-end gap-3 mt-2">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">45</h3>
                            <span className="text-slate-400 text-sm font-medium mb-1">-2 from yesterday</span>
                        </div>
                        <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 w-[15%] rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Cancelled */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card p-6 rounded-xl relative overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all card-glow">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <XCircle className="text-red-500" size={48} />
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Cancelled</p>
                        <div className="flex items-end gap-3 mt-2">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">25</h3>
                            <span className="text-red-500 text-sm font-bold flex items-center mb-1">
                                <TrendingDown size={16} className="mr-1" /> 2%
                            </span>
                        </div>
                        <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[5%] rounded-full"></div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Booking Trends Chart - Left Column (2/3) */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 bg-white dark:bg-slate-900 glass-card rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col card-glow">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800">
                            <div className="px-6 py-5 flex-1">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Booking Trends</h4>
                                <p className="text-sm text-slate-500">Interactive daily booking volume</p>
                            </div>
                            <div className="flex w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800">
                                {["day", "month", "year"].map((key) => {
                                    return (
                                        <button
                                            key={key}
                                            data-active={activeView === key}
                                            className={`relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left sm:px-8 sm:py-6 transition-colors
                                                hover:bg-slate-50 dark:hover:bg-slate-800/50
                                                data-[active=true]:bg-slate-50 dark:data-[active=true]:bg-slate-800
                                                border-l border-slate-100 dark:border-slate-800 first:border-l-0 sm:first:border-l-0
                                            `}
                                            onClick={() => setActiveView(key)}
                                        >
                                            <span className="text-xs text-slate-500 capitalize">
                                                {key}
                                            </span>
                                            <span className="text-lg leading-none font-bold text-slate-900 dark:text-white sm:text-2xl">
                                                {chartData[key].reduce((acc, curr) => acc + curr.bookings, 0).toLocaleString()}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="p-6 flex-1 min-h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData[activeView]}
                                    margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
                                >
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                                    <XAxis
                                        dataKey="date"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        minTickGap={32}
                                        tickFormatter={(value) => {
                                            const date = new Date(value);
                                            if (activeView === 'year') {
                                                return date.getFullYear();
                                            } else if (activeView === 'month') {
                                                return date.toLocaleDateString("en-US", { month: "short" });
                                            }
                                            return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
                                        }}
                                        stroke="#94a3b8"
                                        fontSize={12}
                                    />
                                    <Tooltip
                                        content={({ active, payload, label }) => {
                                            if (active && payload && payload.length) {
                                                const date = new Date(label);
                                                let formattedDate = "";
                                                if (activeView === 'year') {
                                                    formattedDate = date.getFullYear();
                                                } else if (activeView === 'month') {
                                                    formattedDate = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
                                                } else {
                                                    formattedDate = date.toLocaleDateString("en-US", { weekday: 'long', month: "short", day: "numeric" });
                                                }

                                                return (
                                                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl rounded-lg p-3 text-sm">
                                                        <div className="font-bold text-slate-900 dark:text-white mb-1">
                                                            {formattedDate}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div
                                                                className="w-2 h-2 rounded-full"
                                                                style={{ backgroundColor: '#ef6034' }}
                                                            />
                                                            <span className="text-slate-500 dark:text-slate-400 capitalize">
                                                                Bookings:
                                                            </span>
                                                            <span className="font-bold text-slate-900 dark:text-white">
                                                                {payload[0].value}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                        cursor={{ fill: 'transparent' }}
                                    />
                                    <Bar
                                        dataKey="bookings"
                                        fill="#ef6034"
                                        radius={[4, 4, 0, 0]}
                                        barSize={activeView === 'day' ? 12 : activeView === 'month' ? 24 : 40}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Status Distribution - Right Column (1/3) */}
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Booking Status</h4>

                        <div className="flex justify-center mb-8 relative">
                            {/* Donut Chart Visualization */}
                            <div className="w-48 h-48 rounded-full border-[16px] border-emerald-500 relative flex items-center justify-center shadow-lg transform rotate-[-45deg]" style={{ borderRightColor: "#f59e0b", borderBottomColor: "#ef4444", borderLeftColor: "#10b981" }}>
                                <div className="text-center transform rotate-[45deg]">
                                    <span className="block text-3xl font-bold text-slate-900 dark:text-white">482</span>
                                    <span className="text-xs text-slate-500 uppercase font-bold">Total</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirmed</span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">85.5%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Pending</span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">9.3%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cancelled</span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">5.2%</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Heatmap Section - Reused from Analytics but tailored */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 glass-card rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Peak Booking Times
                            </h4>
                            <p className="text-sm text-slate-500">Demand heatmap by day and time</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <button
                                    onClick={() => setShowHeatmapDatePicker(!showHeatmapDatePicker)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
                                >
                                    <Calendar size={14} className="text-primary" />
                                    <span>Week of {heatmapDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                    <ChevronDown size={12} className={`transition-transform duration-200 ${showHeatmapDatePicker ? 'rotate-180' : ''}`} />
                                </button>
                                {showHeatmapDatePicker && (
                                    <div className="absolute right-0 top-full mt-2 z-50">
                                        <DatePicker
                                            selectedDate={heatmapDate}
                                            onChange={setHeatmapDate}
                                            onClose={() => setShowHeatmapDatePicker(false)}
                                            className="right-0 origin-top-right"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
                                <span className="text-[10px] font-bold text-slate-400">LOW</span>
                                <div className="flex gap-0.5">
                                    <div className="w-4 h-4 rounded bg-primary/10"></div>
                                    <div className="w-4 h-4 rounded bg-primary/40"></div>
                                    <div className="w-4 h-4 rounded bg-primary/70"></div>
                                    <div className="w-4 h-4 rounded bg-primary"></div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400">HIGH</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="h-8"></div>
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <div key={day} className="text-[10px] font-bold text-slate-400 text-center uppercase">{day}</div>
                        ))}

                        {/* 4 Rows of Heatmap Data (Morning, Afternoon, Evening, Night) */}
                        {['Morning', 'Afternoon', 'Evening', 'Night'].map((time, rowIdx) => (
                            <React.Fragment key={time}>
                                <div className="text-[10px] font-bold text-slate-400 flex items-center">{time}</div>
                                {[...Array(7)].map((_, colIdx) => {
                                    // Pseudo-random opacity for demo
                                    const opacities = [10, 40, 70, 100];
                                    const opacity = opacities[(rowIdx + colIdx) % 4];
                                    const bgClass = opacity === 10 ? 'bg-primary/10' : opacity === 40 ? 'bg-primary/40' : opacity === 70 ? 'bg-primary/70' : 'bg-primary';
                                    return (
                                        <div key={colIdx} className={`h-10 rounded ${bgClass} hover:opacity-80 transition-opacity cursor-pointer relative group`}>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                                                {Math.floor(Math.random() * 20) + 5} Bookings
                                            </div>
                                        </div>
                                    );
                                })}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* Recent Bookings Table Section */}
                <motion.div variants={itemVariants} className="space-y-6">
                    {/* Search and Filter Bar */}
                    <div className="glass-card p-4 rounded-2xl flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm card-glow">
                        <div className="relative flex-1 min-w-[300px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-slate-500" size={20} />
                            <input
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-0 rounded-xl focus:ring-2 focus:ring-primary/40 font-medium text-sm placeholder:text-slate-400 dark:text-white outline-none transition-all"
                                placeholder="Search by student, service or ID..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <select className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer">
                                <option>All Services</option>
                                <option>Piano Lesson</option>
                                <option>Violin Lesson</option>
                                <option>Voice Coaching</option>
                            </select>
                            <select className="bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer">
                                <option>Status: All</option>
                                <option>Confirmed</option>
                                <option>Pending</option>
                                <option>Cancelled</option>
                            </select>
                            <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-200">
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 card-glow">
                        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Recent Bookings</h4>
                            <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                                View All <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                                        <th className="px-6 py-4 font-bold text-sm text-slate-700 dark:text-slate-200">Student Name</th>
                                        <th className="px-6 py-4 font-bold text-sm text-slate-700 dark:text-slate-200">Service</th>
                                        <th className="px-6 py-4 font-bold text-sm text-slate-700 dark:text-slate-200">Date & Time</th>
                                        <th className="px-6 py-4 font-bold text-sm text-slate-700 dark:text-slate-200">Amount</th>
                                        <th className="px-6 py-4 font-bold text-sm text-slate-700 dark:text-slate-200">Status</th>
                                        <th className="px-6 py-4 font-bold text-sm text-center text-slate-700 dark:text-slate-200">Profile</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                                                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${booking.student}`}
                                                        alt={booking.student}
                                                    />
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">{booking.student}</p>
                                                        <p className="text-[11px] opacity-60 text-slate-500 dark:text-slate-400">ID: #BK-{booking.id + 4200}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                                                    <Music className="text-primary w-4 h-4" />
                                                    <span className="text-sm font-medium">{booking.service}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{booking.date}</span>
                                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                                        <Clock size={10} /> {booking.time}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 font-mono">{booking.amount}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider
                                            ${booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' :
                                                        booking.status === 'Pending' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' :
                                                            'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400'}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <button className="inline-flex p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                                    <Eye size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <p className="text-xs opacity-60 text-slate-600 dark:text-slate-400">Showing <span className="font-bold">1-5</span> of <span className="font-bold">128</span> bookings</p>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all text-slate-600 dark:text-slate-400 disabled:opacity-50" disabled>
                                    <ChevronLeft size={16} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-md shadow-primary/20">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-400 transition-all">2</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-400 transition-all">3</button>
                                <span className="px-1 text-slate-400 text-xs">...</span>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all text-slate-600 dark:text-slate-400">
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default BookingAnalytics;
