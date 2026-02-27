import React from 'react';
import { AppMode, Language } from '../App';
import { History, Box, Globe } from 'lucide-react';

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
      items: [
        {
          period: "2026 – PRESENT",
          title: "LUCIEN CONTROL",
          role: isEn ? "Chief System Architect" : "Hlavní systémový architekt",
          mission: isEn ? "Engineering a unified 'Operating System' for interim management. Conceptualizing the 'Single Value Flow' to eliminate silos in Sales, HR, and Delivery." : "Vývoj jednotného 'Operačního systému' pro interim management. Konceptualizace 'Single Value Flow' pro eliminaci sil v prodeji, HR a delivery.",
          tech: ["Next.js", "TypeScript", "DDD", "Prisma", "PostgreSQL"],
          meta: "NODE_STATUS: ACTIVE"
        },
        {
          period: "2025 – PRESENT",
          title: "NOXIS & ARCHΞON (Lucien Systems)",
          role: isEn ? "Chief Architect" : "Hlavní architekt",
          mission: isEn ? "Leading development of AI-driven 'immune systems' for information integrity and state-level Digital Twins (Neo4j)." : "Vedení vývoje AI 'imunitních systémů' pro informační integritu a státních digitálních dvojčat (Neo4j).",
          tech: ["AI Surveillance", "Graph Tiles", "OSINT", "Causal AI"],
          meta: "CORE_INTEL"
        }
      ]
    },
    {
      phaseId: "P_02",
      phaseName: isEn ? "PHASE II: INDUSTRIAL FORGE" : "FÁZE II: PRŮMYSLOVÁ VÝHEŇ",
      era: "2020 – 2024",
      tagline: isEn ? "Industrial scaling, logistics optimization and automotive systems." : "Průmyslové škálování, optimalizace logistiky a automotive systémy.",
      items: [
        {
          period: "2023 – 2024",
          title: "DEUTSCHE MECHATRONICS (DE)",
          role: isEn ? "Interim Project Consultant" : "Interim projektový konzultant",
          mission: isEn ? "Crisis management for AI infrastructure. Optimizing production processes for next-gen data centers." : "Krizový management pro AI infrastrukturu. Optimalizace výrobních procesů pro datacentra nové generace.",
          tech: ["Lean 6Σ", "Crisis Mgmt", "Automation"],
          meta: "FIELD_OPS: MECHERNICH"
        },
        {
          period: "2023 – 2023",
          title: "LINDE + WIEMANN Group",
          role: isEn ? "Interim Consultant" : "Interim konzultant",
          mission: isEn ? "Development of digital production planning applications and real-time data integration." : "Vývoj aplikací pro digitální plánování výroby a real-time integraci dat.",
          tech: ["Process Analysis", "Architecture Design", "UI/UX"],
          meta: "INFRA: HAGENBACH"
        },
        {
          period: "2021 – 2023",
          title: "L.I.T. GRUPPE",
          role: isEn ? "Industrial & IT Engineer / Data Analyst" : "Průmyslový a IT inženýr / Datový analytik",
          mission: isEn ? "Integration of industrial systems for VW ID production. Predictive analytics and ETL pipelines for supply chain transparency." : "Integrace průmyslových systémů pro výrobu VW ID. Prediktivní analytika a ETL pipeline pro transparentnost řetězce.",
          tech: ["SQL", "VSM", "SAP MES", "Power BI"],
          meta: "LOGISTICS_SYNC"
        },
        {
          period: "2021 – 2022",
          title: "LUCIEN R&D (Estonia)",
          role: isEn ? "Owner" : "Majitel",
          mission: isEn ? "Leading R&D in AI, computer vision, and scalable manufacturing solutions." : "Vedení výzkumu a vývoje v oblasti AI, počítačového vidění a škálovatelných výrobních řešení.",
          tech: ["AI", "Computer Vision", "Process Control"],
          meta: "TALLINN_NODE"
        },
        {
          period: "2020 – 2021",
          title: "DUSKERN LIMITED (UK)",
          role: isEn ? "Founder & CEO" : "Zakladatel a CEO",
          mission: isEn ? "Strategic leadership in defense and advanced tech sectors. AI/Software R&D oversight." : "Strategické vedení v sektorech obrany a pokročilých technologií. Dohled nad R&D softwaru a AI.",
          tech: ["Defense Tech", "Business Development"],
          meta: "LONDON_HQ"
        },
        {
          period: "2020 – 2020",
          title: "FOXCONN / TELEPERFORMANCE",
          role: isEn ? "SAP Technician / Apple Advisor" : "SAP Technik / Apple Advisor",
          mission: isEn ? "Support of MES/SAP systems. Technical support for Tier 1 Apple infrastructure." : "Podpora MES/SAP systémů. Technická podpora pro Tier 1 Apple infrastrukturu.",
          tech: ["SAP", "MES", "Customer Logic"],
          meta: "SYSTEM_SUPPORT"
        }
      ]
    },
    {
      phaseId: "P_03",
      phaseName: isEn ? "PHASE III: SYSTEMS FOUNDATIONS" : "FÁZE III: ZÁKLADY SYSTÉMU",
      era: "2010 – 2020",
      tagline: isEn ? "Philosophy of human potential, mechanical design and structural funds." : "Filozofie lidského potenciálu, mechanický design a strukturální fondy.",
      items: [
        {
          period: "2013 – 2020",
          title: "INDEPENDENT RESEARCH PROJECT",
          role: isEn ? "Systems Researcher" : "Výzkumník systémů",
          mission: isEn ? "Intersection of human potential, systems thinking, and organizational culture. Focus on conscious leadership." : "Průsečík lidského potenciálu, systémového myšlení a organizační kultury. Zaměření na vědomý leadership.",
          tech: ["Systems Thinking", "Psychology", "Soft Skills"],
          meta: "LONG_TERM_STUDY"
        },
        {
          period: "2015 – 2016",
          title: "JVK OPS / STRUCTURAL FUNDS",
          role: isEn ? "Project Manager / Web Developer" : "Projektový manažer / Web developer",
          mission: isEn ? "Management of EU-funded projects. Full-stack development of internal web applications (PHP/JS)." : "Management projektů financovaných z EU. Full-stack vývoj interních webových aplikací (PHP/JS).",
          tech: ["EU Funds", "PHP", "JavaScript", "HTML/CSS"],
          meta: "INFRA_GOV"
        },
        {
          period: "2014 – 2015",
          title: "uGEAR PEACLOCK",
          role: isEn ? "Product Designer & Idea Man" : "Produktový designér a vizionář",
          mission: isEn ? "Conceptualization and design of innovative mechanical timepieces. Traditional craftsmanship vs. modern aesthetics." : "Konceptualizace a design inovativních mechanických hodinek. Tradiční řemeslo vs. moderní estetika.",
          tech: ["CAD", "Mechanical Design", "Prototyping"],
          meta: "MECHANICAL_PRECISION"
        },
        {
          period: "2014 – 2014",
          title: "EUROPLUS FINANCE / AGENTURA SMS",
          role: isEn ? "Business Admin Manager / Volunteer" : "Manažer administrativy / Dobrovolník",
          mission: isEn ? "Managing office operations and database systems. Proposal of telemarketing strategies." : "Řízení kancelářských operací a databázových systémů. Návrhy telemarketingových strategií.",
          tech: ["DB Management", "Admin", "ICT"],
          meta: "ADMIN_FLOW"
        },
        {
          period: "2010 – 2011",
          title: "IT FREELANCE (Madrid)",
          role: isEn ? "Security Consultant" : "Bezpečnostní konzultant",
          mission: isEn ? "Self-employed IT professional focused on security protocols in Spanish technological clusters." : "OSVČ IT profesionál zaměřený na bezpečnostní protokoly ve španělských technologických clusterech.",
          tech: ["IT Security", "Consulting"],
          meta: "SECURITY_INIT"
        }
      ]
    }
  ];
};

