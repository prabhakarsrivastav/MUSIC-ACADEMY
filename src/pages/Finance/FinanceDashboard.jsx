import React, { useState } from 'react';
import {
  TrendingUp, Clock, RotateCcw, DollarSign, Plus, FileText, Download, CheckCircle, Search, ChevronRight
} from 'lucide-react';
import RevenueTrendChart from '../../components/dashboard/RevenueTrendChart';
import './finance.css';

const FinanceDashboard = () => {
  const [pieChartKey, setPieChartKey] = useState(0);
  const [gaugeChartKey, setGaugeChartKey] = useState(0);

  const refreshPieChart = () => {
    setPieChartKey(prev => prev + 1);
  };

  const refreshGaugeChart = () => {
    setGaugeChartKey(prev => prev + 1);
  };

  return (
    <div className="finance-page-container">
      <div className="finance-content-wrapper">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Billing & Command Center</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mt-1 md:mt-0">
              Dashboard <ChevronRight size={14} /> Finance
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none justify-center bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
              <Plus size={18} /> <span className="hidden sm:inline">Create Invoice</span><span className="sm:hidden">Invoice</span>
            </button>
            <button className="flex-1 md:flex-none justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all whitespace-nowrap">
              <DollarSign size={18} /> <span className="hidden sm:inline">Record Payment</span><span className="sm:hidden">Payment</span>
            </button>
            <button className="flex-1 md:flex-none justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all whitespace-nowrap">
              <Download size={18} /> <span className="hidden sm:inline">Export Report</span><span className="sm:hidden">Export</span>
            </button>
          </div>
        </header>

        <main className="w-full space-y-6 md:space-y-8">
          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Revenue */}
            <div className="finance-card-base p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-brand-peach dark:bg-background-dark/50 group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Revenue</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">$42,850.00</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-green-500 fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,25 Q15,5 30,20 T60,10 T90,25 T100,15" className="animate-draw"></path>
                </svg>
              </div>
            </div>

            {/* Pending Payments */}
            <div className="finance-card-base p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between group cursor-pointer">
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
            <div className="finance-card-base p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between group cursor-pointer">
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
            <div className="finance-card-base p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between bg-brand-peach dark:bg-background-dark/50 group cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <DollarSign className="text-primary" size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Teacher Payouts</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">$18,940.00</h3>
              </div>
              <div className="mt-4 h-10 w-full">
                <svg className="sparkline-svg w-full h-full stroke-primary fill-none stroke-2 stroke-round" viewBox="0 0 100 30">
                  <path d="M0,20 Q25,25 50,15 T75,10 T100,12"></path>
                </svg>
              </div>
            </div>
          </section>

          {/* Trend Graph */}
          <section className="gloss-card p-4 md:p-6 shadow-premium border-2 border-primary/20 bg-gradient-to-br from-white via-white to-primary/[0.02] dark:from-background-dark dark:via-background-dark dark:to-primary/[0.05] rounded-3xl hover:shadow-xl transition-shadow duration-300 card-glow">
            <RevenueTrendChart />
          </section>

          <div className="bg-primary/[0.03] p-4 md:p-6 -mx-4 md:-mx-6 rounded-[2rem]">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Recent Transactions (Small Section) */}
              <div className="lg:col-span-4 gloss-card shadow-gloss overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300 card-glow">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <h2 className="font-bold text-lg">Recent Transactions</h2>
                  <button className="text-xs font-bold text-primary hover:underline">View All</button>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { name: 'Elena Rodriguez', amount: '$240', status: 'Completed', date: 'Today' },
                    { name: 'Julian Barnes', amount: '$185', status: 'Pending', date: 'Yesterday' },
                    { name: 'Sarah Jenkins', amount: '$450', status: 'Completed', date: 'Oct 23' },
                    { name: 'Marcus Chen', amount: '$120', status: 'Completed', date: 'Oct 22' },
                    { name: 'Alex Morgan', amount: '$85', status: 'Failed', date: 'Oct 21' },

                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${tx.status === 'Completed' ? 'bg-green-100 text-green-600' : tx.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'}`}>
                          {tx.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{tx.name}</p>
                          <p className="text-[10px] text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{tx.amount}</p>
                        <p className={`text-[10px] font-bold ${tx.status === 'Completed' ? 'text-green-500' : tx.status === 'Pending' ? 'text-amber-500' : 'text-red-500'}`}>{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Subscription Distribution */}
              <div className="lg:col-span-4 gloss-card p-6 shadow-gloss border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer group card-glow"
                onMouseEnter={refreshPieChart}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-lg">Subscription Distribution</h2>
                  <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+8.4% MoM</span>
                </div>
                <div className="flex flex-col items-center justify-center relative h-64">
                  <svg key={pieChartKey} className="w-48 h-48 transform -rotate-90" viewBox="0 0 36 36">
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

                <div className="mt-6 space-y-3 px-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5722]"></div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Premium Plan</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">49%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#9d71fd]"></div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Standard Plan</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">35%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#2B2B2B] dark:bg-white"></div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Basic Plan</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">16%</span>
                  </div>
                </div>
              </div>


              {/* Payment Success Rate */}
              <div
                className="lg:col-span-4 gloss-card p-6 shadow-gloss border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark/50 rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer group card-glow"
                onMouseEnter={refreshGaugeChart}
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

                <div className="mt-6 grid grid-cols-2 gap-4 px-2">
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-400 dark:border-white/5 text-center">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Successful</p>
                    <p className="text-xl font-black text-gray-900 dark:text-white mt-1">1,248</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-400 dark:border-white/5 text-center">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Failed/Refunded</p>
                    <p className="text-xl font-black text-gray-900 dark:text-white mt-1">14</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div >
  );
};

export default FinanceDashboard;
