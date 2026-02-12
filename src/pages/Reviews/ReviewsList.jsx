
import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  Filter,
  MoreHorizontal,
  Download,
  MessageSquarePlus,
  Star,
  Smile,
  Layout,
  ChevronLeft,
  ChevronRight,
  LifeBuoy,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewsList = () => {
  const [selectedRating, setSelectedRating] = useState('All Ratings');

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
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const reviews = [
    {
      name: "Sophie Levesque",
      role: "Piano Student",
      duration: "6 Months",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9IRrwWVQ_EmA_bH6gQqQVIPXMNrTJHmVRgHDuxfnLzrOSaAW2_hARGAMjBUto4i3PSWyF0VGwKUmIq-ij3Emk2Y1Kc3SYU_5eO6hZFY26jc9GUgZc0gh3YPxZNBBR3EJVTSXQp7bgYRkrzRl9J0afELuy7wzgjAaznuk9sndOAn4fNKju5Q6Axc3WRh-iQejkyBnyN1OR1Q3YxYrDbpxzFy-I6nZXfgv17kIa_hU4sw8Aj3UYiOQbtsmOYz37-rcUhkUzBJ1Wi7hd",
      rating: 5,
      sentiment: "Positive",
      sentimentColor: "bg-green-100 text-green-700",
      text: "The piano lessons have been life-changing. My teacher is incredibly patient and the academy's environment in Montreal is so welcoming.",
      date: "Oct 12, 2023",
      featured: true
    },
    {
      name: "Marc-André Dion",
      role: "Parent (Violin)",
      duration: "1 Year",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQC7YKGvgaPpYvxbYh0qYQMXsxHcAuBKuEG8BtQchz4Ac8e_Nu2abgA-OhKwQvDKc6OuPUWcJci0NPOpONI_5RUKeDCIO4df4dCWTKt5p-srsyLDSBbhQoWtn9f5ERXFEZ54onC-aXwrxnb3P8aYXHbbPteali9-wZzg5cwb67-tdMA4lQteJH2JJd6ZPiHG2u8ndf7Zf4AQWrRhIkzuSB3IZejZP23YvTQtdBJLZjZPtusIkFsXf2BrdCErRKLafuFC736I5jjmbb",
      rating: 5,
      sentiment: "Positive",
      sentimentColor: "bg-green-100 text-green-700",
      text: "My daughter's progress is incredible. We've tried other music schools in Montreal, but Lamusique has the best curriculum and instructors.",
      date: "Sep 28, 2023",
      featured: false
    },
    {
      name: "Julien Tremblay",
      role: "Guitar Student",
      duration: "3 Months",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2vrUcyvsU9KQjJOTLqs5r0iEdUZU7q4nfYwfUroFGULE1oOuiuOEaWeDzh_srAf0FsaF_ybMOt_HPxF3SN0mYuGW7BNNqfj22jP4kuwiqM1bHv91tm6JdsHKcSh_0-7HL5ZMi6istMlch8m2xxGR_WdgXUwiScZVbTLIeCQdhhjzODFVDu27lIeCJwOsr9jbfP-TYVGRAiyXL7-K0hKGLmyKc4NIH1e7tZPK1OQmMGVLpbXDCt2g_na3ywGALIGd6p7m_M8PVFEDA",
      rating: 4,
      sentiment: "Neutral",
      sentimentColor: "bg-yellow-100 text-yellow-700",
      text: "Great instructors, though finding parking near the Plateau location can be a bit of a challenge during the evening hours.",
      date: "Sep 15, 2023",
      featured: false
    },
    {
      name: "Elena Rodriguez",
      role: "Vocals Student",
      duration: "2 Years",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyyNNgB2bNhnR4vWEwx-YBS-4NBoVvxk3U4DwL_i5zXV8-IUZINnd9seiqxdgpbDmoo9678patghwP2JoKeq8xq5F0bJCdRXbG4dIUc1VpP_n_YsCpGKHPbu-3a-U7x0oySlQs4qCjzuadd61KE3UXT4TjXgMKykPJXW28KzdDKwLHsUd4X5ZQeI_p7swJQ41fu2mkEZwLfup7HalSPPFRbzYW3aVRSfRi65E8mR9NWLGadgOx6uhQazGxvVdO5WMoT41LEXF8I3M",
      rating: 5,
      sentiment: "Positive",
      sentimentColor: "bg-green-100 text-green-700",
      text: "The annual recitals organized by Lamusique are world-class. It gave me so much confidence to perform on stage.",
      date: "Aug 30, 2023",
      featured: true
    },
    {
      name: "Thomas Wright",
      role: "Parent (Drums)",
      duration: "4 Months",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuClQWLSwENmjG_SJQFVmzqJfNvba4lLnaN5oghRUdbmVTmBq_h2gsye4lYKawDIOUJAyahiZVtKnTVmlKWT8QZiwXHpXp2USeN8c57oujLeoSFjYAjaLdWJA0pbQv7wo-umGr3QKT7dSA3Bk66XdLeYpt5qGGseU-xIwwjawiHf1JwzvhQ9jUf492J3_l3aZoJszgbqSUrYvKy2hMuy5GdHPqNa3BYCzOsgd-CwcbSVa6MgXNvChSSzAestNDp-MfTMYihXpzhk6NZ7",
      rating: 5,
      sentiment: "Positive",
      sentimentColor: "bg-green-100 text-green-700",
      text: "My son looks forward to his drum lessons every Tuesday. The facility is clean and modern, and the staff are very helpful.",
      date: "Aug 22, 2023",
      featured: false
    },
    {
      name: "Amélie Mercier",
      role: "Violin Student",
      duration: "1 Year",
      avatar: null,
      initials: "AM",
      rating: 5,
      sentiment: "Positive",
      sentimentColor: "bg-green-100 text-green-700",
      text: "I started as a complete beginner at 40, and I've never felt out of place. The methodology used here is very effective for adults.",
      date: "Jul 18, 2023",
      featured: true
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-12 bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Feedback & Testimonials</h2>
          <p className="text-slate-500 dark:text-slate-400">Manage student voices and public testimonials for Académie Lamusique.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-lg border border-primary/20 bg-white dark:bg-slate-800 text-primary font-semibold text-sm hover:bg-primary/5 transition-all flex items-center gap-2">
            <Download size={18} />
            Export CSV
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            <MessageSquarePlus size={18} />
            Add Manual
          </button>
        </div>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Star className="text-primary" size={24} />
              </div>
              <p className="text-slate-500 text-sm font-medium">Average Rating</p>
            </div>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold">4.8</h3>
              <p className="text-green-500 text-sm font-medium mb-1">+0.2 this month</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MessageSquare className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <p className="text-slate-500 text-sm font-medium">Total Reviews</p>
            </div>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold">124</h3>
              <p className="text-slate-400 text-sm mb-1">Lifetime</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Smile className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <p className="text-slate-500 text-sm font-medium">Positive Sentiment</p>
            </div>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold">92%</h3>
              <p className="text-green-500 text-sm font-medium mb-1">High satisfaction</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Layout className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <p className="text-slate-500 text-sm font-medium">Featured Live</p>
            </div>
            <div className="flex items-end gap-2">
              <h3 className="text-3xl font-bold">12</h3>
              <p className="text-slate-400 text-sm mb-1">On homepage</p>
            </div>
          </motion.div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none dark:text-white"
              placeholder="Search by student name or content..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <select className="flex-1 lg:w-40 px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white">
              <option>All Instruments</option>
              <option>Piano</option>
              <option>Guitar</option>
              <option>Violin</option>
              <option>Vocals</option>
            </select>
            <select
              className="flex-1 lg:w-40 px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white"
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option>All Ratings</option>
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars & Below</option>
            </select>
            <button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      alt={`${review.name} Avatar`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      src={review.avatar}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">
                      {review.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{review.role} • {review.duration}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "text-primary" : "text-slate-200 dark:text-slate-600"}
                  />
                ))}
                <span className={`ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-tight ${review.sentimentColor}`}>
                  {review.sentiment}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 italic mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
                <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={review.featured}
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ml-2 text-xs font-semibold text-slate-500 selection:bg-none">Featured</span>
                </label>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">2</button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">3</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">12</button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50">
        <LifeBuoy size={24} />
      </button>
    </div>
  );
};

export default ReviewsList;
