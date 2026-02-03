
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { AppMode, Language } from '../App';
import { Activity, Brain, Zap, Cpu, Shield, Binary, Terminal } from 'lucide-react';

interface DiagnosticsProps {
  mode: AppMode;
  lang: Language;
}

const getLocalizedData = (lang: Language) => {
  const isEn = lang === 'en';
  return {
    radar: [
      { subject: isEn ? 'Ti_LOGIC' : 'Ti_LOGIKA', A: 100 },
      { subject: isEn ? 'Ne_PATTERNS' : 'Ne_VZORCE', A: 94 },
      { subject: isEn ? 'AUTH_4' : 'AUTENT_4', A: 95 },
      { subject: isEn ? 'OBS_5' : 'POZOR_5', A: 92 },
      { subject: isEn ? 'VISUAL_SYN' : 'VIZUÁLNÍ_SYN', A: 88 },
      { subject: isEn ? 'Si_INTEGRITY' : 'Si_INTEGRITA', A: 82 },
    ],
    telemetry: [
      { label: isEn ? 'INTROVERSION (I)' : 'INTROVERZE (I)', value: 93, status: isEn ? 'EXTREME_AUTONOMY' : 'EXTRÉMNÍ_AUTONOMIE', color: '#ff3333' },
      { label: isEn ? 'INTUITION (N)' : 'INTUICE (N)', value: 89, status: isEn ? 'PREDICTIVE_SIMULATION' : 'PREDIKTIVNÍ_SIMULACE', color: '#6366f1' },
      { label: isEn ? 'THINKING (T)' : 'MYŠLENÍ (T)', value: 98, status: isEn ? 'ABSOLUTE_GOVERNANCE' : 'ABSOLUTNÍ_VLÁDA', color: '#4ade80' },
      { label: isEn ? 'PERCEIVING (P)' : 'VNÍMÁNÍ (P)', value: 58, status: isEn ? 'FLUID_OPERATIONS' : 'FLUIDNÍ_OPERACE', color: '#f59e0b' },
    ],
    flow: [
      { stage: isEn ? 'INPUT (Feeling/Chaos)' : 'VSTUP (Pocity/Chaos)', load: 95, detail: isEn ? 'Raw emotional data / Entropy' : 'Syrová data / Entropie' },
      { stage: isEn ? 'FIREWALL (The Bunker)' : 'FIREWALL (Bunkr)', load: 100, detail: isEn ? 'Logic filter / Noise reduction' : 'Logický filtr / Útlum šumu' },
      { stage: isEn ? 'PROCESSOR (Logic Core)' : 'PROCESOR (Logické jádro)', load: 100, detail: isEn ? 'Ti / Pattern Recognition' : 'Ti / Rozpoznávání vzorců' },
      { stage: isEn ? 'OUTPUT (System Strategy)' : 'VÝSTUP (Strategie systému)', load: 85, detail: isEn ? 'Efficient Action Protocol' : 'Efektivní akční protokol' },
    ],
    mbti: {
      type: "INTP-A",
      role: isEn ? "The Logician Architect" : "Logik Architekt",
      desc: isEn ? "High-analytical capacity combined with extreme sensitivity. Operating on the edge of structural perfection and creative chaos." : "Vysoká analytická kapacita kombinovaná s extrémní citlivostí. Operuje na hraně strukturální dokonalosti a kreativního chaosu."
    }
  };
};

