
import React from 'react';
import { AppMode, Language } from '../App';
import { Cpu, Brain, Activity, Layout, Cog, Terminal, Zap, Shield, Database } from 'lucide-react';

interface CapabilitiesProps {
  mode: AppMode;
  lang: Language;
}

const getCapabilitiesData = (lang: Language, mode: AppMode) => {
  const isEn = lang === 'en';
  const palettes = mode === 'raw'
    ? {
        neural: ['#d04c75', '#ff7e57', '#ffb347', '#ffd166'],
        industrial: ['#d04c75', '#ff8a66', '#f7b955', '#ffe08a'],
        digital: ['#d04c75', '#d86f8a', '#ff9d5c', '#ffc978'],
        tactical: ['#d04c75', '#ff8b5a', '#ffb347', '#ffd166']
      }
    : {
        neural: ['#5a7696', '#39bdf8', '#f59e0b', '#22c55e'],
        industrial: ['#4f8ff7', '#f6c453', '#22b8a5', '#60a5fa'],
        digital: ['#6366f1', '#34d399', '#38bdf8', '#fb923c'],
        tactical: ['#ef5b7a', '#f59e0b', '#84cc16', '#06b6d4']
      };

  const tags = isEn
    ? {
        core: "CORE_PROCESSOR",
        field: "FIELD_OPS",
        infra: "INFRASTRUCTURE",
        proto: "PROTOTYPING"
      }
    : {
        core: "JÁDRO_PROCESORU",
        field: "POLNÍ_OPS",
        infra: "INFRASTRUKTURA",
        proto: "PROTOTYPOVÁNÍ"
      };

  return [
    {
      id: 'neural',
      category: isEn ? "NEURAL_SYNTHETIC_INTEL" : "NEURÁLNÍ_SYNTETICKÁ_INTELIGENCE",
      icon: <Brain className="w-6 h-6" />,
      tag: tags.core,
      skills: [
        { name: isEn ? "AI Modding" : "AI Modding", level: 83, meta: isEn ? "LLMs / CV / DIFFUSION" : "LLM / CV / DIFUZE", color: palettes.neural[0] },
        { name: "MLOps", level: 85, meta: isEn ? "FASTAPI / DOCKER / CI-CD" : "FASTAPI / DOCKER / CI-CD", color: palettes.neural[1] },
        { name: isEn ? "OSINT Fusion" : "OSINT Fúze", level: 92, meta: isEn ? "SATELLITE / DARKNET / MULTI-SENSOR" : "SATELIT / DARKNET / MULTI-SENSOR", color: palettes.neural[2] },
        { name: isEn ? "Causal AI" : "Kauzální AI", level: 80, meta: isEn ? "CAUSAL AI / SIM ENGINES / DIGITAL TWINS" : "KAUZÁLNÍ AI / SIM ENGINES / DIGI_TWINS", color: palettes.neural[3] }
      ],
      stack: [
        { label: isEn ? "LLMs" : "LLM", color: palettes.neural[0] },
        { label: isEn ? "Computer Vision" : "Počítačové vidění", color: palettes.neural[1] },
        { label: isEn ? "Diffusion" : "Difuze", color: palettes.neural[2] },
        { label: "OSINT", color: palettes.neural[3] },
        { label: isEn ? "Causal AI" : "Kauzální AI", color: palettes.neural[0] },
        { label: "FastAPI", color: palettes.neural[1] },
        { label: "Docker", color: palettes.neural[2] }
      ]
    },
    {
      id: 'industrial',
      category: isEn ? "INDUSTRIAL_SYSTEMS" : "PRŮMYSLOVÉ_SYSTÉMY",
      icon: <Cog className="w-6 h-6" />,
      tag: tags.field,
      skills: [
        { name: isEn ? "Lean Six Sigma" : "Lean Six Sigma", level: 75, meta: isEn ? "LEAN 6Σ / VSM / KAIZEN" : "LEAN 6Σ / VSM / KAIZEN", color: palettes.industrial[0] },
        { name: isEn ? "Interim Mgmt" : "Interim Mgmt", level: 75, meta: isEn ? "INTERIM / CRISIS / SCALE" : "INTERIM / KRIZE / SCALE", color: palettes.industrial[1] },
        { name: isEn ? "System Dynamics" : "Systémová dynamika", level: 88, meta: isEn ? "SYSTEM DYNAMICS / FLOW / OPS" : "SYS_DYNAMIKA / FLOW / OPS", color: palettes.industrial[2] },
        { name: isEn ? "Logistics Opt" : "Optimalizace logistiky", level: 94, meta: "SAP MES / POWER BI / ETL", color: palettes.industrial[3] }
      ],
      stack: [
        { label: "Lean 6Σ", color: palettes.industrial[0] },
        { label: isEn ? "System Dynamics" : "Systémová dynamika", color: palettes.industrial[1] },
        { label: "VSM", color: palettes.industrial[2] },
        { label: "SAP MES", color: palettes.industrial[3] },
        { label: isEn ? "Process Mining" : "Procesní mining", color: palettes.industrial[0] },
        { label: "Power BI", color: palettes.industrial[1] }
      ]
    },
    {
      id: 'digital',
      category: isEn ? "DIGITAL_ARCHITECTURE" : "DIGITÁLNÍ_ARCHITEKTURA",
      icon: <Layout className="w-6 h-6" />,
      tag: tags.infra,
      skills: [
        { name: "Fullstack", level: 80, meta: "NEXTJS / TS / PRISMA / POSTGRES", color: palettes.digital[0] },
        { name: isEn ? "Graph DBs" : "Grafové DB", level: 92, meta: isEn ? "NEO4J / GRAPH TILES" : "NEO4J / GRAPH TILES", color: palettes.digital[1] },
        { name: isEn ? "System Arch" : "Systémová arch.", level: 96, meta: "DDD / GLASS_BOX / API", color: palettes.digital[2] },
        { name: isEn ? "SQL Modeling" : "SQL modelování", level: 90, meta: isEn ? "SQL / ETL / DATA INTEGRITY" : "SQL / ETL / INTEGRITA_DAT", color: palettes.digital[3] }
      ],
      stack: [
        { label: "Next.js", color: palettes.digital[0] },
        { label: "TypeScript", color: palettes.digital[1] },
        { label: "Prisma", color: palettes.digital[2] },
        { label: "PostgreSQL", color: palettes.digital[3] },
        { label: "Neo4j", color: palettes.digital[0] },
        { label: "DDD", color: palettes.digital[1] },
        { label: isEn ? "Graph DB" : "Graf DB", color: palettes.digital[2] }
      ]
    },
    {
      id: 'tactical',
      category: isEn ? "TACTICAL_HARDWARE" : "TAKTICKÝ_HARDWARE",
      icon: <Activity className="w-6 h-6" />,
      tag: tags.proto,
      skills: [
        { name: "CAD / Fusion 360", level: 82, meta: isEn ? "CAD / F360 / PROTO" : "CAD / F360 / PROTO", color: palettes.tactical[0] },
        { name: isEn ? "Mechatronics" : "Mechatronika", level: 65, meta: "MECH / ROS2 / VDA5050", color: palettes.tactical[1] },
        { name: isEn ? "Rapid Prototyping" : "Rychlé prototypy", level: 63, meta: "RAPID / POC / MANUF", color: palettes.tactical[2] },
        { name: isEn ? "Industrial IoT" : "Průmyslové IoT", level: 80, meta: isEn ? "IOT / MQTT / SENSOR NETS" : "IOT / MQTT / SENZORY", color: palettes.tactical[3] }
      ],
      stack: [
        { label: "CAD/F360", color: palettes.tactical[0] },
        { label: isEn ? "Mechatronics" : "Mechatronika", color: palettes.tactical[1] },
        { label: "VDA 5050", color: palettes.tactical[2] },
        { label: "ROS2", color: palettes.tactical[3] },
        { label: "MQTT", color: palettes.tactical[0] },
        { label: isEn ? "Industrial IoT" : "Průmyslové IoT", color: palettes.tactical[1] }
      ]
    }
  ];
};

