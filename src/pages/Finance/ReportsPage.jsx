import React from 'react';
import { Download, PieChart, BarChart3, CloudRain, FileText, ChevronRight } from 'lucide-react';
import './finance.css';

const ReportsPage = () => {
    return (
        <div className="finance-page-container">
            <div className="finance-content-wrapper">
                <header className="mb-6">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Reports & Analytics</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Reports
                    </div>
                </header>

                <div className="space-y-8">
                    {/* Revenue Reports Section */}
                    <section>
                        <h2 className="finance-section-title">Revenue Reports</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Monthly Revenue */}
                            <div className="finance-card-base p-6 hover:shadow-xl transition-all group">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Monthly Revenue</h3>
                                <p className="text-sm text-gray-500 mb-6">Detailed breakdown of income streams by month.</p>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-bold text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View</button>
                                    <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Course-wise Revenue */}
                            <div className="finance-card-base p-6 hover:shadow-xl transition-all group">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                                    <PieChart size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Course Performance</h3>
                                <p className="text-sm text-gray-500 mb-6">Revenue generation by course type and level.</p>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-bold text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View</button>
                                    <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Teacher-wise Revenue */}
                            <div className="finance-card-base p-6 hover:shadow-xl transition-all group">
                                <div className="p-3 bg-green-50 text-green-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                                    <CloudRain size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Teacher Contribution</h3>
                                <p className="text-sm text-gray-500 mb-6">Revenue attribution per instructor.</p>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-bold text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View</button>
                                    <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Financial Reports */}
                    <section>
                        <h2 className="finance-section-title">Financial Statements</h2>
                        <div className="finance-card-base p-8 bg-brand-peach dark:bg-background-dark/50">
                            <div className="flex flex-wrap items-center justify-between gap-8">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Net Profit (Oct 2023)</p>
                                    <div className="flex items-end gap-4 mt-2">
                                        <h3 className="text-4xl font-black text-gray-900">$20,450.00</h3>
                                        <span className="text-sm font-bold text-gray-500 mb-1.5">= Revenue - (Payouts + Refunds)</span>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-gray-500 uppercase">Cash vs Online</p>
                                        <p className="font-black text-xl mt-1">30% / 70%</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-gray-500 uppercase">Pending Payments</p>
                                        <p className="font-black text-xl mt-1 text-amber-500">$3,120.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tax Reports */}
                    <section>
                        <h2 className="finance-section-title">Tax & Accountant Exports</h2>
                        <div className="finance-card-base p-0 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { title: 'GST / VAT Breakdown', desc: 'Detailed report of tax collected for Q3 2023.' },
                                { title: 'Expense Summary', desc: 'Operating costs and instructor payout log.' },
                                { title: 'Annual Ledger', desc: 'Full transaction history for FY 2023-24.' },
                            ].map((item, i) => (
                                <div key={i} className="p-6 md:flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 font-bold text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
                                            Download PDF
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs hover:opacity-90 transition-opacity flex items-center gap-2">
                                            <Download size={14} /> CSV
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
