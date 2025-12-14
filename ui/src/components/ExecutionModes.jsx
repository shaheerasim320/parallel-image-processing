import React from 'react';

const ExecutionModes = () => {
  const modes = [
    {
      title: "Auto Mode",
      desc: "Intelligent switching based on image workload size.",
      icon: "bolt",
      featured: false
    },
    {
      title: "Advanced Mode",
      desc: "Manual control over thread count and buffer sizes.",
      icon: "tune",
      featured: false
    }
  ];

  return (
    <div className="flex flex-col relative" id='modes'>
      <div className="flex flex-1 justify-center px-4 py-16 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-10 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md w-fit shadow-lg shadow-blue-500/20 mb-2">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Modes</span>
            </div>
            <h2 className="max-w-[720px] text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Execution Modes
            </h2>
            <p className="max-w-[720px] text-lg font-normal leading-normal text-gray-300">
              Choose the optimal execution strategy for your image processing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {modes.map((mode, index) => (
              <div 
                key={index}
                className={`group relative flex flex-col gap-4 rounded-3xl border border-gray-700/60 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-[1.02] ${mode.featured ? 'overflow-hidden' : ''}`}
              >
                {mode.featured && (
                  <div className="absolute -mr-4 -mt-4 right-0 top-0 h-16 w-16 rounded-bl-full bg-blue-500/20 blur-xl"></div>
                )}
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-400/20 transition-colors"></div>
                
                <div className={`flex size-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  mode.icon === 'bolt' 
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{mode.icon}</span>
                </div>
                
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-xl font-black leading-tight text-white group-hover:text-blue-200 transition-colors">{mode.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">{mode.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionModes;