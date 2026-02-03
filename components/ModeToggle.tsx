
import React from 'react';
import { Power } from 'lucide-react';
// Added Language to the import from App
import { AppMode, Language } from '../App';

interface ModeToggleProps {
  mode: AppMode;
  // Added lang property to ModeToggleProps to fix the type error in App.tsx
  lang: Language;
  onToggle: () => void;
}

// Updated component to accept lang prop
export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, lang, onToggle }) => {
  // Added localized strings for the toggle button
  const t = {
    en: { mode: 'MODE', stable: 'STABLE', unstable: 'UNSTABLE', syncing: 'SYNCING_DATA_CORES' },
    cs: { mode: 'MÓD', stable: 'STABILNÍ', unstable: 'NESTABILNÍ', syncing: 'SYNCHRONIZACE_JADER' }
  }[lang];

  return (
    <div className="flex flex-col items-end gap-2">
      <button 
        onClick={onToggle}
        className={`group relative flex items-center gap-3 px-4 py-2 border transition-all duration-500 overflow-hidden ${
          mode === 'raw' 
            ? 'border-[#ff003c] bg-[#ff003c]/10 text-[#ff003c]' 
            : 'border-[#6366f1] bg-[#6366f1]/10 text-[#6366f1]'
        }`}
      >
        <div className={`absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-[45deg] transition-all duration-1000 group-hover:left-[100%]`} />
        
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">
          {/* Using localized labels */}
          {t.mode}: {mode === 'professional' ? t.stable : t.unstable}
        </span>
        <Power className={`w-4 h-4 relative z-10 ${mode === 'raw' ? 'animate-pulse' : ''}`} />
      </button>
      <div className="text-[9px] uppercase font-bold opacity-30 flex items-center gap-2">
        {/* Using localized labels */}
        <span>{t.syncing}</span>
        <div className="flex gap-1">
          {[1,2,3].map(i => (
            <div key={i} className={`w-1 h-1 rounded-full ${mode === 'raw' ? 'bg-[#ff003c]' : 'bg-[#6366f1]'} animate-bounce`} style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
};
