
import React, { useState } from 'react';
import { AppMode, Language } from '../App';
import { 
  Terminal, Waves, Cpu, Music, Watch, 
  Moon, Compass, Video, Zap, ExternalLink, ShieldAlert, Play
} from 'lucide-react';

interface ResonanceProps {
  mode: AppMode;
  lang: Language;
}

const getResonanceData = (lang: Language) => {
  const isEn = lang === 'en';
  return {
    categories: [
      {
        id: 'systems',
        title: isEn ? "SYSTEM_DYNAMICS" : "SYSTÉMOVÁ_DYNAMIKA",
        icon: <Cpu className="w-5 h-5" />,
        items: [
          { 
            name: isEn ? "AI & Automation" : "AI a Automatizace", 
            desc: isEn ? "Heuristic neural nets, computer vision, and process automation." : "Fascinace umělou inteligencí, počítačovým viděním a automatizací procesů." 
          },
          { 
            name: isEn ? "OSINT & Surveillance" : "OSINT a Surveillance", 
            desc: isEn ? "Technical surveillance, open-source intelligence, and security architecture." : "Zájem o technickou surveillance, zpravodajství z otevřených zdrojů a bezpečnostní architekturu." 
          },
          { 
            name: isEn ? "Logistics & Optimization" : "Logistika a Optimalizace", 
            desc: isEn ? "Process flow mastery, Lean Six Sigma, and industrial engineering." : "Procesní optimalizace, logistické toky a průmyslové inženýrství." 
          }
        ]
      },
      {
        id: 'inner',
        title: isEn ? "THE_INNER_GAME" : "VNITŘNÍ_HRA",
        icon: <Waves className="w-5 h-5" />,
        videoUrl: "https://www.youtube.com/embed/z4tMNB0Qy-U",
        videoLink: "https://www.youtube.com/watch?v=z4tMNB0Qy-U",
        items: [
          { 
            name: isEn ? "Eastern Philosophy" : "Východní filozofie", 
            desc: isEn ? "Long-term mastery of Tai Chi, meditation, and mindfulness protocols." : "Dlouhodobý zájem o Tai Chi, meditaci a mindfulness." 
          },
          { 
            name: isEn ? "Human Potential" : "Lidský potenciál", 
            desc: isEn ? "Exploring energy systems, cognitive development, and conscious leadership." : "Zkoumání energetických systémů těla, kognitivního rozvoje a vědomého leadershipu." 
          },
          { 
            name: isEn ? "Psychology of Power" : "Psychologie moci", 
            desc: isEn ? "Archetypal dynamics and power structures (The Dragon vs. The Crawler)." : "Archetypy moci a psychologie dynamiky „Drak vs. Rak“." 
          }
        ]
      }
    ]
  };
};

const FlowerOfLifePattern = ({ color }: { color: string }) => (
  <svg width="400" height="400" viewBox="0 0 100 100" className="opacity-10" style={{ color }}>
    <defs>
      <pattern id="flowerOfLife" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="0" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="20" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="10" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="10" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#flowerOfLife)" />
  </svg>
);

