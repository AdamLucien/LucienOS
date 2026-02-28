
import React, { useState } from 'react';
import { Navigation as NavigationIcon, Terminal as TerminalIcon } from 'lucide-react';
import { AppMode, Language, SectionKey } from '../App';

interface TerminalNavigationProps {
  currentSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
  getHref: (section: SectionKey) => string;
  mode: AppMode;
  lang: Language;
}

const navTranslations = {
  en: { CORE: 'PROFILE', MODULES: 'SYSTEMS', CAPABILITIES: 'CAPABILITIES', ARCHIVE: 'ARCHIVE', DIAGNOSTICS: 'COGNITIVE PROFILE', RESONANCE: 'RESONANCE', SIGNAL: 'SIGNAL', prompt: 'ENTER_NODE_ID...', title: 'MAIN MENU', hint: 'Click a section to navigate' },
  cs: { CORE: 'PROFIL', MODULES: 'SYSTÉMY', CAPABILITIES: 'SCHOPNOSTI', ARCHIVE: 'ARCHIV', DIAGNOSTICS: 'KOGNITIVNÍ PROFIL', RESONANCE: 'REZONANCE', SIGNAL: 'SIGNÁL', prompt: 'ZADEJ_ID_NODU...', title: 'HLAVNÍ MENU', hint: 'Klikněte na sekci pro přechod' }
};

export const TerminalNavigation: React.FC<TerminalNavigationProps> = ({ 
  currentSection, onNavigate, getHref, mode, lang 
}) => {
  const [inputValue, setInputValue] = useState('');
  const t = navTranslations[lang];
  const navOptions: SectionKey[] = ['CORE', 'MODULES', 'CAPABILITIES', 'ARCHIVE', 'DIAGNOSTICS', 'RESONANCE', 'SIGNAL'];
  const accentColor = mode === 'raw' ? '#8f3a52' : '#5a7696';

  return (
    <nav className="w-full space-y-4" aria-label="Section navigation">
      <div className="flex items-center justify-between gap-4 border border-white/15 bg-[#081023]/80 px-4 py-2 industrial-clip">
        <div className="flex items-center gap-2">
          <NavigationIcon className="w-4 h-4" style={{ color: accentColor }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">{t.title}</span>
        </div>
        <span className="hidden lg:inline text-[9px] font-mono uppercase tracking-[0.2em] text-white/45">{t.hint}</span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {navOptions.map((opt, i) => (
          <a
            key={opt}
            href={getHref(opt)}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(opt);
            }}
            className={`flex-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 py-3 px-2 border relative group overflow-hidden ${
              currentSection === opt 
                ? 'bg-white/25 border-white/30' 
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
          </a>
        ))}
      </div>
      <div className="relative group flex items-center gap-4 border border-white/10 bg-[#081023]/95 p-3 industrial-clip">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t.prompt}
          className="w-full bg-transparent border-none outline-none text-xs font-mono tracking-[0.1em] uppercase text-white/70"
        />
      </div>
    </nav>
  );
};
