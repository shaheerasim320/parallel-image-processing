import React from 'react';

const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400 shadow-lg shadow-blue-400"></span>
      </span>
      <span className="text-blue-300">Processing Active</span>
    </div>
  );
};

export default StatusBadge;