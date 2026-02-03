
import React from 'react';
import { AppMode, Language } from '../App';
import { Cpu, Brain, Activity, Layout, Cog, Terminal, Zap, Shield, Database } from 'lucide-react';

interface CapabilitiesProps {
  mode: AppMode;
  lang: Language;
}

const getCapabilitiesData = (lang: Language) => {
  const isEn = lang === 'en';
  return [
    {
      id: 'neural',
      category: isEn ? "NEURAL_SYNTHETIC_INTEL" : "NEURÁLNÍ_SYNTETICKÁ_INTELIGENCE",
      icon: <Brain className="w-6 h-6" />,
      tag: "CORE_PROCESSOR",
      skills: [
        { name: "AI Modding", level: 83, meta: "LLMs / CV / DIFFUSION" },
        { name: "MLOps", level: 85, meta: "FASTAPI / DOCKER / CI-CD" },
        { name: "OSINT Fusion", level: 92, meta: "MULTI-SENSOR / DARKNET" },
        { name: "Causal AI", level: 80, meta: "PREDICTIVE_GOVERNANCE" }
      ]
    },
    {
      id: 'industrial',
      category: isEn ? "INDUSTRIAL_SYSTEMS" : "PRŮMYSLOVÉ_SYSTÉMY",
      icon: <Cog className="w-6 h-6" />,
      tag: "FIELD_OPS",
      skills: [
        { name: "Lean Six Sigma", level: 75, meta: "PROCESS_INTEGRITY" },
        { name: "Interim Mgmt", level: 75, meta: "GREENFIELD_OPS" },
        { name: "System Dynamics", level: 88, meta: "WORKFLOW_STABILITY" },
        { name: "Logistics Opt", level: 94, meta: "VALUE_FLOW" }
      ]
    },
    {
      id: 'digital',
      category: isEn ? "DIGITAL_ARCHITECTURE" : "DIGITÁLNÍ_ARCHITEKTURA",
      icon: <Layout className="w-6 h-6" />,
      tag: "INFRASTRUCTURE",
      skills: [
        { name: "Fullstack", level: 80, meta: "NEXTJS / TS / PRISMA" },
        { name: "Graph DBs", level: 92, meta: "NEO4J / RELATIONS" },
        { name: "System Arch", level: 96, meta: "DDD / GLASS_BOX" },
        { name: "SQL Modeling", level: 90, meta: "DATA_INTEGRITY" }
      ]
    },
    {
      id: 'tactical',
      category: isEn ? "TACTICAL_HARDWARE" : "TAKTICKÝ_HARDWARE",
      icon: <Activity className="w-6 h-6" />,
      tag: "PROTOTYPING",
      skills: [
        { name: "CAD / Fusion 360", level: 82, meta: "PRECISION_DESIGN" },
        { name: "Mechatronics", level: 65, meta: "MECHANICAL_NEXUS" },
        { name: "Rapid Prototyping", level: 63, meta: "POC_STAGING" },
        { name: "Industrial IoT", level: 80, meta: "SENSOR_NETWORKS" }
      ]
    }
  ];
};

