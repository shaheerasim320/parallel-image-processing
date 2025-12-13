import React from 'react';
import { Icon } from './Icon';


export const StatsCard = ({ data }) => {
  const isParallel = data.type === 'parallel';
  const isSpeedup = data.type === 'speedup';

  if (isParallel) {
    return (
      <div className="group relative overflow-hidden border-slate-200 rounded-2xl border group-hover:border-[#3b82f6]/50 bg-white p-6 shadow-sm group-hover:ring-1 group-hover:ring-[#3b82f6]/20 transition-all hover:shadow-md dark:border-[#3b82f6]/50 dark:bg-white/5">
        <div className="absolute -right-6 -top-6 size-24 rounded-full bg-[#3b82f6]/10 blur-xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#3b82f6] text-white">
              <Icon name="bolt" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
              Parallel Time
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-black text-text-main dark:text-white">
              {data.value}
            </span>
            <span className="mb-1.5 text-lg font-medium text-text-muted">
              sec
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10">
            <div className="h-full rounded-full bg-[#3b82f6] w-[25%] chart-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isSpeedup) {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#eff6ff] text-primary dark:bg-sky-500/20 dark:text-sky-300">
            <Icon name="rocket_launch" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-text-muted">
            Speedup
          </span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black text-text-main dark:text-white">
            {data.value}
          </span>
          {data.percentage && (
            <span className="mb-1.5 flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-500/20 dark:text-green-300">
              <Icon name="arrow_upward" className="text-[14px]" />
              {data.percentage}%
            </span>
          )}
        </div>
        <p className="mt-4 text-sm text-text-muted">Based on Serial / Parallel calculation.</p>        
      </div>
    );
  }

  // Serial (Default)
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-white">
          <Icon name="timer" />
        </div>
        <span className="text-sm font-bold uppercase tracking-wider text-text-muted">
          Serial Time
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black text-text-main dark:text-white">
          {data.value}
        </span>
        <span className="mb-1.5 text-lg font-medium text-text-muted">
          sec
        </span>
      </div>
      <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10">
        <div className="h-full rounded-full bg-gray-400 w-full"></div>
      </div>
    </div>
  );
};