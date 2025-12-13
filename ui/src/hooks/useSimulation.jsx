"use client";
import { useState, useEffect, useCallback } from 'react';

const TOTAL_TIME = 20; 
const STATUS_MESSAGES = [
  "Analyzing pictures...",
  "Analyzing noise...",
  "Enhancing images...",
  "Segmenting images...",
  "Verifying integrity..."
];

export const useSimulation = ({ totalImages }) => {
  const [stats, setStats] = useState({
    progress: 0,
    cpu: 42,
    memory: 840,
    processedItems: 0,
    totalItems: totalImages,
    statusText: STATUS_MESSAGES[0],
    timeRemaining: TOTAL_TIME
  });

  const [isActive, setIsActive] = useState(true);

  const updateStats = useCallback(() => {
    setStats(prev => {
      if (prev.progress >= 100) {
        setIsActive(false);
        return { 
          ...prev, 
          progress: 100, 
          processedItems: totalImages, 
          timeRemaining: 0, 
          statusText: "Processing Complete!" 
        };
      }

      const cpuNoise = Math.floor(Math.random() * 10) - 5;
      const memNoise = Math.floor(Math.random() * 20) - 10;

      const nextProgress = prev.progress + 0.5;
      const nextItems = Math.floor((nextProgress / 100) * totalImages);
      const nextTimeRemaining = Math.max(0, Math.ceil(TOTAL_TIME * (1 - nextProgress / 100)));

      const msgIndex = Math.floor((nextProgress / 100) * STATUS_MESSAGES.length) % STATUS_MESSAGES.length;

      return {
        progress: nextProgress,
        cpu: Math.max(10, Math.min(90, 45 + cpuNoise)),
        memory: Math.max(500, Math.min(2000, 840 + memNoise)),
        processedItems: nextItems,
        totalItems: totalImages,
        statusText: STATUS_MESSAGES[msgIndex],
        timeRemaining: nextTimeRemaining
      };
    });
  }, [totalImages]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(updateStats, 200);
    return () => clearInterval(interval);
  }, [isActive, updateStats]);

  const cancelProcessing = () => {
    setIsActive(false);
    setStats(prev => ({ ...prev, statusText: "Cancelled by user" }));
  };

  // ✅ External setter to immediately mark complete
  const markComplete = () => {
    setIsActive(false);
    setStats(prev => ({
      ...prev,
      progress: 100,
      processedItems: totalImages,
      timeRemaining: 0,
      statusText: "Processing Complete!"
    }));
  };

  return { stats, cancelProcessing, markComplete, setStats };
};
