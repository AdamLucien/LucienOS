
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { AppMode, Language } from '../App';
import { Brain, Cpu, Shield, Binary, Terminal } from 'lucide-react';

interface DiagnosticsProps {
  mode: AppMode;
  lang: Language;
}

const getLocalizedData = (lang: Language) => {
  const isEn = lang === 'en';
  return {
    radar: [
      { subject: isEn ? 'Ti LOGIC' : 'Ti LOGIKA', A: 100 },
      { subject: isEn ? 'Ne PATTERNS' : 'Ne VZORCE', A: 94 },
      { subject: isEn ? 'AUTH 4' : 'AUTENT 4', A: 95 },
      { subject: isEn ? 'OBS 5' : 'POZOR 5', A: 92 },
      { subject: isEn ? 'VISUAL SYN' : 'VIZUÁLNÍ SYN', A: 88 },
      { subject: isEn ? 'Si INTEGRITY' : 'Si INTEGRITA', A: 82 },
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
    },
    summary: {
      title: isEn ? "PROFILE_SYNTHESIS" : "PROFILOVÁ_SYNTÉZA",
      subtitle: isEn ? "Executive Summary" : "Manažerské shrnutí",
      tag: "INTP 4w5",
      points: isEn
        ? [
            "Highly autonomous analyst with strong logical and intrapersonal intelligence.",
            "Dominant visual learning style with strong right‑hemisphere intuition.",
            "Excels in complex, theoretical problem solving and systems design.",
            "Performs best in independent or creative roles with high intellectual freedom."
          ]
        : [
            "Vysoce autonomní analytik se silnou logickou a intrapersonální inteligencí.",
            "Dominantní vizuální styl učení a pravostranná intuice.",
            "Exceluje v řešení komplexních teoretických problémů a systémovém designu.",
            "Nejlépe funguje v nezávislých nebo kreativních rolích s intelektuální svobodou."
          ],
      tags: isEn
        ? ["NT TEMPERAMENT", "RIGHT‑HEMISPHERE", "VISUAL LEARNER"]
        : ["NT TEMPERAMENT", "PRAVÁ_HEMISFÉRA", "VIZUÁLNÍ_UČENÍ"]
    },
    cognitive: {
      title: isEn ? "COGNITIVE_STACK" : "KOGNITIVNÍ_STACK",
      functions: [
        {
          name: isEn ? "Introverted Thinking (Ti)" : "Introvertní myšlení (Ti)",
          role: isEn ? "PRIMARY" : "PRIMÁRNÍ",
          detail: isEn ? "Categorizes, analyzes, detects inconsistencies." : "Kategorizuje, analyzuje, odhaluje nekonzistence."
        },
        {
          name: isEn ? "Extraverted Intuition (Ne)" : "Extravertní intuice (Ne)",
          role: isEn ? "SECONDARY" : "SEKUNDÁRNÍ",
          detail: isEn ? "Sees multiple paths and abstract links." : "Vidí více cest a abstraktní souvislosti."
        },
        {
          name: isEn ? "Introverted Sensing (Si)" : "Introvertní smysly (Si)",
          role: isEn ? "TERTIARY" : "TERCIÁRNÍ",
          detail: isEn ? "Connects present data with stored detail." : "Propojuje současná data s uloženými detaily."
        },
        {
          name: isEn ? "Extraverted Feeling (Fe)" : "Extravertní cítění (Fe)",
          role: isEn ? "INFERIOR" : "INFERIÓRNÍ",
          detail: isEn ? "Limited social attunement; pragmatic empathy." : "Limitované sociální ladění; pragmatická empatie."
        }
      ]
    },
    learning: {
      title: isEn ? "LEARNING_VECTOR" : "UČEBNÍ_VEKTOR",
      styles: [
        { name: isEn ? "Visual" : "Vizuální", level: isEn ? "PRIMARY" : "PRIMÁRNÍ", value: 92 },
        { name: isEn ? "Kinesthetic" : "Kinestetický", level: isEn ? "SECONDARY" : "SEKUNDÁRNÍ", value: 70 },
        { name: isEn ? "Auditory" : "Auditivní", level: isEn ? "LOW" : "NÍZKÝ", value: 42 }
      ],
      intelligences: [
        { name: isEn ? "Logical‑Mathematical" : "Logicko‑matematická", level: isEn ? "VERY HIGH" : "VELMI VYSOKÁ" },
        { name: isEn ? "Intrapersonal" : "Intrapersonální", level: isEn ? "HIGH" : "VYSOKÁ" },
        { name: isEn ? "Visual‑Spatial" : "Vizuálně‑prostorová", level: isEn ? "HIGH" : "VYSOKÁ" },
        { name: isEn ? "Naturalist" : "Přírodní", level: isEn ? "HIGH" : "VYSOKÁ" }
      ]
    },
    enneagram: {
      title: isEn ? "ENNEAGRAM_DYNAMICS" : "ENNEAGRAM_DYNAMIKA",
      core: "TYPE 4w5",
      growth: isEn ? "Growth → Type 1 (discipline, objectivity)" : "Růst → Typ 1 (disciplína, objektivita)",
      stress: isEn ? "Stress → Type 2 (over‑validation)" : "Stres → Typ 2 (nadměrná validace)",
      instincts: isEn
        ? ["SP: Resilient, quiet endurance", "SO: Outsider lens", "SX: Competitive intensity"]
        : ["SP: Odolnost, tichá výdrž", "SO: Pohled outsidera", "SX: Soutěživá intenzita"]
    }
  };
};

