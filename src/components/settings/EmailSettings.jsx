import React from 'react';
import { FileText } from 'lucide-react';
import { SectionCard, InputGroup } from './SettingsUI';

const EmailSettings = () => (
    <div className="space-y-6">
        <SectionCard title="SMTP Configuration" description="Configure your email server for outgoing messages.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="SMTP Host" placeholder="smtp.example.com" defaultValue="smtp.gmail.com" />
                <InputGroup label="SMTP Port" placeholder="587" defaultValue="587" />
                <InputGroup label="Username" placeholder="user@example.com" defaultValue="admin@adaggio.com" />
                <InputGroup label="Password" type="password" placeholder="••••••••" defaultValue="password123" />
            </div>
            <div className="mt-4 flex items-center gap-2">
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
                    Test Connection
                </button>
            </div>
        </SectionCard>
        <SectionCard title="Email Templates" description="Customize automated email notifications.">
            <div className="space-y-4">
                {['Booking Confirmation', 'Payment Receipt', 'Welcome Email'].map((template) => (
                    <div key={template} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-primary shadow-sm group-hover:shadow-md transition-shadow">
                                <FileText size={18} />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200">{template}</span>
                        </div>
                        <button className="text-xs font-bold text-primary hover:underline">Edit Template</button>
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);

export default EmailSettings;
