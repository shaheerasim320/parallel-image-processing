"use client";

import React, { useEffect, useState } from "react";
import UploadArea from "../../components/UploadArea";
import ImageGrid from "../../components/ImageGrid";
import ConfigPanel from "../../components/ConfigPanel";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { uploadImages } from "@/lib/api";

export default function Upload() {
  const router = useRouter();
  const [mode, setMode] = useState("advanced");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const [config, setConfig] = useState({
    noiseRemoval: "bilateral",
    enhancement: "clahe",
    segmentation: "none",
  });

  const handleClearAll = () => setImages([]);

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleFilesSelected = (e) => {
    let files = [];

    if (e?.target?.files) {
      files = Array.from(e.target.files);
    } else if (e?.dataTransfer?.files) {
      files = Array.from(e.dataTransfer.files);
    }

    if (!files.length) return;

    const newImages = files.map((file) => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      file: file
    }));

    setImages((prev) => [...prev, ...newImages]);

    if (e?.target?.files) e.target.value = "";
  };

  const handleClick = async () => {
    if (images.length === 0) {
      toast.error("Please upload at least one image to proceed.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    images.forEach((imgObj) => {
      formData.append("files", imgObj.file);
    });
    if (mode === "auto") {
      formData.append("mode", "auto");
    } else {
      formData.append("mode", "advanced");
      formData.append("noise_mode", config.noiseRemoval);
      formData.append("enhance_mode", config.enhancement);
      formData.append("segment_mode", config.segmentation);
    }
    try {
      const {session_id,totalImages}= await uploadImages(formData);
      router.push(`/processing/${session_id}?totalImages=${totalImages}`);
    } catch (error) {
      toast.error("Failed to upload images. Please try again.");
    }finally{
      setLoading(false);
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="flex-grow w-full max-w-7xl mx-auto px-6 py-10 mt-22">
          {/* Heading */}
          <div className="mb-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md w-fit shadow-lg shadow-blue-500/20 mb-4">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Configuration</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Image Processing Configuration
            </h2>
            <p className="text-gray-300 text-lg">
              Configure serial or parallel execution workflow for your dataset.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <UploadArea onFilesSelected={handleFilesSelected} />
              <ImageGrid
                images={images}
                onClear={handleClearAll}
                onRemove={handleRemoveImage}
              />
            </div>

            {/* Right */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ConfigPanel
                mode={mode}
                setMode={setMode}
                config={config}
                setConfig={setConfig}
                handleClick={handleClick}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
