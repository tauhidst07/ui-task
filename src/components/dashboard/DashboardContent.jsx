import React from 'react'
import StatCard from './StatCard.jsx';
import { ArrowRight, CheckSquare, Link2, Sparkles, Zap } from 'lucide-react';
import TaskItem from './TaskItem.jsx';
import AutomationCard from './AutomationCard.jsx';

const DashboardContent = ({ tourActive, tourStep, tourSteps }) => {
    const isHighlighted = (id) => {
        if (!tourActive) return false;
        return tourSteps[tourStep]?.target === id;
    };

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-3xl font-bold text-[#0F1B2B] mb-2">Welcome back, Alex</h1>
                <p className="text-[#0F1B2B]/60">Here's what's happening with your workspace today</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={CheckSquare}
                    label="Active Tasks"
                    value="24"
                    change="+3 today"
                    color="blue"
                />
                <StatCard
                    icon={Zap}
                    label="AI Flows Running"
                    value="8"
                    change="2 scheduled"
                    color="purple"
                />
                <StatCard
                    icon={Link2}
                    label="Connected Apps"
                    value="12"
                    change="All synced"
                    color="green"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tasks Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#0F1B2B]">Your Tasks</h2>
                        <button className="text-[#008DC2] hover:text-[#00549A] font-medium text-sm flex items-center gap-1">
                            View all
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-3">
                        <TaskItem title="Review Q4 sales report" status="In Progress" priority="high" />
                        <TaskItem title="Schedule team meeting" status="To Do" priority="medium" />
                        <TaskItem title="Update documentation" status="To Do" priority="low" />
                    </div>
                </div>

                {/* AI Flow Builder Card */}
                <div
                    id="ai-flow-card"
                    className={`bg-linear-to-br from-[#008DC2]/5 to-[#2399CC]/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#008DC2]/20 transition-all duration-300 ${isHighlighted('ai-flow-card')
                        ? 'ring-4 ring-[#008DC2] ring-opacity-50 scale-105 z-50'
                        : ''
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#008DC2] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F1B2B] mb-2">AI Flow Builder</h2>
                            <p className="text-[#0F1B2B]/60 mb-4">
                                Create intelligent workflows that adapt to your needs
                            </p>
                            <button className="px-4 py-2 bg-[#008DC2] hover:bg-[#00549A] text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Build New Flow
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Automations */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <h2 className="text-xl font-bold text-[#0F1B2B] mb-6">Upcoming Automations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AutomationCard
                        title="Daily Standup Report"
                        time="Every day at 9:00 AM"
                        status="Active"
                    />
                    <AutomationCard
                        title="Weekly Analytics Summary"
                        time="Every Monday at 10:00 AM"
                        status="Active"
                    />
                    <AutomationCard
                        title="Client Follow-ups"
                        time="Every Friday at 3:00 PM"
                        status="Paused"
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardContent