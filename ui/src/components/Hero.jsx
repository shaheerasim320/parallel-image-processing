import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-1 justify-center px-4 py-5 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="@container">
            <div className="flex flex-col-reverse gap-10 py-10 @[864px]:flex-row @[864px]:items-center lg:gap-20">
              
              {/* Text Content */}
              <div className="flex flex-1 flex-col gap-6 @[864px]:pr-10">
                <div className="flex flex-col gap-2 text-left">
                  <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-[#e6e6db] bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#181811] shadow-sm">
                    <span className="size-2 rounded-full bg-[#078816]"></span>
                    High Performance Computing
                  </div>
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#181811] @[480px]:text-5xl lg:text-6xl">
                    Parallel Image Processing
                  </h1>
                  <h2 className="mt-2 text-lg font-normal leading-relaxed text-[#5e5d57]">
                    A PDC project demonstrating significant performance improvements in image pipelines using multi-threading and optimized data partitioning.
                  </h2>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-4">
                  <Link href={"/upload"} className="bg-[#5fa3e0] flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-[#3b82f6] px-6 text-white leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 transition-all hover:bg-[#2e8ada] hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined mr-2 text-[20px]">play_arrow</span>
                    Start Processing
                  </Link>
                  <Link href={"#pipeline"} className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-full border border-[#e6e6db] bg-white px-6 text-base font-bold leading-normal tracking-[0.015em] text-[#181811] transition-all hover:bg-gray-50 hover:border-gray-300">
                    <span className="material-symbols-outlined mr-2 text-[20px]">account_tree</span>
                    View Pipeline
                  </Link>
                </div>
              </div>

              {/* Visual Content */}
              <div className="group relative w-full flex-1">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#3b82f6]/20 opacity-30 blur-3xl transition-opacity group-hover:opacity-50"></div>
                
                <div 
                  className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#e6e6db] bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApaczTHbOLaLLDOhlNC4w309ah-YlyC1xNcigzyd5yy6D_mamDDUazqiAifwfwHpO_ugDxOr_jGTjMfGXfnjpyGkOTrYsJPBUUuWTA4Ss_JXwfkTfjkQ60sFkFpjG5K4E4YCW-phCkbm0NuQu-_ggiugiWPE9-moTJeGGRUcrrNy3MdUXGdT-DGWvxkaQhyGog1GCGKNQ9BBxioD9Dr-wIKgECG2gQYQVIK4Oef70J0-szcHOw9hL9sYf9X8Mld3o-x2ly6sC54rs")'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                  
                  {/* Floating Status Card */}
                  <div className="absolute bottom-6 left-6 max-w-[240px] rounded-xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                      <span className="text-xs font-bold text-gray-800">Processing Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className="h-1.5 animate-[loading_2s_ease-in-out_infinite] rounded-full bg-[#3b82f6]" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">78%</span>
                    </div>
                    <div className="mt-2 text-[10px] text-gray-500">
                      Processing frame: 1024/1400
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;