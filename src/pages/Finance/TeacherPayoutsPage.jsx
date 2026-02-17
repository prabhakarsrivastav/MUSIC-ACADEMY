import React, { useState } from 'react';
import { DollarSign, Download, ChevronRight, X, User, Calendar, Award, AlertCircle, CheckCircle } from 'lucide-react';
import './finance.css';

const TeacherPayoutsPage = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const teachers = [
        { id: 'TCH-001', name: 'Prof. Marcus Chen', classes: 24, students: 140, earnings: '$4,820.00', deduction: '$0.00', net: '$4,820.00', status: 'Pending' },
        { id: 'TCH-002', name: 'Sarah Jenkins', classes: 18, students: 85, earnings: '$3,150.00', deduction: '$50.00', net: '$3,100.00', status: 'Paid' },
        { id: 'TCH-003', name: 'Dr. Helena Vane', classes: 30, students: 210, earnings: '$6,000.00', deduction: '$120.00', net: '$5,880.00', status: 'Processing' },
    ];

    return (
        <div className="finance-page-container flex">
            <div className={`flex-1 min-w-0 transition-all duration-300 ${selectedTeacher ? 'mr-0 md:mr-96' : ''}`}>
                <div className="finance-content-wrapper">
                    <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Teacher Payouts</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                Dashboard <ChevronRight size={14} /> Finance <ChevronRight size={14} /> Payouts
                            </div>
                        </div>
                        <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all w-full md:w-auto">
                            <Download size={18} /> Export Payroll
                        </button>
                    </header>

                    {/* Top Summary */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="finance-card-base p-6 bg-brand-peach dark:bg-background-dark/50">
                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Total Payable</p>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 mt-1">$18,450.00</h3>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-2">Oct 2023 Cycle</p>
                        </div>
                        <div className="finance-card-base p-6">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Paid this Month</p>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100 mt-1">$3,100.00</h3>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 mt-3 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[17%]"></div>
                            </div>
                        </div>
                        <div className="finance-card-base p-6">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Pending Payouts</p>
                            <h3 className="text-2xl md:text-3xl font-black text-amber-500 mt-1">$15,350.00</h3>
                            <p className="text-xs font-bold text-gray-400 mt-2">Due in 3 days</p>
                        </div>
                    </section>

                    {/* Payouts Table */}
                    <div className="bg-white dark:bg-background-dark/50 rounded-3xl shadow-gloss border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 text-xs uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Teacher Name</th>
                                        <th className="px-6 py-4 font-bold">Classes</th>
                                        <th className="px-6 py-4 font-bold">Students</th>
                                        <th className="px-6 py-4 font-bold">Earnings</th>
                                        <th className="px-6 py-4 font-bold">Deductions</th>
                                        <th className="px-6 py-4 font-bold">Net Payout</th>
                                        <th className="px-6 py-4 font-bold">Status</th>
                                        <th className="px-6 py-4 font-bold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                                    {teachers.map((teacher, i) => (
                                        <tr key={i} className={`hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group ${selectedTeacher?.id === teacher.id ? 'bg-primary/5' : ''}`}>
                                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                                {teacher.name}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{teacher.classes}</td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{teacher.students}</td>
                                            <td className="px-6 py-4 font-medium">{teacher.earnings}</td>
                                            <td className="px-6 py-4 text-red-500 font-medium">{teacher.deduction}</td>
                                            <td className="px-6 py-4 font-black text-gray-900 dark:text-gray-100">{teacher.net}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${teacher.status === 'Paid' ? 'bg-green-50 text-green-600 border-green-100' :
                                                    teacher.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                        'bg-blue-50 text-blue-600 border-blue-100'
                                                    }`}>
                                                    {teacher.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => setSelectedTeacher(teacher)}
                                                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-400 hover:text-primary transition-colors"
                                                >
                                                    <ChevronRight size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teacher Detail Panel */}
            {selectedTeacher && (
                <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white dark:bg-background-dark shadow-2xl border-l border-gray-100 dark:border-gray-800 z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-black">Payout Details</h2>
                            <button onClick={() => setSelectedTeacher(null)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                            <h3 className="font-bold text-lg">{selectedTeacher.name}</h3>
                            <p className="text-sm text-gray-500">{selectedTeacher.id}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Base Earnings ({selectedTeacher.classes} classes)</span>
                                    <span className="font-bold">{selectedTeacher.earnings}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Performance Bonus</span>
                                    <span className="font-bold text-green-500">+$150.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Late Penalties</span>
                                    <span className="font-bold text-red-500">{selectedTeacher.deduction}</span>
                                </div>
                                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between items-center">
                                    <span className="font-black text-gray-900 dark:text-gray-100">Net Payable</span>
                                    <span className="font-black text-xl text-primary">{selectedTeacher.net}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-sm uppercase text-gray-500 tracking-wider">Breakdown History</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 rounded-xl">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar size={16} /></div>
                                        <div>
                                            <p className="font-bold text-sm">Oct 01 - Oct 15</p>
                                            <p className="text-xs text-gray-500">12 Classes • $2,400</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 rounded-xl">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar size={16} /></div>
                                        <div>
                                            <p className="font-bold text-sm">Oct 16 - Oct 31</p>
                                            <p className="text-xs text-gray-500">12 Classes • $2,420</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button className="w-full finance-button-primary justify-center py-3 rounded-xl text-base">
                                    <CheckCircle size={18} /> Mark as Paid
                                </button>
                                <button className="w-full mt-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                    <Download size={18} /> Generate Salary Slip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherPayoutsPage;
