import React from 'react';
import { Calendar, Video, FileText } from 'lucide-react';
import { SectionCard } from './SettingsUI';

const IntegrationsSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Connected Apps" description="Manage third-party integrations.">
            <div className="space-y-4">
                {[
                    { name: 'Google Calendar', icon: Calendar, status: 'Connected', description: 'Sync lessons and events.' },
                    { name: 'Zoom', icon: Video, status: 'Connect', description: 'Generate meeting links automatically.' },
                    { name: 'QuickBooks', icon: FileText, status: 'Connect', description: 'Sync invoices and payments.' },
                ].map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.status === 'Connected' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                                }`}>
                                <app.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-white">{app.name}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{app.description}</p>
                            </div>
                        </div>
                        <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${app.status === 'Connected'
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20'
                            : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/10'
                            }`}>
                            {app.status === 'Connected' ? 'Manage' : 'Connect'}
                        </button>
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);

export default IntegrationsSettings;
