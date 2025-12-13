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
    <div className="flex flex-col border-y border-[#e6e6db] bg-white mt-10" id='benchmarks'>
      <div className="flex flex-1 justify-center px-4 py-12 md:px-10 lg:px-40">
        <div className="flex w-full max-w-[1200px] flex-col">
          <div className="mb-8 flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-[#181811]">Benchmarks</h3>
            <p className="text-[#5e5d57]">Real-time metrics comparing serial vs parallel execution.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col gap-3 rounded-2xl border border-[#e6e6db] bg-[#fcfcfb] p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#5e5d57]">{stat.label}</p>
                  <span className={`material-symbols-outlined ${stat.iconColor}`}>{stat.icon}</span>
                </div>
                <p className="text-4xl font-black leading-tight text-[#181811]">{stat.value}</p>
                <div className={`inline-flex w-fit items-center gap-1 rounded px-2 py-1 text-sm font-medium ${stat.tagColor} ${stat.tagBg}`}>
                  <span className="material-symbols-outlined text-[16px]">{stat.tagIcon}</span>
                  {stat.tagText}
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