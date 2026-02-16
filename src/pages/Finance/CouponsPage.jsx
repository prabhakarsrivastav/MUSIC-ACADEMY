import React, { useState } from 'react';
import { Plus, Tag, Trash2, PieChart, TrendingUp, Users, ChevronRight } from 'lucide-react';
import './finance.css';

const CouponsPage = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    return (
        <div className="finance-page-container">
            <div className="finance-content-wrapper">
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Coupons & Discounts</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Coupons
                        </div>
                    </div>
                    <button
                        onClick={() => setShowCreateForm(!showCreateForm)}
                        className="finance-button-primary"
                    >
                        {showCreateForm ? 'Close Form' : <><Plus size={18} /> Create Coupon</>}
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Create Form & List */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Create Form */}
                        {showCreateForm && (
                            <div className="bg-white dark:bg-background-dark/50 p-6 rounded-3xl shadow-gloss border border-primary/20 animate-in slide-in-from-top-4 duration-300">
                                <h2 className="font-bold text-lg mb-4">Create New Coupon</h2>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase text-gray-500">Code</label>
                                        <input type="text" placeholder="SUMMER24" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold uppercase tracking-widest outline-none focus:ring-2 focus:ring-primary/20" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase text-gray-500">Discount Type</label>
                                        <div className="flex bg-gray-50 dark:bg-gray-800 p-1 rounded-xl">
                                            <button className="flex-1 py-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm font-bold text-xs uppercase">Percentage (%)</button>
                                            <button className="flex-1 py-2 rounded-lg text-gray-500 font-bold text-xs uppercase hover:bg-gray-200 dark:hover:bg-gray-700/50">Flat Amount</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1 mb-6">
                                    <label className="text-xs font-bold uppercase text-gray-500">Applicable Courses</label>
                                    <select className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20">
                                        <option>All Courses</option>
                                        <option>Piano Masterclass</option>
                                    </select>
                                </div>
                                <div className="flex gap-4 items-center mb-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary" />
                                        <span className="text-sm font-medium">First time users only</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary" />
                                        <span className="text-sm font-medium">Auto-apply at checkout</span>
                                    </label>
                                </div>
                                <button className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:opacity-90 transition-opacity">
                                    Launch Coupon
                                </button>
                            </div>
                        )}

                        {/* Coupon List */}
                        <div className="space-y-4">
                            {[
                                { code: 'WELCOME10', type: '10% OFF', usage: '142 used', status: 'Active', exp: 'No Expiry' },
                                { code: 'FESTIVE50', type: '$50 FLAT', usage: '58 used', status: 'Active', exp: 'Expires in 2 days' },
                                { code: 'EARLYBIRD', type: '15% OFF', usage: '300 used', status: 'Expired', exp: 'Expired' },
                            ].map((coupon, i) => (
                                <div key={i} className="bg-white dark:bg-background-dark/50 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/5 text-primary rounded-xl">
                                            <Tag size={24} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="font-black text-lg tracking-widest">{coupon.code}</span>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${coupon.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>{coupon.status}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 font-medium">{coupon.type} • {coupon.exp}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
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
                        <div className="bg-brand-peach dark:bg-background-dark/50 p-6 rounded-3xl border border-primary/10">
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
        </div>
    );
};

export default CouponsPage;
