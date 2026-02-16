import React from 'react';

export const SectionCard = ({ title, description, children }) => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-glow">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
            {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>}
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

export const InputGroup = ({ label, type = "text", placeholder, defaultValue, description }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
        />
        {description && <p className="text-xs text-slate-400">{description}</p>}
    </div>
);
