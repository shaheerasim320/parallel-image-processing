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

  // Redirect if no session or totalImages
  useEffect(() => {
    if (!totalImages) {
      router.replace("/p404");
    }
  }, [totalImages, router]);

  // Poll backend for status
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
    <div className="mt-14 min-h-screen flex flex-col font-display bg-[#f5f7f8] text-text-main overflow-x-hidden relative">
      <BackgroundDecor />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10">
        <div className="w-full max-w-[800px] flex flex-col gap-8 md:gap-12 animate-fade-in-up transition-opacity duration-700">

          {/* Header */}
          <div className="text-center space-y-4 pt-4">
            <StatusBadge />
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight text-text-main">
              Your images are being processed...
            </h1>
            <p className="text-base md:text-lg text-text-muted font-normal max-w-2xl mx-auto">
              Please wait, we are currently analyzing your dataset.
            </p>
          </div>

          {/* Processing Card */}
          <ProcessingCard stats={stats} />

          {/* Cancel Button */}
          <div className="flex justify-center">
            <button
              onClick={cancelProcessing}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#e6e6db] bg-white hover:bg-[#f0f0eb] hover:shadow-md transition-all text-sm font-bold text-text-muted hover:text-text-main active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:text-red-500 transition-colors">cancel</span>
              Cancel Processing
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Processing;