export const Capabilities: React.FC<CapabilitiesProps> = ({ mode, lang }) => {
  const accentColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getCapabilitiesData(lang);
  const isEn = lang === 'en';

  return (
    <div className="max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      {/* HEADER WITH SCANLINE EFFECT */}
      <div className="mb-24 relative overflow-hidden group">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40">
              <Terminal className="w-3 h-3" />
              <span>CAPABILITY_SYNC_PROTOCOL_2.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
              {isEn ? 'SKILL_MATR' : 'MATICE_'}
              <span style={{ color: accentColor }}>{isEn ? 'IX' : 'SCHOPNOSTÍ'}</span>
            </h2>
            <div className="flex gap-4 text-[9px] font-mono opacity-50 uppercase tracking-widest">
              <span>SCAN_STATE: NOMINAL</span>
              <span className="animate-pulse">|</span>
              <span>INTEGRITY: 94.8%</span>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] font-mono opacity-20 leading-tight">
              0x42 0x55 0x49 0x4C 0x44 0x45 0x52<br />
              0x44 0x52 0x41 0x47 0x4F 0x4E
            </div>
          </div>
        </div>
        {/* Animated Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="w-full h-1 bg-white animate-[scan_3s_infinite]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* PRIMARY MODULE - ASYMMETRIC LARGE CARD */}
        <div className="md:col-span-8 group relative border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-8 md:p-12 industrial-clip overflow-hidden transition-all duration-500 hover:border-white/30">
          <div className="absolute top-0 left-0 w-2 h-full transition-all duration-500 group-hover:w-4" style={{ backgroundColor: data[0].id === 'neural' && mode === 'raw' ? '#ff003c' : accentColor }} />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 relative z-10">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="p-3 md:p-4 bg-white/5 border border-white/10 shrink-0" style={{ color: accentColor }}>
                  {data[0].icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-widest break-words leading-tight">
                    {data[0].category}
                  </h3>
                  <p className="text-[9px] md:text-[10px] font-mono opacity-40 tracking-[0.2em] md:tracking-[0.3em] mt-1">{data[0].tag}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                {data[0].skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3 md:space-y-4 group/skill">
                    <div className="flex justify-between items-baseline gap-2">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest group-hover/skill:text-white transition-colors truncate">{skill.name}</span>
                        <span className="text-[8px] md:text-[9px] font-mono opacity-30 mt-1 uppercase italic tracking-tighter truncate">{skill.meta}</span>
                      </div>
                      <span className="text-[10px] md:text-[11px] font-mono font-bold shrink-0" style={{ color: accentColor }}>{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-white/5 relative overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%`, backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NEURAL LOAD VISUALIZER (Only on large card) */}
            <div className="hidden lg:flex w-48 flex-col justify-center items-center border-l border-white/10 pl-12 gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 rounded-full" />
                <Brain className="w-12 h-12 opacity-20" />
                <div className="absolute bottom-[-20px] text-[10px] font-mono opacity-40">LOAD: 88%</div>
              </div>
              <div className="w-full space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 bg-white/5 w-full overflow-hidden">
                    <div className="h-full bg-white/10 animate-[pulse_2s_infinite]" style={{ width: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY MODULE - TACTICAL GRID */}
        <div className="md:col-span-4 group relative border border-white/10 bg-black/60 backdrop-blur-md p-6 sm:p-8 industrial-clip hover:border-white/30 transition-colors">
          <div className="flex items-center gap-4 mb-8 md:mb-10 border-b border-white/10 pb-6">
            <div className="p-2 sm:p-3 bg-white/5 border border-white/10 shrink-0" style={{ color: accentColor }}>
              {data[1].icon}
            </div>
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">{data[1].category}</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            {data[1].skills.map((skill, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-white/5 hover:border-white/20 transition-all group/s">
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest truncate">{skill.name}</span>
                  <span className="text-[9px] sm:text-[10px] font-mono opacity-50 shrink-0">{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/5 overflow-hidden">
                   <div className="h-full transition-all duration-1000" style={{ width: `${skill.level}%`, backgroundColor: accentColor }} />
                </div>
                <div className="mt-2 text-[7px] sm:text-[8px] font-mono opacity-20 uppercase tracking-tighter group-hover/s:opacity-50 transition-opacity truncate">PARAM_ID: {skill.meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TERTIARY MODULE - BLUEPRINT STYLE */}
        <div className="md:col-span-5 group relative border border-white/10 bg-black/40 backdrop-blur-md p-6 sm:p-8 industrial-clip hover:border-white/30 transition-colors">
          <div className="absolute top-4 right-4 text-[7px] md:text-[9px] font-mono opacity-10 uppercase tracking-widest italic hidden sm:block">NODE_REF: 09-ARCH</div>
          <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-12 flex items-center gap-3">
            <Zap className="w-3 h-3 md:w-4 md:h-4" style={{ color: accentColor }} /> {data[2].category}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {data[2].skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-6 p-3 md:p-4 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 border border-white/10 flex items-center justify-center font-mono text-[9px] md:text-[10px] opacity-40">
                  {skill.level}%
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-1 truncate">{skill.name}</div>
                  <div className="text-[8px] md:text-[9px] font-mono opacity-30 uppercase tracking-tighter truncate">{skill.meta}</div>
                </div>
                <div className="hidden sm:flex gap-1 shrink-0">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white/10" style={{ backgroundColor: i < 2 ? accentColor : '' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUATERNARY MODULE - TERMINAL STYLE */}
        <div className="md:col-span-7 group relative border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 industrial-clip hover:border-white/30 transition-all overflow-hidden">
          <div className="flex items-center justify-between mb-8 md:mb-10 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-2 sm:p-3 bg-white/5 border border-white/10 rounded-sm shrink-0" style={{ color: accentColor }}>
                {data[3].icon}
              </div>
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">{data[3].category}</h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[9px] font-mono opacity-30">
              <Shield className="w-3 h-3" />
              <span>STAGING_AUTHORIZED</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data[3].skills.map((skill, idx) => (
              <div key={idx} className="p-4 sm:p-5 border border-white/5 bg-black/60 relative overflow-hidden group/tile">
                <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover/tile:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-[9px] md:text-[10px] font-bold uppercase mb-4 opacity-70 group-hover/tile:opacity-100 transition-opacity leading-tight min-h-[2.5em]">{skill.name}</div>
                  <div className="flex items-end justify-between">
                    <span className="text-base md:text-[18px] font-mono font-bold leading-none" style={{ color: accentColor }}>{skill.level}</span>
                    <span className="text-[7px] md:text-[8px] font-mono opacity-30 uppercase tracking-tighter">UNIT_%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[7px] md:text-[8px] font-mono opacity-20 uppercase tracking-[0.2em]">
            <span>Hardware_Revision: R2-B</span>
            <span className="hidden sm:inline">Manual_Override: Disabled</span>
            <span>Cycle_Status: Ready</span>
          </div>
        </div>
      </div>

      {/* FOOTER CALLOUT - REWORKED */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 border border-white/5 bg-black/40 industrial-clip text-center flex flex-col items-center justify-center gap-2">
          <Database className="w-5 h-5 opacity-40 mb-2" />
          <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em]">Data_Lake_Integrity</span>
          <span className="text-sm font-bold tracking-widest">99.98% OK</span>
        </div>
        <div className="p-8 border-2 border-dashed border-white/10 bg-white/[0.02] text-center flex flex-col justify-center gap-2 group hover:bg-white/[0.05] transition-all sm:col-span-2 md:col-span-1">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-80 group-hover:text-white">
            {isEn ? 'SYSTEM_SYNERGY_NOMINAL' : 'SYNERGIE_SYSTÉMU_NOMINÁLNÍ'}
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-2 md:w-3 h-1 ${i < 8 ? 'bg-indigo-500' : 'bg-white/10'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s`, backgroundColor: i < 8 ? accentColor : '' }} />
            ))}
          </div>
        </div>
        <div className="p-6 border border-white/5 bg-black/40 industrial-clip text-center flex flex-col items-center justify-center gap-2 hidden md:flex">
          <Shield className="w-5 h-5 opacity-40 mb-2" />
          <span className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em]">Security_Layer</span>
          <span className="text-sm font-bold tracking-widest">ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
};
