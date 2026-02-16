import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, FileText, Send, X, CreditCard, User, BookOpen, ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import DatePicker from '../../components/ui/DatePicker';
import './finance.css';

const TransactionsPage = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [dateRange, setDateRange] = useState({ start: null, end: null });
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [methodFilter, setMethodFilter] = useState('All');

    const transactions = [
        { id: 'TXN-1001', student: 'Elena Rodriguez', course: 'Piano Masterclass', teacher: 'Prof. Marcus Chen', method: 'Credit Card', amount: '$240.00', status: 'Paid', date: 'Oct 24, 2023', invoiceId: 'INV-2023-001' },
        { id: 'TXN-1002', student: 'Julian Barnes', course: 'Guitar Basics', teacher: 'Sarah Jenkins', method: 'PayPal', amount: '$185.00', status: 'Pending', date: 'Oct 23, 2023', invoiceId: 'INV-2023-002' },
        { id: 'TXN-1003', student: 'Sarah Jenkins', course: 'Violin Advance', teacher: 'Dr. Helena Vane', method: 'Cash', amount: '$300.00', status: 'Paid', date: 'Oct 22, 2023', invoiceId: 'INV-2023-003' },
        { id: 'TXN-1004', student: 'Mike Ross', course: 'Music Theory', teacher: 'Prof. Marcus Chen', method: 'Online Transfer', amount: '$120.00', status: 'Failed', date: 'Oct 21, 2023', invoiceId: 'INV-2023-004' },
        { id: 'TXN-1005', student: 'Amelia Earhart', course: 'Flute Basics', teacher: 'Prof. R. Gauthier', method: 'Credit Card', amount: '$150.00', status: 'Paid', date: 'Oct 20, 2023', invoiceId: 'INV-2023-005' },
    ];

    // Filtering Logic
    const filteredTransactions = useMemo(() => {
        return transactions.filter(txn => {
            const matchesSearch =
                txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                txn.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                txn.course.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === 'All' || txn.status === statusFilter;
            const matchesMethod = methodFilter === 'All' || txn.method === methodFilter;

            return matchesSearch && matchesStatus && matchesMethod;
        });
    }, [searchTerm, statusFilter, methodFilter, transactions]);

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

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display relative">
            <div className={`transition-all duration-300 ${selectedTransaction ? 'mr-96' : ''}`}>
                <div className="space-y-6 pb-20">
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
                        <div>
                            <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Transactions</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                                Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Transactions
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm">
                                <Download size={18} /> Export CSV
                            </button>
                        </div>
                    </header>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        {/* Custom Glass Filters Bar */}
                        <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl flex flex-wrap items-center gap-4 bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm card-glow relative z-20">
                            <div className="relative flex-1 min-w-[280px]">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-slate-500 dark:text-slate-400" size={20} />
                                <input
                                    className="w-full pl-12 pr-4 py-3 bg-white/60 dark:bg-white/5 border-0 rounded-xl focus:ring-2 focus:ring-primary/40 font-medium text-sm placeholder:text-slate-400 dark:text-slate-500 dark:placeholder:text-slate-500 text-slate-800 dark:text-white outline-none transition-all"
                                    placeholder="Search by ID, Student, or Course..."
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Date Picker Integration */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowDatePicker(!showDatePicker)}
                                    className="flex items-center gap-2 px-4 py-3 bg-white/60 dark:bg-white/5 border-0 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-white/10 transition-all focus:ring-2 focus:ring-primary/40 outline-none min-w-[160px]"
                                >
                                    <CalendarIcon size={18} className="text-primary opacity-80" />
                                    <span>{dateRange.start ? dateRange.start.toLocaleDateString() : 'Select Date'}</span>
                                </button>
                                {showDatePicker && (
                                    <DatePicker
                                        selectedDate={dateRange.start || new Date()}
                                        onChange={(date) => {
                                            setDateRange({ ...dateRange, start: date });
                                            setShowDatePicker(false);
                                        }}
                                        onClose={() => setShowDatePicker(false)}
                                        className="top-full mt-2 right-0 origin-top-right transform"
                                    />
                                )}
                            </div>

                            <select
                                className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[150px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option className="dark:bg-slate-800" value="All">Status: All</option>
                                <option className="dark:bg-slate-800" value="Paid">Paid</option>
                                <option className="dark:bg-slate-800" value="Pending">Pending</option>
                                <option className="dark:bg-slate-800" value="Failed">Failed</option>
                                <option className="dark:bg-slate-800" value="Refunded">Refunded</option>
                            </select>

                            <select
                                className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[150px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
                                value={methodFilter}
                                onChange={(e) => setMethodFilter(e.target.value)}
                            >
                                <option className="dark:bg-slate-800" value="All">Method: All</option>
                                <option className="dark:bg-slate-800" value="Credit Card">Credit Card</option>
                                <option className="dark:bg-slate-800" value="PayPal">PayPal</option>
                                <option className="dark:bg-slate-800" value="Online Transfer">Online Transfer</option>
                                <option className="dark:bg-slate-800" value="Cash">Cash</option>
                            </select>

                            <button className="p-3 bg-white/50 dark:bg-white/10 rounded-xl hover:bg-primary text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white transition-all shadow-sm">
                                <Filter size={20} />
                            </button>
                        </motion.div>

                        {/* Custom Table Response */}
                        <motion.div variants={itemVariants} className="glass-card rounded-2xl overflow-hidden shadow-sm bg-white/40 dark:bg-gray-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-white/50 dark:bg-white/5 border-b border-white/50 dark:border-white/10">
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Transaction ID</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Student & Course</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Method</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Amount</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Status</th>
                                            <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/20 dark:divide-white/5">
                                        {filteredTransactions.length > 0 ? (
                                            filteredTransactions.map((txn, i) => (
                                                <tr
                                                    key={i}
                                                    onClick={() => setSelectedTransaction(txn)}
                                                    className={`hover:bg-white/40 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer group ${selectedTransaction?.id === txn.id ? 'bg-primary/5 dark:bg-primary/10' : ''}`}
                                                >
                                                    <td className="px-6 py-4">
                                                        <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{txn.id}</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div>
                                                            <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{txn.student}</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{txn.course}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                                                        {txn.date}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                            <CreditCard size={14} className="opacity-50" />
                                                            <span>{txn.method}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <span className="font-bold text-slate-900 dark:text-white">{txn.amount}</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${txn.status === 'Paid' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' :
                                                            txn.status === 'Pending' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' :
                                                                'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
                                                            }`}>
                                                            {txn.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                                            <Download size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                                                    No transactions found matching your filters.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="px-6 py-4 bg-white/30 dark:bg-white/5 border-t border-white/50 dark:border-white/10 flex items-center justify-between">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Showing <span className="font-bold">1-{filteredTransactions.length}</span> of <span className="font-bold">{transactions.length}</span> transactions</p>
                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all text-slate-500 dark:text-slate-400 disabled:opacity-30">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-md shadow-primary/30">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400 transition-all">2</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400 transition-all">3</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all text-slate-500 dark:text-slate-400">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Detailed Side Panel */}
            {selectedTransaction && (
                <div className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-100 dark:border-gray-800 z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Details</h2>
                            <button onClick={() => setSelectedTransaction(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-8">
                            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl border border-primary/10">
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-3">Total Amount</p>
                                <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{selectedTransaction.amount}</p>
                                <span className={`inline-flex mt-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm ${selectedTransaction.status === 'Paid' ? 'bg-green-500 text-white' :
                                    'bg-amber-500 text-white'
                                    }`}>
                                    {selectedTransaction.status}
                                </span>
                            </div>

                            <div className="space-y-5">
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <FileText size={18} className="text-primary" />
                                    Transaction Info
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                                    <div className="text-slate-500 dark:text-slate-400">Reference ID</div>
                                    <div className="font-mono font-medium text-right text-slate-900 dark:text-white">{selectedTransaction.id}</div>

                                    <div className="text-slate-500 dark:text-slate-400">Date & Time</div>
                                    <div className="font-medium text-right text-slate-900 dark:text-white">{selectedTransaction.date}</div>

                                    <div className="text-slate-500 dark:text-slate-400">Invoice Linked</div>
                                    <div className="font-medium text-right text-primary underline cursor-pointer hover:text-primary/80">{selectedTransaction.invoiceId}</div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                                    <div className="h-10 w-10 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-primary shadow-sm">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Student</p>
                                        <p className="font-bold text-slate-900 dark:text-white">{selectedTransaction.student}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                                    <div className="h-10 w-10 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-primary shadow-sm">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Course</p>
                                        <p className="font-bold text-slate-900 dark:text-white">{selectedTransaction.course}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-3">
                                <button className="col-span-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-white/10 font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
                                    <Download size={16} /> Receipt
                                </button>
                                <button className="col-span-1 py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <Send size={16} /> Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransactionsPage;
