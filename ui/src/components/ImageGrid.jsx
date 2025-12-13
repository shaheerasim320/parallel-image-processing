"use client";

import React from "react";

/**
 * @param {{
 *  images: Array<{ id: string; url: string; name: string; size: string }>,
 *  onClear: () => void,
 *  onRemove: (id: string) => void
 * }} props
 */
const ImageGrid = ({ images, onClear, onRemove }) => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider">
          Ready for Processing ({images.length})
        </h4>

        <button
          onClick={onClear}
          disabled={images.length === 0}
          className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Clear All
        </button>
      </div>

      {/* Empty State */}
      {images.length === 0 ? (
        <div className="flex items-center justify-center h-32 border border-gray-100 dark:border-[#2a2a2a] rounded-xl bg-gray-50 dark:bg-[#252525] text-gray-400 text-sm">
          No images uploaded yet.
        </div>
      ) : (
        /* Image Grid */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-[#0f1923] border border-transparent hover:border-primary/50 transition-all"
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => onRemove(img.id)}
                  className="bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    delete
                  </span>
                </button>
              </div>

              {/* Size Badge */}
              <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[10px] text-white font-mono">
                {img.size}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
