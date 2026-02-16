import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';
import { SectionCard } from './SettingsUI';

const AppearanceSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Theme Preferences" description="Customize implementation appearance.">
            <div className="grid grid-cols-3 gap-4">
                {['Light', 'Dark', 'System'].map((theme) => (
                    <div key={theme} className={`
                        p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center gap-3 relative overflow-hidden
                        ${theme === 'Light' ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'}
                    `}>
                        <div className={`w-full h-20 rounded-lg shadow-sm ${theme === 'Light' ? 'bg-white border border-slate-200' :
                            theme === 'Dark' ? 'bg-slate-900 border border-slate-800' :
                                'bg-gradient-to-br from-white to-slate-900 border border-slate-200'
                            }`} />
                        <span className={`font-bold text-sm ${theme === 'Light' ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>{theme}</span>
                        {theme === 'Light' && <div className="absolute top-2 right-2 text-primary"><CheckCircle size={16} fill="currentColor" className="text-white" /></div>}
                    </div>
                ))}
            </div>
        </SectionCard>
        <SectionCard title="Brand Colors" description="Set your primary brand color used across buttons and links.">
            <div className="flex gap-4">
                {['#ff5724', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'].map((color) => (
                    <div key={color} className="relative group cursor-pointer">
                        <div
                            className="w-10 h-10 rounded-full shadow-sm ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 transition-transform active:scale-90"
                            style={{ backgroundColor: color, ringColor: color === '#ff5724' ? color : 'transparent' }}
                        />
                        {color === '#ff5724' && (
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <CheckCircle size={16} />
                            </div>
                        )}
                    </div>
                ))}
                <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <Plus size={18} /> {/* Placeholder icon usage */}
                </button>
            </div>
        </SectionCard>
    </div>
);

export default AppearanceSettings;
