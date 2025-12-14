"use client";

import React from "react";

const ConfigPanel = ({ mode, setMode, config, setConfig, handleClick, loading }) => {
    const handleChange = (key, value) => {
        setConfig({ ...config, [key]: value });
    };

    return (
        <div className="rounded-2xl shadow-xl border border-gray-700/60 bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md p-6 h-2xl flex flex-col relative" style={{ overflow: 'visible' }}>
            {/* Header */}
            <div className="mb-6 pb-6 border-b border-gray-700/50">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-1 text-white">
                    <span className="material-symbols-outlined text-blue-400">tune</span>
                    Mode Selection
                </h3>
                <p className="text-sm text-gray-400">
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
                            ? "border-2 border-blue-500/60 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                            : "border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50"
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
                            <span className="font-bold text-white">Auto Mode</span>
                            <span className="bg-green-500/20 text-green-300 border border-green-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Beginner
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            The system automatically decides processing steps.
                        </p>
                    </div>
                </label>

                {/* Advanced Mode */}
                <label
                    onClick={() => setMode("advanced")}
                    className={`relative flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all
          ${mode === "advanced"
                            ? "border-2 border-blue-500/60 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                            : "border-gray-700/50 hover:bg-gray-700/30 hover:border-gray-600/50"
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
                            <span className="font-bold text-white">Advanced Mode</span>
                            <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Expert
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Manually configure every stage of the pipeline.
                        </p>
                    </div>
                </label>
            </div>

            {/* Advanced Controls */}
            {mode === "advanced" && (
                <div className="space-y-5 animate-fade-in flex-1" style={{ isolation: 'isolate' }}>
                    {/* Noise Removal */}
                    <div className="space-y-2" style={{ position: 'relative', zIndex: 30 }}>
                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                            Noise Removal
                        </label>
                        <select
                            value={config.noiseRemoval}
                            onChange={(e) => handleChange("noiseRemoval", e.target.value)}
                            className="w-full bg-gray-700/80 border border-gray-600/50 text-white rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 appearance-none cursor-pointer hover:bg-gray-700 hover:border-gray-500/50 transition-all"
                            style={{ position: 'relative', zIndex: 50 }}
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
                    <div className="space-y-2" style={{ position: 'relative', zIndex: 20 }}>
                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                            Enhancement
                        </label>
                        <select
                            value={config.enhancement}
                            onChange={(e) => handleChange("enhancement", e.target.value)}
                            className="w-full bg-gray-700/80 border border-gray-600/50 text-white rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 appearance-none cursor-pointer hover:bg-gray-700 hover:border-gray-500/50 transition-all"
                            style={{ position: 'relative', zIndex: 40 }}
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
                    <div className="space-y-2" style={{ position: 'relative', zIndex: 10 }}>
                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                            Segmentation
                        </label>
                        <select
                            value={config.segmentation}
                            onChange={(e) => handleChange("segmentation", e.target.value)}
                            className="w-full bg-gray-700/80 border border-gray-600/50 text-white rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 appearance-none cursor-pointer hover:bg-gray-700 hover:border-gray-500/50 transition-all"
                            style={{ position: 'relative', zIndex: 30 }}
                        >
                            <option value="none">None</option>
                            <option value="auto">Auto</option>
                            <option value="grabcut">GrabCut</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
                <button onClick={handleClick} disabled={loading} className={`group relative w-full cursor-pointer flex items-center justify-center rounded-full h-14 font-bold text-lg transition-all overflow-hidden
                ${loading ? "bg-gray-600/50 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"}`}
                >
                    {!loading && <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>}
                    {loading ? (
                        <span className="material-symbols-outlined animate-spin">autorenew</span>
                    ) : (
                        <span className="material-symbols-outlined group-hover:animate-spin relative z-10">
                            settings_motion_mode
                        </span>
                    )}
                    <span className="relative z-10 ml-2">{loading ? "Processing..." : "Start Processing"}</span>
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-3">
                    Estimated time: ~12s (Parallel) vs ~45s (Serial)
                </p>
            </div>
        </div>
    );
};

export default ConfigPanel;
