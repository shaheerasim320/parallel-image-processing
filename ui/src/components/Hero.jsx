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
                  <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-300 shadow-lg shadow-blue-500/20">
                    <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
                    High Performance Computing
                  </div>
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent @[480px]:text-5xl lg:text-6xl">
                    Parallel Image Processing
                  </h1>
                  <h2 className="mt-2 text-lg font-normal leading-relaxed text-gray-300">
                    An advanced image processing pipeline optimized with multi-threading and efficient data partitioning, achieving significant performance improvements.
                  </h2>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-4">
                  <Link href={"/upload"} className="group relative flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 text-white leading-normal tracking-[0.015em] shadow-xl shadow-blue-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    <span className="material-symbols-outlined mr-2 text-[20px] relative z-10">play_arrow</span>
                    <span className="relative z-10">Start Processing</span>
                  </Link>
                  <Link href={"#pipeline"} className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-full border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm px-6 text-base font-bold leading-normal tracking-[0.015em] text-gray-200 transition-all hover:bg-gray-700/50 hover:border-gray-600/50 hover:scale-105">
                    <span className="material-symbols-outlined mr-2 text-[20px]">account_tree</span>
                    View Pipeline
                  </Link>
                </div>
              </div>

              {/* Visual Content */}
              <div className="group relative w-full flex-1">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/30 opacity-50 blur-3xl transition-opacity group-hover:opacity-70"></div>
                
                <div 
                  className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-700/50 bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApaczTHbOLaLLDOhlNC4w309ah-YlyC1xNcigzyd5yy6D_mamDDUazqiAifwfwHpO_ugDxOr_jGTjMfGXfnjpyGkOTrYsJPBUUuWTA4Ss_JXwfkTfjkQ60sFkFpjG5K4E4YCW-phCkbm0NuQu-_ggiugiWPE9-moTJeGGRUcrrNy3MdUXGdT-DGWvxkaQhyGog1GCGKNQ9BBxioD9Dr-wIKgECG2gQYQVIK4Oef70J0-szcHOw9hL9sYf9X8Mld3o-x2ly6sC54rs")'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                  
                  {/* Floating Status Card */}
                  <div className="absolute bottom-6 left-6 max-w-[240px] rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl p-4 shadow-2xl">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400"></div>
                      <span className="text-xs font-bold text-gray-200">Processing Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700/50">
                        <div className="h-1.5 animate-[loading_2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300">78%</span>
                    </div>
                    <div className="mt-2 text-[10px] text-gray-400">
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