export const Resonance: React.FC<ResonanceProps> = ({ mode, lang }) => {
  const [showVideo, setShowVideo] = useState(false);
  
  const primaryColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getResonanceData(lang);
  const isEn = lang === 'en';

  return (
    <div className="max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      {/* SECTION HEADER */}
      <div className="mb-24 relative overflow-hidden group">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4 tracking-[0.4em] opacity-40 uppercase">
              <Terminal className="w-3 h-3" />
              <span>RESONANCE_HUB_v2.3.5_STABLE</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
              {isEn ? 'RESONA' : 'REZO'}
              <span style={{ color: primaryColor }}>{isEn ? 'NCE' : 'NANCE'}</span>
            </h2>
            <div className="flex gap-4 text-[9px] font-mono opacity-50 uppercase tracking-widest">
              <span>PATTERN_SYNC: ACTIVE</span>
              <span className="animate-pulse">|</span>
              <span>AI_NEURAL_LINK: READY</span>
            </div>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-[10px] font-mono opacity-20 uppercase tracking-widest">
                INTERNAL_AFFAIRS<br />
                LOG_ID: 0x7A_FLOW
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* TACTICAL VIDEO MODULE */}
        <div className="md:col-span-8 space-y-8">
          <div className="border border-white/10 bg-black/60 backdrop-blur-xl p-6 md:p-10 industrial-clip relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
            
            <div className="flex flex-col gap-10">
              {/* VIDEO PLAYER */}
              <div className="w-full space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold uppercase tracking-widest flex items-center gap-3">
                    <Video className="w-5 h-5 opacity-40" /> {data.categories[1].title}
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-red-500/20"></div>
                    <div className="w-1 h-3 bg-red-500 animate-pulse"></div>
                  </div>
                </div>

                {/* Technical frame */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative border border-white/10 bg-black/80 industrial-clip p-3 shadow-2xl">
                    <div className="absolute top-2 left-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      STREAM_MODULE: 0x1A
                    </div>
                    <div className="absolute top-2 right-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      SIGNAL: STABLE
                    </div>
                    <div className="absolute bottom-2 left-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      CODEC: H.264 // 1080p
                    </div>
                    <div className="absolute bottom-2 right-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      LATENCY: 18ms
                    </div>

                    <div className="relative aspect-video bg-zinc-950 border border-white/10 overflow-hidden">
                      {!showVideo ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group/cover">
                           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=1000')] bg-cover bg-center grayscale" />
                           <Play className="w-10 h-10 mb-3 transition-transform group-hover/cover:scale-110" style={{ color: primaryColor }} />
                           <div className="relative z-10">
                             <div className="text-[10px] font-bold uppercase tracking-[0.2em]">{isEn ? "INIT_TACTICAL_FEED" : "INICIALIZOVAT_FEED"}</div>
                           </div>
                           <button onClick={() => setShowVideo(true)} className="absolute inset-0 z-20 cursor-pointer" />
                        </div>
                      ) : (
                        <iframe 
                          className="w-full h-full" 
                          src={`${data.categories[1].videoUrl}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
                          title="Movement Analysis"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                      
                      {/* Overlay Scanning Lines */}
                      <div className="absolute inset-0 pointer-events-none border border-white/10">
                        <div className="w-full h-0.5 bg-white/5 absolute top-1/2 -translate-y-1/2 animate-[scan_2s_infinite]" />
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-10 h-[1px] bg-white/20" />
                    <div className="absolute top-0 left-0 w-[1px] h-10 bg-white/20" />
                    <div className="absolute bottom-0 right-0 w-10 h-[1px] bg-white/20" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-10 bg-white/20" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/10 industrial-clip">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="w-4 h-4 opacity-40" style={{ color: primaryColor }} />
                    <span className="text-[9px] font-mono opacity-50 uppercase">{isEn ? "ENCRYPTION_OVERRIDE_ACTIVE" : "OVERRIDE_ŠIFROVÁNÍ_AKTIVNÍ"}</span>
                  </div>
                  <a href={data.categories[1].videoLink} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors" style={{ color: primaryColor }}>
                    <ExternalLink className="w-3 h-3" /> {isEn ? "EXTERNAL_FEED" : "EXTERNÍ_ZDROJ"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="border border-white/10 bg-black/40 p-8 industrial-clip relative group overflow-hidden">
               <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                  <FlowerOfLifePattern color={primaryColor} />
               </div>
               <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4 relative z-10 flex items-center gap-3">
                 <Watch className="w-4 h-4" style={{ color: primaryColor }} /> {isEn ? "CREATION" : "TVORBA"}
               </h3>
               <div className="space-y-6 relative z-10">
                 {isEn ? (
                   <>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">uGear Peaclock</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Design of high-precision mechanical timepieces.</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">Software as Art</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Architecture as aesthetic and functional expression.</div>
                     </div>
                   </>
                 ) : (
                   <>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">uGear Peaclock</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Design precizních mechanických hodinek.</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">Software jako umění</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Architektura jako estetický i funkční výraz.</div>
                     </div>
                   </>
                 )}
               </div>
             </div>

             <div className="border border-white/10 bg-black/40 p-8 industrial-clip relative group">
               <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
                 <Music className="w-4 h-4" style={{ color: primaryColor }} /> LIFESTYLE
               </h3>
               <div className="space-y-6">
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">ACOUSTICS</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">METAL / TRANCE</span>
                 </div>
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">FLOW_STATE</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">SKIING / SWIMMING</span>
                 </div>
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">REGENERATION</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">WINE / SLEEP_PROT.</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* SIDEBAR TACTICS */}
        <div className="md:col-span-4 space-y-8">
          <div className="border border-white/10 bg-black/60 p-8 industrial-clip relative">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-10 border-b border-white/5 pb-6">
               <Compass className="w-4 h-4 inline-block mr-2" style={{ color: primaryColor }} />
               SYSTEM_DYNAMICS
             </h3>
             <div className="space-y-10">
                <div className="relative pl-6 border-l border-white/10">
                   <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: primaryColor }}>AI_AUTOMATION</div>
                   <div className="text-[9px] font-mono opacity-30 italic">"Heuristic neural nets & vision."</div>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                   <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: primaryColor }}>OSINT_OPS</div>
                   <div className="text-[9px] font-mono opacity-30 italic">"Darknet & technical surveillance."</div>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                   <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: primaryColor }}>PROCESS_FLOW</div>
                   <div className="text-[9px] font-mono opacity-30 italic">"Lean 6Σ industrial precision."</div>
                </div>
             </div>
          </div>

          <div className="p-10 border-2 border-dashed border-white/10 bg-white/[0.01] text-center relative overflow-hidden group">
             <Moon className="w-8 h-8 mx-auto opacity-10 mb-8" />
             <p className="text-[11px] font-mono opacity-30 uppercase tracking-[0.2em] leading-loose">
               {isEn 
                 ? "Syncing cognitive performance with deep internal recovery protocols." 
                 : "Synchronizace kognitivního výkonu s hlubokými vnitřními protokoly obnovy."}
             </p>
             <div className="mt-8 flex justify-center gap-2 opacity-10">
                <Zap className="w-3 h-3" />
                <Zap className="w-3 h-3" />
                <Zap className="w-3 h-3" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
