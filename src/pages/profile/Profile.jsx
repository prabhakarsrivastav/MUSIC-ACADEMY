import React from 'react';
import { Mail, Phone, MapPin, Calendar, Edit2, Camera, Shield, Bell, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Profile = () => {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 font-display">
            {/* Header / Cover */}
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
                <nav className="flex items-center gap-2 text-sm opacity-60 mt-1 dark:text-slate-400">
                    <Link to="/"><span>Dashboard</span></Link>
                    <ChevronRight size={14} />
                    <span className="text-primary font-medium">My Profile</span>
                </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Profile Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center">
                        <div className="relative mb-4 group">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white dark:bg-zinc-900 shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76stIfD6DUgEU42-vk7TrNP5H-VqvM2vCWt92wnyv9rs3IhmAVMzT_7day9YwrQmLKlJBJHvrZjq-cDHnrwYAR7sUK1dZfpoD7QsPzNd7DNjPvUgqFUV-EFlzNNVwXWeOwlgWdLgdZQCkS_lSERSJ6tOjT8AvthPQ81hbP22NIs1x_pkboI8o3aYUKQJA-Uz1cVcrLCafUWRTtZ8O3dsn75elVs-D_ONQBHXxOk7WGHUrb6dEgxh5wdkz22DUjkuU6Ez3hHg5mqDi"
                                    alt="Admin Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors">
                                <Camera size={18} />
                            </button>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Staff</h2>
                        <p className="text-primary font-medium mb-4">Super Administrator</p>

                        <div className="flex gap-3 w-full">
                            <button className="flex-1 py-2.5 px-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                Edit Profile
                            </button>
                            <button className="p-2.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                                <Edit2 size={20} />
                            </button>
                        </div>

                        <div className="w-full mt-8 border-t border-gray-100 dark:border-zinc-800 pt-6 space-y-4">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                <Mail size={18} className="text-primary" />
                                <span className="text-sm">admin@musicschool.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                <Phone size={18} className="text-primary" />
                                <span className="text-sm">+1 (555) 000-0000</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                <MapPin size={18} className="text-primary" />
                                <span className="text-sm">New York, USA</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                <Calendar size={18} className="text-primary" />
                                <span className="text-sm">Joined January 2023</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Shield className="text-primary" size={20} />
                            <span>Roles & Permissions</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase">Super Admin</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-bold uppercase">Billing Manager</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-xs font-bold uppercase">User Management</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Settings & Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Account Settings</h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm">
                                        <Bell className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Notifications</h4>
                                        <p className="text-sm text-gray-500">Manage your email and push notifications</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm">
                                        <Lock className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                                    Enable
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Recent Activity</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-start gap-4 pb-4 border-b border-gray-50 dark:border-zinc-800 last:border-0 last:pb-0">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Updated system settings</p>
                                        <p className="text-xs text-gray-500">modified general configuration parameters</p>
                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1 block">2 hours ago</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