export const Capabilities: React.FC<CapabilitiesProps> = ({ mode, lang }) => {
  const accentColor = mode === 'raw' ? '#8f3a52' : '#5a7696';
  const data = getCapabilitiesData(lang, mode);
  const isEn = lang === 'en';
  const headingClass = "text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-white/80";
  const labels = isEn
    ? {
        scanState: "SCAN_STATE: NOMINAL",
        integrity: "INTEGRITY: 94.8%",
        load: "LOAD: 88%",
        signature: "SIGNATURE_STACK",
        paramId: "PARAM_ID",
        staging: "STAGING_AUTHORIZED",
        hardwareRevision: "HARDWARE_REVISION: R2-B",
        manualOverride: "MANUAL_OVERRIDE: DISABLED"
      }
    : {
        scanState: "STAV_SKENU: NOMINÁLNÍ",
        integrity: "INTEGRITA: 94.8%",
        load: "ZÁTĚŽ: 88%",
        signature: "SIGNATURNÍ_STACK",
        paramId: "PARAM_ID",
        staging: "STAGING_AUTORIZOVÁNO",
        hardwareRevision: "REVIZE_HARDWARU: R2-B",
        manualOverride: "MANUÁLNÍ_OVERRIDE: VYPNUTO"
      };
  const seoIntro = isEn
    ? [
        'Capability matrix spans AI engineering, OSINT fusion, systems architecture, and industrial operations.',
        'Each capability is mapped to measurable performance indicators and tool stacks.',
        'Use this section to assess strategic readiness and integration fit.'
      ]
    : [
        'Matice schopností zahrnuje AI inženýrství, OSINT fúzi, architekturu systémů a průmyslové operace.',
        'Každá schopnost je mapována na měřitelné výstupy a nástrojový stack.',
        'Sekce slouží k posouzení strategické připravenosti a integračního fitu.'
      ];

  return (
    <div className="max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      <h1 className="sr-only">{isEn ? 'Capabilities' : 'Schopnosti'}</h1>
      <div className="max-w-3xl space-y-3 text-[11px] md:text-xs opacity-70 leading-relaxed mb-12">
        {seoIntro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {/* HEADER WITH SCANLINE EFFECT */}
      <div className="mb-24 relative overflow-hidden group">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-60">
              <Terminal className="w-3 h-3" />
              <span>CAPABILITY_SYNC_PROTOCOL_2.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
              {isEn ? 'SKILL_MATR' : 'MATICE_'}
              <span style={{ color: accentColor }}>{isEn ? 'IX' : 'SCHOPNOSTÍ'}</span>
            </h2>
            <div className="flex gap-4 text-[9px] font-mono opacity-70 uppercase tracking-widest">
              <span>{labels.scanState}</span>
              <span className="animate-pulse">|</span>
              <span>{labels.integrity}</span>
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
        <div className="md:col-span-8 group relative border border-white/10 bg-[#081426]/95 backdrop-blur-xl p-6 sm:p-8 md:p-12 industrial-clip overflow-hidden transition-all duration-500 hover:border-white/30 card-hover">
          <div className="absolute top-0 left-0 w-4 h-full transition-all duration-500 group-hover:w-4" style={{ backgroundColor: data[0].id === 'neural' && mode === 'raw' ? '#8f3a52' : accentColor }} />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 relative z-10">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="p-3 md:p-4 bg-white/5 border border-white/10 shrink-0" style={{ color: accentColor }}>
                  {data[0].icon}
                </div>
                <div className="min-w-0">
                  <h3 className={`${headingClass} break-words leading-tight`}>
                    {data[0].category}
                  </h3>
                  <p className="text-[9px] md:text-[10px] font-mono opacity-60 tracking-[0.2em] md:tracking-[0.3em] mt-1">{data[0].tag}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                {data[0].skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3 md:space-y-4 group/skill">
                    <div className="flex justify-between items-baseline gap-2">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest group-hover/skill:text-white transition-colors truncate">{skill.name}</span>
                        <span className="text-[8px] md:text-[9px] font-mono opacity-50 mt-1 uppercase italic tracking-tighter truncate">{skill.meta}</span>
                      </div>
                      <span className="text-[10px] md:text-[11px] font-mono font-bold shrink-0" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-white/5 relative overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="text-[8px] font-mono opacity-60 uppercase tracking-[0.35em]">{labels.signature}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data[0].stack.map((item) => (
                    <span
                      key={item.label}
                      className="text-[8px] font-mono uppercase tracking-widest px-3 py-1 border bg-white/[0.02]"
                      style={{ color: item.color, borderColor: `${item.color}55`, boxShadow: `0 0 10px ${item.color}22` }}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NEURAL LOAD VISUALIZER (Only on large card) */}
            <div className="hidden lg:flex w-48 flex-col justify-center items-center border-l border-white/10 pl-12 gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 rounded-full" />
                <Brain className="w-12 h-12 opacity-20" />
                <div className="absolute bottom-[-20px] text-[10px] font-mono opacity-60">{labels.load}</div>
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
        <div className="md:col-span-4 group relative border border-white/10 bg-[#081426]/95 backdrop-blur-md p-6 sm:p-8 industrial-clip hover:border-white/30 transition-colors card-hover">
          <div className="flex items-center gap-4 mb-8 md:mb-10 border-b border-white/10 pb-6">
            <div className="p-2 sm:p-3 bg-white/5 border border-white/10 shrink-0" style={{ color: accentColor }}>
              {data[1].icon}
            </div>
            <h3 className={`${headingClass} leading-tight`}>{data[1].category}</h3>
          </div>
          <div className="space-y-8 md:space-y-10">
            {data[1].skills.map((skill, idx) => (
              <div key={idx} className="relative pl-6 border-l-4 border-white/5 hover:border-white/20 transition-all group/s" style={{ borderLeftColor: skill.color }}>
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest truncate">{skill.name}</span>
                  <span className="text-[9px] sm:text-[10px] font-mono opacity-60 shrink-0" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/5 overflow-hidden">
                   <div className="h-full transition-all duration-1000" style={{ width: `${skill.level}%`, backgroundColor: skill.color }} />
                </div>
                <div className="mt-2 text-[7px] sm:text-[8px] font-mono opacity-20 uppercase tracking-tighter group-hover/s:opacity-70 transition-opacity truncate">{labels.paramId}: {skill.meta}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-[8px] font-mono opacity-60 uppercase tracking-[0.35em]">{labels.signature}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data[1].stack.map((item) => (
                <span
                  key={item.label}
                  className="text-[8px] font-mono uppercase tracking-widest px-2.5 py-1 border bg-white/[0.02]"
                  style={{ color: item.color, borderColor: `${item.color}55` }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TERTIARY MODULE - BLUEPRINT STYLE */}
        <div className="md:col-span-5 group relative border border-white/10 bg-[#081426]/95 backdrop-blur-md p-6 sm:p-8 industrial-clip hover:border-white/30 transition-colors card-hover">
          <div className="absolute top-4 right-4 text-[7px] md:text-[9px] font-mono opacity-10 uppercase tracking-widest italic hidden sm:block">NODE_REF: 09-ARCH</div>
          <h3 className={`${headingClass} mb-8 md:mb-12 flex items-center gap-3`}>
            <Zap className="w-3 h-3 md:w-4 md:h-4" style={{ color: accentColor }} /> {data[2].category}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {data[2].skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-6 p-3 md:p-4 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 border border-white/20 bg-white/5 flex items-center justify-center font-mono"
                  style={{ boxShadow: `0 0 12px ${accentColor}55` }}
                >
                  <div className="text-[12px] md:text-[14px] font-bold tracking-widest" style={{ color: skill.color }}>
                    {skill.level}<span className="text-[8px] md:text-[9px] opacity-70">%</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest mb-1 text-white/90 truncate">{skill.name}</div>
                  <div className="text-[9px] md:text-[10px] font-mono opacity-70 uppercase tracking-tighter truncate">{skill.meta}</div>
                </div>
                <div className="hidden sm:flex gap-1 shrink-0">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white/10" style={{ backgroundColor: i < 2 ? skill.color : '' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-[8px] font-mono opacity-60 uppercase tracking-[0.35em]">{labels.signature}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {data[2].stack.map((item) => (
                <span
                  key={item.label}
                  className="text-[8px] font-mono uppercase tracking-widest px-2.5 py-1 border bg-white/[0.02]"
                  style={{ color: item.color, borderColor: `${item.color}55` }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QUATERNARY MODULE - TACTICAL HARDWARE */}
        <div className="md:col-span-7 group relative border border-white/10 bg-[#081426]/95 p-6 sm:p-8 industrial-clip hover:border-white/30 transition-all overflow-hidden card-hover">
          <div className="absolute top-0 left-0 w-4 h-full" style={{ backgroundColor: accentColor }} />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0.8)_55%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[length:24px_100%]" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 border border-white/10 shrink-0" style={{ color: accentColor }}>
                {data[3].icon}
              </div>
              <div>
                  <h3 className={`${headingClass} leading-tight`}>
                    {data[3].category}
                  </h3>
                  <div className="text-[9px] font-mono opacity-60 mt-1 uppercase tracking-widest">{labels.staging}</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest px-3 py-1 border border-white/10 bg-white/5 opacity-60">
                <Shield className="w-3 h-3" />
                {labels.staging}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data[3].skills.map((skill, idx) => (
                <div key={idx} className="relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all p-5 industrial-clip group/skill">
                  <div className="absolute top-3 right-4 text-[7px] font-mono opacity-50 uppercase tracking-widest">NODE_0{idx + 1}</div>
                  
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/90 truncate">{skill.name}</div>
                      <div className="text-[8px] font-mono opacity-60 uppercase tracking-widest mt-1">UNIT_%</div>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-2xl md:text-3xl font-mono font-bold leading-none" style={{ color: skill.color }}>
                        {skill.level}
                      </div>
                      <div className="text-[8px] font-mono opacity-60 uppercase tracking-widest pb-1">UNIT_%</div>
                    </div>
                  </div>

                  <div className="mt-4 h-[2px] bg-white/10 overflow-hidden">
                    <div className="h-full transition-all duration-700" style={{ width: `${skill.level}%`, backgroundColor: skill.color }} />
                  </div>
                  <div className="mt-3 flex gap-1 opacity-50">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-1 w-2 bg-white/10" style={{ backgroundColor: i < Math.round(skill.level / 10) ? skill.color : undefined }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[8px] font-mono opacity-60 uppercase tracking-[0.35em]">{labels.signature}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {data[3].stack.map((item) => (
                  <span
                    key={item.label}
                    className="text-[8px] font-mono uppercase tracking-widest px-2.5 py-1 border bg-white/[0.02]"
                    style={{ color: item.color, borderColor: `${item.color}55` }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[8px] font-mono opacity-50 uppercase tracking-[0.25em]">
              <span>{labels.hardwareRevision}</span>
              <span>{labels.manualOverride}</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CALLOUT - REWORKED */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 border border-white/5 bg-[#081426]/95 industrial-clip text-center flex flex-col items-center justify-center gap-2 card-hover-soft">
          <Database className="w-5 h-5 opacity-60 mb-2" />
          <span className="text-[9px] font-mono opacity-50 uppercase tracking-[0.2em]">Data_Lake_Integrity</span>
          <span className="text-sm font-bold tracking-widest">99.98% OK</span>
        </div>
        <div className="p-8 border-2 border-dashed border-white/10 bg-white/[0.02] text-center flex flex-col justify-center gap-2 group hover:bg-white/[0.05] transition-all sm:col-span-2 md:col-span-1 card-hover-soft">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-80 group-hover:text-white">
            {isEn ? 'SYSTEM_SYNERGY_NOMINAL' : 'SYNERGIE_SYSTÉMU_NOMINÁLNÍ'}
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-2 md:w-3 h-1 ${i < 8 ? 'bg-slate-500' : 'bg-white/10'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s`, backgroundColor: i < 8 ? accentColor : '' }} />
            ))}
          </div>
        </div>
        <div className="p-6 border border-white/5 bg-[#081426]/95 industrial-clip text-center flex flex-col items-center justify-center gap-2 hidden md:flex card-hover-soft">
          <Shield className="w-5 h-5 opacity-60 mb-2" />
          <span className="text-[9px] font-mono opacity-50 uppercase tracking-[0.2em]">Security_Layer</span>
          <span className="text-sm font-bold tracking-widest">ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
};
