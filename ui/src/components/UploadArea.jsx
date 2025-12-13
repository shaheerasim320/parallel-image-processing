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
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            cloud_upload
          </span>
          Upload Dataset
        </h3>
        <span className="bg-gray-100 dark:bg-[#2a2a2a] text-xs font-bold px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
          Batch 042
        </span>
      </div>

      {/* Drop Zone */}
      <div
        className={`group relative flex flex-col items-center justify-center w-full h-64 rounded-2xl border-2 border-dashed transition-all cursor-pointer
        ${
          isDragging
            ? "border-primary bg-[#3b82f6]/5"
            : "border-gray-200 dark:border-[#333] hover:border-primary hover:bg-[#3b82f6]/5"
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
                ? "scale-110 bg-white"
                : "bg-gray-50 dark:bg-[#252525] group-hover:scale-110"
            }`}
          >
            <span
              className={`material-symbols-outlined text-3xl
              ${
                isDragging
                  ? "text-primary"
                  : "text-gray-400 group-hover:text-primary"
              }`}
            >
              add_photo_alternate
            </span>
          </div>

          <div>
            <p className="font-bold text-lg">Drag & drop images</p>
            <p className="text-sm text-gray-400">
              or click to browse from device
            </p>
          </div>

          <button
            type="button"
            className="mt-2 bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow"
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
