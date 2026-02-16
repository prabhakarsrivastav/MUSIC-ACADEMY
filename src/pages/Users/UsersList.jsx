import React, { useState } from 'react';
import {
  Users,
  CheckCircle,
  Piano,
  Star,
  Search,
  Settings,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Download,
  UserPlus,
  Filter,
  MapPin,
  Music,
  Mic2,
  Palette,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AddStudentModal from './AddStudentModal';
import StudentProfile from './StudentProfile';

const UsersList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

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

  const students = [
    {
      id: "#AM-42091",
      name: "Clara Deschamps",
      date: "Sept 12, 2023",
      instrument: "Piano (Classical)",
      icon: Piano,
      teacher: "Prof. J. Lemieux",
      status: "Active",
      statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAApMXMuWARaK58945oEtDLGxONfLEMZ8f5QDpUSAK_HzNvlOlruahMwcKNp8UJDjf2NOj6xAmyZOjYApGlXvGOcXnwAu_5JS35OqzQj1CGrwZu8PvS03GDZUVwKNZb1duLvClc-dWqDTfS6iCdd85HkoMTJXK6WUsgDfMv_HupR9C4tlm17yTWKzYfy_J4T1Cf1tKqEAQBSgQnAcqChO99eJiAnoCOB-KViRROVkyEEIEwvee9sThfqpkddBKOaKX5yCB4FOgrGYY8"
    },
    {
      id: "#AM-42104",
      name: "Julien Tremblay",
      date: "Aug 05, 2022",
      instrument: "Cello",
      icon: Music,
      teacher: "Prof. S. Dubois",
      status: "Paused",
      statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCamhKadd441TBrltyoNT87AM4RaeZcIYBflMWjoJToLnyQarQhcUAYQ39eTF9rlj_HhIhlqt9p4m4G9XcjQAi7CinNX4qvlj_s-chu8xPPoNNNi8Q4WfJVL3iSq5FjyHEY6yoO-M5LR6d2gdjLxs2K0uA7GwNJWpmRJdxPYwPCg9q0RmC9vUPSPqG0SBiiBxpL7quQmMsJyd0VkIizav1GY1CDs72vbQFmq3lryQmhiTnirfGdivlYVvZVWjDmftzIybYYML1sJkXa"
    },
    {
      id: "#AM-42055",
      name: "Sophie Morel",
      date: "Jan 15, 2021",
      instrument: "Violin",
      icon: Palette,
      teacher: "Prof. R. Gauthier",
      status: "Graduated",
      statusColor: "bg-primary/10 text-primary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6aWhPMb4JTL7ZnM7nNqBxVEusA8dTHtIXTCwOAfVnKZFYCdjqqw7eefJp9tMC2P3TSnt3lzCTeUbk7neJtPrxF93RIQShqjr3NTcMg_0XYYW9pogTIK0tbqS6h9HQL6NXJkTcM3awSs8H-vv9vvXc2l1lk5Q2d60hSprXxv53ZRAJ6R5ht3FyoRQEWg2Ji50em6lV-lByxOb085fbJYmbgHxwI7KcQYtmFfgMl6alRrtYSqELrizWFE8EgW29tv-0Iu5ZAE7wsZ4Q"
    },
    {
      id: "#AM-42150",
      name: "Hugo LeBlanc",
      date: "Nov 30, 2023",
      instrument: "Jazz Guitar",
      icon: Star,
      teacher: "Prof. M. Bouchard",
      status: "Active",
      statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlQHqmtfpYk-UB6OuuyQTkmQvv4fKa-M7B5ERDQS4FZKlCYpuE3fJ32_AfliVwXD8JlJBknSjmznj1ZkcZZCt00Fipy9D4-2EEkDdH-tMeJluo-evMGfyAICmE8O6zAaaSHkWypesj_VuThUHT0TpYMwQPBxbftLQLgHavqWolTVfAcfAt_E0jIZI8NURE6m8Q3c583lRLx0oUWj80nqldrY24-fjPSVirezgF6_GS-oXLkmTo_LF9DE-mRBbgQK4ubouZf8NA4qoa"
    },
    {
      id: "#AM-42112",
      name: "Esmé Villeneuve",
      date: "Feb 02, 2024",
      instrument: "Opera Vocals",
      icon: Mic2,
      teacher: "Prof. L. Caron",
      status: "Active",
      statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8AGSaLe9yYgT1p2sxcxLh6eDEZ7ZR0OrJVerIeZMS1T00qNmNE3sOo55ujdqeeLSFXaX-2FUoBxr_Zjj8jkxQ2VrwFgbfi4n7FWfEbeeAtAfN6SCvHyP1UnnidS7A9qzQXKtvB3ckHmOqxPmaV_EG8u9NISJTOeEuvh4gMPXUeQS80cI1PsDjqHN74HXnUwKMU8o40WNWcQM7lkcU5reJPlM6OiCSnklNxXgQ9FUCDFvbQMUPEkaEK7dIdtea-kIUPOPNuZ40uyl"
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display relative">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Student Management</h2>
          <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
            <Link to="/">Dashboard</Link>
            <ChevronRight size={14} />
            <span className="text-primary font-medium">Students</span>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white/50 dark:bg-white/5 border border-white dark:border-white/10 rounded-xl font-medium hover:bg-white dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-200 shadow-sm">
            <Download size={20} className="text-primary" />
            <span className="hidden sm:inline">Export Data</span>
            <span className="sm:hidden">Export</span>
          </button>
          <button
            onClick={() => setIsAddStudentModalOpen(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <UserPlus size={20} />
            <span className="hidden sm:inline">Add New Student</span>
            <span className="sm:hidden">Add</span>
          </button>

          <AddStudentModal isOpen={isAddStudentModalOpen} onClose={() => setIsAddStudentModalOpen(false)} />
        </div>
      </header>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Users size={24} />
              </div>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-sm opacity-60 font-medium text-slate-600 dark:text-slate-400">Total Students</p>
            <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">1,284</h3>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <CheckCircle size={24} />
              </div>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Active</span>
            </div>
            <p className="text-sm opacity-60 font-medium text-slate-600 dark:text-slate-400">Currently Enrolled</p>
            <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">942</h3>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Piano size={24} />
              </div>
            </div>
            <p className="text-sm opacity-60 font-medium text-slate-600 dark:text-slate-400">Most Popular</p>
            <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">Piano</h3>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl shadow-sm bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Star size={24} />
              </div>
            </div>
            <p className="text-sm opacity-60 font-medium text-slate-600 dark:text-slate-400">Graduates '24</p>
            <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">156</h3>
          </motion.div>
        </div>

        {/* Search and Filter Bar */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card p-4 rounded-2xl flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md shadow-sm card-glow hover:shadow-lg transition-all duration-300">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-slate-500" size={20} />
            <input
              className="w-full pl-12 pr-4 py-3 bg-white/60 dark:bg-white/5 border-0 rounded-xl focus:ring-2 focus:ring-primary/40 font-medium text-sm placeholder:text-slate-400 dark:text-white outline-none"
              placeholder="Search by name, ID or email..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none">
              <option>All Instruments</option>
              <option>Piano</option>
              <option>Violin</option>
              <option>Guitar</option>
              <option>Cello</option>
            </select>
            <select className="bg-white/60 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/40 min-w-[140px] text-slate-700 dark:text-slate-200 outline-none">
              <option>Status: All</option>
              <option>Active</option>
              <option>Paused</option>
              <option>Graduated</option>
            </select>
            <button className="p-3 bg-white/50 dark:bg-white/10 rounded-xl hover:bg-white dark:hover:bg-white/20 transition-all text-slate-700 dark:text-slate-200">
              <Filter size={20} />
            </button>
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-card rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-900/40 border border-white/50 dark:border-white/10 backdrop-blur-md card-glow hover:shadow-lg transition-all duration-300">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/50 dark:bg-white/5 border-b border-white/50 dark:border-white/10">
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Student Name</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Enrollment Date</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Instrument</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Teacher</th>
                  <th className="px-6 py-5 font-bold text-sm text-slate-700 dark:text-slate-200">Status</th>
                  <th className="px-6 py-5 font-bold text-sm text-center text-slate-700 dark:text-slate-200">Profile</th>
                  <th className="px-6 py-5 font-bold text-sm text-right text-slate-700 dark:text-slate-200">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20 dark:divide-white/5">
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-white/30 dark:hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full object-cover" src={student.img} alt={student.name} />
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{student.name}</p>
                          <p className="text-[11px] opacity-60 text-slate-500 dark:text-slate-400">ID: {student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm opacity-80 text-slate-700 dark:text-slate-300 font-medium">{student.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <student.icon className="text-primary" size={18} />
                        <span className="text-sm font-medium">{student.instrument}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">{student.teacher}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 ${student.statusColor} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to='/users/profile' className="inline-flex p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
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
          {/* Pagination */}
          <div className="px-6 py-5 bg-white/50 dark:bg-white/5 border-t border-white/50 dark:border-white/10 flex items-center justify-between">
            <p className="text-xs opacity-60 text-slate-600 dark:text-slate-400">Showing <span className="font-bold">1-10</span> of <span className="font-bold">1,284</span> students</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all opacity-40 text-slate-600 dark:text-slate-400">
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-md">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400">3</button>
              <span className="px-1 opacity-40 text-xs font-bold text-slate-600 dark:text-slate-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-xs font-bold text-slate-600 dark:text-slate-400">129</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-all text-slate-600 dark:text-slate-400">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contextual Section */}
        <div className="mt-12 flex items-center justify-center gap-6 py-8 border-t border-primary/10">
          <div className="flex items-center gap-2 opacity-40 text-slate-600 dark:text-slate-400">
            <MapPin size={14} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Montreal, QC</span>
          </div>
          <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-30 text-slate-600 dark:text-slate-400">© 2024 Académie Lamusique</div>
        </div>
      </motion.div>
    </div>
  );
};

export default UsersList;
