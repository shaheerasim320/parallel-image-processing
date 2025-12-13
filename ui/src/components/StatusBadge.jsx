import React from 'react';

const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/20 text-[#8c8b00] md:text-primary-dark text-xs font-bold uppercase tracking-wider mb-2 border border-primary/10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
      </span>
      <span className="text-yellow-700 md:text-blue-700">Processing Active</span>
    </div>
  );
};

export default StatusBadge;