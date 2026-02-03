
import React, { useState, useCallback } from 'react';
import { BootSequence } from './components/BootSequence';
import { NeuralNetwork } from './components/NeuralNetwork';
import { ProjectCard } from './components/ProjectCard';
import { Diagnostics } from './components/Diagnostics';
import { Archive } from './components/Archive';
import { Capabilities } from './components/Capabilities';
import { Resonance } from './components/Resonance';
import { TerminalNavigation } from './components/TerminalNavigation';
import { ModeToggle } from './components/ModeToggle';
import { 
  Shield, Zap, Cpu, Mail, Globe, Layout, Truck, 
  Activity, Eye, Clock, MapPin, Phone, Menu, X, Terminal, Binary, Bot
} from 'lucide-react';

export type AppMode = 'professional' | 'raw';
export type Language = 'en' | 'cs';

const translations = {
  en: {
    nav: { CORE: 'CORE', MODULES: 'MODULES', CAPABILITIES: 'CAPABILITIES', ARCHIVE: 'ARCHIVE', DIAGNOSTICS: 'DIAGNOSTICS', RESONANCE: 'RESONANCE', SIGNAL: 'SIGNAL' },
    hud: { status: 'System Status', stable: 'ARCHITECT_NOMINAL', unstable: 'BUNKER_SHIELDED', mode: 'MODE', stableMode: 'STABLE', unstableMode: 'UNSTABLE' },
    hero: { 
      tagline: 'System Architect. AI Engineer. Strategic Systems Auditor.',
      desc_prof: 'DISRUPTING CONVENTIONAL SYSTEMS WITH AI & LOGIC',
      desc_raw: 'SOVEREIGNTY THROUGH STRATEGY & DEFENSE',
      logic_title: 'The Builder (Logic)',
      chaos_title: 'The Dragon (Chaos)',
      logic_desc: 'Structural integrity specialist. Lean Six Sigma mastery applied to digital and physical architectures. Forged in industrial logistics.',
      chaos_desc: 'High-sensitivity defense protocol. Operating in "Bunker Mode" to ensure system integrity and information sovereignty. Zero noise tolerance.'
    },
    sections: {
      sys_arch: 'Category_I: Systems_Architecture & AI Intelligence',
      field_ops: 'Category_II: Field_Operations & Industrial Engineering',
      signal_title: 'Encrypted Signal Channel',
      signal_name: 'Origin ID',
      signal_protocol: 'Protocol',
      signal_payload: 'Payload',
      signal_button: 'Initiate Transmission'
    },
    projects: {
      noxis: { 
        sub: 'Autonomous Intelligence Engine', 
        desc: 'Advanced digital immune system for information integrity. Integrates satellite imagery, darknet OSINT, and drone telemetry through multi-sensor fusion to detect and neutralize hybrid security threats in real-time.' 
      },
      archeon: { 
        sub: 'Predictive State Framework', 
        desc: 'Digital Twin of an entire state entity. Utilizes Neo4j graph databases and Causal AI to simulate legislative impacts, infrastructure load, and societal mood before real-world implementation. A Single Source of Truth.' 
      },
      control: { 
        sub: 'Transparency Governance OS', 
        desc: "Management platform replacing agency 'black boxes' with a real-time 'glass box'. Provides total auditability of HR, sales pipelines, and financial flows using a single-value-flow logic for interim scaling." 
      },
      mecha: { 
        sub: 'Industrial Interim Operations', 
        desc: 'Greenfield construction and interim scaling of logistics for AI data centers. Orchestrating international material flows through interdisciplinary collaboration using Lean Six Sigma and system dynamics.' 
      },
      lit: { 
        sub: 'Automotive System Integration', 
        desc: 'Logistics framework development for Volkswagen ID models (Zwickau). Implementation of complex SQL models, VSM mapping, and MES integration to synchronize multi-layered industrial material flows.' 
      },
      robotics: { 
        sub: 'ROBOTICS PROTOCOL', 
        desc: 'Standardizing AGV communication logic. Engineered a custom logic layer based on a VDA 5050 fork to orchestrate heterogeneous robot fleets. Designed to eliminate manufacturer silos and establish a unified command protocol for complex industrial ecosystems.' 
      }
    }
  },
  cs: {
    nav: { CORE: 'JÁDRO', MODULES: 'MODULY', CAPABILITIES: 'SCHOPNOSTI', ARCHIVE: 'ARCHIV', DIAGNOSTIKA: 'DIAGNOSTIKA', RESONANCE: 'RESONANCE', SIGNÁL: 'SIGNÁL' },
    hud: { status: 'Stav systému', stable: 'ARCHITEKT_NOMINÁLNÍ', unstable: 'BUNK_STÍNĚNÝ', mode: 'MÓD', stableMode: 'STABILNÍ', unstableMode: 'NESTABILNÍ' },
    hero: { 
      tagline: 'Systémový architekt. AI inženýr. Auditor strategických systémů.',
      desc_prof: 'NARUŠOVÁNÍ KONVENČNÍCH SYSTÉMŮ POMOCÍ AI A LOGIKY',
      desc_raw: 'SUVERENITA SKRZE STRATEGII A OBRANU',
      logic_title: 'Stavitel (Logika)',
      chaos_title: 'Drak (Chaos)',
      logic_desc: 'Specialista na strukturální integritu. Lean Six Sigma aplikovaná na digitální i fyzické architektury. Kovaný v průmyslové logistice.',
      chaos_desc: 'Obranný protokol s vysokou citlivostí. Provoz v "Bunker módu" pro zajištění integrity systému a informační suverenity. Nulová tolerance šumu.'
    },
    sections: {
      sys_arch: 'Kategorie_I: Architektura systémů & AI Inteligence',
      field_ops: 'Kategorie_II: Polní operace & Průmyslové inženýrství',
      signal_title: 'Šifrovaný signální kanál',
      signal_name: 'ID Původu',
      signal_protocol: 'Protokol',
      signal_payload: 'Obsah zprávy',
      signal_button: 'Zahájit přenos'
    },
    projects: {
      noxis: { 
        sub: 'Autonomní zpravodajský engine', 
        desc: 'Pokročilý digitální imunitní systém pro integritu informací. Integruje satelitní snímky, darknet OSINT a telemetrii z dronů pomocí fúze dat pro detekci a neutralizaci hybridních hrozeb v reálném čase.' 
      },
      archeon: { 
        sub: 'Rámec prediktivního vládnutí', 
        desc: 'Digitální dvojče státního celku. Využívá grafové databáze Neo4j a Causal AI k simulaci dopadů legislativy, vytížení infrastruktury a společenských nálad ještě před jejich zavedením. Jediný zdroj pravdy.' 
      },
      control: { 
        sub: 'Governance OS pro transparentnost', 
        desc: "Manažerská platforma nahrazující agenturní 'černé skříňky' real-time 'skleněnou skříňkou'. Poskytuje totální auditovatelnost HR, prodejních procesů a financí pomocí logiky toku jedné hodnoty pro interim škálování." 
      },
      mecha: { 
        sub: 'Interim operace v průmyslu', 
        desc: 'Výstavba na zelené louce a interim škálování logistiky pro AI datacentra. Orchestrace mezinárodních materiálových toků v rámci úzké mezioborové spolupráce za využití Lean Six Sigma a systémové dynamiky.' 
      },
      lit: { 
        sub: 'Integrace automotive systémů', 
        desc: 'Vývoj logistických rámců pro modely Volkswagen ID (Zwickau). Implementace komplexních SQL modelů, VSM mapování a MES integrace pro synchronizaci vícevrstvých průmyslových materiálů.' 
      },
      robotics: { 
        sub: 'ROBOTICKÝ PROTOKOL', 
        desc: 'Standardizace komunikační logiky AGV. Vývoj vlastní logické vrstvy založené na forku VDA 5050 pro orchestraci heterogenních robotických flotil. Navrženo pro eliminaci proprietárních sil výrobců a vytvoření jednotného řídicího protokolu pro komplexní ekosystémy.' 
      }
    }
  }
};

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [mode, setMode] = useState<AppMode>('professional');
  const [language, setLanguage] = useState<Language>('cs');
  const [currentSection, setCurrentSection] = useState('CORE');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBootComplete = useCallback(() => setIsBooting(false), []);
  const primaryColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const t = translations[language];

  const sections: Record<string, React.ReactNode> = {
    CORE: (
      <section className="space-y-12 animate-in fade-in duration-1000 max-w-7xl mx-auto">
        <div className="relative group overflow-hidden border-b border-white/10 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40 uppercase">
                <Terminal className="w-3 h-3" />
                <span>IDENTITY_INITIALIZATION_PROTOCOL</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
                ADAM KARL <span style={{ color: primaryColor }}>LUCIEN</span>
              </h1>
              <p className="text-xl md:text-3xl font-light opacity-80 leading-tight max-w-3xl border-l-4 pl-8 py-2" style={{ borderColor: primaryColor }}>
                {t.hero.tagline} 
                <span className={`block font-bold mt-4 text-sm md:text-base tracking-[0.2em] transition-colors duration-500`} style={{ color: primaryColor }}>
                  {mode === 'raw' ? t.hero.desc_raw : t.hero.desc_prof}
                </span>
              </p>
            </div>
            <div className="hidden lg:block text-right">
               <div className="text-[10px] font-mono opacity-20 leading-loose">
                  ARCHTYPE: {mode === 'raw' ? 'DRAGON_DEFENSE' : 'BUILDER_LOGIC'}<br />
                  NODE_ID: 0x25_LUCIEN<br />
                  STATE: AUTHORIZED
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none select-none">
             <Binary className="w-64 h-64" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          <div className="md:col-span-8 p-10 border border-white/10 bg-black/40 backdrop-blur-md industrial-clip relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: primaryColor }} />
            <h3 className="font-bold mb-6 uppercase flex items-center gap-3 transition-colors text-sm tracking-[0.3em]" style={{ color: primaryColor }}>
              <Zap className="w-5 h-5" /> {mode === 'raw' ? t.hero.chaos_title : t.hero.logic_title}
            </h3>
            <p className="text-base md:text-lg opacity-70 leading-relaxed font-light">
              {mode === 'raw' ? t.hero.chaos_desc : t.hero.logic_desc}
            </p>
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-30 text-[9px] font-mono tracking-widest uppercase">
               <span>Integrity: High</span>
               <span>Sensitivity: Extreme</span>
               <span>Mode: {mode}</span>
               <span>Reset: Success</span>
            </div>
          </div>
          
          <div className="md:col-span-4 p-10 border border-white/10 bg-black/40 backdrop-blur-md industrial-clip relative overflow-hidden group hover:border-white/20 transition-all">
            <h3 className="font-bold mb-8 uppercase flex items-center gap-3 transition-colors text-sm tracking-[0.3em]" style={{ color: primaryColor }}>
              <Shield className="w-5 h-5" /> OPERATIONS_BASE
            </h3>
            <div className="space-y-8 opacity-80 text-xs font-mono">
              <div className="flex flex-col gap-2">
                <span className="opacity-30 text-[9px]">GEOGRAPHIC_NODES</span>
                <div className="flex items-center gap-3 text-white/70"><MapPin className="w-4 h-4 opacity-40" /> PRAGUE / SHERIDAN / MECHERNICH</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-30 text-[9px]">ENCRYPTED_SIGNAL</span>
                <div className="flex items-center gap-3 text-white/70"><Phone className="w-4 h-4 opacity-40" /> +420 728 041 700</div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-30 text-[9px]">TEMPORAL_OFFSET</span>
                <div className="flex items-center gap-3 text-white/70"><Clock className="w-4 h-4 opacity-40" /> UTC+1 / MST / UTC+1</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    MODULES: (
      <section className="space-y-32 animate-in slide-in-from-bottom-10 duration-1000 pb-20 max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40">
                <Terminal className="w-3 h-3" />
                <span>INIT_SEQUENCE: ARCHITECT_CORE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                {language === 'en' ? 'CATEGORY' : 'KATEGORIE'}
                <span style={{ color: primaryColor }}>_I</span>
              </h2>
              <p className="text-xs font-mono opacity-40 mt-4 tracking-widest uppercase">{t.sections.sys_arch}</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1 opacity-20">
               <span className="text-[8px] font-mono uppercase tracking-widest">ENCRYPTED_PAYLOAD_READY</span>
               <div className="flex gap-1">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-white"></div>
                  ))}
               </div>
            </div>
            {/* Animated Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
              <div className="w-full h-0.5 bg-white animate-[scan_4s_infinite]" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12 lg:col-span-7 h-full">
               <ProjectCard title="NOXIS" subtitle={t.projects.noxis.sub} description={t.projects.noxis.desc} techStack={["Python", "FastAPI", "Docker", "CV", "OSINT"]} accentColor="#ff003c" icon={<Eye className="w-6 h-6" />} archetype="THE DRAGON" mode={mode} lang={language} />
            </div>
            <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
               <ProjectCard title="ARCHΞON" subtitle={t.projects.archeon.sub} description={t.projects.archeon.desc} techStack={["Neo4j", "Causal AI", "Sim Engines", "LOD Arch"]} accentColor="#6366f1" icon={<Globe className="w-6 h-6" />} archetype="THE BUILDER" mode={mode} lang={language} />
            </div>
            <div className="md:col-span-6 lg:col-span-12">
               <ProjectCard title="LUCIEN CONTROL" subtitle={t.projects.control.sub} description={t.projects.control.desc} techStack={["Next.js", "TypeScript", "Prisma", "DDD"]} accentColor="#ffffff" icon={<Layout className="w-6 h-6" />} archetype="THE BUILDER" mode={mode} lang={language} />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-12 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40">
                <Terminal className="w-3 h-3" />
                <span>INIT_SEQUENCE: FIELD_OPERATIONS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                {language === 'en' ? 'CATEGORY' : 'KATEGORIE'}
                <span style={{ color: primaryColor }}>_II</span>
              </h2>
              <p className="text-xs font-mono opacity-40 mt-4 tracking-widest uppercase">{t.sections.field_ops}</p>
            </div>
            <div className="text-[10px] font-mono opacity-40 animate-pulse hidden md:block uppercase tracking-widest">
               SYSTEM_ACTIVE_NODES: 03
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="DEUTSCHE MECHATRONICS" subtitle={t.projects.mecha.sub} description={t.projects.mecha.desc} techStack={["Lean 6Σ", "System Dynamics", "Operations", "Collaboration"]} accentColor="#6366f1" icon={<Activity className="w-6 h-6" />} archetype="THE BUILDER" mode={mode} lang={language} />
            <ProjectCard title="L.I.T. GRUPPE" subtitle={t.projects.lit.sub} description={t.projects.lit.desc} techStack={["SQL", "VSM", "SAP/MES", "Industrial Eng"]} accentColor="#6366f1" icon={<Truck className="w-6 h-6" />} archetype="THE BUILDER" mode={mode} lang={language} />
            <ProjectCard title="VDA5050 FORK" subtitle={t.projects.robotics.sub} description={t.projects.robotics.desc} techStack={["VDA 5050", "ROS2", "MQTT", "JSON Schema"]} accentColor="#ff9800" icon={<Bot className="w-6 h-6" />} archetype="THE BUILDER" mode={mode} lang={language} />
          </div>
        </div>
      </section>
    ),
    CAPABILITIES: <Capabilities mode={mode} lang={language} />,
    ARCHIVE: <Archive mode={mode} lang={language} />,
    DIAGNOSTICS: <Diagnostics mode={mode} lang={language} />,
    RESONANCE: <Resonance mode={mode} lang={language} />,
    SIGNAL: (
      <section className="max-w-3xl mx-auto animate-in fade-in duration-1000 px-4 md:px-0">
        <div className="mb-16 border-b border-white/10 pb-12">
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40 uppercase">
              <Mail className="w-3 h-3" />
              <span>SIGNAL_TRANSMISSION_PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
              {language === 'en' ? 'CONTACT' : 'KONTAKT'}
              <span style={{ color: primaryColor }}>_HUB</span>
            </h2>
        </div>
        
        <div className="border border-white/10 bg-black/60 backdrop-blur-xl p-8 md:p-12 industrial-clip relative">
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{t.sections.signal_name}</label>
                <input type="text" placeholder="USER_IDENTIFICATION" className="w-full bg-white/5 border border-white/10 p-5 focus:outline-none focus:border-indigo-500 transition-all font-mono text-xs tracking-widest uppercase" />
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{t.sections.signal_protocol}</label>
                <select className="w-full bg-white/5 border border-white/10 p-5 focus:outline-none focus:border-indigo-500 appearance-none font-mono text-xs tracking-widest uppercase">
                  <option className="bg-black">COLLABORATION_R&D</option>
                  <option className="bg-black">SYSTEM_AUDIT</option>
                  <option className="bg-black">DEFENSE_INQUIRY</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{t.sections.signal_payload}</label>
              <textarea rows={6} placeholder="INPUT_DATA_STREAM" className="w-full bg-white/5 border border-white/10 p-5 focus:outline-none focus:border-indigo-500 transition-all font-mono text-xs tracking-widest uppercase" />
            </div>
            <button className={`w-full py-6 font-bold uppercase tracking-[0.4em] transition-all relative overflow-hidden group border border-white/10 hover:border-white/40`} style={{ backgroundColor: primaryColor, color: 'white' }}>
              <span className="relative z-10">{t.sections.signal_button}</span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 opacity-40 text-[9px] font-mono uppercase tracking-[0.2em]">
             <span>Direct: adam.karl.lucien@luciensystems.io</span>
             <span className="animate-pulse">Waiting for signal...</span>
          </div>
        </div>
      </section>
    )
  };

  if (isBooting) return <BootSequence onComplete={handleBootComplete} />;

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-1000 ${mode === 'raw' ? 'bg-[#080000]' : 'bg-[#030303]'}`}>
      <NeuralNetwork mode={mode} />
      
      {/* HUD OVERLAY - Controlled Transparency */}
      <div className="fixed top-0 left-0 w-full z-[60] pointer-events-none">
        {/* Transparent Background on desktop, solid-ish on mobile for clarity */}
        <div className="absolute inset-0 bg-[#030303]/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 border-b border-white/5 h-[80px] md:h-[112px] pointer-events-none transition-all duration-500" />
        
        <div className="relative p-4 md:p-8 flex justify-between items-start">
          <div className="space-y-2 hidden md:block pointer-events-auto">
            <div className="text-[11px] font-bold opacity-30 uppercase tracking-[0.5em]">Lucien_OS_v2.0.5</div>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${mode === 'raw' ? 'bg-[#ff003c]' : 'bg-[#6366f1]'} animate-pulse shadow-[0_0_8px_currentColor]`}></div>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">{t.hud.status}: {mode === 'raw' ? t.hud.unstable : t.hud.stable}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pointer-events-auto w-full md:w-auto justify-between md:justify-end">
            <button 
              className="md:hidden p-3 bg-white/5 border border-white/10 rounded-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X style={{ color: primaryColor }} /> : <Menu style={{ color: primaryColor }} />}
            </button>
            
            <div className="flex gap-4 items-center">
              <div className="flex border border-white/10 bg-black/60 backdrop-blur-md p-1 industrial-clip">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-[10px] font-bold font-mono tracking-widest transition-all ${language === 'en' ? 'bg-indigo-500/20 text-white border-b-2 border-indigo-500' : 'text-white/30 hover:text-white/60'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('cs')}
                  className={`px-3 py-1.5 text-[10px] font-bold font-mono tracking-widest transition-all ${language === 'cs' ? 'bg-indigo-500/20 text-white border-b-2 border-indigo-500' : 'text-white/30 hover:text-white/60'}`}
                >
                  CS
                </button>
              </div>
              <ModeToggle mode={mode} lang={language} onToggle={() => setMode(m => m === 'professional' ? 'raw' : 'professional')} />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 md:px-8 pt-28 md:pt-48 pb-40 md:pb-64 relative z-10 min-h-screen">
        {sections[currentSection]}
      </main>

      {/* MOBILE TACTICAL MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#030303]/98 backdrop-blur-2xl flex flex-col p-8 md:hidden animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-16">
            <div className="text-[10px] font-mono opacity-40 uppercase tracking-[0.5em]">System_Node_Map</div>
            <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8 opacity-60" /></button>
          </div>
          <div className="flex flex-col gap-4">
            {Object.keys(t.nav).map((key) => (
              <button
                key={key}
                onClick={() => { setCurrentSection(key); setIsMobileMenuOpen(false); }}
                className={`w-full py-6 px-8 industrial-clip border text-left flex justify-between items-center group transition-all ${currentSection === key ? 'bg-white/10 border-white/30' : 'border-white/5 bg-white/[0.02]'}`}
              >
                <span className="text-xl font-bold tracking-widest" style={{ color: currentSection === key ? primaryColor : 'white' }}>{t.nav[key as keyof typeof t.nav]}</span>
                <span className="text-[9px] font-mono opacity-20 uppercase">Node_Index: 0{Object.keys(t.nav).indexOf(key)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TACTICAL NAVIGATION DOCK (Desktop) */}
      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block px-8 pb-12">
        <div className="max-w-6xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 p-6 industrial-clip shadow-2xl">
          <TerminalNavigation currentSection={currentSection} onNavigate={setCurrentSection} mode={mode} lang={language} />
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full py-3 px-8 flex justify-between items-center z-40 bg-black/90 border-t border-white/5 pointer-events-none text-[8px] md:text-[10px]">
          <div className="opacity-20 font-mono tracking-widest uppercase">© 2026 Lucien Technology</div>
          <div className="opacity-20 font-mono hidden lg:block uppercase tracking-[0.3em]">Signal over Noise // Strategy above Chaos</div>
          <div className="opacity-20 font-mono">LATENCY: 12ms</div>
      </footer>
    </div>
  );
};

export default App;
