import React from 'react';


const ProcessingCard = ({ stats}) => {
  const { progress, cpu, memory, processedItems, totalItems, statusText, timeRemaining } = stats;

  return (
    <div className="rounded-3xl shadow-2xl border border-gray-700/60 bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-md overflow-hidden w-full transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] hover:border-blue-500/50">
      {/* Upper Content */}
      <div className="p-8 md:p-14 flex flex-col items-center justify-center gap-8 md:gap-10 relative">
        {/* Animated background glow */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Spinner Icon */}
        <div className="relative flex items-center justify-center mb-2 z-10">
          {/* Static Background Ring */}
          <div className="size-28 rounded-full border-[6px] border-gray-700/50"></div>

          {/* Animated Spinner Ring */}
          <div className="absolute size-28 rounded-full border-[6px] border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

          {/* Inner Glow */}
          <div className="absolute size-28 rounded-full border-[4px] border-blue-500/30 animate-pulse"></div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-blue-400 animate-pulse">hourglass_top</span>
          </div>
        </div>

        {/* Large Percentage Display */}
        <div className="text-center z-10">
          <div className="inline-flex items-baseline gap-2 mb-2">
            <span className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">
              {Math.round(progress)}
            </span>
            <span className="text-5xl md:text-6xl font-bold text-gray-400">%</span>
          </div>
          <p className="text-lg font-bold uppercase tracking-wider text-gray-300">
            {progress < 100 ? 'Processing...' : 'Complete!'}
          </p>
        </div>

        {/* Status Details */}
        <div className="w-full max-w-lg space-y-6 z-10">
          <div className="flex justify-between items-center px-1">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg leading-none text-white">Status</h3>
              <span className="text-xs text-gray-400 mt-1 font-medium">Batch Processing</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono text-blue-400">{processedItems}/{totalItems}</span>
              <p className="text-xs text-gray-400 mt-1">Images</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 w-full rounded-full bg-gray-700/50 overflow-hidden shadow-inner backdrop-blur-sm">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out flex items-center overflow-hidden shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex justify-between items-center text-sm text-gray-300 px-1">
            <span className="font-medium">{statusText}</span>
            <span className="font-mono text-blue-400">~{timeRemaining}s remaining</span>
          </div>
        </div>
      </div>

      {/* Grid Stats Footer */}
      <div className="grid grid-cols-3 divide-x divide-gray-700/50 border-t border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
        <div className="p-5 text-center group hover:bg-gray-700/30 transition-all">
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2 group-hover:text-gray-300">CPU Usage</p>
          <p className="font-mono text-2xl font-black text-white group-hover:text-blue-400 transition-colors">{cpu}%</p>
        </div>
        <div className="p-5 text-center group hover:bg-gray-700/30 transition-all">
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2 group-hover:text-gray-300">Memory</p>
          <p className="font-mono text-2xl font-black text-white group-hover:text-purple-400 transition-colors">{memory}MB</p>
        </div>
        <div className="p-5 text-center group hover:bg-gray-700/30 transition-all">
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2 group-hover:text-gray-300">Items</p>
          <p className="font-mono text-2xl font-black text-white group-hover:text-pink-400 transition-colors">{processedItems}/{totalItems}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingCard;