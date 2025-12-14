"use client";

import React from "react";

const ConfigPanel = ({ mode, setMode, config, setConfig, handleClick, loading }) => {
    const handleChange = (key, value) => {
        setConfig({ ...config, [key]: value });
    };

    return (
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-6 h-2xl flex flex-col">
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-gray-100 dark:border-[#333]">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#3b82f6]">tune</span>
                    Mode Selection
                </h3>
                <p className="text-sm text-gray-500">
                    Choose how the pipeline processes your images.
                </p>
            </div>

            {/* Mode Toggles */}
            <div className="space-y-4 mb-8">
                {/* Auto Mode */}
                <label
                    onClick={() => setMode("auto")}
                    className={`relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all
          ${mode === "auto"
                            ? "border-2 border-[#3b82f6] bg-[#3b82f6]/5 shadow-sm"
                            : "border-transparent hover:bg-gray-50 dark:hover:bg-[#222]"
                        }`}
                >
                    <input
                        type="radio"
                        name="mode"
                        checked={mode === "auto"}
                        readOnly
                        className="mt-1 size-5 border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6] bg-transparent"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold">Auto Mode</span>
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Beginner
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The system automatically decides processing steps.
                        </p>
                    </div>
                </label>

                {/* Advanced Mode */}
                <label
                    onClick={() => setMode("advanced")}
                    className={`relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all
          ${mode === "advanced"
                            ? "border-2 border-[#3b82f6] bg-[#3b82f6]/5 shadow-sm"
                            : "border-transparent hover:bg-gray-50 dark:hover:bg-[#222]"
                        }`}
                >
                    <input
                        type="radio"
                        name="mode"
                        checked={mode === "advanced"}
                        readOnly
                        className="mt-1 size-5 border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6] bg-transparent"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold">Advanced Mode</span>
                            <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Expert
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Manually configure every stage of the pipeline.
                        </p>
                    </div>
                </label>
            </div>

            {/* Advanced Controls */}
            {mode === "advanced" && (
                <div className="space-y-5 animate-fade-in flex-1">
                    {/* Noise Removal */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                            Noise Removal
                        </label>
                        <select
                            value={config.noiseRemoval}
                            onChange={(e) => handleChange("noiseRemoval", e.target.value)}
                            className="w-full bg-gray-50 dark:bg-[#252525] rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-[#3b82f6]"
                        >
                            <option value="none">None</option>
                            <option value="median">Median</option>
                            <option value="gaussian">Gaussian</option>
                            <option value="bilateral">Bilateral</option>
                            <option value="nlm">NLM</option>
                            <option value="auto">Auto</option>
                        </select>
                    </div>

                    {/* Enhancement */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                            Enhancement
                        </label>
                        <select
                            value={config.enhancement}
                            onChange={(e) => handleChange("enhancement", e.target.value)}
                            className="w-full bg-gray-50 dark:bg-[#252525] rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-[#3b82f6]"
                        >
                            <option value="none">None</option>
                            <option value="clahe">CLAHE</option>
                            <option value="gamma">Gamma</option>
                            <option value="unsharp">Unsharp</option>
                            <option value="hist">Histogram</option>
                            <option value="auto">Auto</option>
                        </select>
                    </div>

                    {/* Segmentation */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                            Segmentation
                        </label>
                        <select
                            value={config.segmentation}
                            onChange={(e) => handleChange("segmentation", e.target.value)}
                            className="w-full bg-gray-50 dark:bg-[#252525] rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-[#3b82f6]"
                        >
                            <option value="none">None</option>
                            <option value="auto">Auto</option>
                            <option value="grabcut">GrabCut</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#333]">
                <button onClick={handleClick} disabled={loading} className={`group w-full cursor-pointer flex items-center justify-center rounded-full h-14 font-bold text-lg transition-all 
                ${loading ? "bg-gray-400 text-gray-800 cursor-not-allowed" : "bg-blue-300 text-black hover:bg-[#2e8ada]"}`}
                >
                    {loading ? (
                        <span className="material-symbols-outlined animate-spin">autorenew</span>
                    ) : (
                        <span className="material-symbols-outlined group-hover:animate-spin">
                            settings_motion_mode
                        </span>
                    )}
                    {loading ? "Processing..." : "Start Processing"}
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-3">
                    Estimated time: ~12s (Parallel) vs ~45s (Serial)
                </p>
            </div>
        </div>
    );
};

export default ConfigPanel;
