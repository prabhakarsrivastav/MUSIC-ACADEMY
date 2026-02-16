import React from 'react';
import { SectionCard, InputGroup } from './SettingsUI';

const BookingSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Booking Rules" description="Configure how students can book lessons.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Buffer Time (Minutes)" type="number" defaultValue="15" description="Gap between consecutive lessons." />
                <InputGroup label="Max Advance Booking (Days)" type="number" defaultValue="30" description="How far ahead students can book." />
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                    <h4 className="font-bold text-slate-700 dark:text-slate-200">Auto-Confirm Bookings</h4>
                    <p className="text-xs text-slate-500">Automatically confirm bookings without manual approval.</p>
                </div>
                {/* Mock Toggle */}
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
            </div>
        </SectionCard>
        <SectionCard title="Policies" description="Terms displayed during booking.">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Cancellation Policy</label>
                    <textarea className="w-full h-24 p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200" defaultValue="Cancellations must be made at least 24 hours in advance..." />
                </div>
            </div>
        </SectionCard>
    </div>
);

export default BookingSettings;
