
import React from 'react';
import { AppMode, Language } from '../App';
import { History, Terminal, AlertTriangle, Briefcase, Database, Activity } from 'lucide-react';

interface ArchiveProps {
  mode: AppMode;
  lang: Language;
}

const getArchiveData = (lang: Language) => {
  const isEn = lang === 'en';
  return [
    {
      phaseId: "P_01",
      phaseName: isEn ? "PHASE I: THE SYNTHESIS" : "FÁZE I: SYNTÉZA",
      era: "2024 – PRESENT",
      tagline: isEn ? "Merging digital twins, AI surveillance and state-level governance." : "Propojení digitálních dvojčat, AI sledování a státní správy.",
      color: "#6366f1",
      items: [
        {
          period: "2026 – PRESENT",
          title: "LUCIEN CONTROL (Prague)",
          role: isEn ? "Chief System Architect" : "Hlavní systémový architekt",
          mission: isEn ? "Architecture of the Management OS for scalability. Implementing Single-Value-Flow logic for total business auditability." : "Architektura Manažerského OS pro škálování. Implementace logiky toku jedné hodnoty pro totální auditovatelnost.",
          tech: ["Next.js", "TypeScript", "DDD", "Interim Scaling"],
          meta: "NODE_STATUS: ACTIVE"
        },
        {
          period: "2025 – PRESENT",
          title: "NOXIS & ARCHΞON (Global)",
          role: isEn ? "Lead AI Architect" : "Vedoucí AI architekt",
          mission: isEn ? "NOXIS: Hybrid defense engine using Multi-sensor fusion. ARCHΞON: State digital twin mapping societal moods via graph DB." : "NOXIS: Engine hybridní obrany využívající fúzi senzorů. ARCHΞON: Digitální dvojče státu mapující nálady přes grafové DB.",
          tech: ["Neo4j", "Causal AI", "Python", "OSINT"],
          meta: "CLASSIFIED_PROJECT"
        }
      ]
    },
    {
      phaseId: "P_02",
      phaseName: isEn ? "PHASE II: INDUSTRIAL FORGE" : "FÁZE II: PRŮMYSLOVÁ VÝHEŇ",
      era: "2021 – 2024",
      tagline: isEn ? "Crisis management, industrial scaling and automotive material flow." : "Krizový management, průmyslové škálování a toky materiálů.",
      color: "#6366f1",
      items: [
        {
          period: "2023 – 2024",
          title: "DEUTSCHE MECHATRONICS (DE)",
          role: isEn ? "Interim Project Consultant" : "Interim projektový konzultant",
          mission: isEn ? "Crisis management for AI data center infrastructure. Recovery of failing international logistic flows for 25+ member teams." : "Krizový management pro infrastrukturu AI datacenter. Záchrana selhávajících mezinárodních logistických toků pro 25+ členné týmy.",
          tech: ["Lean 6Σ", "Crisis Mgmt", "System Dynamics"],
          meta: "FIELD_OPS: MECHERNICH"
        },
        {
          period: "2022 – 2023",
          title: "VW ZWICKAU / L.I.T. GRUPPE",
          role: isEn ? "Industrial & IT Engineer" : "Průmyslový & IT inženýr",
          mission: isEn ? "Integrating logistics systems for Volkswagen ID models. SQL modeling of material synchronization and VSM mapping." : "Integrace logistických systémů pro modely Volkswagen ID. SQL modelování synchronizace materiálu a VSM mapování.",
          tech: ["SQL", "VSM", "SAP MES", "Industrial Engineering"],
          meta: "INFRA_SYNC: VW_ID"
        },
        {
          period: "2021 – 2022",
          title: "L.I.T. GRUPPE (Logistics)",
          role: isEn ? "Data Analyst" : "Datový analytik",
          mission: isEn ? "ETL pipelines for productivity tracking and predictive maintenance of supply chain components." : "ETL pipeline pro sledování produktivity a prediktivní údržbu komponent dodavatelského řetězce.",
          tech: ["Power BI", "SQL", "ETL", "Process Mining"],
          meta: "ANALYTICS_NODE"
        }
      ]
    },
    {
      phaseId: "P_00",
      phaseName: isEn ? "PHASE ZERO: THE GLITCH (SYSTEM RESET)" : "FÁZE NULA: THE GLITCH (RESTART SYSTÉMU)",
      era: "2018 – 2021",
      tagline: isEn ? "Clinical survival, homelessness and identity reconstruction." : "Klinické přežití, bezdomovectví a rekonstrukce identity.",
      color: "#ff003c",
      isRaw: true,
      items: [
        {
          period: "2018 – 2020",
          title: "BIOLOGICAL_INTERRUPTION",
          role: isEn ? "Survival Specialist" : "Specialista na přežití",
          mission: isEn ? "Experience of clinical death and long-term recovery from homelessness. Forced system reset of all prior logical assumptions." : "Zkušenost klinické smrti a dlouhodobé zotavení z bezdomovectví. Vynucený restart všech předchozích logických předpokladů.",
          tech: ["Resilience", "Zero-Base Recovery", "Extreme Survival"],
          meta: "STATUS: RECOVERED_GLITCH"
        }
      ]
    }
  ];
};

