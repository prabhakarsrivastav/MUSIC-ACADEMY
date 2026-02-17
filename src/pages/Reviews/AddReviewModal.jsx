import React, { useState } from 'react';
import { X, User, Star, MessageSquare, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddReviewModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0);

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
                    className="bg-white dark:bg-[#1a1a1a] w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden font-display flex flex-col max-h-[85vh]"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20 flex-shrink-0">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Add Manual Review</h3>
                            <p className="text-sm text-gray-500">Record a testimonial or feedback</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 overflow-y-auto custom-scrollbar">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Reviewer Details */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <User size={16} /> Reviewer Info
                                </h4>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="text" placeholder="ex: Sophie Levesque" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-gray-500">Role</label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                <select className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200 appearance-none">
                                                    <option>Student</option>
                                                    <option>Parent</option>
                                                    <option>Visitor</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-gray-500">Duration</label>
                                            <input type="text" placeholder="ex: 6 Months" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Minimal Divider */}
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

                            {/* Feedback */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <MessageSquare size={16} /> Feedback
                                </h4>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Rating</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    className={`p-2 rounded-lg transition-colors ${rating >= star ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-600'}`}
                                                >
                                                    <Star size={24} fill={rating >= star ? "currentColor" : "none"} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Review Text</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Write the testimonial here..."
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200 resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Submit */}
                            <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-800 gap-3">
                                <button onClick={onClose} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">Cancel</button>
                                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Save Review
                                </button>
                            </div>

                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddReviewModal;
