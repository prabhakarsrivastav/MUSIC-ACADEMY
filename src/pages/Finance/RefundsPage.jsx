import React from 'react';
import { RefreshCw, CheckCircle, XCircle, Filter, Search, ChevronRight } from 'lucide-react';
import './finance.css';

const RefundsPage = () => {
    return (
        <div className="finance-page-container">
            <div className="finance-content-wrapper">
                <header className="mb-6">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Refunds</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Refunds
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Pending Requests */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="finance-section-title flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                            Pending Requests
                        </h2>

                        {[
                            { student: 'Alex Morgan', course: 'Drum Basics', amount: '$150.00', reason: 'Scheduling conflict', date: 'Applied 2 days ago' },
                            { student: 'Jessica Lee', course: 'Vocal Training', amount: '$200.00', reason: 'Moving away', date: 'Applied 5 hours ago' }
                        ].map((req, i) => (
                            <div key={i} className="bg-white dark:bg-background-dark/50 border-l-4 border-amber-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4 sm:gap-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 flex-shrink-0">
                                            <RefreshCw size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{req.student}</h3>
                                            <p className="text-sm text-gray-500">{req.course} • {req.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right w-full sm:w-auto pl-16 sm:pl-0">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Refundable Amount</p>
                                        <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{req.amount}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl mb-6">
                                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{req.reason}"</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <button className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                        <CheckCircle size={18} /> Approve Refund
                                    </button>
                                    <button className="flex-1 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-red-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                        <XCircle size={18} /> Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Completed Refunds */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="finance-section-title">Completed History</h2>
                            <button className="text-xs font-bold text-primary hover:underline">View All</button>
                        </div>

                        <div className="bg-white dark:bg-background-dark/50 rounded-3xl shadow-gloss border border-gray-100 dark:border-gray-800 p-2">
                            {[
                                { student: 'Tom Harris', amount: '$50.00', date: 'Oct 20', status: 'Processed' },
                                { student: 'Emily Clark', amount: '$120.00', date: 'Oct 18', status: 'Processed' },
                                { student: 'John Doe', amount: '$80.00', date: 'Oct 15', status: 'Rejected', rejected: true }
                            ].map((ref, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors group">
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-gray-100">{ref.student}</p>
                                        <p className="text-xs text-gray-500">{ref.date} • {ref.rejected ? 'Rejected by Owner' : 'via Original Payment Method'}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${ref.rejected ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-gray-100'}`}>{ref.amount}</p>
                                        <p className={`text-[10px] font-bold uppercase ${ref.rejected ? 'text-red-500' : 'text-green-500'}`}>{ref.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundsPage;
