import { Sparkles } from 'lucide-react';
import React from 'react'

const AutomationCard = ({ title, time, status }) => {
    return (
        <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-200/50">
            <div className="flex items-start justify-between mb-2">
                <Sparkles className="w-5 h-5 text-[#008DC2]" />
                <span className={`px-2 py-1 text-xs font-medium rounded-lg ${status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {status}
                </span>
            </div>
            <h3 className="font-semibold text-[#0F1B2B] mb-1">{title}</h3>
            <p className="text-sm text-[#0F1B2B]/60">{time}</p>
        </div>
    );
};

export default AutomationCard