export const Diagnostics: React.FC<DiagnosticsProps> = ({ mode, lang }) => {
  const primaryColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getLocalizedData(lang);
  const isEn = lang === 'en';

  return (
    <div className="space-y-24 max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      {/* HEADER SECTION - Unified with App/Capabilities/Archive */}
      <div className="mb-24 relative overflow-hidden group">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40 uppercase">
              <Terminal className="w-3 h-3" />
              <span>KERNEL_DIAGNOSTICS_v2.0</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
              {isEn ? 'CORE_SY' : 'DIAGNO_'}
              <span style={{ color: primaryColor }}>{isEn ? 'NC' : 'STIKA'}</span>
            </h2>
            <div className="flex gap-4 text-[9px] font-mono opacity-50 uppercase tracking-widest">
              <span>TYPE: {data.mbti.type}</span>
              <span className="animate-pulse">|</span>
              <span>ROLE: {data.mbti.role}</span>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] font-mono opacity-20 leading-tight">
              0xKERNEL_DUMP<br />
              0xSTATUS_NOMINAL
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="w-full h-0.5 bg-white animate-[scan_4s_infinite]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* MBTI INFO CARD */}
        <div className="lg:col-span-7 border border-white/10 bg-black/40 p-6 sm:p-8 md:p-12 backdrop-blur-md industrial-clip relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Binary className="w-48 h-48" />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 mb-12">
            <div className={`p-3 md:p-4 bg-white/5 border transition-colors duration-500 shrink-0`} style={{ borderColor: primaryColor }}>
              <Shield className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
              {isEn ? 'OS_KERNEL_SPECS' : 'SPECIFIKACE_JÁDRA'}
            </h3>
          </div>
          
          <p className="text-sm sm:text-base md:text-xl opacity-80 leading-relaxed font-light mb-12 max-w-2xl italic border-l-2 pl-6 sm:pl-8 border-white/10">
            "{data.mbti.desc}"
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {data.telemetry.map((metric, idx) => (
              <div key={idx} className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest truncate">{metric.label}</span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold shrink-0" style={{ color: metric.color }}>{metric.value}%</span>
                </div>
                <div className="h-[2px] bg-white/5 relative overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${metric.value}%`, backgroundColor: metric.color, boxShadow: `0 0 10px ${metric.color}` }} 
                  />
                </div>
                <div className="text-[8px] font-mono opacity-30 uppercase tracking-tighter truncate">{metric.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RADAR CHART CARD - Fixed Overflow */}
        <div className="lg:col-span-5 border border-white/10 bg-black/60 backdrop-blur-md p-6 md:p-8 industrial-clip hover:border-white/30 transition-all flex flex-col justify-center overflow-hidden">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-12 border-b border-white/10 pb-6 flex items-center gap-3">
            <Brain className="w-5 h-5 opacity-40" /> {isEn ? 'COGNITIVE_MAP' : 'KOGNITIVNÍ_MAPA'}
          </h3>
          <div className="h-64 sm:h-80 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data.radar}>
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 8, fontWeight: 'bold' }} 
                />
                <Radar 
                  name="Lucien" 
                  dataKey="A" 
                  stroke={primaryColor} 
                  fill={primaryColor} 
                  fillOpacity={0.4} 
                />
              </RadarChart>
            </ResponsiveContainer>
            {/* Legend metadata */}
            <div className="absolute bottom-0 right-0 p-2 text-[7px] font-mono opacity-20 uppercase">
              GRID_SCAN: SUCCESSFUL
            </div>
          </div>
          <div className="mt-8 text-[8px] font-mono opacity-20 uppercase tracking-[0.2em] text-center">
             *_MEASURED_BY_INTP_A_PROTOCOL
          </div>
        </div>
      </div>

      {/* DUALITY FLOW VISUALIZATION */}
      <div className="border border-white/10 bg-black/40 p-8 sm:p-10 md:p-16 industrial-clip relative overflow-hidden">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] mb-16 flex items-center gap-3">
          <Cpu className="w-5 h-5" style={{ color: primaryColor }} /> {isEn ? 'TRANSFORMATION_FLOW: ENTROPY_TO_STRATEGY' : 'PRŮBĚH_TRANSFORMACE: ENTROPIE_K_STRATEGII'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {data.flow.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 h-full border-l-2" style={{ borderLeftColor: idx === 0 ? '#ff3333' : (idx === 3 ? '#4ade80' : primaryColor) }}>
                <div className="text-[9px] font-mono opacity-20 mb-6 tracking-widest uppercase">NODE_REF_0{idx+1}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: idx === 0 ? '#ff3333' : (idx === 3 ? '#4ade80' : primaryColor) }}>{step.stage}</div>
                <div className="text-[10px] opacity-40 font-mono italic leading-relaxed">{step.detail}</div>
                <div className="mt-8 h-[2px] bg-white/5 overflow-hidden">
                  <div className="h-full animate-pulse" style={{ width: `${step.load}%`, backgroundColor: idx === 0 ? '#ff3333' : primaryColor }} />
                </div>
              </div>
              {idx < 3 && (
                <div className="hidden md:flex absolute top-1/2 right-[-14px] transform -translate-y-1/2 z-20 w-7 h-7 bg-black border border-white/10 rounded-full items-center justify-center text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                   →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
