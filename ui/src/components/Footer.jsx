import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#e6e6db] bg-white">
      <div className="flex flex-col">
        <div className="px-4 py-10 md:px-10 lg:px-40">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#3b82f6] text-[#181811] shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-white">grid_view</span>
              </div>
              <p className="text-sm font-medium text-[#181811]">ImgProc Lab © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;