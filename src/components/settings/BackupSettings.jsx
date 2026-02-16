import React from 'react';
import { Database, Download } from 'lucide-react';
import { SectionCard } from './SettingsUI';

const BackupSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Data Export" description="Download a copy of your data.">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Database size={20} className="text-slate-400" />
                    <div>
                        <p className="font-bold text-sm">Export All Data (JSON)</p>
                        <p className="text-xs text-slate-500">Includes students, bookings, and payments.</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                    <Download size={16} /> Download
                </button>
            </div>
        </SectionCard>
        <SectionCard title="Automatic Backups" description="Configure scheduled backups.">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                    <h4 className="font-bold text-slate-700 dark:text-slate-200">Daily Nightly Backup</h4>
                    <p className="text-xs text-slate-500">Last backup: Today at 3:00 AM</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
            </div>
        </SectionCard>
    </div>
);

export default BackupSettings;
