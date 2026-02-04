
import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { AppMode, Language, SectionKey } from '../App';

interface TerminalNavigationProps {
  currentSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
  mode: AppMode;
  lang: Language;
}

const navTranslations = {
  en: { CORE: 'CORE', MODULES: 'MODULES', CAPABILITIES: 'CAPABILITIES', ARCHIVE: 'ARCHIVE', DIAGNOSTICS: 'DIAGNOSTICS', RESONANCE: 'RESONANCE', SIGNAL: 'SIGNAL', prompt: 'ENTER_NODE_ID...' },
  cs: { CORE: 'JÁDRO', MODULES: 'MODULY', CAPABILITIES: 'SCHOPNOSTI', ARCHIVE: 'ARCHIV', DIAGNOSTICS: 'DIAGNOSTIKA', RESONANCE: 'RESONANCE', SIGNAL: 'SIGNÁL', prompt: 'ZADEJ_ID_NODU...' }
};

export const TerminalNavigation: React.FC<TerminalNavigationProps> = ({ 
  currentSection, onNavigate, mode, lang 
}) => {
  const [inputValue, setInputValue] = useState('');
  const t = navTranslations[lang];
  const navOptions: SectionKey[] = ['CORE', 'MODULES', 'CAPABILITIES', 'ARCHIVE', 'DIAGNOSTICS', 'RESONANCE', 'SIGNAL'];
  const accentColor = mode === 'raw' ? '#ff003c' : '#6366f1';

  return (
    <nav className="w-full space-y-4" aria-label="Section navigation">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {navOptions.map((opt, i) => (
          <button
            key={opt}
            type="button"
            onClick={() => onNavigate(opt)}
            className={`flex-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 py-3 px-2 border relative group overflow-hidden ${
              currentSection === opt 
                ? 'bg-white/10 border-white/30' 
                : 'border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
            }`}
            style={{ color: currentSection === opt ? accentColor : 'rgba(255,255,255,0.4)' }}
            aria-current={currentSection === opt ? 'page' : undefined}
          >
            <span className="relative z-10">{t[opt as keyof typeof t]}</span>
            <span className="absolute top-1 left-1 text-[6px] opacity-20 group-hover:opacity-100 font-mono">0{i}</span>
            {currentSection === opt && (
               <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: accentColor }} />
            )}
          </button>
        ))}
      </div>
      <div className="relative group flex items-center gap-4 border border-white/10 bg-black/60 p-3 industrial-clip">
        <TerminalIcon className="w-4 h-4" style={{ color: accentColor }} />
        <span className="text-[10px] font-bold opacity-30 shrink-0 font-mono tracking-widest hidden sm:inline">ROOT@LUCIEN_SYSTEMS:~$</span>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t.prompt}
          className="w-full bg-transparent border-none outline-none text-xs font-mono tracking-[0.1em] uppercase text-white/70"
        />
        <div className="hidden lg:flex items-center gap-1 opacity-20">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="w-1 h-2 bg-white" />
           ))}
        </div>
      </div>
    </nav>
  );
};
