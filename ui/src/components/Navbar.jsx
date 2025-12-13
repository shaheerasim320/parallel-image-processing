"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#e6e6db] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] flex-col px-4 md:px-10">
        <div className="flex flex-1 items-center justify-between py-3">
          {/* Logo Section */}
          <Link className="flex items-center gap-4 text-[#181811]" href={"/"}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-[#3b82f6] text-[#181811] shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-white">grid_view</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">ImgProc Lab</h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-1 justify-end gap-8 md:flex">
            <nav className="flex items-center gap-9">
              <Link href={"#benchmarks"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Benchmarks</Link>
              <Link href={"#modes"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Execution Modes</Link>
              <Link href={"#pipeline"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary">Pipeline Visulization</Link>
              <Link href={"/upload"} className='text-sm font-medium p-2 px-4 leading-normal text-white bg-blue-400 rounded-full transition-colors hover:bg-blue-500'>Get Started</Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#181811] hover:bg-gray-100 rounded-lg transition-colors"
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
        <div className="border-t border-[#e6e6db] bg-white px-4 py-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link href={"#benchmarks"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Benchmarks</Link>
              <Link href={"#modes"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Execution Modes</Link>
              <Link href={"#pipeline"} className="text-sm font-medium leading-normal text-[#181811] transition-colors hover:text-primary" onClick={()=>setIsMenuOpen(!isMenuOpen)}>Pipeline Visulization</Link>
              <Link href={"/upload"} className='text-sm font-medium p-2 px-4 leading-normal text-white bg-blue-400 rounded-full transition-colors hover:bg-blue-500'>Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;