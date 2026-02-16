import React from 'react';
import { MoreHorizontal, User } from 'lucide-react';
import { SectionCard } from './SettingsUI';

const UserSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Team Members" description="Manage access for administrators and staff.">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            <th className="py-3 px-2">User</th>
                            <th className="py-3 px-2">Role</th>
                            <th className="py-3 px-2">Status</th>
                            <th className="py-3 px-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { name: 'Admin User', email: 'admin@adaggio.com', role: 'Super Admin', status: 'Active' },
                            { name: 'Sarah Connor', email: 'sarah@adaggio.com', role: 'Manager', status: 'Active' },
                            { name: 'John Doe', email: 'john@adaggio.com', role: 'Instructor', status: 'Invite Sent' },
                        ].map((user, idx) => (
                            <tr key={idx} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 dark:text-slate-100">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-2">
                                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-4 px-2">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Active'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-4 px-2 text-right">
                                    <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                        <MoreHorizontal size={16} /> {/* Placeholder icon usage */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <button className="w-full py-2.5 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-500 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                    <User size={16} /> Invite New Member
                </button>
            </div>
        </SectionCard>
    </div>
);

export default UserSettings;
