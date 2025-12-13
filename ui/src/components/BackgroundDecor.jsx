import React from 'react';

const BackgroundDecor = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#3b82f6]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-[#3b82f6]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-[80px]"></div>
    </div>
  );
};

export default BackgroundDecor;