
import React from 'react';
import {
    Search, Calendar, Plus, CheckCircle, User, DoorClosed, TrendingUp, Users,
    CreditCard, Settings, ChevronLeft, ChevronRight, Map, HeartHandshake, Headphones,
    Music, LayoutDashboard, Grid
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LessonManagement = () => {
    return (
        <div className="flex-1 flex overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Header Section */}
                <header className="h-24 px-8 flex items-center justify-between bg-transparent dark:bg-zinc-900/50 backdrop-blur-md sticky top-0 z-20">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Lesson Management</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        {/* Search Bar */}
                        {/* <div className="relative hidden xl:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input className="w-80 pl-12 pr-4 py-2.5 bg-white dark:bg-zinc-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all shadow-sm outline-none" placeholder="Search students, teachers..." type="text" />
                        </div>*/}
                        {/* Date Navigation */}
                        <div className="flex items-center bg-white dark:bg-zinc-800 rounded-xl p-1 shadow-sm">
                            <button className="p-1.5 hover:bg-primary/5 rounded-lg text-slate-400 transition-colors">
                                <ChevronLeft size={18} />
                            </button>
                            <div className="px-4 flex items-center gap-2">
                                <Calendar className="text-primary" size={18} />
                                <span className="text-sm font-semibold whitespace-nowrap">Monday, Oct 23</span>
                            </div>
                            <button className="p-1.5 hover:bg-primary/5 rounded-lg text-slate-400 transition-colors">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                            <Plus size={18} />
                            <span>New Lesson</span>
                        </button>
                    </div>
                </header>

                {/* Main Feed Scroll Area */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* Morning Session */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase">Morning Session</span>
                                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-zinc-800"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Lesson Card 1: Completed */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-3">
                                        <CheckCircle className="text-emerald-500" size={20} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">08:00 — 09:00</span>
                                                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">Marc-André Tremblay</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Sarah Jenkins</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                Piano
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                Studio A
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Lesson Card 2: In Progress */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border-l-4 border-l-primary border-slate-100 dark:border-zinc-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-4 right-4 animate-pulse flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-1 rounded-md">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Active</span>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">09:30 — 10:30</span>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Clara Desjardins</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Jean-Luc Picard</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                                Violin
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                Studio 102
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Lesson Card 3: Upcoming */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">11:00 — 12:00</span>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Liam Wilson</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Sarah Jenkins</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Guitar
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                Studio B
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Afternoon Session */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase">Afternoon Session</span>
                                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-zinc-800"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Lesson Card 4 */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">14:00 — 15:00</span>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Sophie Dubois</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Michel Legrand</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                Voice
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                The Grand Hall
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Lesson Card 5 */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">15:30 — 16:30</span>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Oliver Smith</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Jean-Luc Picard</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                                Violin
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                Studio 102
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Lesson Card 6 */}
                                <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">17:00 — 18:00</span>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Isabelle Gauthier</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                                                <User size={14} />
                                            </div>
                                            <span>Teacher: <Link to="/teachers/profile" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">Michel Legrand</Link></span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                Piano
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                                                <DoorClosed size={12} />
                                                Studio A
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Float Info Panel (Summary) */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-2 pointer-events-none z-50">
                    <div className="bg-slate-900 text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 pointer-events-auto border border-white/10 max-w-xs">
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzaiWDCPc7ssybvGxjlkymEZnzhs8YVSST0lWpx3vm0OiSAfXATD6Xl4yH0fWCRpFIKezZg8Fd5VxrbhzjXuDDfqgp4S2LGsJIbbfyVxegU0t2wsiDEFwElcrUIsN-6HaK6IhpBX3U4lE97M1RTANxM5VsZF0X3rxh1cAz3XtCUVLa2ooe-2joZ7J5LTewo_orBwX1iqdTVlyB3xz34A9_kCuS0gT8orlr0QA4a1ktljPESHdsYOJgnZCfE9s0pdloShgPyFciWJM" alt="Teacher" />
                            <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUhehSH9XWEcJTIY5yqAcvLngeaIsmA0qxKiS336tfle2m4inWPpKfMwvXl6zRKesgonJ_LrUHvXZJmpHiy8utHsMxdC3uFlAjeOgA5NBf0kDx3Mmlr4azxWkYy7NFZpY-lVE8ofnJcHSUvuVQ8D-R7qk8P9Gpsj5rVG9A_l7jTRmljyPhdKdMoDpuuUiX0_5qPs_g1edlVEdHPWtrUgc_Txa56VlsfCFFeavmyhtJ_ftyUjuScsEFSc8vOA_7Db6W-5AK3o1t6bj6" alt="Teacher" />
                            <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjaXHNAdOHbNN08pTKovf3ZV2qRjuSZ1DKus_yXNi2BMS8P2H7HpO_SJpLIM0bGTokZ49hlSpFbEDjHC4vxPFPpxTRs1yZ3ex_VS_2EXiFig561PCa7l3_GUmUl7lRscPbNeAuffTGkH3FmIcIG4NEReOcpqBhlSrwJFsOPZeuBtRkIhopxBxVg3pYM77k-HNlvuuyQTa8fi5jONkObW--flqoPCQrTXvuvIIxMgV6SrLG7eLk2BRKx6eaqcVOttdWJLQ8L0S14B3" alt="Teacher" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-0.5">Active</p>
                            <p className="text-xs font-medium">8 On-Site</p>
                        </div>
                    </div>
                    <div className="bg-primary text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 pointer-events-auto max-w-xs">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            <TrendingUp size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest leading-none mb-0.5">Occupancy</p>
                            <p className="text-xs font-bold">92% Capacity</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Side Map/Location Panel (Quick View) */}

        </div>
    );
};

export default LessonManagement;
