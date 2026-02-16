import React, { useState } from 'react';
import { Search, Plus, Filter, FileText, Send, MoreVertical, Copy, RefreshCcw, Check, X, ChevronRight } from 'lucide-react';
import './finance.css';

const InvoicesPage = () => {
    const [activeTab, setActiveTab] = useState('Sent');
    const [showCreateModal, setShowCreateModal] = useState(false);

    const invoices = [
        { id: 'INV-2023-001', student: 'Elena Rodriguez', items: 'Piano Masterclass (Sep)', amount: '$240.00', dueDate: 'Oct 30, 2023', status: 'Sent' },
        { id: 'INV-2023-002', student: 'Julian Barnes', items: 'Guitar Basics (Sep)', amount: '$185.00', dueDate: 'Oct 28, 2023', status: 'Paid' },
        { id: 'INV-2023-003', student: 'Sarah Jenkins', items: 'Violin Advance (Sep)', amount: '$300.00', dueDate: 'Oct 25, 2023', status: 'Overdue' },
        { id: 'INV-2023-004', student: 'Mike Ross', items: 'Music Theory (Sep)', amount: '$120.00', dueDate: 'Nov 05, 2023', status: 'Draft' },
    ];

    const filteredInvoices = activeTab === 'All' ? invoices : invoices.filter(inv => inv.status === activeTab);

    return (
        <div className="finance-page-container">
            <div className="finance-content-wrapper">
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Invoices</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Invoices
                        </div>
                    </div>
                    <button onClick={() => setShowCreateModal(true)} className="finance-button-primary w-full md:w-auto justify-center">
                        <Plus size={18} /> New Invoice
                    </button>
                </header>

                <div className="bg-white dark:bg-background-dark/50 rounded-3xl shadow-gloss border border-gray-100 dark:border-gray-800 overflow-hidden">
                    {/* Tabs */}
                    <div className="border-b border-gray-100 dark:border-gray-800 px-6 pt-4 flex gap-6 overflow-x-auto">
                        {['All', 'Draft', 'Sent', 'Paid', 'Overdue', 'Cancelled'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-2 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Toolbar */}
                    <div className="p-4 flex flex-wrap gap-4 items-center justify-between bg-gray-50/50 dark:bg-gray-800/30">
                        <div className="relative min-w-[250px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search invoices..."
                                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[1000px]">
                            <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Invoice ID</th>
                                    <th className="px-6 py-4 font-bold">Student</th>
                                    <th className="px-6 py-4 font-bold">Items</th>
                                    <th className="px-6 py-4 font-bold">Due Date</th>
                                    <th className="px-6 py-4 font-bold">Amount</th>
                                    <th className="px-6 py-4 font-bold">Status</th>
                                    <th className="px-6 py-4 font-bold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                                {filteredInvoices.map((inv, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
                                        <td className="px-6 py-4 font-mono text-xs text-gray-500">{inv.id}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                                                {inv.student.charAt(0)}
                                            </div>
                                            {inv.student}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{inv.items}</td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{inv.dueDate}</td>
                                        <td className="px-6 py-4 font-black">{inv.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${inv.status === 'Paid' ? 'bg-green-50 text-green-600 border-green-100' :
                                                inv.status === 'Sent' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                    inv.status === 'Overdue' ? 'bg-red-50 text-red-600 border-red-100' :
                                                        'bg-gray-100 text-gray-600 border-gray-200'
                                                }`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 hover:text-primary" title="Preview">
                                                    <FileText size={16} />
                                                </button>
                                                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 hover:text-primary" title="Send Email/WhatsApp">
                                                    <Send size={16} />
                                                </button>
                                                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 hover:text-primary" title="Mark Paid">
                                                    <Check size={16} />
                                                </button>
                                                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 hover:text-primary">
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Create Invoice Modal */}
                {showCreateModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20">
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Create New Invoice</h3>
                                    <p className="text-sm text-gray-500">Bill a student for courses or services</p>
                                </div>
                                <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Student</label>
                                        <select className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none">
                                            <option>Select Student...</option>
                                            <option>Elena Rodriguez</option>
                                            <option>Julian Barnes</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Due Date</label>
                                        <input type="date" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Courses / Items</label>
                                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl space-y-3">
                                        <div className="flex gap-4">
                                            <select className="flex-1 p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm">
                                                <option>Piano Masterclass - Sep 2023</option>
                                                <option>Guitar Basics - Sep 2023</option>
                                            </select>
                                            <input type="number" placeholder="Price" className="w-32 p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm" />
                                            <button className="text-red-500 font-bold hover:bg-red-50 p-2 rounded-lg"><X size={16} /></button>
                                        </div>
                                        <button className="text-xs text-primary font-bold flex items-center gap-1 hover:underline">
                                            <Plus size={14} /> Add Line Item
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Discount</label>
                                        <input type="text" placeholder="0.00" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Tax (%)</label>
                                        <input type="text" placeholder="0" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Total</label>
                                        <div className="w-full p-3 bg-primary/5 border border-primary/20 rounded-xl font-black text-primary text-right">
                                            $0.00
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Notes</label>
                                    <textarea className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none h-24 resize-none" placeholder="Thank you for your business..."></textarea>
                                </div>

                                <div className="pt-4 flex justify-end gap-4">
                                    <button onClick={() => setShowCreateModal(false)} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                                    <button className="finance-button-primary px-8 py-3 rounded-xl">Create Invoice</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvoicesPage;
