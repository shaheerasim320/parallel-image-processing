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
    <>

      <div className="flex-grow w-full max-w-7xl mx-auto px-6 py-10 mt-22">
        {/* Heading */}
        <div className="mb-10 max-w-5xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight mb-2">
            Image Processing Configuration
          </h2>
          <p className="text-gray-500 text-lg dark:text-gray-400">
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
    </>
  );
}
