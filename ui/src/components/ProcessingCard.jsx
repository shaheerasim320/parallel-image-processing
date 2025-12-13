import React from 'react';


const ProcessingCard = ({ stats}) => {
  const { progress, cpu, memory, processedItems, totalItems, statusText, timeRemaining } = stats;

  return (
    <div className="bg-white rounded-xl shadow-xl border border-[#e6e6db] overflow-hidden w-full transition-all duration-300">
      {/* Upper Content */}
      <div className="p-8 md:p-14 flex flex-col items-center justify-center gap-8 md:gap-10">

        {/* Spinner Icon */}
        <div className="relative flex items-center justify-center mb-2">
          {/* Static Background Ring */}
          <div className="size-24 rounded-full border-[6px] border-[#f0f0eb]"></div>

          {/* Animated Spinner Ring */}
          <div className="absolute size-24 text-blue-500 rounded-full border-[6px] border-primary border-t-transparent animate-spin"></div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-[#181811] animate-pulse">hourglass_top</span>
          </div>
        </div>

        {/* Status Details */}
        <div className="w-full max-w-lg space-y-4">
          <div className="flex justify-between items-end px-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg leading-none text-text-main">Status</h3>
              <span className="text-xs text-text-muted mt-1 font-medium">Batch Processing</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold font-mono text-primary">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-5 w-full rounded-full bg-[#f0f0eb] overflow-hidden shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500 ease-out flex items-center overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-full bg-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex justify-between items-center text-xs md:text-sm text-text-muted px-1">
            <span>{statusText}</span>
            <span className="font-mono">~{timeRemaining}s remaining</span>
          </div>
        </div>
      </div>

      {/* Grid Stats Footer */}
      <div className="grid grid-cols-3 divide-x divide-[#e6e6db] border-t border-[#e6e6db] bg-[#fafaf7]">
        <div className="p-4 text-center group hover:bg-white transition-colors">
          <p className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-1">CPU Usage</p>
          <p className="font-mono text-lg font-bold text-text-main group-hover:text-primary transition-colors">{cpu}%</p>
        </div>
        <div className="p-4 text-center group hover:bg-white transition-colors">
          <p className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-1">Memory</p>
          <p className="font-mono text-lg font-bold text-text-main group-hover:text-primary transition-colors">{memory}MB</p>
        </div>
        <div className="p-4 text-center group hover:bg-white transition-colors">
          <p className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-1">Items</p>
          <p className="font-mono text-lg font-bold text-text-main group-hover:text-primary transition-colors">{processedItems}/{totalItems}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingCard;