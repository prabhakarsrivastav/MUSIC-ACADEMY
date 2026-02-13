import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Search, Filter, Calendar, ChevronDown, MoreHorizontal,
    CheckCircle, XCircle, Clock, User, FileText,
    ChevronLeft, ChevronRight, Edit, Trash2, Eye,
    CreditCard, Users, LayoutGrid, ArrowUpRight, Download, Plus,
    X, Phone, Mail, MapPin, AlertCircle, History, DollarSign,
    Briefcase, Music
} from 'lucide-react';
import DatePicker from '../../components/ui/DatePicker';

const BookingList = () => {
    // State for filters
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Advanced Filters State
    const [statusFilter, setStatusFilter] = useState('All');
    const [paymentFilter, setPaymentFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');

    // Drawer State
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Mock Data Generator
    const generateMockBookings = () => {
        return Array.from({ length: 45 }).map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - Math.floor(Math.random() * 10));

            return {
                id: i + 1,
                time: `${9 + (i % 8)}:00 AM`,
                student: `Student ${i + 1}`,
                course: i % 2 === 0 ? "Piano (Inter)" : "Violin (Beginner)",
                teacher: i % 3 === 0 ? "Mr. Albus" : "Ms. Minerva",
                room: `Studio ${String.fromCharCode(65 + (i % 3))}`,
                status: ['Confirmed', 'Pending', 'Cancelled', 'Rescheduled'][i % 4],
                payment: ['Paid', 'Unpaid', 'Partial'][i % 3],
                amount: "$45.00",
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                rawDate: date,
                type: ['Regular', 'Trial', 'Batch'][i % 3],
                email: `student${i + 1}@example.com`,
                phone: "+1 (555) 000-0000",
                parent: "Parent Name",
                package: "10 Classes (4 remaining)",
                lastAttendance: "92%",
                notes: "Needs extra attention on scales.",
                history: [
                    { date: '2023-10-20', action: 'Rescheduled from 10:00 AM' },
                    { date: '2023-10-15', action: 'Created via Admin Panel' }
                ]
            };
        });
    };

    const [bookings, setBookings] = useState(generateMockBookings());

    // Filter Logic
    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
            String(booking.id).includes(searchQuery);

        const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;
        const matchesType = typeFilter === 'All' || booking.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
    const currentBookings = filteredBookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const openDrawer = (booking) => {
        setSelectedBooking(booking);
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedBooking(null), 300); // Clear after animation
    };

    const toggleSelectAll = () => {
        if (selectedRows.length === currentBookings.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(currentBookings.map(b => b.id));
        }
    };

    const toggleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    // Action Handlers
    const handleStatusChange = (id, newStatus) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
        if (selectedBooking && selectedBooking.id === id) {
            setSelectedBooking({ ...selectedBooking, status: newStatus });
        }
    };

    const handleBulkAction = (action) => {
        if (action === 'confirm') {
            setBookings(bookings.map(b => selectedRows.includes(b.id) ? { ...b, status: 'Confirmed' } : b));
        } else if (action === 'cancel') {
            setBookings(bookings.map(b => selectedRows.includes(b.id) ? { ...b, status: 'Cancelled' } : b));
        }
        setSelectedRows([]);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Confirmed': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20';
            case 'Pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
            case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20';
            default: return 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20';
        }
    };

    return (
        <div className="p-6 font-display h-full overflow-y-auto custom-scrollbar relative">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Manage Bookings</h1>
                    <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
                        <Link to="/"><span>Dashboard</span></Link>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Bookings</span>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-700 dark:text-slate-200">
                        <Download size={18} className="text-slate-500" />
                        Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors">
                        <Plus size={18} />
                        New Booking
                    </button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 mb-6 card-glow">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by student, teacher, or ID..."
                            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <button
                                onClick={() => setShowDatePicker(!showDatePicker)}
                                className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                            >
                                <Calendar size={18} className="text-slate-500" />
                                <span>{selectedDate.toLocaleDateString()}</span>
                                <ChevronDown size={14} className="text-slate-400" />
                            </button>
                            {showDatePicker && (
                                <div className="absolute top-full right-0 mt-2 z-50">
                                    <DatePicker
                                        selectedDate={selectedDate}
                                        onChange={(date) => {
                                            setSelectedDate(date);
                                            setShowDatePicker(false);
                                        }}
                                        onClose={() => setShowDatePicker(false)}
                                    />
                                </div>
                            )}
                        </div>
                        <select
                            className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer min-w-[140px]"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All Status</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <select
                            className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer min-w-[140px]"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option value="All">All Types</option>
                            <option value="Regular">Regular</option>
                            <option value="Trial">Trial</option>
                            <option value="Batch">Batch</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden card-glow">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 w-[40px]">
                                    <input
                                        type="checkbox"
                                        className="rounded border-slate-300 text-primary focus:ring-primary/20"
                                        checked={selectedRows.length === currentBookings.length && currentBookings.length > 0}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Details</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {currentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            className="rounded border-slate-300 text-primary focus:ring-primary/20"
                                            checked={selectedRows.includes(booking.id)}
                                            onChange={() => toggleSelectRow(booking.id)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                                            <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                                <Clock size={14} />
                                            </div>
                                            {booking.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                                {booking.student.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900 dark:text-white text-sm">{booking.student}</div>
                                                <div className="text-xs text-slate-500">ID: #{booking.id + 4000}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{booking.course}</span>
                                            <span className="text-xs text-slate-500">{booking.teacher}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`text-xs font-bold uppercase ${booking.payment === 'Paid' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                                            {booking.payment}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button
                                            onClick={() => openDrawer(booking)}
                                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold transition-all shadow-sm"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Simplified) */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        Showing <span className="font-bold">{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredBookings.length)}</span> of <span className="font-bold">{filteredBookings.length}</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 disabled:opacity-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Drawer */}
            <AnimatePresence>
                {isDrawerOpen && selectedBooking && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDrawer}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        />
                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-[500px] bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-hidden flex flex-col border-l border-slate-200 dark:border-slate-800"
                        >
                            <BookingDrawerContent booking={selectedBooking} onClose={closeDrawer} onUpdateStatus={handleStatusChange} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

// Internal Drawer Component to organize tabs/state
const BookingDrawerContent = ({ booking, onClose, onUpdateStatus }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: LayoutGrid },
        { id: 'schedule', label: 'Schedule', icon: Calendar },
        { id: 'payment', label: 'Payment', icon: DollarSign },
        { id: 'history', label: 'History', icon: History },
    ];

    return (
        <div className="flex flex-col h-full font-display">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50">
                <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        Booking #{booking.id + 4000}
                    </h2>
                    <p className="text-xs text-slate-500">Created on {booking.date}</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors">
                    <X size={20} />
                </button>
            </div>

            {/* Quick Status Bar */}
            <div className="px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Status:</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                            booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                'bg-red-100 text-red-700'
                        }`}>
                        {booking.status}
                    </span>
                </div>
                <div className="flex gap-2">
                    {booking.status === 'Pending' && (
                        <button
                            onClick={() => onUpdateStatus(booking.id, 'Confirmed')}
                            className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-xs font-bold hover:bg-emerald-600"
                        >
                            Confirm
                        </button>
                    )}
                    {booking.status !== 'Cancelled' && (
                        <button
                            onClick={() => onUpdateStatus(booking.id, 'Cancelled')}
                            className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 border border-red-100"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 px-6 border-b border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 text-sm font-bold flex items-center gap-2 relative transition-colors whitespace-nowrap
                            ${activeTab === tab.id ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}
                        `}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div layoutId="drawer-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30 dark:bg-slate-900/30">
                {activeTab === 'overview' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        {/* Student Card */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Student Information</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-lg font-bold text-slate-600 dark:text-slate-300">
                                    {booking.student.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-lg">{booking.student}</p>
                                    <p className="text-sm text-slate-500">{booking.email}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                    <Phone size={16} className="text-slate-400" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{booking.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                    <User size={16} className="text-slate-400" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{booking.parent}</span>
                                </div>
                            </div>
                        </div>

                        {/* Session Details */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Session Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Course</p>
                                        <p className="font-bold text-slate-900 dark:text-white">{booking.course}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500 mb-1">Type</p>
                                        <div className="flex items-center gap-1 justify-end">
                                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-bold">{booking.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                            <Briefcase size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{booking.teacher}</p>
                                            <p className="text-xs text-slate-500">Instructor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{booking.room}</p>
                                            <p className="text-xs text-slate-500">Room</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Internal Notes</h3>
                            <textarea
                                className="w-full h-24 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg text-sm text-slate-700 dark:text-slate-200 border-none focus:ring-2 focus:ring-primary/20 resize-none outline-none"
                                placeholder="Add note..."
                                defaultValue={booking.notes}
                            />
                            <div className="flex justify-end mt-2">
                                <button className="text-xs font-bold text-primary hover:text-primary-dark">Save Note</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'schedule' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{booking.date}</h3>
                            <p className="text-slate-500 font-medium mb-4">{booking.time} - (1 Hour)</p>

                            <button className="mx-auto flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                <Edit size={14} /> Reschedule Session
                            </button>
                        </div>

                        {/* Upcoming Mock */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Upcoming in Series</h3>
                            <div className="space-y-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 opacity-60">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">
                                                Nov {10 + i}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Piano Lesson</p>
                                                <p className="text-xs text-slate-500">9:00 AM • Studio A</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'payment' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">Total Paid</p>
                                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">$450.00</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Balance Due</p>
                                <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">$0.00</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                <h3 className="text-xs font-bold text-slate-500 uppercase">Transaction History</h3>
                                <button className="text-xs font-bold text-primary">Download Invoice</button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-700">
                                <div className="p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                            <CheckCircle size={14} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Payment Received</p>
                                            <p className="text-xs text-slate-500">Oct 24, 2023 • Via Credit Card</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-slate-700 dark:text-slate-200">$45.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        {booking.history && booking.history.map((log, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mt-2" />
                                    <div className="w-0.5 flex-1 bg-slate-100 dark:bg-slate-800 my-1" />
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{log.action}</p>
                                    <p className="text-xs text-slate-500">{log.date}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">System Information</p>
                                <p className="text-xs text-slate-500">Booking created automatically via subscription.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <Mail size={16} /> Email Student
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
                        <Edit size={16} /> Edit Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