export const Archive: React.FC<ArchiveProps> = ({ mode, lang }) => {
  const accentColor = mode === 'raw' ? '#8f3a52' : '#5a7696';
  const data = getArchiveData(lang);
  const isEn = lang === 'en';
  const seoIntro = isEn
    ? [
        'Archive consolidates mission history, roles, and milestones across multiple sectors.',
        'Entries summarize scope, responsibilities, and outcomes to establish operational credibility.',
        'Use the timeline to trace long-term capability progression and domain exposure.'
      ]
    : [
        'Archiv konsoliduje historii misí, role a systémové milníky napříč sektory.',
        'Záznamy shrnují rozsah, odpovědnosti a výsledky pro ověření zkušeností.',
        'Časová osa ukazuje dlouhodobý růst kompetencí a doménové zkušenosti.'
      ];

  return (
    <div className="max-w-6xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      <h1 className="sr-only">{isEn ? 'Archive' : 'Archiv'}</h1>
      <div className="max-w-3xl space-y-3 text-[11px] md:text-xs opacity-70 leading-relaxed mb-12">
        {seoIntro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {/* HEADER */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-60">
            <History className="w-3 h-3" />
            <span>FULL_LIFECYCLE_SYNCHRONIZATION</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
            {isEn ? 'THE_COMPLETE' : 'KOMPLETNÍ_'}
            <span style={{ color: accentColor }}>{isEn ? '_TIMELINE' : 'ČASOVÁ_OSA'}</span>
          </h2>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-[10px] font-mono opacity-20">SYSTEM_INTEGRITY: OPTIMAL<br/>ARCHIVE_LOAD: 15_YEARS</div>
        </div>
      </div>

      <div className="space-y-40">
        {data.map((phase, phaseIdx) => {
          const phaseColor = phaseIdx === 0 ? accentColor : phaseIdx === 1 ? "#6f8fa8" : "#7a947d";
          return (
          <div key={phase.phaseId} className="relative group/phase">
            {/* Phase Sticky Header */}
            <div className="sticky top-20 md:top-28 z-30 mb-16 transition-all duration-500">
              <div className="industrial-clip border border-white/10 bg-black/95 backdrop-blur-xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 border-l-4 group-hover/phase:border-white/30 card-hover-soft" style={{ borderLeftColor: phaseColor }}>
                 <div className="flex items-center gap-8">
                    <div className="text-3xl font-bold opacity-10 font-mono tracking-tighter">{phase.phaseId}</div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold tracking-widest uppercase" style={{ color: phaseColor }}>
                        {phase.phaseName}
                      </h3>
                      <p className="text-[10px] font-mono opacity-60 mt-1 uppercase tracking-widest">{phase.tagline}</p>
                    </div>
                 </div>
                 <div className="px-6 py-2 border border-white/10 font-mono text-xs opacity-60 uppercase tracking-widest bg-white/5">
                    {phase.era}
                 </div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="relative space-y-32 pl-6 md:pl-24">
              {/* Vertical line */}
              <div className="absolute left-[3px] md:left-[23px] top-0 bottom-0 w-[1px] bg-white/5" />

              {phase.items.map((item, idx) => (
                <div key={idx} className="relative group/item">
                  {/* Timeline dot */}
                  <div className="absolute left-[-26px] md:left-[-48px] top-10 w-4 h-4 md:w-6 md:h-6 border-4 border-black transition-all duration-500 z-10 bg-zinc-900 group-hover/item:scale-125" 
                       style={{ borderColor: phaseColor, boxShadow: `0 0 12px ${phaseColor}55` }} 
                  />
                  
                  <div className="border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 p-8 md:p-14 industrial-clip relative overflow-hidden group/card hover:border-white/20 card-hover-soft">
                    <div className="absolute top-4 right-8 text-[8px] font-mono opacity-10 uppercase tracking-widest flex gap-4">
                       <span>{item.meta}</span>
                       <Box className="w-2 h-2" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                       <span className="text-[10px] font-mono font-bold opacity-50 px-3 py-1 border border-white/10 uppercase tracking-[0.2em]">
                          {item.period}
                       </span>
                       <h4 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-tighter transition-transform duration-300 group-hover/card:translate-x-2">
                          {item.title}
                       </h4>
                    </div>

                    <div className="mb-10 max-w-5xl">
                       <div className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 border-l-2 pl-8 mb-6 transition-all" style={{ borderColor: phaseColor }}>
                          {item.role}
                       </div>
                       <p className="text-sm md:text-lg opacity-70 leading-relaxed font-light italic">
                          "{item.mission}"
                       </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                       {item.tech.map((t) => (
                         <span key={t} className="text-[9px] md:text-[10px] font-mono opacity-50 px-4 py-1.5 bg-white/5 border border-white/5 uppercase hover:opacity-100 hover:text-white transition-all cursor-default hover:bg-white/10">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        })}
      </div>

      {/* FINAL STATEMENT */}
      <div className="mt-40 p-12 md:p-24 border border-white/10 bg-black/60 text-center industrial-clip relative overflow-hidden group card-hover">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
         <Globe className="w-16 h-16 mx-auto opacity-10 mb-12 animate-[spin_20s_linear_infinite]" style={{ color: accentColor }} />
         <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
           {isEn ? 'THE_SYSTEM_IS_COMPLETE' : 'SYSTÉM_JE_KOMPLETNÍ'}
         </h3>
         <p className="text-[11px] md:text-sm font-mono opacity-60 max-w-3xl mx-auto uppercase tracking-[0.3em] leading-loose">
           {isEn 
             ? "From mechanical horology to state-level governance architectures. A decade and a half of relentless system optimization and logical scaling." 
             : "Od mechanické hodinařiny po státní vládní architektury. Patnáct let neúnavné optimalizace systémů a logického škálování."
           }
         </p>
      </div>
    </div>
  );
};
