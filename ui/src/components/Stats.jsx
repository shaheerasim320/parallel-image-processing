import React from 'react';

const Stats = () => {
  const statsData = [
    {
      label: "Performance Gain",
      value: "4x Faster",
      icon: "trending_up",
      iconColor: "text-[#078816]",
      tagIcon: "arrow_upward",
      tagText: "+300% efficiency",
      tagColor: "text-[#078816]",
      tagBg: "bg-[#078816]/10"
    },
    {
      label: "Thread Utilization",
      value: "100%",
      icon: "memory",
      iconColor: "text-primary",
      tagIcon: "check_circle",
      tagText: "All cores active",
      tagColor: "text-[#078816]",
      tagBg: "bg-[#078816]/10"
    },
    {
      label: "Processing Time",
      value: "Reduced",
      icon: "timer",
      iconColor: "text-[#e71708]",
      tagIcon: "arrow_downward",
      tagText: "-75% latency",
      tagColor: "text-[#e71708]",
      tagBg: "bg-[#e71708]/10"
    }
  ];

  return (
    <div className="flex flex-col border-y border-gray-700/50 bg-transparent mt-10 relative" id='benchmarks'>
      <div className="flex flex-1 justify-center px-4 py-12 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-8 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md w-fit shadow-lg shadow-blue-500/20 mb-2">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Metrics</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Benchmarks</h3>
            <p className="text-gray-300 text-lg">Real-time metrics comparing serial vs parallel execution.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col gap-3 rounded-3xl border border-gray-700/60 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-6 shadow-xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-400/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                    <span className={`material-symbols-outlined ${stat.iconColor === 'text-primary' ? 'text-blue-400' : stat.iconColor} text-2xl`}>{stat.icon}</span>
                  </div>
                  <p className="text-5xl font-black leading-tight text-white mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</p>
                  <div className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold backdrop-blur-sm ${
                    stat.tagColor === 'text-[#078816]' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    <span className="material-symbols-outlined text-[16px]">{stat.tagIcon}</span>
                    {stat.tagText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;