export const Diagnostics: React.FC<DiagnosticsProps> = ({ mode, lang }) => {
  const primaryColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getLocalizedData(lang);
  const isEn = lang === 'en';
  const headingClass = "text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em]";

  return (
    <div className="space-y-24 max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      <h1 className="sr-only">{isEn ? 'Diagnostics' : 'Diagnostika'}</h1>
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
        <div className="lg:col-span-7 border border-white/10 bg-black/40 p-6 sm:p-8 md:p-12 backdrop-blur-md industrial-clip relative overflow-hidden group card-hover">
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Binary className="w-48 h-48" />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 mb-12">
          <div className={`p-3 md:p-4 bg-white/5 border transition-colors duration-500 shrink-0`} style={{ borderColor: primaryColor }}>
            <Shield className="w-6 h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
          </div>
            <h3 className={`${headingClass} leading-tight`}>
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
        <div className="lg:col-span-5 border border-white/10 bg-black/60 backdrop-blur-md p-6 md:p-8 industrial-clip hover:border-white/30 transition-all flex flex-col justify-center overflow-hidden card-hover">
          <h3 className={`${headingClass} mb-12 border-b border-white/10 pb-6 flex items-center gap-3`}>
            <Brain className="w-5 h-5 opacity-40" /> {isEn ? 'COGNITIVE_MAP' : 'KOGNITIVNÍ_MAPA'}
          </h3>
          <div className="h-64 sm:h-80 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="58%" data={data.radar} margin={{ top: 24, right: 24, bottom: 24, left: 24 }}>
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 8, fontWeight: 700 }}
                  tickLine={false}
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
            <div className="absolute bottom-0 right-0 p-2 text-[6px] sm:text-[7px] font-mono opacity-20 uppercase">
              GRID_SCAN: SUCCESSFUL
            </div>
          </div>
          <div className="mt-8 text-[8px] font-mono opacity-20 uppercase tracking-[0.2em] text-center break-words px-4 leading-tight">
             *_MEASURED_BY_INTP_A_PROTOCOL
          </div>
        </div>
      </div>

      {/* DUALITY FLOW VISUALIZATION */}
      <div className="border border-white/10 bg-black/40 p-8 sm:p-10 md:p-16 industrial-clip relative overflow-hidden card-hover">
        <h3 className={`${headingClass} mb-16 flex items-center gap-3`}>
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

      {/* PROFILE SYNTHESIS + COGNITIVE STACK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 border border-white/10 bg-black/50 p-6 md:p-10 industrial-clip relative overflow-hidden card-hover">
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
          <div className="flex items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <h3 className={`${headingClass} flex items-center gap-3`}>
              <Terminal className="w-4 h-4 opacity-40" /> {data.summary.title}
            </h3>
            <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">{data.summary.subtitle}</div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] px-3 py-1 border border-white/10 bg-white/5">
              {data.summary.tag}
            </span>
            {data.summary.tags.map((tag) => (
              <span key={tag} className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 border border-white/10 bg-white/[0.03] opacity-60">
                {tag}
              </span>
            ))}
          </div>
          <ul className="space-y-3 text-sm md:text-base opacity-70 leading-relaxed">
            {data.summary.points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-white/30">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 border border-white/10 bg-black/60 backdrop-blur-md p-6 md:p-8 industrial-clip hover:border-white/30 transition-all card-hover">
          <h3 className={`${headingClass} mb-8 border-b border-white/10 pb-6 flex items-center gap-3`}>
            <Brain className="w-4 h-4 opacity-40" /> {data.cognitive.title}
          </h3>
          <div className="space-y-6">
            {data.cognitive.functions.map((fn) => (
              <div key={fn.name} className="border-l border-white/10 pl-4">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest">{fn.name}</div>
                  <div className="text-[9px] font-mono opacity-40 uppercase">{fn.role}</div>
                </div>
                <div className="text-[10px] font-mono opacity-40 mt-2">{fn.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEARNING + ENNEAGRAM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-white/10 bg-black/40 p-6 md:p-8 industrial-clip card-hover">
          <h3 className={`${headingClass} mb-8 border-b border-white/10 pb-6 flex items-center gap-3`}>
            <Cpu className="w-4 h-4 opacity-40" /> {data.learning.title}
          </h3>
          <div className="space-y-6">
            {data.learning.styles.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-baseline gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest">{s.name}</span>
                  <span className="text-[9px] font-mono opacity-40 uppercase">{s.level}</span>
                </div>
                <div className="h-[2px] bg-white/5">
                  <div className="h-full" style={{ width: `${s.value}%`, backgroundColor: primaryColor }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.learning.intelligences.map((it) => (
              <div key={it.name} className="text-[10px] font-mono uppercase tracking-widest opacity-60">
                {it.name}
                <div className="text-[9px] opacity-40 mt-1">{it.level}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-black/40 p-6 md:p-8 industrial-clip card-hover">
          <h3 className={`${headingClass} mb-8 border-b border-white/10 pb-6 flex items-center gap-3`}>
            <Terminal className="w-4 h-4 opacity-40" /> {data.enneagram.title}
          </h3>
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] opacity-50 mb-6">{data.enneagram.core}</div>
          <div className="space-y-3 text-[10px] font-mono opacity-50">
            <div>{data.enneagram.growth}</div>
            <div>{data.enneagram.stress}</div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
            {data.enneagram.instincts.map((i) => (
              <div key={i} className="text-[9px] font-mono uppercase tracking-widest opacity-40">{i}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
