import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { SectionCard } from './SettingsUI';

const LegalSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Legal Documents" description="Manage terms and policies visible to users.">
            <div className="space-y-4">
                {[
                    { name: 'Terms of Service', updated: '2 months ago' },
                    { name: 'Privacy Policy', updated: '1 month ago' },
                    { name: 'Cookie Policy', updated: '6 months ago' },
                ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <FileText size={18} className="text-slate-400" />
                            <div>
                                <h4 className="font-bold text-sm text-slate-800 dark:text-white">{doc.name}</h4>
                                <p className="text-xs text-slate-500">Last updated: {doc.updated}</p>
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-400" />
                    </div>
                ))}
            </div>
        </SectionCard>
    </div>
);

export default LegalSettings;
