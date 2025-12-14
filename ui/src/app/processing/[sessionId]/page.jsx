"use client";
import React, { useEffect } from 'react';
import StatusBadge from '../../../components/StatusBadge';
import ProcessingCard from '../../../components/ProcessingCard';
import BackgroundDecor from '../../../components/BackgroundDecor';
import { useSimulation } from '../../../hooks/useSimulation';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { getStatus } from '@/lib/api';

const Processing = () => {
  const { sessionId } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalImages = Number(searchParams.get('totalImages'));

  const { stats, cancelProcessing, markComplete } = useSimulation({ totalImages });

  useEffect(() => {
    if (!totalImages) {
      router.replace("/p404");
    }
  }, [totalImages, router]);

  useEffect(() => {
    if (!sessionId) return;

    const interval = setInterval(async () => {
      try {
        const data = await getStatus(sessionId);

        if (data.status === "done") {
          clearInterval(interval);
          markComplete(); 
          router.push(`/results/${sessionId}`);
        }

        if (data.status === "error") {
          clearInterval(interval);
          toast.error("Processing failed");
          router.push("/p404")
        }
      } catch (err) {
        clearInterval(interval);
        toast.error("Session not found");
        router.push("/p404")
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionId, markComplete, router]);

  return (
    <div className="mt-14 pt-4 min-h-screen flex flex-col font-display bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10 relative">
        <div className="w-full max-w-[800px] flex flex-col gap-8 md:gap-12 animate-fade-in-up transition-opacity duration-700">

          {/* Header */}
          <div className="text-center space-y-4 pt-4">
            <StatusBadge />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Your images are being processed...
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-normal max-w-2xl mx-auto">
              Please wait, we are currently analyzing your dataset.
            </p>
          </div>

          {/* Processing Card */}
          <ProcessingCard stats={stats} />

          {/* Cancel Button */}
          <div className="flex justify-center">
            <button
              onClick={cancelProcessing}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:bg-gray-700/50 hover:border-gray-600/50 hover:shadow-lg transition-all text-sm font-bold text-gray-300 hover:text-white active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:text-red-400 transition-colors">cancel</span>
              Cancel Processing
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Processing;
