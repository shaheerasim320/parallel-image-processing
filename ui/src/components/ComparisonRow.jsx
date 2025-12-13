import React from 'react';
import { Icon } from './Icon';

export const ComparisonRow = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Original Side */}
        <div className="relative group border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-text-main backdrop-blur-sm shadow-sm border border-gray-200">
            Original Input
          </div>
          <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-black/20 overflow-hidden">
            <div
              className="h-full w-full bg-contain bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${data.original.src}")` }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 p-4">
            <p className="text-sm font-bold text-text-main">
              {data.original.filename}
            </p>
          </div>
        </div>

        {/* Processed Side */}
        <div className="relative group">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-[#3b82f6] px-3 py-1 text-xs font-bold text-white shadow-sm">
            <Icon name="check_circle" className="text-[14px]" />
            Processed
          </div>
          <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-black/20 overflow-hidden">
            <div
              className="h-full w-full bg-contain bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url("${data.processed.src}")`,
                ...data.processed.filterStyle,
              }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#eff6ff] border-t border-primary/10 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-text-main">
                {data.processed.filename}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};