import React, { useState } from 'react';
import {
  Users,
  Calendar,
  DollarSign,
  Settings,
  Search,
  UserPlus,
  ArrowRight,
  Clock,
  MoreHorizontal,
  MapPin,
  Star,
  Award,
  TrendingUp,
  Circle,
  Map,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { link } from 'framer-motion/client';

const TeachersList = () => {
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

  const teachers = [
    {
      name: "Marc-André P.",
      role: "Jazz Guitarist",
      load: "24/30 hrs",
      loadPc: 80,
      rating: 4.8,
      type: "Full-Time",
      typeColor: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJ2Qwg28RgV6l9oRiWsbiUb2jTMUUO--x2kQt2SuiBM8b-_JjJHq23OAucoMFNi-dByI_55PdggBSNB5GMeLySj51D2fnOVDNaZuYsexbPhbMS64qZrblfnn5iKOITa0x50Dx6BT9HnrngcujUfhmCyhi03tWQ8luNjABE_X-J5cNwwpEcDkxZYEpRTU6HcFFbZX3W6q7Fu4JATBYvj1ePnGJENCW0Miz_1lUH59XaWR71mvEHJ0jk_fqrEVPSqBMD_cxzdhz9h99"
    },
    {
      name: "Elena Rossi",
      role: "Classical Violinist",
      load: "12/20 hrs",
      loadPc: 60,
      rating: 4.9,
      type: "Part-Time",
      typeColor: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiMlx5fbjQBQxNROL-2q_b8IxcPZIu53G06bsASy_X3IR3yGQW6KpIaxl5NsUolpyyfmrvqTjB9fzYv7KKa3vO3Tl7MBJQSnr-oVwaCrT7yj0QxF_LTeTNl9wt5BynlXWd4MkIq7IZco-u9UXRX9TL_FBQRnEaM6zK9s_tiQZlPgVq5RxrmTE5xTb2HNrb0Ol469FpS14upIMRqpTuU4JNxSjpjNXrLChuap6rj7z7VHVpA_aneikjmyJ1Mkuc-_mRcV7xzUCNmxrB"
    },
    {
      name: "Julien Clerc",
      role: "Drum Specialist",
      load: "28/30 hrs",
      loadPc: 93,
      rating: 4.7,
      type: "Near Limit",
      typeColor: "bg-orange-100 text-primary dark:bg-orange-900/30 dark:text-orange-400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPuo73aY62UVcOcfza3Q3s37bGn8Qi0bPnB7wkjReDq_fyHIMdxenDOfcTA_-uBiguV5RJZWIWDT16N6u37QnKslYCgFlDLD6HRdEzQWhvTwnDo1QU87MAE3bhcKsBQJqIvnnPdxwECd6B-aHvPTUwUtnglNMSJFdh_9Ey_NpXxF-Jk4aGormxBh_gk6TzK2hSBaPZtA7cBSbUKpJmTAlabWW8rF4sS-uS-9INHvQ92ZSoIF2eQdVBnhfx-uCAwsmh3ZySDEujuS6P"
    },
    {
      name: "Marie G.",
      role: "Vocal Coach",
      load: "15/30 hrs",
      loadPc: 50,
      rating: 5.0,
      type: "Full-Time",
      typeColor: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDWSWAAS9gM3yGqqaZxnA4fdk3EePnenlZfd2cq8Hs_Xo_cATIZW2jm0-iuvCLF5HEZER5VcCbfkILH_fQx-XME7zqS32cIITfAzilH_xthn7reJD7VAYFBaVwmXq96PPnQorYhmlEedqOLIWMB3o6vcotRq3dR4sqpE7LkweapNgOTmMhI5cpPP4_Ns-5lhuS3zN7ENOnPKdVfDUZcn7kFpSHJxVV7rQKwWnebxWkOK0rd_XO42IA2DeihdG0gOStNgpTxl_JzhrE"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-1">Teacher Directory</h2>
          <p className="text-slate-500 dark:text-slate-400">Managing 24 faculty members in Montreal district.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
            <input className="pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 w-64 text-sm outline-none transition-all dark:text-white" placeholder="Search instrument or name..." type="text" />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
            <UserPlus size={20} />
            Add Teacher
          </button>
        </div>
      </header>



      {/* Bento Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured: Teacher of the Month */}
        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 bento-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 p-8 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            <Award size={120} />
          </div>
          <div className="relative">
            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">Teacher of the Month</span>
            <div className="flex items-center gap-5 mt-6">
              <img className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary/5 shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaCOE2yiGo8ZEptH9gnVg4_0xIvJlQ0TPz9HNwDL00lbGdBD65UXIGErJBVUFL3Q-f1nWphRmlqoY9tBL8rxjvCWdl_012U6KIVit41eahQsAShwAFJBOr1RTJAfAdd3RFBKu6pfnGCMuPKtTN6ss9Doj1fwUviTX8W1CE6zPmmVO2xquTOwuYA2xE6X4kTxDSMG5G2oLf48Y8k3F-laJVm5wgnewM7aDExfp7PuRwoztJYB1OHEcY6NJZ1yFkx0-skUtHnhgjNMND" alt="Sarah Jenkins" />
              <div>
                <h3 className="text-2xl font-bold dark:text-white">Sarah Jenkins</h3>
                <p className="text-slate-500 font-medium">Senior Piano & Theory</p>
                <div className="flex items-center gap-1 mt-2 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-slate-400 text-xs ml-1 font-semibold">(4.9/5.0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Academy Note</p>
              <p className="text-sm italic text-slate-600 dark:text-slate-400 max-w-xs">"Exceptional student retention and dedication to the new Jazz curriculum."</p>
            </div>
            <button className="bg-slate-900 dark:bg-slate-800 text-white p-3 rounded-xl hover:bg-primary transition-colors shadow-lg group-hover:bg-primary">
              <Link to="/teachers/profile">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </button>
          </div>
        </motion.div>

        {/* Stats Card 1 */}
        <motion.div variants={itemVariants} className="bento-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 p-6 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 rounded-xl flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-3xl font-bold mt-4 dark:text-white">842</p>
            <p className="text-slate-500 text-sm font-medium">Total Lesson Hours</p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-emerald-500">
            <TrendingUp size={16} />
            <span>12% from last month</span>
          </div>
        </motion.div>

        {/* Stats Card 2 */}
        <motion.div variants={itemVariants} className="bento-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 p-6 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-primary rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-3xl font-bold mt-4 dark:text-white">124</p>
            <p className="text-slate-500 text-sm font-medium">Active Students</p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-primary">
            <Circle size={10} fill="currentColor" />
            <span>4 new registrations today</span>
          </div>
        </motion.div>



        {/* Location Card */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bento-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="bg-primary/5 p-6 rounded-2xl text-primary">
            <MapPin size={40} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-bold text-xl mb-1 dark:text-white">Montreal Downtown Branch</h4>
            <p className="text-slate-500 text-sm mb-4">You have 5 teacher applications pending review for this location.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAbyw_KYLkdw8YKEi5dmw07h8DaQw6lyHeyL0bFDRmkDwrc_SRokfMtjpbdHNBlcdO32fu_Kc00XY6dLMt-RSSy3RrBYk7fo3MMat-jPIOaz3CTzMQslpPZ32PgBTErg6eUOxJFiLTDfOvxubXUYfwKUY7qUfHJdUKow5ozbYrW9Aib5MRrQe9cvY0PuYzLTX05pSxp6HerMrNkmef2hSQ7y96iqF_5ZmrsO5kCwHQ0yN0e11w9naY6LrboXqfMuesNcm_QtknZRmBh",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCQpUeHZPVj32LplKRbOP4wzDo4FyNzZHQuZ-ybhQZ55i27GtLr_tblNJPrsbkbIOVxetwA5pbEFOVxT2KQkyumxqdKQTYunqXE4dooBsxKHD22REYKEiscedNmaTiojxSw2fZf-b4gMcaTNjh9gpSgA8RxB9k20Uu9_36mDbgXwovR_qa7bM_ih_rdReTDgEO0MYxhnoIchk1J2g_I1QvtFXFVPzuanOPZtylTlVDGnA7ZFymQIwgKc27V6xYAXH7ZaTnoBHCxRI67",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD3MfkO0Z5RivBLZSIk4odgs505UaGevnIsa6I-kvmC4B_spsiCoKDt5F62K3QrXTj6zvWSKBOC6p5M3II1AhJefB0YTgnHrdTKZUm9HWQo9sjjPmhg6fKArfn2HbG3Rmnc-RPlTBZ2ipK1zfQWC4IfwqNkVFkt86dkL30Q8wpJrQlAOBjAkqVNpJmonrspg6PXJ9bquJvyZeA3LFII1IFXra4Yq0aqg4S3Q6fFOX5zIvxqsFuiEE5qvT7oL1ZMHAjI4NniCX5FI4bD"
              ].map((src, i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 ring-1 ring-slate-100 dark:ring-white/10" src={src} alt="Applicant" />
              ))}
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-800 ring-1 ring-slate-100 dark:ring-white/10 flex items-center justify-center text-[10px] font-bold text-slate-500">+2</div>
            </div>
          </div>
          <button className="bg-slate-900 dark:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary transition-colors">View All</button>
        </motion.div>


        {/* Map District Overview */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bento-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 p-6 rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="absolute inset-0 bg-primary/5 opacity-40 pointer-events-none"></div>
          <div className="relative z-10">
            <h4 className="font-bold text-xl mb-4 dark:text-white">Montreal District Overview</h4>
            <div className="h-40 w-full rounded-xl bg-white/60 dark:bg-black/20 border border-white/80 dark:border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Map className="text-primary/20" size={80} />
              </div>
              <img className="w-full h-full object-cover opacity-60 dark:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJzgnRest8kd8rKa7KQUnrwcamZQhqmn1VgbzMWgvcHq4JbJC2DYgFXkCRebioXrT5zEfh-ZAOdqPhmv1mKdfMhDXpObTATyr5Nz3LxVmhfyZ3oY9VsVal12RZxNQTl2wqo0zMYMIT33S2m47-3b7Lum6PmwPBHnVEkGy-YX0PvkKgQyV0tyhrs5jORcCm3T4Rn2vRX1b3no4icrDhNqVX2PwARJ8HH3wXLrAU8QDnGUdILGbu6Kw2W8IRGnAFTe902l2blQbuI71" alt="Map" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Search and Filter Bar */}
        <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl flex flex-wrap items-center gap-4 bg-white/40 dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-slate-500" size={20} />
            <input
              className="w-full pl-12 pr-4 py-3 bg-white/60 dark:bg-white/5 border-0 rounded-xl focus:ring-2 focus:ring-primary/40 font-medium text-sm placeholder:text-slate-400 dark:text-white outline-none"
              placeholder="Search by name, role or instrument..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none">
              <option>All Roles</option>
              <option>Piano</option>
              <option>Guitar</option>
              <option>Violin</option>
              <option>Vocal</option>
              <option>Jazz</option>
            </select>
            <select className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none">
              <option>Status: All</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </select>
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl overflow-hidden shadow-sm bg-white/40 dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/50 dark:bg-white/5 border-b border-white/50 dark:border-white/10">
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Teacher Name</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Role / Instrument</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Weekly Load</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Rating</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Status</th>
                  <th className="px-6 py-5 font-bold text-sm text-center text-slate-700 dark:text-slate-200">Profile</th>
                  <th className="px-6 py-5 font-bold text-sm text-right text-slate-700 dark:text-slate-200">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20 dark:divide-white/5">
                {teachers.map((teacher, index) => (
                  <tr key={index} className="hover:bg-white/30 dark:hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full object-cover" src={teacher.img} alt={teacher.name} />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white"><Link to="/teachers/profile" className="hover:text-primary transition-colors">{teacher.name}</Link></p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">{teacher.role}</td>
                    <td className="px-6 py-4">
                      <div className="w-full max-w-[140px]">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-1">
                          <span>{teacher.load}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: `${teacher.loadPc}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                        <span className="font-bold text-sm text-slate-700 dark:text-slate-300">{teacher.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 ${teacher.typeColor} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
                        {teacher.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to="/teachers/profile" className="inline-flex p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
                        <Eye size={20} />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-blue-500/10 rounded-lg text-slate-400 hover:text-blue-500 transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination (Static) */}
          <div className="px-6 py-5 bg-white/50 dark:bg-white/5 border-t border-white/50 dark:border-white/10 flex items-center justify-between">
            <p className="text-xs opacity-60 text-slate-600 dark:text-slate-400">Showing <span className="font-bold">1-4</span> of <span className="font-bold">24</span> teachers</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all opacity-40 text-slate-600 dark:text-slate-400">«</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-md">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all text-slate-600 dark:text-slate-400">»</button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <footer className="mt-12 text-center text-slate-400 text-sm border-t border-slate-100 dark:border-white/10 pt-8">
        <p>© 2024 Académie Lamusique Montreal. All faculty data is managed under high-security protocols.</p>
      </footer>
    </div>
  );
};

export default TeachersList;
