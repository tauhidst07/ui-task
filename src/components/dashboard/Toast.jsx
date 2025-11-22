import { Sparkles, X } from 'lucide-react';
import React from 'react'

const Toast = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-toastSlideUp">
            <div className="bg-[#008DC2] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                <p className="font-medium">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-2 w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};


export default Toast