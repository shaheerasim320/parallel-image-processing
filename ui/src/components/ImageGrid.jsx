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
    <div className="rounded-2xl shadow-xl border border-gray-700/60 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wider">
          Ready for Processing ({images.length})
        </h4>

        <button
          onClick={onClear}
          disabled={images.length === 0}
          className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Clear All
        </button>
      </div>

      {/* Empty State */}
      {images.length === 0 ? (
        <div className="flex items-center justify-center h-32 border border-gray-700/50 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 text-sm">
          No images uploaded yet.
        </div>
      ) : (
        /* Image Grid */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 hover:border-blue-500/50 transition-all hover:scale-105"
            >
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => onRemove(img.id)}
                  className="bg-red-500/80 hover:bg-red-500 backdrop-blur text-white p-2 rounded-full transition-colors shadow-lg"
                >
                  <span className="material-symbols-outlined text-sm">
                    delete
                  </span>
                </button>
              </div>

              {/* Size Badge */}
              <div className="absolute bottom-1 right-1 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-mono border border-gray-700/50">
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
