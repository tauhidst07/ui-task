import { arrow, autoUpdate, flip, offset, shift } from '@floating-ui/react';
import { useFloating } from '@floating-ui/react-dom';
import { ArrowRight, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react'

const ToolTipTour = ({ step, stepNumber, totalSteps, onNext, onSkip }) => {
    // const targetRef = useRef(null);
    const arrowRef = useRef(null);

    // Floating UI auto-positioning setup
    const { refs, floatingStyles } = useFloating({
        placement: step.position || 'right',
        middleware: [
            offset(12),
            flip(),
            shift(),
            arrow({ element: arrowRef })
        ],
        whileElementsMounted: autoUpdate
    });


    useEffect(() => {
        const targetEl = document.getElementById(step.target);
        if (targetEl) {
            refs.setReference(targetEl);
        }
    }, [step, refs]);

    return (
        <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex: 9999 }}
            className="fixed animate-tooltipFadeIn"
        >
            <div className="relative">
                {/* Tooltip Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-6 max-w-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <span className="px-2 py-1 bg-[#008DC2]/10 text-[#008DC2] text-xs font-semibold rounded-lg">
                                {stepNumber} of {totalSteps}
                            </span>

                            <h3 className="text-xl font-bold text-[#0F1B2B] mt-2 mb-1">{step.title}</h3>
                            <p className="text-[#0F1B2B]/70">{step.content}</p>
                        </div>

                        <button
                            onClick={onSkip}
                            className="ml-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                        >
                            <X className="w-5 h-5 text-[#0F1B2B]/60" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={onSkip}
                            className="px-4 py-2 text-[#0F1B2B]/70 hover:text-[#0F1B2B] font-medium"
                        >
                            Skip Tour
                        </button>
                        <button
                            onClick={onNext}
                            className="flex-1 px-4 py-2 bg-[#008DC2] hover:bg-[#00549A] text-white font-semibold rounded-lg flex items-center justify-center gap-2"
                        >
                            {stepNumber === totalSteps ? 'Finish' : 'Next'}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Floating UI Arrow */}
                <div
                    ref={arrowRef}
                    className="absolute w-4 h-4 bg-white rotate-45 border border-gray-200"
                    style={{
                        left: 'var(--arrow-left)',
                        top: 'var(--arrow-top)',
                        right: 'var(--arrow-right)',
                        bottom: 'var(--arrow-bottom)',
                    }}
                />
            </div>
        </div>
    );
};


export default ToolTipTour