export const Archive: React.FC<ArchiveProps> = ({ mode, lang }) => {
  const accentColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getArchiveData(lang);
  const isEn = lang === 'en';

  return (
    <div className="max-w-6xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      {/* HEADER */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40">
            <History className="w-3 h-3" />
            <span>CORE_MEMORY_SYNCHRONIZATION</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            {isEn ? 'THE_EVOLUTION' : 'EVOLUCE_'}
            <span style={{ color: accentColor }}>{isEn ? '_LOG' : 'SYSTÉMU'}</span>
          </h2>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-[10px] font-mono opacity-20">TIME_DILATION: NOMINAL<br/>MEMORY_BANK: 0xFF4A1</div>
        </div>
        {/* Decorative background number */}
        <div className="absolute right-0 bottom-0 text-[120px] font-bold opacity-[0.02] pointer-events-none select-none -mb-12">
          25.04
        </div>
      </div>

      <div className="space-y-40">
        {data.map((phase) => (
          <div key={phase.phaseId} className="relative group/phase">
            {/* Phase Sticky Header */}
            <div className={`sticky top-20 md:top-28 z-30 mb-16 transition-all duration-500`}>
              <div className="industrial-clip border border-white/10 bg-black/80 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 group-hover/phase:border-white/30 transition-colors">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/10 font-mono text-xs opacity-40 shrink-0">
                      {phase.phaseId}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-3xl font-bold tracking-widest uppercase break-words" style={{ color: phase.isRaw && mode === 'raw' ? '#ff003c' : (mode === 'raw' ? '#ff003c' : '#6366f1') }}>
                        {phase.phaseName}
                      </h3>
                      <p className="text-[10px] md:text-xs font-mono opacity-40 mt-1 uppercase tracking-widest break-words">{phase.tagline}</p>
                    </div>
                 </div>
                 <div className="px-6 py-2 border border-white/20 font-mono text-xs font-bold tracking-widest bg-white/5 shrink-0">
                    {phase.era}
                 </div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="relative space-y-24 pl-6 md:pl-24">
              {/* Vertical line */}
              <div className="absolute left-[3px] md:left-[23px] top-0 bottom-0 w-[1px] bg-white/10" />

              {phase.items.map((item, idx) => (
                <div key={idx} className="relative group/item">
                  {/* Timeline dot */}
                  <div className={`absolute left-[-26px] md:left-[-48px] top-8 w-4 h-4 md:w-6 md:h-6 border-4 border-black transition-all duration-500 z-10 ${phase.isRaw ? 'bg-[#ff003c]' : 'bg-indigo-500'}`} 
                       style={{ 
                         backgroundColor: phase.isRaw || mode === 'raw' ? '#ff003c' : '#6366f1',
                         boxShadow: `0 0 15px ${phase.isRaw || mode === 'raw' ? '#ff003c' : '#6366f1'}66`
                       }} 
                  />
                  
                  <div className="border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 p-8 md:p-12 industrial-clip relative overflow-hidden group/card hover:border-white/20">
                    {/* Background metadata */}
                    <div className="absolute top-4 right-6 text-[8px] font-mono opacity-10 uppercase tracking-widest">
                      {item.meta}
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                       <span className="text-[10px] font-mono font-bold opacity-40 px-3 py-1 border border-white/10 self-start shrink-0">
                          {item.period}
                       </span>
                       <h4 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-tighter group-hover/card:translate-x-2 transition-transform duration-300 break-words leading-tight">
                          {item.title}
                       </h4>
                    </div>

                    <div className="mb-8">
                       <div className="text-base sm:text-lg md:text-xl font-bold text-white/80 border-l-2 pl-6 mb-4 break-words" style={{ borderColor: phase.isRaw || mode === 'raw' ? '#ff003c' : '#6366f1' }}>
                          {item.role}
                       </div>
                       <p className="text-sm md:text-base opacity-60 leading-relaxed font-light max-w-4xl break-words">
                          {item.mission}
                       </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                       {item.tech.map((t) => (
                         <span key={t} className="text-[9px] md:text-[10px] font-mono opacity-30 px-3 py-1 bg-white/5 border border-white/5 uppercase hover:opacity-100 hover:text-white transition-all cursor-default">
                           {t}
                         </span>
                       ))}
                    </div>

                    {/* Industrial decoration */}
                    <div className="absolute bottom-4 right-6 pointer-events-none opacity-[0.05]">
                       <Terminal className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RECOVERY CALLOUT - Fixed Mobile Overflow */}
      <div className="mt-32 p-6 md:p-12 border-2 border-dashed border-white/10 bg-black/40 text-center industrial-clip relative group overflow-hidden">
         <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
         <div className="relative z-10 space-y-6">
            <Activity className="w-10 h-10 md:w-12 md:h-12 mx-auto opacity-20 animate-pulse" style={{ color: accentColor }} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.4em] break-words leading-tight">
              {isEn ? 'CORE_INTEGRITY_RESTORED' : 'INTEGRITA_JÁDRA_OBNOVENA'}
            </h3>
            <p className="text-[10px] md:text-sm font-mono opacity-40 max-w-2xl mx-auto uppercase leading-loose">
              {isEn 
                ? "Systems rebuilt from absolute zero. Every line of code, every industrial process, every AI model is forged through the lens of radical survival and structural perfection." 
                : "Systémy znovu postaveny z absolutní nuly. Každá řádka kódu, každý průmyslový proces, každý AI model je kován optikou radikálního přežití a strukturální dokonalosti."
              }
            </p>
         </div>
      </div>
    </div>
  );
};
