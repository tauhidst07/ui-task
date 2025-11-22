import { CheckSquare, Home, Link2, Settings, Sparkles, Zap } from 'lucide-react';
import React, { Activity } from 'react' 


const Sidebar = ({ touractive, tourstep, toursteps }) => {
    const navItems = [
        { id: 'nav-home', icon: Home, label: 'Home' },
        { id: 'nav-tasks', icon: CheckSquare, label: 'Tasks' },
        { id: 'nav-ai-flows', icon: Zap, label: 'AI Flows' },
        { id: 'nav-automations', icon: Sparkles, label: 'Automations' },
        { id: 'nav-integrations', icon: Link2, label: 'Integrations' },
        { id: 'nav-activity', icon: Activity, label: 'Activity' }
    ];

    const isHighlighted = (id) => {
        if (!touractive) return false;
        return toursteps[tourstep]?.target === id;
    };

    return (
        <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#008DC2] to-[#2399CC] rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-[#0F1B2B]">WorkElate</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        id={item.id}
                        className={`relative flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${item.id === 'nav-home'
                            ? 'bg-[#008DC2]/10 text-[#008DC2]'
                            : 'text-[#0F1B2B]/70 hover:bg-gray-100'
                            } ${isHighlighted(item.id)
                                ? 'ring-4 ring-[#008DC2] ring-opacity-50 bg-white shadow-lg z-50 scale-105'
                                : ''
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>

            {/* Settings */}
            <div className="p-4 border-t border-gray-200/50">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#0F1B2B]/70 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Settings</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar