"use client";
import React, { useEffect, useState } from 'react';

export const Timeline = () => {
  // Use state to trigger animation on mount
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-text-main dark:text-white">
          Execution Timeline
        </h3>
        <div className="flex gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-gray-300"></span>
            <span className="text-text-muted">Serial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#3b82f6]"></span>
            <span className="text-text-main dark:text-white">Parallel</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="group">
          <div className="flex justify-between mb-1 text-sm font-medium">
            <span className="text-text-muted">Serial Execution</span>
            <span className="text-text-main dark:text-white">12.45s</span>
          </div>
          <div className="h-10 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
            <div
              className={`flex h-full items-center justify-end rounded-full bg-gray-300 px-3 text-xs font-bold text-gray-700 dark:bg-gray-600 dark:text-gray-200 transition-all duration-1000 ease-out`}
              style={{ width: animate ? '100%' : '0%' }}
            >
            </div>
          </div>
        </div>
        <div className="group">
          <div className="flex justify-between mb-1 text-sm font-medium">
            <span className="text-text-muted">Parallel Execution</span>
            <span className="text-text-main font-bold dark:text-white">
              3.20s
            </span>
          </div>
          <div className="h-10 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
            <div
              className={`flex h-full items-center justify-end rounded-full bg-[#3b82f6] px-3 text-xs font-bold text-white transition-all duration-1000 ease-out delay-200`}
              style={{ width: animate ? '25.7%' : '0%' }}
            >
              <span className={animate ? 'opacity-100 delay-500 duration-300' : 'opacity-0'}>-74%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};