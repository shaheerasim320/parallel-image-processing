import React from 'react';
import { Icon } from './Icon';


export const StatsCard = ({ data }) => {
  const isParallel = data.type === 'parallel';
  const isSpeedup = data.type === 'speedup';

  if (isParallel) {
    return (
      <div className="group relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-7 shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-400/60 hover:scale-[1.03] hover:-translate-y-1">
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-blue-500/30 blur-3xl group-hover:bg-blue-400/40 group-hover:scale-150 transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Icon name="bolt" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-blue-300 group-hover:text-blue-200 transition-colors">
              Parallel Time
            </span>
          </div>
          <div className="flex items-end gap-2 mb-1">
            <span className="text-6xl font-black text-white group-hover:scale-105 transition-transform duration-300 inline-block">
              {data.value}
            </span>
            <span className="mb-2 text-lg font-medium text-gray-400">
              sec
            </span>
          </div>
          <div className="mt-5 h-2.5 w-full rounded-full bg-gray-700/60 overflow-hidden backdrop-blur-sm">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 w-[25%] shadow-lg shadow-blue-500/60 group-hover:shadow-blue-400/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSpeedup) {
    return (
      <div className="group relative overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-7 shadow-2xl shadow-purple-500/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:border-purple-400/60 hover:scale-[1.03] hover:-translate-y-1">
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-purple-500/30 blur-3xl group-hover:bg-purple-400/40 group-hover:scale-150 transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_0%,rgba(168,85,247,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white shadow-xl shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Icon name="rocket_launch" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-purple-300 group-hover:text-purple-200 transition-colors">
              Speedup
            </span>
          </div>
          <div className="flex items-end gap-2 mb-1">
            <span className="text-6xl font-black text-white group-hover:scale-105 transition-transform duration-300 inline-block">
              {data.value}
            </span>
            {data.percentage && (
              <span className="mb-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/40 px-3 py-1.5 text-xs font-bold text-green-300 backdrop-blur-md shadow-lg shadow-green-500/20 group-hover:shadow-green-400/40 transition-all">
                <Icon name="arrow_upward" className="text-[14px]" />
                {data.percentage}%
              </span>
            )}
          </div>
          <p className="mt-5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Based on Serial / Parallel calculation.</p>        
        </div>
      </div>
    );
  }

  // Serial (Default)
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-7 shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(107,114,128,0.3)] hover:border-gray-600/60 hover:scale-[1.03] hover:-translate-y-1">
      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gray-600/20 blur-3xl group-hover:bg-gray-500/30 group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Icon name="timer" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">
            Serial Time
          </span>
        </div>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-6xl font-black text-white group-hover:scale-105 transition-transform duration-300 inline-block">
            {data.value}
          </span>
          <span className="mb-2 text-lg font-medium text-gray-400">
            sec
          </span>
        </div>
        <div className="mt-5 h-2.5 w-full rounded-full bg-gray-700/60 overflow-hidden backdrop-blur-sm">
          <div className="h-full rounded-full bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 w-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};