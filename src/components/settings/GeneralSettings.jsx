import React from 'react';
import { Upload, MapPin } from 'lucide-react';
import { SectionCard, InputGroup } from './SettingsUI';

const GeneralSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Academy Identity" description="Basic information about your music academy.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <InputGroup label="Academy Name" placeholder="e.g. Beethoven Music Academy" defaultValue="Adaggio Music Academy" />
                    <div className="flex gap-4">
                        <InputGroup label="Phone Number" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" />
                        <InputGroup label="Email Address" placeholder="admin@academy.com" defaultValue="contact@adaggio.com" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-slate-400">LOGO</span>
                    </div>
                    <button className="text-sm font-bold text-primary flex items-center gap-2 hover:underline">
                        <Upload size={16} /> Upload Logo
                    </button>
                    <p className="text-xs text-slate-400 mt-2">PNG, JPG up to 2MB</p>
                </div>
            </div>
        </SectionCard>

        <SectionCard title="Location" description="Address displayed on invoices and contact page.">
            <InputGroup label="Full Address" placeholder="123 Music Lane, New York, NY" defaultValue="123 Harmony St, Suite 400, New York, NY 10001" />
            <div className="h-48 bg-slate-100 dark:bg-slate-800/50 rounded-xl mt-4 flex items-center justify-center text-slate-400 border border-slate-200 dark:border-white/5">
                <MapPin size={32} className="mr-2 opacity-50" /> Map Preview (Integration Pending)
            </div>
        </SectionCard>
    </div>
);

export default GeneralSettings;
