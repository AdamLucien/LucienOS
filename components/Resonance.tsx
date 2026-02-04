
import React, { useState } from 'react';
import { AppMode, Language } from '../App';
import { 
  Terminal, Waves, Cpu, Music, Watch, 
  Moon, Compass, Video, Zap, ExternalLink, Play
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
        videos: [
          {
            id: 'v01',
            label: isEn ? "TAI_CHI" : "TAI_CHI",
            videoUrl: "https://www.youtube.com/embed/z4tMNB0Qy-U",
            videoLink: "https://www.youtube.com/watch?v=z4tMNB0Qy-U"
          },
          {
            id: 'v02',
            label: isEn ? "FEED_02" : "FEED_02",
            videoUrl: "https://www.youtube.com/embed/nxNZTgPzfsg",
            videoLink: "https://youtu.be/nxNZTgPzfsg"
          },
          {
            id: 'v03',
            label: isEn ? "FEED_03" : "FEED_03",
            videoUrl: "https://www.youtube.com/embed/wQdcBRAzgCg",
            videoLink: "https://youtube.com/shorts/wQdcBRAzgCg"
          },
          {
            id: 'v04',
            label: isEn ? "FEED_04" : "FEED_04",
            videoUrl: "https://www.youtube.com/embed/qKuXMyfqWQk",
            videoLink: "https://youtube.com/shorts/qKuXMyfqWQk"
          },
          {
            id: 'v05',
            label: isEn ? "FEED_05" : "FEED_05",
            videoUrl: "https://www.youtube.com/embed/Dk43FiLuZIE",
            videoLink: "https://youtube.com/shorts/Dk43FiLuZIE"
          },
          {
            id: 'v06',
            label: isEn ? "FEED_06" : "FEED_06",
            videoUrl: "https://www.youtube.com/embed/ovO6UI_YZVE",
            videoLink: "https://youtube.com/shorts/ovO6UI_YZVE"
          }
        ],
        descriptions: [
          {
            title: isEn ? "TAI CHI" : "TAI CHI",
            body: isEn
              ? "Vector-stable slow form focused on axis alignment, breath timing, and controlled energy flow."
              : "Vektorově stabilní pomalé formy se zaměřením na osu těla, dechové rytmy a kontrolovaný tok energie."
          },
          {
            title: isEn ? "INNER POWER MARTIAL ARTS" : "INNER POWER MARTIAL ARTS",
            body: isEn
              ? "Explosive internal power through tendon-driven mechanics, pressure release, and structural integrity."
              : "Explozivní vnitřní síla skrze práci se šlachami, uvolnění tlaku a strukturální integritu."
          }
        ],
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
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  
  const primaryColor = mode === 'raw' ? '#ff003c' : '#6366f1';
  const data = getResonanceData(lang);
  const isEn = lang === 'en';

  return (
    <div className="max-w-7xl mx-auto pb-40 animate-in fade-in duration-1000 px-4 md:px-0">
      <h1 className="sr-only">{isEn ? 'Resonance' : 'Rezonance'}</h1>
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
          <div className="border border-white/10 bg-black/60 backdrop-blur-xl p-6 md:p-10 industrial-clip relative group overflow-hidden transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[scan_6s_infinite]" />
            </div>
            
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
                <div className="max-w-3xl mx-auto">
                  <div className="relative border border-white/10 bg-black/80 industrial-clip p-4 shadow-2xl transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]">
                    <div className="absolute top-2 left-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      STREAM_MODULE: 0x1A
                    </div>
                    <div className="absolute top-2 right-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                      SIGNAL: STABLE
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {data.categories[1].videos.map((video, idx) => {
                        const hasVideo = Boolean(video.videoUrl);
                        const isActive = activeVideoId === video.id;
                        return (
                          <div key={video.id} className="relative border border-white/10 bg-black/90 industrial-clip p-2 transition-all duration-500 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                            <div className="absolute top-2 left-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                              {video.label}
                            </div>
                            <div className="absolute top-2 right-2 text-[7px] font-mono opacity-30 uppercase tracking-widest">
                              FEED_0{idx + 1}
                            </div>

                            <div className="relative aspect-video bg-zinc-950 border border-white/10 overflow-hidden transition-transform duration-700 group-hover:scale-[1.01]">
                              {!isActive || !hasVideo ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center group/cover">
                                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0.7)_60%)]" />
                                   <Play className="w-8 h-8 mb-2 transition-transform group-hover/cover:scale-110" style={{ color: primaryColor }} />
                                   <div className="relative z-10">
                                     <div className="text-[9px] font-bold uppercase tracking-[0.2em]">
                                       {hasVideo ? (isEn ? "INIT_TACTICAL_FEED" : "INICIALIZOVAT_FEED") : "FEED_PENDING"}
                                     </div>
                                   </div>
                                   {hasVideo && (
                                     <button onClick={() => setActiveVideoId(video.id)} className="absolute inset-0 z-20 cursor-pointer" />
                                   )}
                                </div>
                              ) : (
                                <iframe 
                                  className="w-full h-full" 
                                  src={`${video.videoUrl}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
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

                            <div className="mt-2 flex items-center justify-between text-[7px] font-mono uppercase tracking-widest opacity-30">
                              <span>CODEC: H.264</span>
                              {video.videoLink ? (
                                <a href={video.videoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors" style={{ color: primaryColor }}>
                                  <ExternalLink className="w-3 h-3" /> EXTERNAL
                                </a>
                              ) : (
                                <span>LINK: PENDING</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-10 h-[1px] bg-white/20" />
                    <div className="absolute top-0 left-0 w-[1px] h-10 bg-white/20" />
                    <div className="absolute bottom-0 right-0 w-10 h-[1px] bg-white/20" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-10 bg-white/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/5 border border-white/10 industrial-clip transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                  {data.categories[1].descriptions.map((desc) => (
                    <div key={desc.title} className="border-l border-white/10 pl-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: primaryColor }}>
                        {desc.title}
                      </div>
                      <div className="text-[9px] font-mono opacity-50 mt-2 leading-relaxed">
                        {desc.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="border border-white/10 bg-black/40 p-8 industrial-clip relative group overflow-hidden transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
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
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">3D Modeling</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Spatial design, industrial geometry, and rapid iteration.</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">AI as Medium</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Generative systems used as creative and analytical tools.</div>
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
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">3D modelování</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Prostorový design, průmyslová geometrie, rychlé iterace.</div>
                     </div>
                     <div>
                       <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">AI jako médium</div>
                       <div className="text-[9px] opacity-30 font-mono mt-1">Generativní systémy jako kreativní a analytický nástroj.</div>
                     </div>
                   </>
                 )}
               </div>
             </div>

             <div className="border border-white/10 bg-black/40 p-8 industrial-clip relative group transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
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
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">MIND_BODY</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">TAI CHI / MOBILITY</span>
                 </div>
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">FOCUS</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">DEEP_WORK / FLOW</span>
                 </div>
                 <div className="flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono">RECOVERY</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest">BREATH / COLD</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* SIDEBAR TACTICS */}
        <div className="md:col-span-4 space-y-8">
          <div className="border border-white/10 bg-black/60 p-8 industrial-clip relative card-hover">
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

          <div className="p-10 border-2 border-dashed border-white/10 bg-white/[0.01] text-center relative overflow-hidden group card-hover-soft">
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
