"use client";

import React, { useRef, useState } from "react";

/**
 * @param {{
 *  onFilesSelected: (e?: React.ChangeEvent<HTMLInputElement>) => void
 * }} props
 */
const UploadArea = ({ onFilesSelected }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    onFilesSelected(e);
  };

  return (
    <div className="rounded-2xl shadow-xl border border-gray-700/60 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-blue-400">
            cloud_upload
          </span>
          Upload Dataset
        </h3>
        <span className="bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-300 border border-gray-600/50">
          Batch 042
        </span>
      </div>

      {/* Drop Zone */}
      <div
        className={`group relative flex flex-col items-center justify-center w-full h-64 rounded-2xl border-2 border-dashed transition-all cursor-pointer
        ${
          isDragging
            ? "border-blue-500/60 bg-blue-500/10 shadow-lg shadow-blue-500/20"
            : "border-gray-600/50 hover:border-blue-500/50 hover:bg-blue-500/5"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center text-center p-6 space-y-3">
          <div
            className={`size-14 rounded-full flex items-center justify-center transition-transform duration-300
            ${
              isDragging
                ? "scale-110 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                : "bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20"
            }`}
          >
            <span
              className={`material-symbols-outlined text-3xl transition-colors
              ${
                isDragging
                  ? "text-blue-400"
                  : "text-gray-400 group-hover:text-blue-400"
              }`}
            >
              add_photo_alternate
            </span>
          </div>

          <div>
            <p className="font-bold text-lg text-white">Drag & drop images</p>
            <p className="text-sm text-gray-400">
              or click to browse from device
            </p>
          </div>

          <button
            type="button"
            className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 transition-all"
          >
            Select Files
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.tiff"
            className="hidden"
            onChange={onFilesSelected}
          />
        </div>
      </div>

      <p className="text-center text-xs font-medium text-gray-400 mt-4">
        Max 1000 images allowed per batch • JPG, PNG, TIFF
      </p>
    </div>
  );
};

export default UploadArea;
