
import React, { useState } from 'react';
import { ChevronRight, Database, Shield, Zap, Terminal } from 'lucide-react';
import { AppMode, Language } from '../App';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  accentColor: string;
  icon: React.ReactNode;
  archetype?: 'THE DRAGON' | 'THE BUILDER';
  mode: AppMode;
  lang: Language;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, subtitle, description, techStack, accentColor, icon, archetype, mode, lang 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEn = lang === 'en';
  const isDragon = archetype === 'THE DRAGON';
  const displayAccent = mode === 'raw' && isDragon ? '#8f3a52' : accentColor;

  return (
    <div 
      className={`group relative bg-[#0a1931]/95 backdrop-blur-md border border-white/10 transition-all duration-500 cursor-pointer overflow-hidden card-hover ${
        isExpanded ? 'ring-1 ring-white/20' : 'hover:border-white/20'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Industrial Accents */}
      <div className="absolute top-0 left-0 w-12 h-[1px] bg-white/20"></div>
      <div className="absolute top-0 left-0 w-[1px] h-12 bg-white/20"></div>
      <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-white/20"></div>
      <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-white/20"></div>
      
      {/* Side bar status indicator */}
      <div 
        className="absolute top-0 left-0 w-[3px] h-full transition-all duration-500 group-hover:w-[4px]" 
        style={{ backgroundColor: displayAccent, boxShadow: isExpanded ? `0 0 15px ${displayAccent}` : 'none' }} 
      />

      <div className="p-6 md:p-8 relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 border transition-all duration-500 ${isExpanded ? 'bg-white/5' : 'bg-transparent border-white/10'}`} style={{ borderColor: isExpanded ? displayAccent : 'rgba(255,255,255,0.1)' }}>
            <div style={{ color: isExpanded ? displayAccent : 'white' }} className="transition-transform duration-500 group-hover:scale-110">
              {icon}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-1 h-3 ${i <= (isExpanded ? 3 : 1) ? 'opacity-100' : 'opacity-20'}`} style={{ backgroundColor: displayAccent }}></div>
              ))}
            </div>
            <span className="text-[8px] font-mono tracking-[0.3em] font-bold" style={{ color: displayAccent }}>
              {archetype || 'MODULE_NODE'}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-4" style={{ backgroundColor: displayAccent }}></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80" style={{ color: displayAccent }}>
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className={`text-xs md:text-sm leading-relaxed font-light transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-75 line-clamp-3'}`}>
            {description}
          </p>
        </div>

        {/* Technical Data Payload - Expanded View */}
        <div className={`mt-8 space-y-6 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
            <div className="space-y-1">
              <span className="text-[8px] font-mono opacity-50 uppercase tracking-widest">{isEn ? 'TECH_ARRAY' : 'TECH_POLE'}</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {techStack.map(tech => (
                  <span key={tech} className="text-[8px] px-1.5 py-0.5 border border-white/10 bg-white/5 font-mono uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center border-l border-white/10 pl-4">
              <span className="text-[8px] font-mono opacity-50 uppercase tracking-widest">{isEn ? 'STATUS_CODE' : 'STAVOVÝ_KÓD'}</span>
              <div className="text-[10px] font-bold font-mono tracking-widest mt-1 text-white/80">
                ACTIVE_VER: 0.94-STABLE
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between group/action pt-2">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80 group-hover/action:opacity-100 transition-opacity">
              <Terminal className="w-3 h-3" style={{ color: displayAccent }} />
              {isEn ? 'INITIALIZE_DETAILED_REPORT' : 'INICIALIZOVAT_REPORT'}
            </div>
            <ChevronRight className="w-4 h-4 transition-transform group-hover/action:translate-x-1" style={{ color: displayAccent }} />
          </div>
        </div>

        {!isExpanded && (
          <div className="mt-4 flex items-center justify-end">
            <div className="text-[8px] font-mono opacity-50 uppercase tracking-widest group-hover:opacity-60 transition-opacity">
              [ Click_to_decrypt_data ]
            </div>
          </div>
        )}
      </div>

      {/* Background metadata */}
      <div className="absolute top-2 right-4 text-[7px] font-mono opacity-10 pointer-events-none uppercase tracking-tighter">
        SHA-256: 3c9b...f4a1 // SEC: O5-LEVEL
      </div>
    </div>
  );
};
