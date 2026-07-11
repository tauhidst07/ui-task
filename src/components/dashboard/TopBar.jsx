import { Bell, Search, User } from 'lucide-react';
import React from 'react'

const TopBar = () => {
    return (
        <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 flex items-center justify-between px-8">
            <div className="flex-1 max-w-md">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tasks, projects..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-100/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008DC2]/20 focus:border-[#008DC2] transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors relative">
                    <Bell className="w-5 h-5 text-[#0F1B2B]/70" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#008DC2] rounded-full"></span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#008DC2] text-white">
                    <User className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default TopBar