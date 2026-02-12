import React, { useState } from 'react';
import {
  Search, Bell, Menu, X, ArrowUpRight, ArrowDownRight, Download, Calendar, DollarSign, Users, Activity, TrendingUp, PieChart, BarChart3, Receipt, FileBarChart, CheckCircle, AlertCircle, FileText, Send, Plus, Filter, Clock, RotateCcw
} from 'lucide-react';


import RevenueTrendChart from '../../components/dashboard/RevenueTrendChart';

const FinanceDashboard = () => {
  const [pieChartKey, setPieChartKey] = useState(0);
  const [gaugeChartKey, setGaugeChartKey] = useState(0);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invoiceSearch, setInvoiceSearch] = useState('');
  const [invoiceFilter, setInvoiceFilter] = useState('All');

  const refreshPieChart = () => {
    setPieChartKey(prev => prev + 1);
  };

  const refreshGaugeChart = () => {
    setGaugeChartKey(prev => prev + 1);
  };

  const allInvoices = [
    { id: 'INV-2023-001', user: 'Elena Rodriguez', date: 'Sep 30, 2023', amount: '$1,250.00', status: 'Paid' },
    { id: 'INV-2023-002', user: 'Julian Barnes', date: 'Aug 31, 2023', amount: '$980.00', status: 'Paid' },
    { id: 'INV-2023-003', user: 'Sarah Jenkins', date: 'Jul 31, 2023', amount: '$1,450.00', status: 'Paid' },
    { id: 'INV-2023-004', user: 'Dr. Helena Vane', date: 'Jun 30, 2023', amount: '$2,100.00', status: 'Paid' },
    { id: 'INV-2023-005', user: 'Marcus Chen', date: 'May 31, 2023', amount: '$3,200.00', status: 'Paid' },
    { id: 'INV-2023-006', user: 'Alex Morgan', date: 'Oct 15, 2023', amount: '$850.00', status: 'Pending' }
  ];

  const filteredInvoices = allInvoices.filter(inv => {
    const matchesSearch = inv.user.toLowerCase().includes(invoiceSearch.toLowerCase()) || inv.id.toLowerCase().includes(invoiceSearch.toLowerCase());
    const matchesFilter = invoiceFilter === 'All' ||
      (invoiceFilter === 'Recent' && new Date(inv.date) > new Date('2023-09-01')) ||
      (invoiceFilter === 'Old' && new Date(inv.date) <= new Date('2023-09-01'));
    return matchesSearch && matchesFilter;
  });


  return (
    <div className="h-full overflow-y-auto bg-accent-cream dark:bg-background-dark/90 font-display text-[#2B2B2B] dark:text-gray-100">
      <div className="p-8 space-y-5 max-w-[1600px] mx-auto w-full">
        {/* Top Section (Moved from Header) */}

        <main className="w-full space-y-8">
          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Revenue */}
            <div className="gloss-card p-6 shadow-gloss border-2 border-primary/20 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-brand-peach rounded-3xl group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Revenue</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900">$42,850.00</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-green-500 fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,25 Q15,5 30,20 T60,10 T90,25 T100,15" className="animate-draw"></path>
                </svg>
              </div>
            </div>

            {/* Pending Payments */}
            <div className="gloss-card p-6 shadow-gloss border-2 border-primary/20 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-white dark:bg-background-dark/50 rounded-3xl group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Pending Payments</p>
                <h3 className="text-2xl font-bold mt-1">$3,120.50</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-amber-500 fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,15 Q20,25 40,15 T70,20 T100,5"></path>
                </svg>
              </div>
            </div>

            {/* Total Refunds */}
            <div className="gloss-card p-6 shadow-gloss border-2 border-primary/20 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-white dark:bg-background-dark/50 rounded-3xl group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg group-hover:scale-110 transition-transform">
                    <RotateCcw className="text-red-600" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Refunds</p>
                <h3 className="text-2xl font-bold mt-1">$450.00</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-red-500 fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,5 L20,10 L40,8 L60,25 L80,22 L100,28"></path>
                </svg>
              </div>
            </div>

            {/* Teacher Payouts */}
            <div className="gloss-card p-6 shadow-gloss border-2 border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-brand-peach rounded-3xl group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <DollarSign className="text-primary" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Teacher Payouts</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900">$18,940.00</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-primary fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,20 Q25,25 50,15 T75,10 T100,12"></path>
                </svg>
              </div>
            </div>
          </section>

          {/* Trend Graph */}
          <section className="gloss-card p-6 shadow-premium border-2 border-primary/20 bg-gradient-to-br from-white via-white to-primary/[0.02] dark:from-background-dark dark:via-background-dark dark:to-primary/[0.05] rounded-3xl hover:shadow-xl transition-shadow duration-300">
            <RevenueTrendChart />
          </section>

          <div className="bg-primary/[0.03] p-6 -mx-6 rounded-[2rem]">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Transaction History */}
              <div className="lg:col-span-8 gloss-card shadow-gloss overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-6">
                    <h2 className="font-bold text-lg">Transaction History</h2>
                    <nav className="flex gap-4">
                      <button className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">All</button>
                      <button className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Completed</button>
                      <button className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Pending</button>
                    </nav>
                  </div>
                  <button className="bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Plus size={16} /> Create Invoice
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Student Name</th>
                        <th className="px-6 py-4 font-semibold">Assigned Teacher</th>
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Amount</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                              <img alt="Student" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACv7Ma8rsyGhnWijC3E07iNsNcJNEnYNUMBx13jbYiJP9r5EK7Sv_QaI2HqnkjNRDIvrF76DmE3pZ4KGr3qKQ0Jl9cphNZ9zmO1QnyUt2UT1dSNI0vfrslcVdFj75b8R4CDulmld07eij8bIfV-x_r_7t8XLyCiLTHtYRzude72ouG6mr_3NGkAqbnX1o2cFZJkLxGIjXNrFtmNmdLQ2RxE9XcPqDnwiS27zYH5PLtXygunpweOkxNMCkX7aYDHHXSTu1TD7xuHECQ" />
                            </div>
                            <span className="font-medium">Elena Rodriguez</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Prof. Marcus Chen</td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Oct 24, 2023</td>
                        <td className="px-6 py-4 font-bold">$240.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wide border border-green-100">Completed</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary"><FileText size={18} /></button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary" title="Download Invoice"><Download size={18} /></button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary"><Send size={18} /></button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                              <img alt="Student" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KXwpLckVdnt4ImRcyF-prpr-vcY1RkBEanGyk6bKazHWp4NKA1n_CO8wsDURc-5hYIXWMSrqK4QNl6HNqOi0K64bBauzW1pq2hSsUxnnd_9Wl6Mz_LeoW43n6zmKiZ9P4FNT1FCfSTeFYy9dkEybHfEkIjwtdZTr9QPZcbhhs2lEJpQ8M8IuZfrQKvBieOxUyDgsbPfYOBeW6N_Ie_PaFtpMnCLZ4R444XGe94gRPRZqMeVo2IZ_oc-_RrOd_20PXN9xA4idMhDB" />
                            </div>
                            <span className="font-medium">Julian Barnes</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Sarah Jenkins</td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Oct 23, 2023</td>
                        <td className="px-6 py-4 font-bold">$185.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-wide border border-amber-100">Pending</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary"><FileText size={18} /></button>
                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary"><Send size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-center">
                  <button className="text-sm font-semibold text-primary hover:underline">View All Transactions</button>
                </div>
              </div>

              {/* Transaction Volume */}
              <div className="lg:col-span-4 gloss-card p-6 shadow-gloss border border-gray-100 dark:border-gray-800 flex flex-col justify-between bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
                <div>
                  <h2 className="font-bold text-lg mb-1">Transaction Volume</h2>
                  <p className="text-xs text-gray-500 mb-6">Daily activity (last 14 days)</p>
                  <div className="flex items-end justify-between h-40 gap-1.5 px-2">
                    {[40, 65, 45, 80, 95, 50, 60, 40, 75, 30, 55, 85, 70, 40].map((h, i) => (
                      <div key={i} className={`w-full rounded-t-sm transition-colors ${h > 90 || i === 12 ? 'bg-primary hover:bg-primary/80' : 'bg-primary/20 hover:bg-primary'}`} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Avg/Day</p>
                    <p className="text-lg font-bold">18</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Peak</p>
                    <p className="text-lg font-bold">42</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Trend</p>
                    <p className="text-lg font-bold text-green-500">+8%</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              {/* Subscription Distribution */}
              <div
                className="gloss-card p-6 shadow-gloss border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={refreshPieChart}
                title="Click to replay animation"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-lg">Subscription Distribution</h2>
                  <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+8.4% MoM</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-500">
                    <svg key={pieChartKey} className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#f3f4f6" strokeWidth="3" className="dark:stroke-gray-700"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#ff5722" strokeDasharray="49 100" strokeDashoffset="0" strokeWidth="3" className="pie-circle drop-shadow-sm"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#9d71fd" strokeDasharray="35 100" strokeDashoffset="-49" strokeWidth="3" className="pie-circle drop-shadow-sm"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#2B2B2B" strokeDasharray="16 100" strokeDashoffset="-84" strokeWidth="3" className="pie-circle drop-shadow-sm dark:stroke-white"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">254</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Active Users</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,87,34,0.5)]"></span>
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">Basic Tier</p>
                          <p className="text-[10px] text-gray-400">49% share</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-sm block">124</span>
                        <span className="text-[10px] text-green-500 font-bold">+12%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(157,113,253,0.5)]"></span>
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">Premium Tier</p>
                          <p className="text-[10px] text-gray-400">35% share</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-sm block">88</span>
                        <span className="text-[10px] text-green-500 font-bold">+5%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-800 dark:bg-gray-200 shadow-[0_0_8px_rgba(43,43,43,0.5)]"></span>
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">Theory Only</p>
                          <p className="text-[10px] text-gray-400">16% share</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-black text-sm block">42</span>
                        <span className="text-[10px] text-red-500 font-bold">-2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Success Rate */}
              <div
                className="gloss-card p-6 shadow-gloss border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={refreshGaugeChart}
                title="Click to replay animation"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-lg">Payment Success Rate</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-medium">Live System</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="relative w-56 h-28 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <svg key={gaugeChartKey} className="w-56 h-56 absolute top-0 left-0" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff9a9e" />
                          <stop offset="100%" stopColor="#ff5722" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" fill="none" r="45" stroke="#f1f1f1" strokeDasharray="141.37" strokeDashoffset="0" strokeLinecap="round" strokeWidth="8" transform="rotate(180 50 50)" className="dark:stroke-gray-700"></circle>
                      <circle cx="50" cy="50" fill="none" r="45" stroke="url(#gaugeGradient)" strokeDasharray="141.37" strokeDashoffset="2.26" strokeLinecap="round" strokeWidth="8" transform="rotate(180 50 50)" className="gauge-circle drop-shadow-md"></circle>
                    </svg>
                    <div className="absolute bottom-0 w-full text-center mb-1">
                      <span className="text-4xl font-black text-[#2B2B2B] dark:text-white tracking-tight">98.4%</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
                      <CheckCircle size={12} className="text-green-600" />
                      <span className="text-[10px] text-green-700 dark:text-green-400 font-bold uppercase tracking-wide">Excellent Health</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Credit Cards</p>
                      <p className="text-sm font-black text-gray-800 dark:text-gray-200">99.1%</p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[99.1%]"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">PayPal</p>
                      <p className="text-sm font-black text-gray-800 dark:text-gray-200">97.8%</p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[97.8%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Processing Vol: <span className="font-bold text-gray-900 dark:text-white">$45.2k</span></span>
                    <span className="text-green-500 font-bold">+2.4% today</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
            {/* Teacher Payouts */}
            <div className="lg:col-span-12 gloss-card p-6 shadow-premium border border-primary/10 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Teacher Payouts</h2>
                <span className="text-xs text-gray-400">Monthly Cycle: Oct 2023</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Prof. Marcus Chen</span>
                    <span className="font-bold">$4,820.00 <span className="text-xs font-normal text-gray-400 ml-1">(85%)</span></span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Sarah Jenkins</span>
                    <span className="font-bold">$3,150.00 <span className="text-xs font-normal text-gray-400 ml-1">(80%)</span></span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[80%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Dr. Helena Vane</span>
                    <span className="font-bold">$5,400.00 <span className="text-xs font-normal text-gray-400 ml-1">(90%)</span></span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[90%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Process All Payouts
              </button>
            </div>

            {/* Coupon Codes */}
            <div className="lg:col-span-5 gloss-card p-6 shadow-premium border border-primary/10 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Coupon Codes</h2>
                <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-all">
                  <Plus size={20} />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-primary/10 rounded-lg hover:bg-primary/[0.02] transition-all bg-white dark:bg-background-dark">
                  <div>
                    <span className="text-xs font-black tracking-widest bg-primary/5 px-2 py-0.5 rounded mr-2 uppercase text-primary">Winter24</span>
                    <span className="text-sm font-medium">15% Discount</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold">142 uses</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase">Active</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-primary/10 rounded-lg hover:bg-primary/[0.02] transition-all bg-white dark:bg-background-dark">
                  <div>
                    <span className="text-xs font-black tracking-widest bg-primary/5 px-2 py-0.5 rounded mr-2 uppercase text-primary">NewTalent</span>
                    <span className="text-sm font-medium">$20 Flat Off</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold">58 uses</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase">Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Reports */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 gloss-card p-6 shadow-premium border border-primary/10 flex items-center justify-between bg-gradient-to-br from-white to-brand-peach dark:from-background-dark dark:to-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg">Financial Reports</h3>
                  <p className="text-sm text-gray-500">Comprehensive data exports and insights</p>
                </div>
                <button className="bg-white dark:bg-background-dark shadow-sm border border-primary/10 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  <Download size={18} /> Export CSV
                </button>
              </div>
              <div className="gloss-card p-5 shadow-premium border border-primary/5 hover:-translate-y-1 hover:shadow-xl transition-transform cursor-pointer bg-white dark:bg-background-dark/50 rounded-3xl">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  <Receipt size={24} />
                </div>
                <h4 className="font-bold">Tax Breakdown</h4>
                <p className="text-xs text-gray-500 mt-1">Detailed VAT & service tax reporting for Q3.</p>
              </div>
              <div className="gloss-card p-5 shadow-premium border border-primary/5 hover:-translate-y-1 hover:shadow-xl transition-transform cursor-pointer bg-white dark:bg-background-dark/50 rounded-3xl">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <FileBarChart size={24} />
                </div>
                <h4 className="font-bold">Revenue Summary</h4>
                <p className="text-xs text-gray-500 mt-1">Monthly recurring revenue (MRR) tracking.</p>
              </div>
              {/* Invoice Archives */}
              <div className="md:col-span-2 gloss-card p-6 shadow-premium border border-primary/5 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">Invoice Archives</h4>
                  <button onClick={() => setShowInvoiceModal(true)} className="text-xs font-bold text-primary hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'INV-2023-001', user: 'Elena Rodriguez', date: 'Sep 30, 2023', amount: '$1,250.00', status: 'Paid' },
                    { id: 'INV-2023-002', user: 'Julian Barnes', date: 'Aug 31, 2023', amount: '$980.00', status: 'Paid' },
                    { id: 'INV-2023-003', user: 'Sarah Jenkins', date: 'Jul 31, 2023', amount: '$1,450.00', status: 'Paid' }
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 group-hover:text-primary transition-colors">
                          <FileText size={18} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{invoice.user}</p>
                          <p className="text-xs text-gray-500">{invoice.id} • {invoice.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{invoice.amount}</span>
                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-all">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Invoice Modal */}
        {showInvoiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20">
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Invoice Archives</h3>
                  <p className="text-sm text-gray-500">View and download past invoices</p>
                </div>
                <button
                  onClick={() => setShowInvoiceModal(false)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 bg-white dark:bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search by user or invoice ID..."
                      value={invoiceSearch}
                      onChange={(e) => setInvoiceSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm"
                    />
                  </div>
                  <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                    {['All', 'Recent', 'Old'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setInvoiceFilter(filter)}
                        className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${invoiceFilter === filter ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                  {filteredInvoices.length > 0 ? (
                    filteredInvoices.map((invoice, i) => (
                      <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-2xl transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500 font-bold group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors">
                            <FileText size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-gray-100">{invoice.user}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">{invoice.id}</span>
                              <span>•</span>
                              <span>{invoice.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="block font-bold text-gray-900 dark:text-gray-100">{invoice.amount}</span>
                            <span className={`text-[10px] font-bold uppercase ${invoice.status === 'Paid' ? 'text-green-500' : 'text-amber-500'}`}>{invoice.status}</span>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-all" title="Download PDF">
                            <Download size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                        <Search size={32} />
                      </div>
                      <p className="text-gray-500 font-medium">No invoices found matching your criteria.</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4 bg-gray-50/50 dark:bg-gray-800/20 border-t border-gray-100 dark:border-gray-800 text-center">
                <button className="text-xs font-bold text-primary hover:underline">Download Monthly Report</button>
              </div>
            </div>
          </div>
        )}
        <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">© 2023 Académie Lamusique — Proprietary Financial System</p>
        </footer>
        {/* Global Styles for Sparklines (scoped to this component if needed, but using style tag for simplicity as in design) */}
        <style>{`
                .sparkline-svg path {
                    stroke-dasharray: 300;
                    stroke-dashoffset: 300;
                    animation: dash 1.5s ease-out forwards;
                }
                .pie-circle {
                    transform-origin: center;
                    transform: rotate(-90deg);
                    animation: pie-fill 1.5s ease-out forwards;
                }
                .gloss-card {
                     backdrop-filter: blur(8px);
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes pie-fill {
                    from { stroke-dasharray: 0 100; }
                }
                .gauge-circle {
                    animation: gauge-fill 2s ease-out forwards;
                }
                @keyframes gauge-fill {
                    from { stroke-dashoffset: 141.37; }
                }
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .5; }
                }
            `}</style>
      </div>
    </div >
  );
};

export default FinanceDashboard;
