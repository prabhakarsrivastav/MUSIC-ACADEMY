import React from 'react';
import { motion } from 'framer-motion';
import {
    Music,
    LayoutDashboard,
    GitBranch,
    Calendar,
    Tv,
    CreditCard,
    Star,
    Settings,
    User,
    Home,
    LineChart,
    HelpCircle,
    Search,
    Bell,
    Moon,
    MoreHorizontal,
    ArrowRight,
    Plus,
    Activity,
    Users,
    Library
} from 'lucide-react';

const Dashboard2 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-jakarta">

            <header className="flex items-center justify-between mb-8">
                <div className="relative w-96 max-w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary shadow-sm text-sm" placeholder="Search students, staff or classes..." type="text" />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-500 hover:text-primary transition-colors shadow-sm relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                    </button>
                    <button className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-500 hover:text-primary transition-colors shadow-sm">
                        <Moon size={20} />
                    </button>
                </div>
            </header>

            <motion.div
                className="grid grid-cols-12 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 flex relative overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="relative z-10 flex flex-col justify-between w-full lg:w-3/5">
                        <div>
                            <span className="inline-block px-3 py-1.5 bg-[#FFF0EB] text-[#FF5722] text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">SYSTEM OVERVIEW</span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Welcome back, Admin! 👋</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">Montreal Academy has 12% more enrollments this month compared to the last period. Ready to tune in?</p>
                        </div>
                        <div className="flex items-center space-x-12">
                            <div>
                                <p className="text-3xl font-extrabold text-[#FF5722]">1,248</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">NEW ENROLLMENTS</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                            <div>
                                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">85%</p>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">RETENTION RATE</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-64 h-80">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute w-48 h-64 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 transform rotate-3 z-0 border border-slate-100 dark:border-slate-700">
                                <Music className="text-slate-800 dark:text-white mb-2" size={60} />
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700 my-4"></div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PRO ACADEMY</p>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FF7043] to-[#FF5722] shadow-lg shadow-primary/30 rounded-2xl flex items-center justify-center z-10 transform -rotate-12 transition-transform hover:scale-110">
                                <Activity className="text-white" size={32} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-6">
                    <motion.div variants={itemVariants} className="bg-blue-50 dark:bg-blue-500/10 p-5 rounded-3xl flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all border border-blue-100 dark:border-blue-500/20">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                <User size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-600/60 dark:text-blue-400 uppercase tracking-wider">Active Students</p>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">2,358</h4>
                            </div>
                        </div>
                        <div className="text-blue-600 bg-white dark:bg-blue-900/40 px-2 py-1 rounded-lg text-xs font-bold shadow-sm">+23%</div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-purple-50 dark:bg-purple-500/10 p-5 rounded-3xl flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all border border-purple-100 dark:border-purple-500/20">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                                <Library size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-purple-600/60 dark:text-purple-400 uppercase tracking-wider">Total Lessons</p>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">434</h4>
                            </div>
                        </div>
                        <div className="text-purple-600 bg-white dark:bg-purple-900/40 px-2 py-1 rounded-lg text-xs font-bold shadow-sm">-12%</div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-3xl flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all border border-emerald-100 dark:border-emerald-500/20">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-emerald-600/60 dark:text-emerald-400 uppercase tracking-wider">Monthly Revenue</p>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">$245k</h4>
                            </div>
                        </div>
                        <div className="text-emerald-600 bg-white dark:bg-emerald-900/40 px-2 py-1 rounded-lg text-xs font-bold shadow-sm">+8%</div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold">Growth & Revenue</h3>
                            <p className="text-sm text-slate-500 font-medium">Academic Year 2023-2024</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 p-1.5 rounded-xl flex space-x-1">
                            <button className="px-4 py-1.5 bg-white dark:bg-slate-700 shadow-sm rounded-lg text-sm font-bold text-slate-800 dark:text-white">Revenue</button>
                            <button className="px-4 py-1.5 text-slate-400 text-sm font-bold hover:text-slate-700 dark:hover:text-slate-300">Enrollments</button>
                        </div>
                    </div>
                    <div className="relative h-64 w-full">
                        <svg className="w-full h-full" viewBox="0 0 800 200">
                            <defs>
                                <linearGradient id="chartGradient2" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FF5722" stopOpacity="0.25"></stop>
                                    <stop offset="100%" stopColor="#FF5722" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="800" y1="50" y2="50"></line>
                            <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="800" y1="100" y2="100"></line>
                            <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="800" y1="150" y2="150"></line>
                            <path d="M0,160 Q100,160 200,170 T400,100 T600,60 T800,120 L800,200 L0,200 Z" fill="url(#chartGradient2)"></path>
                            <path d="M0,160 Q100,160 200,170 T400,100 T600,60 T800,120" fill="none" stroke="#FF5722" strokeLinecap="round" strokeWidth="4"></path>
                        </svg>
                        <div className="flex justify-between mt-6 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-2">
                            <span>Aug</span><span>Oct</span><span>Dec</span><span>Feb</span><span>Apr</span><span>Jun</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold">Popular Instruments</h3>
                        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="relative flex justify-center py-4">
                        <svg className="w-48 h-48" viewBox="0 0 100 100">
                            <circle className="text-slate-100 dark:text-slate-800" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12"></circle>
                            <circle className="transform -rotate-90 origin-center" cx="50" cy="50" fill="transparent" r="40" stroke="#FF5722" strokeDasharray="180 251.2" strokeLinecap="round" strokeWidth="12"></circle>
                            <circle className="transform -rotate-90 origin-center" cx="50" cy="50" fill="transparent" r="40" stroke="#00C4DF" strokeDasharray="40 251.2" strokeDashoffset="-180" strokeLinecap="round" strokeWidth="12"></circle>
                            <circle className="transform -rotate-90 origin-center" cx="50" cy="50" fill="transparent" r="40" stroke="#8E24AA" strokeDasharray="31.2 251.2" strokeDashoffset="-220" strokeLinecap="round" strokeWidth="12"></circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className="text-2xl font-extrabold text-slate-800 dark:text-white">8,364</p>
                            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">⚡ High Demand</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Piano (45%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-[#00C4DF]"></span>
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Guitar (25%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-[#8E24AA]"></span>
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Violin (15%)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Other (15%)</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="col-span-12 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-extrabold">Recent Registrations</h3>
                        <button className="text-primary font-bold text-sm hover:underline flex items-center space-x-1">
                            <span>View All Students</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                                    <th className="pb-4">Student Name</th>
                                    <th className="pb-4">Instrument</th>
                                    <th className="pb-4">Joined Date</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4 text-right">Fee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="py-5">
                                        <div className="flex items-center space-x-4">
                                            <img alt="Student" className="w-10 h-10 rounded-xl bg-orange-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwxhr_l5njbJITclp3azgmbC20G79TN32XI8WZxMhUnJtbhBHDf7nXjHz-42gDZQkznK2CnRV2hk0KVn-qWArYedezG7EYHLClSBnfp7xZo9viXWNV1qxN4gRxDiyUxskEwG-BlPl0GnVFHGdx7omWLfwri0SGKHvWiQbBYEvynoIP37bzBak01nZaURT_0GcFPKE-1LZhS24cNzEledoqirnU5nATEbmFavEQ0UfihUvBbNHow2NAjtWHQ1UpyVZoL_l9pJJtMH2" />
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-white">Sophie Martin</p>
                                                <p className="text-xs text-slate-500 font-medium">sophie.m@email.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 text-sm font-bold text-slate-600 dark:text-slate-400">Grand Piano</td>
                                    <td className="py-5 text-sm text-slate-500 font-medium">Oct 12, 2023</td>
                                    <td className="py-5">
                                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 text-xs font-bold rounded-full">Active</span>
                                    </td>
                                    <td className="py-5 text-sm font-extrabold text-right text-slate-800 dark:text-white">$450.00</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="py-5">
                                        <div className="flex items-center space-x-4">
                                            <img alt="Student" className="w-10 h-10 rounded-xl bg-blue-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwCyS11etyPCSpmNRwmyZF0Ds-cY59kLVlEfqUM61ymhxH4S2_bhAaIGjcEDULRlD7J3OrqxXjkNZRNoLia2ZTjZacMojyPKRJCgOOCcJlybz1_oFwXTQaduxV1VDoa22d0WKJsk155YkifK2RffVNc6VZpVEBR64uzyKMZ6FaI2cb3AMOUVrtCKgn7yfUQ1T0BQi8Ii9-qKsFJVCn3kVHgxWeS7xdZ4hH3bMxQwleDi9md1xVUcZ1tLPpHhGUm1W1w_0KuSyILH7q" />
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-white">Luc Tremblay</p>
                                                <p className="text-xs text-slate-500 font-medium">luc.t@email.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 text-sm font-bold text-slate-600 dark:text-slate-400">Acoustic Guitar</td>
                                    <td className="py-5 text-sm text-slate-500 font-medium">Oct 10, 2023</td>
                                    <td className="py-5">
                                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-600 text-xs font-bold rounded-full">Pending</span>
                                    </td>
                                    <td className="py-5 text-sm font-extrabold text-right text-slate-800 dark:text-white">$320.00</td>
                                </tr>
                                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="py-5">
                                        <div className="flex items-center space-x-4">
                                            <img alt="Student" className="w-10 h-10 rounded-xl bg-purple-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNwj76f6bUdNMj4iBDHdpyCHYWb4eE4UhpJ7Vr--UA0k_t2Y4c7P9bri-X9MF9bHFKKvYAKXTWZeK7qtTPIrQptdLJR112gz9rCCF5YzcV0DDRLOS2YFZlj4NWvqUNnMtJds8-v80GQdMgf0YLa0wedE-pKy2kyWntYNmyo0iupocrgZ7S1zvRSUvBlRUezu70te08TNqHWx1kctOuobPKzXhXcW97hX9ZoypYGdrBkcEQiVYjF45ZZ05YfG3pdYAf1PrtXRghHS2E" />
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-white">Chloé Dubois</p>
                                                <p className="text-xs text-slate-500 font-medium">chloe.d@email.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 text-sm font-bold text-slate-600 dark:text-slate-400">Violin</td>
                                    <td className="py-5 text-sm text-slate-500 font-medium">Oct 09, 2023</td>
                                    <td className="py-5">
                                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 text-xs font-bold rounded-full">Active</span>
                                    </td>
                                    <td className="py-5 text-sm font-extrabold text-right text-slate-800 dark:text-white">$380.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </motion.div>

            <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 border-4 border-white dark:border-slate-800">
                <Plus size={32} />
            </button>
        </div>
    );
};

export default Dashboard2;
