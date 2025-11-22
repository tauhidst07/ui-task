import React, { useState, useEffect, } from 'react';
import {  Sparkles } from 'lucide-react';
import ToolTipTour from './ToolTipTour.jsx';
import TopBar from './dashboard/Topbar.jsx';
import DashboardContent from './dashboard/DashboardContent.jsx';
import Toast from './dashboard/Toast.jsx'; 
import Sidebar from './dashboard/Sidebar.jsx';

const WorkElateDashboard = () => {
    const [tourActive, setTourActive] = useState(true); // Auto-start tour
    const [tourStep, setTourStep] = useState(0);
    const [showToast, setShowToast] = useState(false);

    // Auto-start tour on component mount
    useEffect(() => {
            setTourActive(true);
            setTourStep(0);
    }, []);


    const startTour = () => {
        setTourActive(true);
        setTourStep(0);
    };

    const nextStep = () => {
        if (tourStep < tourSteps.length - 1) {
            setTourStep(tourStep + 1);
        } else {
            completeTour();
        }
    };

    const skipTour = () => {
        setTourActive(false);
        setTourStep(0);
    };

    const completeTour = () => {
        setTourActive(false);
        setTourStep(0);
        setShowToast(true);

        setTimeout(() => setShowToast(false), 4000);
    };

    const tourSteps = [
        {
            target: 'main-dashboard',
            title: 'Welcome to WorkElate',
            content: 'This is your AI-powered workspace. Everything starts here.',
            position: 'center'
        },
        {
            target: 'nav-tasks',
            title: 'Task Orchestrator',
            content: 'Manage and automate your tasks here. AI keeps everything in flow.',
            position: 'right'
        },
        {
            target: 'ai-flow-card',
            title: 'AI Flow Builder',
            content: 'Create automation-powered workflows tailored to your daily operations.',
            position: 'top'
        },
        {
            target: 'nav-integrations',
            title: 'Connected Tools',
            content: 'Connect apps like Slack, Gmail, and Notion to streamline your work.',
            position: 'right'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-[#F5F8FA] via-[#E8F4F8] to-[#F5F8FA]">
            {/* Overlay when tour is active */}
            {tourActive && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-all duration-300" />
            )}

            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar touractive={tourActive} tourstep={tourStep} toursteps={tourSteps} />

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Bar */}
                    <TopBar />

                    {/* Main Dashboard Area */}
                    <main id="main-dashboard" className="flex-1 overflow-y-auto p-8 relative">
                        <DashboardContent tourActive={tourActive} tourStep={tourStep} tourSteps={tourSteps} />
                    </main>
                </div>
            </div>

            {/* Tooltip Tour */}
            {tourActive && (
                <ToolTipTour
                    step={tourSteps[tourStep]}
                    stepNumber={tourStep + 1}
                    totalSteps={tourSteps.length}
                    onNext={nextStep}
                    onSkip={skipTour}
                />
            )}

            {/* Success Toast */}
            {showToast && (
                <Toast message="You're all set! Enjoy your workspace 🎉" onClose={() => setShowToast(false)} />
            )}

            {/* Demo: Restart Tour Button (only shows if tour was completed) */}
            {!tourActive && !showToast && localStorage.getItem('workelate_tour_completed') && (
                <button
                    onClick={startTour}
                    className="fixed bottom-8 right-8 px-6 py-3 bg-[#008DC2] hover:bg-[#00549A] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 flex items-center gap-2 z-50"
                >
                    <Sparkles className="w-5 h-5" />
                    Restart Dashboard Tour
                </button>
            )}
        </div>
    );
};



export default WorkElateDashboard;