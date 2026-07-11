import React from 'react'

const StatCard = ({ icon: Icon, label, value, change, color }) => {
    const colors = {
        blue: 'bg-blue-100 text-blue-600',
        purple: 'bg-purple-100 text-purple-600',
        green: 'bg-green-100 text-green-600'
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[#0F1B2B]/60 text-sm mb-2">{label}</p>
                    <p className="text-3xl font-bold text-[#0F1B2B] mb-1">{value}</p>
                    <p className="text-sm text-[#008DC2]">{change}</p>
                </div>
                <div className={`w-12 h-12 ${colors[color]} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default StatCard