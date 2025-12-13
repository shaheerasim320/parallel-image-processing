"use client";
import React, { useEffect, useState } from "react";
import { StatsCard } from "../../../components/StatsCard";
import { ComparisonRow } from "../../../components/ComparisonRow";
import { Icon } from "../../../components/Icon";
import { useParams, useRouter } from "next/navigation";
import { getResults } from "@/lib/api";
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
            const response = await fetch(`http://localhost:8000${item.processed}`);
            const blob = await response.blob();
            const filename = item.processed.split("/").pop();
            zip.file(filename, blob);
        }


        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `processed_images_${data.session_id}.zip`);
    };


    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 mt-14 bg-[#f8fafc]">
            {/* Title Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black tracking-tight text-text-main dark:text-white">
                        Execution Results
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Performance analysis comparing sequential vs multi-threaded execution on your dataset.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-6 text-sm font-bold text-white shadow-md transition-transform active:scale-95 hover:brightness-105" onClick={handleDownload}>
                        <Icon name="download" />
                        Download Images
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loading
                    ? Array.from({ length: 3 }).map((_, idx) => (
                        <Skeleton key={idx} height={100} />
                    ))
                    : data?.stats.map((stat, idx) => <StatsCard key={idx} data={stat} />)}
            </div>

            {/* Processed Images */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-main px-1 dark:text-white">
                    Processed Images
                </h3>
                {loading
                    ? Array.from({ length: 4 }).map((_, idx) => (
                        <Skeleton key={idx} height={200} />
                    ))
                    : data?.results.map((item, idx) => (
                        <ComparisonRow
                            key={idx}
                            data={{
                                id: idx,
                                original: { src: `http://localhost:8000/${item.original}`, filename: item.original.split("/").pop() },
                                processed: { src: `http://localhost:8000${item.processed}`, filename: item.processed.split("/").pop() },
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Results;
