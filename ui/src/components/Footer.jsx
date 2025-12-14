import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-xl">
      <div className="flex flex-col">
        <div className="px-4 py-10 md:px-10 lg:px-40">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50">
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </div>
              <p className="text-sm font-medium text-gray-300">ImgProc Lab © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;