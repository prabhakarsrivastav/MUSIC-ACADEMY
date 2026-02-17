import React, { useState } from 'react';
import { Search, Plus, Filter, FileText, Send, MoreVertical, Copy, RefreshCcw, Check, X, ChevronRight, Trash2 } from 'lucide-react';
import './finance.css';

const InvoicesPage = () => {
    const [activeTab, setActiveTab] = useState('Sent');
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Initial Data
    const [invoices, setInvoices] = useState([
        { id: 'INV-2023-001', student: 'Elena Rodriguez', items: 'Piano Masterclass (Sep)', amount: '$240.00', dueDate: 'Oct 30, 2023', status: 'Sent' },
        { id: 'INV-2023-002', student: 'Julian Barnes', items: 'Guitar Basics (Sep)', amount: '$185.00', dueDate: 'Oct 28, 2023', status: 'Paid' },
        { id: 'INV-2023-003', student: 'Sarah Jenkins', items: 'Violin Advance (Sep)', amount: '$300.00', dueDate: 'Oct 25, 2023', status: 'Overdue' },
        { id: 'INV-2023-004', student: 'Mike Ross', items: 'Music Theory (Sep)', amount: '$120.00', dueDate: 'Nov 05, 2023', status: 'Draft' },
    ]);

    // Form State
    const [student, setStudent] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [lineItems, setLineItems] = useState([
        { id: 1, description: 'Piano Masterclass', price: '' }
    ]);
    const [discount, setDiscount] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [notes, setNotes] = useState('');

    const filteredInvoices = activeTab === 'All' ? invoices : invoices.filter(inv => inv.status === activeTab);

    // Logic
    const addLineItem = () => {
        setLineItems([...lineItems, { id: Date.now(), description: '', price: '' }]);
    };

    const removeLineItem = (id) => {
        setLineItems(lineItems.filter(item => item.id !== id));
    };

    const updateLineItem = (id, field, value) => {
        setLineItems(lineItems.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    // Calculations
    const subtotal = lineItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
    const discountAmount = parseFloat(discount) || 0;
    const taxAmount = (subtotal - discountAmount) * ((parseFloat(taxRate) || 0) / 100);
    const total = Math.max(0, subtotal - discountAmount + taxAmount);

    const handleCreateInvoice = () => {
        if (!student || !dueDate || total === 0) return;

        const newInvoice = {
            id: `INV-2023-${String(invoices.length + 5).padStart(3, '0')}`,
            student: student,
            items: lineItems.map(i => i.description).join(', ') || 'Custom Services',
            amount: `$${total.toFixed(2)}`,
            dueDate: new Date(dueDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            status: 'Sent'
        };

        setInvoices([newInvoice, ...invoices]);
        setShowCreateModal(false);

        // Reset Form
        setStudent('');
        setDueDate('');
        setLineItems([{ id: Date.now(), description: '', price: '' }]);
        setDiscount('');
        setTaxRate('');
        setNotes('');
    };

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
                        <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20 sticky top-0 backdrop-blur-md z-10">
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
                                        <select
                                            value={student}
                                            onChange={(e) => setStudent(e.target.value)}
                                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                                        >
                                            <option value="">Select Student...</option>
                                            <option value="Elena Rodriguez">Elena Rodriguez</option>
                                            <option value="Julian Barnes">Julian Barnes</option>
                                            <option value="Sarah Jenkins">Sarah Jenkins</option>
                                            <option value="Mike Ross">Mike Ross</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Due Date</label>
                                        <input
                                            type="date"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Line Items</label>
                                    <div className="space-y-3">
                                        {lineItems.map((item, index) => (
                                            <div key={item.id} className="flex gap-4 items-start">
                                                <input
                                                    type="text"
                                                    placeholder="Description (e.g. Piano Lesson)"
                                                    value={item.description}
                                                    onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                                                    className="flex-1 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                                />
                                                <input
                                                    type="number"
                                                    placeholder="Price"
                                                    value={item.price}
                                                    onChange={(e) => updateLineItem(item.id, 'price', e.target.value)}
                                                    className="w-32 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                                />
                                                {index > 0 && (
                                                    <button
                                                        onClick={() => removeLineItem(item.id)}
                                                        className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            onClick={addLineItem}
                                            className="text-xs text-primary font-bold flex items-center gap-1 hover:underline mt-2"
                                        >
                                            <Plus size={14} /> Add Line Item
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Discount ($)</label>
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            value={discount}
                                            onChange={(e) => setDiscount(e.target.value)}
                                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Tax (%)</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={taxRate}
                                            onChange={(e) => setTaxRate(e.target.value)}
                                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Total</label>
                                        <div className="w-full p-3 bg-primary/5 border border-primary/20 rounded-xl font-black text-xl text-primary text-right">
                                            ${total.toFixed(2)}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Notes</label>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none h-24 resize-none"
                                        placeholder="Thank you for your business..."
                                    ></textarea>
                                </div>

                                <div className="pt-4 flex justify-end gap-4 border-t border-gray-100 dark:border-gray-800">
                                    <button onClick={() => setShowCreateModal(false)} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">Cancel</button>
                                    <button
                                        onClick={handleCreateInvoice}
                                        className="finance-button-primary px-8 py-3 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none"
                                    >
                                        Create Invoice
                                    </button>
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
