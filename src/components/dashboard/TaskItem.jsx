import React from 'react'

const TaskItem = ({ title, status, priority }) => {
    const priorityColors = {
        high: 'bg-red-100 text-red-600',
        medium: 'bg-yellow-100 text-yellow-600',
        low: 'bg-green-100 text-green-600'
    };

    return (
        <div className="flex items-center gap-3 p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors cursor-pointer">
            <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 hover:border-[#008DC2] transition-colors"></div>
            <div className="flex-1 min-w-0">
                <p className="font-medium text-[#0F1B2B] truncate">{title}</p>
                <p className="text-sm text-[#0F1B2B]/60">{status}</p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-lg ${priorityColors[priority]}`}>
                {priority}
            </span>
        </div>
    );
};

export default TaskItem