import React, { useState } from 'react';
import { Search, ChevronRight, HelpCircle, MessageCircle, Mail, FileText, Phone, ExternalLink, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SupportPage = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "You can click on 'Forgot Password' on the login page or go to Settings > Security to update your credentials."
        },
        {
            question: "How are teacher payouts calculated?",
            answer: "Payouts are calculated based on the number of completed lessons multiplied by the teacher's hourly rate, minus any platform fees."
        },
        {
            question: "Can I export financial reports?",
            answer: "Yes! Navigate to Finance > Reports to download PDF or CSV summaries of your revenue and expenses."
        },
        {
            question: "How do I schedule a new class?",
            answer: "Go to the Booking section, click 'New Booking', select the student, teacher, and time slot, then confirm the appointment."
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    return (
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 bg-background-light dark:bg-background-dark font-display relative">
            <div className="space-y-8 pb-20">
                {/* Header */}
                <header>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Help & Support</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                        Dashboard <ChevronRight size={14} /> Support Center
                    </div>
                </header>

                {/* Search Hero */}
                <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">How can we help you today?</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">Search for articles, troubleshooting guides, and more.</p>

                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-lg shadow-primary/5 focus:ring-2 focus:ring-primary/20 outline-none text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">Documentation</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Browse detailed guides and API docs.</p>
                        <button className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:underline">
                            View Docs <ExternalLink size={14} />
                        </button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">Live Chat</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Chat with our support team instantly.</p>
                        <button className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:underline">
                            Start Chat <ExternalLink size={14} />
                        </button>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center cursor-pointer group">
                        <div className="w-14 h-14 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                            <Mail size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">Email Support</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Get a response within 24 hours.</p>
                        <button className="text-orange-600 font-bold text-sm flex items-center gap-1 group-hover:underline">
                            Send Email <ExternalLink size={14} />
                        </button>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* FAQs Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <HelpCircle size={24} className="text-primary" />
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                    >
                                        <span className="font-bold text-gray-900 dark:text-gray-100">{faq.question}</span>
                                        <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${activeFaqIndex === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaqIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-5 pt-0 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ticket Status & Contact Info */}
                    <div className="space-y-6">
                        {/* Recent Tickets */}
                        <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">Your Recent Tickets</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <div className="mt-1">
                                        <CheckCircle size={18} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Payment Issue #492</p>
                                        <p className="text-xs text-gray-500 mt-1">Resolved • 2 days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">
                                        <AlertCircle size={18} className="text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Login trouble #501</p>
                                        <p className="text-xs text-gray-500 mt-1">In Progress • 5 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                View All Tickets
                            </button>
                        </div>

                        {/* Direct Contact */}
                        <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-white shadow-xl shadow-primary/20">
                            <h3 className="font-bold text-lg mb-2">Still need help?</h3>
                            <p className="text-sm text-white/80 mb-6">Our team is available 24/7 to assist you with any issues.</p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                    <Phone size={18} />
                                    <span className="font-bold text-sm">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                    <Mail size={18} />
                                    <span className="font-bold text-sm">support@academielamusique.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
