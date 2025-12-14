"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-700/50 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl shadow-xl">
      <div className="mx-auto flex h-full max-w-[1200px] flex-col px-4 md:px-10">
        <div className="flex flex-1 items-center justify-between py-3">
          {/* Logo Section */}
          <Link className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity" href={"/"}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ImgProc Lab</h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-1 justify-end gap-8 md:flex">
            <nav className="flex items-center gap-9">
              <Link href={"/#benchmarks"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Benchmarks</Link>
              <Link href={"/#modes"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Execution Modes</Link>
              <Link href={"/#pipeline"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Pipeline Visulization</Link>
              <Link href={"/upload"} className='text-sm font-medium p-2 px-4 leading-normal text-white bg-blue-400 rounded-full transition-colors hover:bg-blue-500'>Get Started</Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-gray-700/50 bg-gradient-to-b from-gray-900/98 to-gray-800/98 backdrop-blur-xl px-4 py-4 md:hidden shadow-xl">
          <nav className="flex flex-col gap-4">
            <Link href={"#benchmarks"} className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Benchmarks</Link>
              <Link href={"#modes"} className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Execution Modes</Link>
              <Link href={"#pipeline"} className="text-sm font-medium leading-normal text-gray-300 transition-colors hover:text-white" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Pipeline Visulization</Link>
              <Link href={"/upload"} className='text-sm font-medium p-2 px-4 leading-normal text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all hover:scale-105 shadow-lg'>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;