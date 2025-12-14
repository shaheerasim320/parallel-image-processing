"use client";
import React, { useEffect, useState } from "react";
import { StatsCard } from "../../../components/StatsCard";
import { ComparisonRow } from "../../../components/ComparisonRow";
import { Icon } from "../../../components/Icon";
import { useParams, useRouter } from "next/navigation";
import { getResults, API_BASE } from "@/lib/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Results = () => {
    const { sessionId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        async function fetchResults() {
            try {
                const res = await getResults(sessionId);
                if (!res || !res?.results) router.push("/p404");
                const speedupPercent = ((res?.metrics.speedup - 1) * 100).toFixed(1);

                setData({
                    ...res,
                    stats: [
                        {
                            type: "serial",
                            value: res?.metrics.serial_time_sec,
                        },
                        {
                            type: "parallel",
                            value: res?.metrics.parallel_time_sec,
                        },
                        {
                            type: "speedup",
                            value: `${res?.metrics.speedup}x`,
                            percentage: Number(speedupPercent),
                        },
                    ],
                });
            } catch (err) {
                toast.error("Failed to load results");
                router.push("/p404");
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [sessionId]);

    const handleDownload = async () => {
        if (!data || !data.results) return;

        const zip = new JSZip();

        for (const item of data.results) {
            const response = await fetch(`${API_BASE}${item.processed}`);
            const blob = await response.blob();
            const filename = item.processed.split("/").pop();
            zip.file(filename, blob);
        }


        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `processed_images_${data.session_id}.zip`);
    };


    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 mt-14 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            {/* Enhanced animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Animated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            </div>

            <div className="relative z-10">
                {/* Title Section with enhanced animations */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 opacity-0 animate-fade-in-up" style={{ animation: 'fadeInUp 0.7s ease-out forwards' }}>
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md w-fit shadow-lg shadow-blue-500/20">
                            <span className="size-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400"></span>
                            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Results</span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                            Execution Results
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                            Performance analysis comparing sequential vs multi-threaded execution on your dataset.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            className="group relative flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 text-sm font-bold text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 overflow-hidden" 
                            onClick={handleDownload}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-purple-600/0 group-hover:via-white/30 transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                            <Icon name="download" className="relative z-10" />
                            <span className="relative z-10">Download Images</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid with stagger animation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {loading
                        ? Array.from({ length: 3 }).map((_, idx) => (
                            <div key={idx} className="h-36 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 animate-pulse"></div>
                        ))
                        : data?.stats.map((stat, idx) => (
                            <div 
                                key={idx} 
                                className="opacity-0"
                                style={{ 
                                    animation: `fadeInUp 0.6s ease-out forwards`,
                                    animationDelay: `${idx * 150}ms` 
                                }}
                            >
                                <StatsCard data={stat} />
                            </div>
                        ))}
                </div>

                {/* Processed Images with enhanced section header */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8 opacity-0" style={{ animation: 'fadeInUp 0.7s ease-out 0.3s forwards' }}>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                        <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 shadow-lg">
                            <Icon name="image" className="text-blue-400" />
                            <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Processed Images
                            </h3>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                    </div>
                    {loading
                        ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <div key={idx} className="h-56 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 animate-pulse"></div>
                                ))}
                            </div>
                        )
                        : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data?.results.map((item, idx) => {
                                    // Ensure original path has leading slash for proper URL construction
                                    const originalPath = item.original.startsWith('/') ? item.original : `/${item.original}`;
                                    const processedPath = item.processed.startsWith('/') ? item.processed : `/${item.processed}`;
                                    return (
                                        <div
                                            key={idx}
                                            className="opacity-0"
                                            style={{ 
                                                animation: `fadeInUp 0.6s ease-out forwards`,
                                                animationDelay: `${(idx + 3) * 50}ms` 
                                            }}
                                        >
                                            <ComparisonRow
                                                data={{
                                                    id: idx,
                                                    original: { src: `${API_BASE}${originalPath}`, filename: item.original.split("/").pop() },
                                                    processed: { src: `${API_BASE}${processedPath}`, filename: item.processed.split("/").pop() },
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Results;
