import React from 'react';
import { X, User, Mail, Phone, Calendar, Music, BookOpen, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddStudentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden font-display"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Add New Student</h3>
                            <p className="text-sm text-gray-500">Enroll a new student to the academy</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Personal Information */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <User size={16} /> Personal Information
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="text" placeholder="ex: Clara Deschamps" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Parent / Guardian</label>
                                        <div className="relative">
                                            <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="text" placeholder="Optional" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="email" placeholder="student@example.com" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="tel" placeholder="(555) 000-0000" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Minimal Divider */}
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

                            {/* Academic Details */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <BookOpen size={16} /> Enrollment Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Instrument</label>
                                        <div className="relative">
                                            <Music className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200 appearance-none">
                                                <option>Select Instrument...</option>
                                                <option>Piano</option>
                                                <option>Violin</option>
                                                <option>Guitar</option>
                                                <option>Cello</option>
                                                <option>Voice</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Skill Level</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200">
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                            <option>Professional</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Assign Teacher</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200">
                                            <option>Select Teacher...</option>
                                            <option>Prof. J. Lemieux (Piano)</option>
                                            <option>Prof. S. Dubois (Violin)</option>
                                            <option>Prof. M. Bouchard (Guitar)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Start Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Submit */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="emailInvite" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                                    <label htmlFor="emailInvite" className="text-sm font-medium text-gray-600 dark:text-gray-400 select-none">Send welcome email with login details</label>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={onClose} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">Cancel</button>
                                    <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        Enroll Student
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddStudentModal;
