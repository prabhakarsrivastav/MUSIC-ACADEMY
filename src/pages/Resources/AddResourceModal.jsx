import React from 'react';
import { X, Box, Tag, DollarSign, Calendar, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddResourceModal = ({ isOpen, onClose }) => {
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
                    className="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden font-display flex flex-col max-h-[85vh]"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20 flex-shrink-0">
                        <div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100">Add New Resource</h3>
                            <p className="text-sm text-gray-500">Add instrument or equipment to inventory</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 overflow-y-auto custom-scrollbar">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Resource Details */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <Box size={16} /> Resource Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Item Name</label>
                                        <div className="relative">
                                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="text" placeholder="ex: Yamaha U1 Piano" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Category</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200">
                                            <option>Instrument</option>
                                            <option>Audio Equipment</option>
                                            <option>Sheet Music</option>
                                            <option>Furniture</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Serial Number</label>
                                        <div className="relative">
                                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="text" placeholder="ex: #YM-2023-9081" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Condition</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200">
                                            <option>New</option>
                                            <option>Excellent</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                            <option>Poor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Minimal Divider */}
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

                            {/* Value & Location */}
                            <div>
                                <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <DollarSign size={16} /> Asset Information
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Purchase Value</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="number" placeholder="0.00" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Purchase Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold uppercase text-gray-500">Location</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium focus:ring-2 focus:ring-primary/20 outline-none dark:text-gray-200">
                                            <option>Plateau Mont-Royal - Main Hall</option>
                                            <option>Plateau Mont-Royal - Room A</option>
                                            <option>Downtown Campus - Studio 1</option>
                                            <option>West Island Studio - Storage</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Rental Option */}
                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-start gap-3">
                                <AlertCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h5 className="font-bold text-gray-900 dark:text-white text-sm">Make Available for Rent?</h5>
                                    <p className="text-xs text-gray-500 mt-1 mb-3">If enabled, students will be able to rent this item for a monthly fee.</p>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="rent" className="w-4 h-4 text-primary focus:ring-primary" />
                                            <span className="text-sm font-medium">Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="rent" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                                            <span className="text-sm font-medium">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Submit */}
                            <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-800 gap-3">
                                <button onClick={onClose} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">Cancel</button>
                                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Add Resource
                                </button>
                            </div>

                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddResourceModal;
