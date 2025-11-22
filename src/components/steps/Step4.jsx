import { ArrowLeft, Check } from 'lucide-react';
import React from 'react'

const Step4 = ({ integrations, selectedIntegrations, setSelectedIntegrations, onFinish, onBack }) => {
    const toggleIntegration = (id) => {
        setSelectedIntegrations(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3.5">
                {integrations.map(integration => (
                    <button
                        type="button"
                        key={integration.id}
                        onClick={() => toggleIntegration(integration.id)}
                        className={`p-5 rounded-xl border-2 transition-all flex flex-col items-center gap-2.5 ${selectedIntegrations.includes(integration.id)
                                ? 'border-[#008DC2] bg-[#008DC2]/8 shadow-md shadow-[#008DC2]/10'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className={`w-11 h-11 rounded-xl ${integration.color} flex items-center justify-center font-bold text-lg`}>
                            {integration.name[0]}
                        </div>
                        <span className="text-xs font-semibold text-[#0F1B2B] text-center">{integration.name}</span>
                        {selectedIntegrations.includes(integration.id) && (
                            <div className="w-5 h-5 bg-[#008DC2] rounded-full flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-white" />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            <div className="flex gap-3 pt-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-[#0F1B2B] font-semibold rounded-xl transition-all flex items-center gap-2.5"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                <button
                    type="button"
                    onClick={onFinish}
                    className="px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-[#0F1B2B] font-semibold rounded-xl transition-all"
                >
                    Skip
                </button>
                <button
                    type="button"
                    onClick={onFinish}
                    className="flex-1 px-6 py-4 bg-[#008DC2] hover:bg-[#00549A] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#008DC2]/25 hover:shadow-xl hover:shadow-[#008DC2]/30"
                >
                    Get started
                    <Check className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};


export default Step4