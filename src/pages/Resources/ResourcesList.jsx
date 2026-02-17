import React, { useState } from 'react';
import {
    Piano,
    Wrench,
    GraduationCap,
    TrendingUp,
    Search,
    Filter,
    MoreVertical,
    Download,
    Plus,
    MapPin,
    Star,
    Music,
    Mic2,
    Guitar,
    BookOpen,
    Users,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

import AddResourceModal from './AddResourceModal';

const ResourcesList = () => {
    const [activeTab, setActiveTab] = useState('instruments');
    const [isAddResourceModalOpen, setIsAddResourceModalOpen] = useState(false);

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
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h2 className="text-3xl font-bold mb-1">Resource Management</h2>
                    <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
                        <span>Dashboard</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Inventory</span>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm">
                        <Download size={20} />
                        Export Data
                    </button>
                    <button onClick={() => setIsAddResourceModalOpen(true)} className="bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 hover:brightness-110 transition-all">
                        <Plus size={20} />
                        New Entry
                    </button>
                    <AddResourceModal isOpen={isAddResourceModalOpen} onClose={() => setIsAddResourceModalOpen(false)} />
                </div>
            </header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center">
                                <Piano size={24} />
                            </div>
                            <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+4 this month</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Instruments</p>
                        <h3 className="text-2xl font-bold">128 Units</h3>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                <Wrench size={24} />
                            </div>
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Attention Needed</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">In Maintenance</p>
                        <h3 className="text-2xl font-bold">12 Units</h3>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg flex items-center justify-center">
                                <GraduationCap size={24} />
                            </div>
                            <span className="text-xs font-bold text-purple-500 bg-purple-500/10 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Live Classes</p>
                        <h3 className="text-2xl font-bold">42 Types</h3>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg flex items-center justify-center">
                                <TrendingUp size={24} />
                            </div>
                            <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">88% Cap.</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Enrollment</p>
                        <h3 className="text-2xl font-bold">412 Students</h3>
                    </motion.div>
                </div>

                {/* Controls & Tabs */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div className="flex bg-white dark:bg-white/5 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-white/10 relative">
                        {['instruments', 'classes'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-2.5 rounded-lg font-semibold transition-all relative ${activeTab === tab ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-lg shadow-md"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab === 'instruments' ? 'Instruments' : 'Class Catalog'}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white" placeholder="Search instruments..." type="text" />
                        </div>
                        <button className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Section 1: Instrument Inventory */}
                {activeTab === 'instruments' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-12"
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            Featured Inventory
                            <span className="text-xs font-normal bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded-full">32 Items</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {/* Instrument Card 1 */}
                            <div className="glass-card rounded-xl overflow-hidden group bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIVWqqHXSllrBjKVFB2W0Vk-c3GYbIcpr-ai02XIpjBZ6EEV3XFiiHqIB2BjiA_t8f_oHVyhW2j9h5_jnSMuoESABw4yKtFwuHtC4xcL19TLe2gPwDaJzndXUW4bh4ulYvVn9NyG-drX9v0q_ZpkAh-IbpyAbur14Uju4kpl3mv7DCvyJGI6fubq89HevTVIBqGyjd1vJBI7TAYmVw6W4yX6AfWBvtMfvGHprfesZ2ehb6sFaTO1vLeu11qUgaAi8ezSJ3C0Hm7bYM" alt="Piano" />
                                    <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Available</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-bold text-lg">Yamaha U1 Upright Piano</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Serial: #YM-2023-9081</p>
                                        </div>
                                        <div className="text-primary flex">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-slate-300 dark:text-slate-600"} />)}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5 my-4">
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Maintenance</p>
                                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">Perfect Condition</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Last Tuned</p>
                                            <p className="text-sm font-semibold">12 Oct 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">$45.00<span className="text-xs text-slate-400 font-normal"> / mo</span></span>
                                        <button className="text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Details</button>
                                    </div>
                                </div>
                            </div>

                            {/* Instrument Card 2 */}
                            <div className="glass-card rounded-xl overflow-hidden group bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADajfp8eXXqqn_j8T2_GOqACa4oywrczUpvnAjNZizhBRNl8SveJ1lyBJLnHC-3hsu36mBDhPWbR-y85RJuW6I3oMRBjizgMZ9BHVBN7sAmQL4ZeQxCPqKYDNOlzl_C5YXxukTNpAH_jqiwTG8ChN520j9VqqpmGtLv5Uy8x6qAJxKB2bgIaCUY71S-dKS3fEylgvE0yJL59-g2RMkZo-ou9eczTag2_IZoeNGM-hnlr47x07Tqs631I6JSuLolYBE_Wo6k5NDGdSd" alt="Violin" />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">In Service</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-bold text-lg">Stentor Student II Violin</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Serial: #ST-44-2022</p>
                                        </div>
                                        <div className="text-primary flex">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 3 ? "currentColor" : "none"} className={i < 3 ? "" : "text-slate-300 dark:text-slate-600"} />)}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5 my-4">
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Maintenance</p>
                                            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">Minor Repair</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Workshop</p>
                                            <p className="text-sm font-semibold">Main Studio</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">$18.00<span className="text-xs text-slate-400 font-normal"> / mo</span></span>
                                        <button className="text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Track</button>
                                    </div>
                                </div>
                            </div>

                            {/* Instrument Card 3 */}
                            <div className="glass-card rounded-xl overflow-hidden group bg-white/60 dark:bg-slate-900/60 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP74lwbdvAzV3MvyckzzqYCv1zDMD2T-fDfm6_hUI7bBZ1k7veueIytXXw-gFF-FPXPlaiVBpHSwfeoTLiS-PGhnw_0mPfrxtXbSZ9O7DjlMntFRZLdUHI18D_FcU2o9S4p5mvmFsOnxrjCHFQ0k1AmU5TQcVk6lUt5x-dHcOjLINYMXAoNZ3g-FrSRSOf76EphN2i8GhLO6WCAnsqeqWzeriUHq5sQLOsLzTq0dbjRXRT8zzb-HcpYl6PZt4XKCnrCrzEDa4PiA0A" alt="Guitar" />
                                    <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Available</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-bold text-lg">Fender CD-60S Dreadnought</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Serial: #FN-GT-5511</p>
                                        </div>
                                        <div className="text-primary flex">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-slate-300 dark:text-slate-600"} />)}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-y border-slate-100 dark:border-white/5 my-4">
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Maintenance</p>
                                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">Like New</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase font-bold text-slate-400">Restring</p>
                                            <p className="text-sm font-semibold">05 Nov 2023</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">$22.00<span className="text-xs text-slate-400 font-normal"> / mo</span></span>
                                        <button className="text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Section 2: Class Catalog */}
                {activeTab === 'classes' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-12"
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            Active Class Catalog
                            <span className="text-xs font-normal bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded-full">12 Available</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Classical Piano (Intro)", instructor: "Marc-André", enrollment: [8, 10], rate: "$75/hr", type: "Private Session", typeColor: "text-primary bg-primary/10", dotColor: "bg-green-500" },
                                { title: "Music Fundamentals", instructor: "Sarah L.", enrollment: [15, 15], rate: "$120/mo", type: "Group Theory", typeColor: "text-blue-500 bg-blue-500/10", dotColor: "bg-red-500" },
                                { title: "Modern Improv II", instructor: "Dave B.", enrollment: [4, 12], rate: "$45/hr", type: "Jazz Workshop", typeColor: "text-purple-500 bg-purple-500/10", dotColor: "bg-green-500" },
                                { title: "Electric Guitar Tech", instructor: "Chris R.", enrollment: [6, 8], rate: "$60/hr", type: "Private Session", typeColor: "text-primary bg-primary/10", dotColor: "bg-green-500" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-xl hover:shadow-xl transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${item.typeColor}`}>{item.type}</span>
                                        <div className={`w-2 h-2 rounded-full ${item.dotColor}`}></div>
                                    </div>
                                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Instructor: {item.instructor}</p>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold mb-1">
                                                <span>Enrollment</span>
                                                <span>{item.enrollment[0]}/{item.enrollment[1]}</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full" style={{ width: `${(item.enrollment[0] / item.enrollment[1]) * 100}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-white/5">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-slate-400">Rate</span>
                                                <span className="font-bold">{item.rate}</span>
                                            </div>
                                            <button className="text-slate-400 hover:text-primary"><MoreVertical size={20} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Campus Map & Location */}
                <motion.div variants={itemVariants} className="glass-card rounded-xl p-8 mb-12 bg-white/40 dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/3">
                            <h3 className="text-2xl font-bold mb-2">Campus Distribution</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">Real-time status of instruments across our Montreal facilities. Currently monitoring 3 campuses.</p>
                            <div className="space-y-4">
                                {[
                                    { name: "Plateau Mont-Royal", count: "82 Units", color: "bg-primary" },
                                    { name: "Downtown Campus", count: "34 Units", color: "bg-blue-500" },
                                    { name: "West Island Studio", count: "12 Units", color: "bg-green-500" }
                                ].map((campus, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-slate-100 dark:border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${campus.color}`}></div>
                                            <span className="font-medium">{campus.name}</span>
                                        </div>
                                        <span className="text-sm font-bold">{campus.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/3 h-64 lg:h-auto rounded-xl overflow-hidden relative border border-slate-200 dark:border-white/10 shadow-inner">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVpplnBg4lBigu-9BMAmR0Sa6gtUU-Wbi2T04C0mgTmyU4Gknl_qizuWwsKxttTmqVEZ6BbiKm2w_xaiRoufDltbLYW8PqeeIVTINy649_NOn2xj4MM2VTy_X87TCm4Nyl-V9ZhuIgtHsjqkceQIYayhbzJ8zcP4BU4XbRuKIze6joJSrVpedMxcG2PBuEl3DmCVCCuu_BUVKNP6YBov6Q4wvGD6F8R7VXG4F0qWkNRSLbKFc6Sq0vYN60v-_LPbC77-okwfpwlvX4" alt="Map" />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                    <MapPin size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ResourcesList;
