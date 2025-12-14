import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';

export const ComparisonRow = ({ data }) => {
  const [originalError, setOriginalError] = useState(false);
  const [processedError, setProcessedError] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0]);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleArrowClick = (direction) => {
    const step = 5;
    if (direction === 'left') {
      setSliderPosition(Math.max(0, sliderPosition - step));
    } else {
      setSliderPosition(Math.min(100, sliderPosition + step));
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-700/60 bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-gray-600/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-[1.02] hover:-translate-y-0.5">
      {/* Labels */}
      <div className="absolute top-2 left-2 right-2 z-30 flex items-center justify-between">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg shadow-blue-500/50 flex items-center gap-1">
          <Icon name="check_circle" className="text-[10px]" />
          <span>Processed</span>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl px-2.5 py-1 text-[10px] font-bold text-gray-200 shadow-lg border border-gray-700/60">
          Original
        </div>
      </div>

      {/* Comparison Container with Slider */}
      <div 
        ref={containerRef}
        className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Processed Image (Background - Left Side) */}
        <div className="absolute inset-0">
          {processedError ? (
            <div className="h-full w-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Icon name="image_not_supported" className="text-4xl mb-2 mx-auto text-gray-600" />
                <p className="text-sm">Failed to load image</p>
              </div>
            </div>
          ) : (
            <img
              src={data.processed.src}
              alt={data.processed.filename}
              className="h-full w-full object-contain"
              onError={() => setProcessedError(true)}
              loading="lazy"
              style={data.processed.filterStyle}
            />
          )}
        </div>

        {/* Original Image (Foreground with clip - Right Side) */}
        <div 
          className="absolute top-0 right-0 bottom-0 overflow-hidden"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          {originalError ? (
            <div className="h-full w-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Icon name="image_not_supported" className="text-4xl mb-2 mx-auto text-gray-600" />
                <p className="text-sm">Failed to load image</p>
              </div>
            </div>
          ) : (
            <div className="h-full" style={{ width: `${100 / ((100 - sliderPosition) / 100)}%`, position: 'absolute', right: 0 }}>
              <img
                src={data.original.src}
                alt={data.original.filename}
                className="h-full w-full object-contain"
                onError={() => setOriginalError(true)}
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-blue-500/50 z-20 transition-all duration-100"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute inset-0 bg-white/20 blur-sm"></div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-30 flex items-center gap-1 transition-all duration-100"
          style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleArrowClick('left');
            }}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/60 text-white shadow-lg hover:bg-gray-700/80 hover:scale-110 transition-all duration-200"
            aria-label="Move slider left"
          >
            <Icon name="chevron_left" className="text-sm" />
          </button>

          {/* Center Handle */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-xl shadow-blue-500/50 border-2 border-white/20 hover:scale-110 transition-transform duration-200">
            <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-white/80 rounded"></div>
                <div className="w-0.5 h-3 bg-white/80 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleArrowClick('right');
            }}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-700/60 text-white shadow-lg hover:bg-gray-700/80 hover:scale-110 transition-all duration-200"
            aria-label="Move slider right"
          >
            <Icon name="chevron_right" className="text-sm" />
          </button>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
      </div>

      {/* Filename Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/98 via-gray-900/95 to-transparent backdrop-blur-xl border-t border-gray-700/60 p-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <p className="text-[10px] font-bold text-gray-200 truncate">
              {data.processed.filename}
            </p>
            <Icon name="check_circle" className="text-blue-400 flex-shrink-0 text-xs" />
          </div>
          <div className="flex items-center gap-1.5 mx-2">
            <div className="h-px w-6 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <Icon name="compare_arrows" className="text-blue-400 text-xs" />
            <div className="h-px w-6 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          <div className="flex-1 min-w-0 text-right">
            <p className="text-[10px] font-bold text-gray-200 truncate">
              {data.original.filename}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};