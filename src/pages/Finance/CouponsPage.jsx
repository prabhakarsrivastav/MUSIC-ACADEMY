import React, { useState } from 'react';
import { Plus, Tag, Trash2, PieChart, TrendingUp, Users, ChevronRight, X } from 'lucide-react';
import './finance.css';

const CouponsPage = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    // Form State
    const [code, setCode] = useState('');
    const [discountType, setDiscountType] = useState('percentage'); // 'percentage' or 'flat'
    const [amount, setAmount] = useState('');
    const [course, setCourse] = useState('All Courses');

    // Coupons Data State
    const [coupons, setCoupons] = useState([
        { id: 1, code: 'WELCOME10', type: '10% OFF', usage: '142 used', status: 'Active', exp: 'No Expiry', color: 'border-green-500' },
        { id: 2, code: 'FESTIVE50', type: '$50 FLAT', usage: '58 used', status: 'Active', exp: 'Expires in 2 days', color: 'border-blue-500' },
        { id: 3, code: 'EARLYBIRD', type: '15% OFF', usage: '300 used', status: 'Expired', exp: 'Expired', color: 'border-gray-300' },
    ]);

    const handleAddCoupon = () => {
        if (!code || !amount) return;

        const pAmount = parseFloat(amount);
        const typeLabel = discountType === 'percentage' ? `${amount}% OFF` : `$${amount} FLAT`;
        const colorClass = discountType === 'percentage' ? 'border-purple-500' : 'border-indigo-500';

        const newCoupon = {
            id: Date.now(),
            code: code.toUpperCase(),
            type: typeLabel,
            usage: '0 used',
            status: 'Active',
            exp: 'Just Created',
            color: colorClass
        };

        setCoupons([newCoupon, ...coupons]);

        // Reset and Close
        setCode('');
        setAmount('');
        setShowCreateForm(false);
    };

    return (
        <div className="finance-page-container">
            <div className="finance-content-wrapper">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Coupons & Discounts</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Coupons
                        </div>
                    </div>
                    <button
                        onClick={() => setShowCreateForm(true)}
                        className="finance-button-primary w-full md:w-auto justify-center"
                    >
                        <Plus size={18} /> Create Coupon
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: List */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Coupon List */}
                        <div className="space-y-4">
                            {coupons.map((coupon) => (
                                <div key={coupon.id} className={`bg-white dark:bg-background-dark/50 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 border-l-4 ${coupon.color} flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:shadow-md transition-all gap-4 sm:gap-0`}>
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl flex-shrink-0">
                                            <Tag size={24} />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                                                <span className="font-black text-lg tracking-widest">{coupon.code}</span>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${coupon.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>{coupon.status}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 font-medium">{coupon.type} • {coupon.exp}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 pl-16 sm:pl-0">
                                        <div className="text-left sm:text-right">
                                            <p className="font-bold text-lg">{coupon.usage}</p>
                                            <p className="text-[10px] text-gray-400 uppercase font-bold">Total Redemptions</p>
                                        </div>
                                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Analytics */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white dark:bg-background-dark/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <TrendingUp size={20} className="text-primary" /> Impact Analysis
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Revenue Forgone</p>
                                    <p className="text-3xl font-black text-gray-900">$2,450.00</p>
                                    <p className="text-xs text-gray-400 mt-1">Total discounts given this month</p>
                                </div>
                                <div className="w-full bg-white/50 h-[1px]"></div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">Conversion Uplift</p>
                                    <p className="text-3xl font-black text-green-600">+18%</p>
                                    <p className="text-xs text-gray-400 mt-1">Increase in sales due to coupons</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-background-dark/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Users size={20} className="text-gray-400" /> Top Spenders
                            </h3>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-500">Students who use coupons most frequently.</p>
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Student Name</p>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1">
                                                <div className="bg-primary h-full w-[70%] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Coupon Modal */}
            {showCreateForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-gray-900 w-full max-w-lg p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="font-black text-2xl text-gray-900 dark:text-gray-100">Create New Coupon</h2>
                            <button
                                onClick={() => setShowCreateForm(false)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Code</label>
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        placeholder="SUMMER24"
                                        className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold uppercase tracking-widest outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        autoFocus
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Value</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder={discountType === 'percentage' ? "20" : "50"}
                                        className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Discount Type</label>
                                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                                    <button
                                        onClick={() => setDiscountType('percentage')}
                                        className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase transition-all ${discountType === 'percentage' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700/50'}`}
                                    >
                                        Percentage (%)
                                    </button>
                                    <button
                                        onClick={() => setDiscountType('flat')}
                                        className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase transition-all ${discountType === 'flat' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700/50'}`}
                                    >
                                        Flat Amount ($)
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Applicable Courses</label>
                                <select
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700 dark:text-gray-200"
                                >
                                    <option>All Courses</option>
                                    <option>Piano Masterclass</option>
                                    <option>Guitar Essentials</option>
                                    <option>Vocal Training</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary border-gray-300" />
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">First time users only</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary border-gray-300" />
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">Auto-apply at checkout</span>
                                </label>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button
                                    onClick={() => setShowCreateForm(false)}
                                    className="flex-1 py-4 font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddCoupon}
                                    className="flex-1 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none"
                                >
                                    Launch Coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CouponsPage;
