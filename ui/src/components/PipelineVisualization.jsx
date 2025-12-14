import React from 'react';

const PipelineVisualization = () => {
  return (
    <div className="flex flex-col border-t border-gray-700/50 bg-transparent relative" id='pipeline'>
      <div className="flex flex-1 justify-center px-4 py-20 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md shadow-lg shadow-blue-500/20 mb-4">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Pipeline</span>
            </div>
            <h2 className="mb-3 text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Pipeline Visualization</h2>
            <p className="max-w-2xl text-gray-300 text-lg">
              Visual flow of the image processing stages. The central block demonstrates where image-level parallelism occurs.
            </p>
          </div>

          {/* Desktop Pipeline Flow */}
          <div className="relative hidden items-center justify-center gap-4 lg:flex">
            
            {/* Step 1: Upload */}
            <div className="z-10 flex w-32 flex-col items-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-xl transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
                <span className="material-symbols-outlined text-[32px] text-blue-400">upload_file</span>
              </div>
              <span className="text-sm font-bold text-white">Upload</span>
            </div>

            {/* Connecting Arrow */}
            <div className="relative h-[2px] min-w-[40px] flex-1 bg-gradient-to-r from-gray-700/50 via-blue-500/50 to-gray-700/50">
              <span className="material-symbols-outlined absolute -right-2 -top-3 text-blue-400">chevron_right</span>
            </div>

            {/* Parallel Block Container */}
            <div className="relative rounded-3xl border-2 border-dashed border-blue-500/50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md p-6 transition-all hover:border-blue-400/70 hover:bg-blue-500/15 shadow-xl shadow-blue-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-500/30 bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-xl px-4 py-1.5 text-xs font-bold text-blue-300 shadow-lg">
                ⚡ Parallel Execution Block
              </div>
              
              <div className="flex items-center gap-4">
                {/* Denoise */}
                <PipelineStep icon="blur_off" label="Denoising" />
                
                {/* Arrow */}
                <span className="material-symbols-outlined text-blue-400">arrow_right_alt</span>
                
                {/* Enhance */}
                <PipelineStep icon="hdr_strong" label="Enhancement" />
                
                {/* Arrow */}
                <span className="material-symbols-outlined text-blue-400">arrow_right_alt</span>
                
                {/* Segmentation */}
                <PipelineStep icon="grid_on" label="Segmentation" />
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="relative h-[2px] min-w-[40px] flex-1 bg-gradient-to-r from-gray-700/50 via-blue-500/50 to-gray-700/50">
              <span className="material-symbols-outlined absolute -right-2 -top-3 text-blue-400">chevron_right</span>
            </div>

            {/* Step 5: Results */}
            <div className="z-10 flex w-32 flex-col items-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/50 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="material-symbols-outlined text-[32px]">analytics</span>
              </div>
              <span className="text-sm font-bold text-white">Results</span>
            </div>
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-3 shadow-xl">
              <span className="material-symbols-outlined text-blue-400">upload_file</span>
              <span className="font-bold text-white">Upload Images</span>
            </div>
            
            <span className="material-symbols-outlined text-blue-400">arrow_downward</span>
            
            <div className="w-full max-w-sm rounded-r-xl border-l-4 border-blue-500/60 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md py-4 pl-4 pr-2 shadow-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-300">Parallel Region</p>
              <div className="flex flex-col gap-4">
                <MobileStep icon="blur_off" label="Denoising" />
                <div className="flex justify-center"><span className="material-symbols-outlined text-sm text-blue-400">arrow_downward</span></div>
                <MobileStep icon="hdr_strong" label="Enhancement" />
                <div className="flex justify-center"><span className="material-symbols-outlined text-sm text-blue-400">arrow_downward</span></div>
                <MobileStep icon="grid_on" label="Segmentation" />
              </div>
            </div>
            
            <span className="material-symbols-outlined text-blue-400">arrow_downward</span>
            
            <div className="flex w-full max-w-sm items-center gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white shadow-xl shadow-blue-500/50">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-bold">View Results</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Helper components for cleaner code
const PipelineStep = ({ icon, label }) => (
  <div className="flex w-32 flex-col items-center gap-3">
    <div className="group relative flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-blue-500/50 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md shadow-xl transition-all hover:scale-110 hover:border-blue-400/70 hover:shadow-blue-500/20">
      <div className="absolute inset-0 origin-bottom scale-y-0 bg-blue-500/20 transition-transform group-hover:scale-y-100"></div>
      <span className="material-symbols-outlined z-10 text-[32px] text-blue-400">{icon}</span>
    </div>
    <span className="text-sm font-bold text-white">{label}</span>
  </div>
);

const MobileStep = ({ icon, label }) => (
  <div className="flex items-center gap-4 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-3 shadow-lg">
    <span className="material-symbols-outlined text-blue-400">{icon}</span>
    <span className="font-bold text-white">{label}</span>
  </div>
);

export default PipelineVisualization;