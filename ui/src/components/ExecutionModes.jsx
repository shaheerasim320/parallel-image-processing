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
    <div className="flex flex-col" id='modes'>
      <div className="flex flex-1 justify-center px-4 py-16 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-10 flex flex-col gap-4">
            <h2 className="max-w-[720px] text-3xl font-bold leading-tight text-[#181811]">
              Execution Modes
            </h2>
            <p className="max-w-[720px] text-lg font-normal leading-normal text-[#5e5d57]">
              Choose the optimal execution strategy for your image processing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {modes.map((mode, index) => (
              <div 
                key={index}
                className={`group relative flex flex-col gap-4 rounded-xl border border-[#e6e6db] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${mode.featured ? 'overflow-hidden' : ''}`}
              >
                {mode.featured && (
                  <div className="absolute -mr-4 -mt-4 right-0 top-0 h-16 w-16 rounded-bl-full bg-[#3b82f6]/10"></div>
                )}
                
                <div className="flex size-12 items-center justify-center rounded-full bg-gray-100 text-[#181811] transition-colors group-hover:bg-[#3b82f6] group-hover:text-black">
                  <span className="material-symbols-outlined">{mode.icon}</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight text-[#181811]">{mode.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5e5d57]">{mode.desc}</p>
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