
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLogs = [
  "[    0.000000] Initializing LUCIEN_OS Kernel v2.0.4...",
  "[    0.124512] Checking hardware integrity: ARCHITECTURE_OK",
  "[    0.451293] Memory Scan: 128.0 PB detected",
  "[    0.823412] Loading LOGIC_ENGINE: 100%",
  "[    1.123992] Synchronizing INTUITION_BYPASS...",
  "[    1.512344] Connecting to ARCHΞON Central Node...",
  "[    1.892341] Initializing NOXIS surveillance threads...",
  "[    2.213412] CRITICAL_SENSITIVITY: Detected",
  "[    2.512311] HEURISTIC_MODE: Adaptive",
  "[    2.823411] SYSTEM_CORE: ADAM_KARL_LUCIEN",
  "[    3.123411] BOOT_COMPLETE. AUTHORIZING ACCESS..."
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => (prev < bootLogs.length ? prev + 1 : prev));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleCount === bootLogs.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, onComplete]);

  return (
    <div className="min-h-screen bg-black text-[#6366f1] p-10 font-mono text-sm md:text-base leading-loose overflow-hidden flex items-center">
      <div className="max-w-4xl mx-auto space-y-2 w-full">
        {bootLogs.map((log, i) => {
          const parts = log.split(']');
          const isVisible = i < visibleCount;
          return (
            <div
              key={i}
              className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="opacity-40 tracking-tighter mr-4 font-bold">{parts[0]}]</span>
              <span className="tracking-widest uppercase text-xs md:text-sm">{parts[1] || ''}</span>
            </div>
          );
        })}
        {visibleCount < bootLogs.length && (
          <div className="w-2 h-6 bg-[#6366f1] animate-pulse inline-block mt-4 shadow-[0_0_10px_#6366f1]"></div>
        )}
      </div>
    </div>
  );
};
