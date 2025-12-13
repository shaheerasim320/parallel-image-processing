import React from 'react';

const PipelineVisualization = () => {
  return (
    <div className="flex flex-col border-t border-[#e6e6db] bg-[#fcfcfb]" id='pipeline'>
      <div className="flex flex-1 justify-center px-4 py-20 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="mb-3 text-3xl font-bold leading-tight text-[#181811]">Pipeline Visualization</h2>
            <p className="max-w-2xl text-[#5e5d57]">
              Visual flow of the image processing stages. The central block demonstrates where image-level parallelism occurs.
            </p>
          </div>

          {/* Desktop Pipeline Flow */}
          <div className="relative hidden items-center justify-center gap-4 lg:flex">
            
            {/* Step 1: Upload */}
            <div className="z-10 flex w-32 flex-col items-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e6db] bg-white shadow-sm transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-[32px] text-gray-600">upload_file</span>
              </div>
              <span className="text-sm font-bold text-[#181811]">Upload</span>
            </div>

            {/* Connecting Arrow */}
            <div className="relative h-[2px] min-w-[40px] flex-1 bg-[#e6e6db]">
              <span className="material-symbols-outlined absolute -right-2 -top-3 text-[#e6e6db]">chevron_right</span>
            </div>

            {/* Parallel Block Container */}
            <div className="relative rounded-2xl border-2 border-dashed border-primary/50 bg-[#3b82f6]/5 p-6 transition-colors hover:bg-[#3b82f6]/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/20 bg-[#fcfcfb] px-3 text-xs font-bold text-[#181811] shadow-sm">
                ⚡ Parallel Execution Block
              </div>
              
              <div className="flex items-center gap-4">
                {/* Denoise */}
                <PipelineStep icon="blur_off" label="Denoising" />
                
                {/* Arrow */}
                <span className="material-symbols-outlined text-[#e6e6db]">arrow_right_alt</span>
                
                {/* Enhance */}
                <PipelineStep icon="hdr_strong" label="Enhancement" />
                
                {/* Arrow */}
                <span className="material-symbols-outlined text-[#e6e6db]">arrow_right_alt</span>
                
                {/* Segmentation */}
                <PipelineStep icon="grid_on" label="Segmentation" />
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="relative h-[2px] min-w-[40px] flex-1 bg-[#e6e6db]">
              <span className="material-symbols-outlined absolute -right-2 -top-3 text-[#e6e6db]">chevron_right</span>
            </div>

            {/* Step 5: Results */}
            <div className="z-10 flex w-32 flex-col items-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[#181811] text-white shadow-lg transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">analytics</span>
              </div>
              <span className="text-sm font-bold text-[#181811]">Results</span>
            </div>
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-[#e6e6db] bg-white p-3 shadow-sm">
              <span className="material-symbols-outlined text-gray-500">upload_file</span>
              <span className="font-bold text-[#181811]">Upload Images</span>
            </div>
            
            <span className="material-symbols-outlined text-gray-400">arrow_downward</span>
            
            <div className="w-full max-w-sm rounded-r-xl border-l-4 border-primary bg-[#3b82f6]/5 py-4 pl-4 pr-2">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">Parallel Region</p>
              <div className="flex flex-col gap-4">
                <MobileStep icon="blur_off" label="Denoising" />
                <div className="flex justify-center"><span className="material-symbols-outlined text-sm text-gray-300">arrow_downward</span></div>
                <MobileStep icon="hdr_strong" label="Enhancement" />
                <div className="flex justify-center"><span className="material-symbols-outlined text-sm text-gray-300">arrow_downward</span></div>
                <MobileStep icon="grid_on" label="Segmentation" />
              </div>
            </div>
            
            <span className="material-symbols-outlined text-gray-400">arrow_downward</span>
            
            <div className="flex w-full max-w-sm items-center gap-4 rounded-xl bg-[#181811] p-3 text-white shadow-md">
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
    <div className="group relative flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-primary bg-white shadow-md shadow-primary/10">
      <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#3b82f6]/10 transition-transform group-hover:scale-y-100"></div>
      <span className="material-symbols-outlined z-10 text-[32px] text-[#181811]">{icon}</span>
    </div>
    <span className="text-sm font-bold text-[#181811]">{label}</span>
  </div>
);

const MobileStep = ({ icon, label }) => (
  <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-white p-3 shadow-sm">
    <span className="material-symbols-outlined text-[#181811]">{icon}</span>
    <span className="font-bold text-[#181811]">{label}</span>
  </div>
);

export default PipelineVisualization;