import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionCard, InputGroup } from './SettingsUI';

const PaymentSettings = () => (
    <div className="space-y-6">
        <SectionCard title="Payment Gateways" description="Manage your payment providers securely.">
            <div className="space-y-4">
                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">S</div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">Stripe</h4>
                            <p className="text-xs text-emerald-500 font-bold flex items-center gap-1"><CheckCircle size={10} /> Connected</p>
                        </div>
                    </div>
                    <button className="px-3 py-1.5 border border-slate-300 dark:border-white/20 rounded-lg text-xs font-bold hover:bg-white/50 dark:hover:bg-white/10 transition-colors">Configure</button>
                </div>
                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">P</div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">PayPal</h4>
                            <p className="text-xs text-slate-400">Not connected</p>
                        </div>
                    </div>
                    <button className="px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-xs font-bold hover:opacity-90 shadow-md">Connect</button>
                </div>
            </div>
        </SectionCard>
        <SectionCard title="Currency & Tax" description="Set your billing currency and tax rates.">
            <div className="grid grid-cols-2 gap-6">
                <InputGroup label="Currency" defaultValue="USD ($)" />
                <InputGroup label="Default Tax Rate (%)" defaultValue="8.5" />
            </div>
        </SectionCard>
    </div>
);

export default PaymentSettings;
