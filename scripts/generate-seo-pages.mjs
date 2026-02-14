import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://adamkarl.lucien.technology').replace(/\/+$/, '');
const SITE_BRAND = (process.env.SITE_BRAND || process.env.VITE_SITE_BRAND || '').trim();
const deriveBrand = (url) => {
  const host = url.replace(/^https?:\/\//, '').split('/')[0];
  const sub = host.split('.')[0] || '';
  if (!sub || sub === 'www') return 'Lucien Technology';
  if (sub === 'adamkarl') return 'Adam Karl Lucien';
  return sub.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
};
const BRAND = SITE_BRAND || deriveBrand(SITE_URL);

const joinUrl = (base, path) => {
  const normalizedBase = base.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
};

const sections = {
  CORE: '',
  MODULES: 'modules',
  CAPABILITIES: 'capabilities',
  ARCHIVE: 'archive',
  DIAGNOSTICS: 'diagnostics',
  RESONANCE: 'resonance',
  SIGNAL: 'signal'
};

const seo = {
  en: {
    locale: 'en_US',
    titles: {
      CORE: `${BRAND} | System Architect & AI Engineer`,
      MODULES: `${BRAND} | Projects & Modules`,
      CAPABILITIES: `${BRAND} | Capabilities`,
      ARCHIVE: `${BRAND} | Archive Timeline`,
      DIAGNOSTICS: `${BRAND} | Diagnostics`,
      RESONANCE: `${BRAND} | Resonance`,
      SIGNAL: `${BRAND} | Signal / Contact`
    },
    descriptions: {
      CORE: `${BRAND} — System Architect, AI Engineer, and strategic systems auditor. Explore Lucien OS v2.0, a dual-mode digital twin with projects, mission, and operations.`,
      MODULES: `${BRAND} — Projects and systems: NOXIS, ARCHΞON, Lucien Control, industrial operations, and robotics protocols.`,
      CAPABILITIES: `${BRAND} — Capability matrix across AI, OSINT fusion, systems architecture, logistics optimization, automation, and industrial engineering.`,
      ARCHIVE: `${BRAND} — Career timeline and mission log across AI systems, logistics, and industrial operations.`,
      DIAGNOSTICS: `${BRAND} — Cognitive diagnostics, system profile, and analytical telemetry for the Lucien OS persona.`,
      RESONANCE: `${BRAND} — Interests and resonance: systems dynamics, inner practices, philosophy, and curated media.`,
      SIGNAL: `${BRAND} — Contact and secure signal channel to initiate collaboration or a systems audit.`
    }
  },
  cs: {
    locale: 'cs_CZ',
    titles: {
      CORE: `${BRAND} | Systémový architekt & AI inženýr`,
      MODULES: `${BRAND} | Projekty a moduly`,
      CAPABILITIES: `${BRAND} | Schopnosti`,
      ARCHIVE: `${BRAND} | Archiv a časová osa`,
      DIAGNOSTICS: `${BRAND} | Diagnostika`,
      RESONANCE: `${BRAND} | Rezonance`,
      SIGNAL: `${BRAND} | Signál / Kontakt`
    },
    descriptions: {
      CORE: `${BRAND} — Systémový architekt, AI inženýr a auditor strategických systémů. Lucien OS v2.0 jako digitální profil s projekty, misí a operacemi.`,
      MODULES: `${BRAND} — Projekty a systémy: NOXIS, ARCHΞON, Lucien Control, průmyslové operace a robotika.`,
      CAPABILITIES: `${BRAND} — Matice schopností napříč AI, OSINT fúzí, architekturou systémů, logistikou, automatizací a průmyslovým inženýrstvím.`,
      ARCHIVE: `${BRAND} — Kariérní časová osa a log misí napříč AI, logistikou a průmyslovými operacemi.`,
      DIAGNOSTICS: `${BRAND} — Diagnostika kognitivního profilu, systémová telemetrie a analytické charakteristiky.`,
      RESONANCE: `${BRAND} — Rezonance a zájmy: systémová dynamika, vnitřní disciplíny, filozofie a kurátorské odkazy.`,
      SIGNAL: `${BRAND} — Kontakt a šifrovaný signální kanál pro spolupráci nebo audit systému.`
    }
  }
};

const fallbackCopy = {
  en: {
    CORE: [
      'System Architect and AI Engineer focused on resilient, auditable systems.',
      'Lucien OS v2.0 maps the operating principles behind strategy, defense, and execution.',
      'Explore modules, capabilities, archive, diagnostics, resonance, and the signal channel.'
    ],
    MODULES: [
      'Project modules cover autonomous intelligence, predictive state frameworks, and governance systems.',
      'Each module documents scope, technology stack, and operational impact across digital and physical domains.',
      'Use this page to evaluate system fit, integration paths, and research readiness.'
    ],
    CAPABILITIES: [
      'Capability matrix spans AI engineering, OSINT fusion, systems architecture, and industrial operations.',
      'Skills are mapped to measurable performance indicators and operational tooling.',
      'This view is designed for rapid assessment of strategic and technical readiness.'
    ],
    ARCHIVE: [
      'Archive consolidates mission history, roles, and system milestones across multiple sectors.',
      'Entries summarize scope, responsibilities, and outcomes to establish operational credibility.',
      'Use this timeline to trace long‑term capability progression and domain exposure.'
    ],
    DIAGNOSTICS: [
      'Diagnostics provide a structured profile of cognitive and operational signals.',
      'Telemetry is presented for clarity, not spectacle, and supports decision‑making context.',
      'This section exists to align system behavior with strategic constraints.'
    ],
    RESONANCE: [
      'Resonance captures long‑term interests in systems dynamics, philosophy, and embodied practice.',
      'Curated media and notes provide insight into decision frameworks and attention design.',
      'This context supports collaborations where alignment matters as much as capability.'
    ],
    SIGNAL: [
      'Signal is the secure contact channel for collaboration, audits, and strategic requests.',
      'Provide a clear origin ID, protocol type, and payload for fastest response.',
      'High‑signal requests receive prioritized processing.'
    ]
  },
  cs: {
    CORE: [
      'Systémový architekt a AI inženýr se zaměřením na odolné a auditovatelné systémy.',
      'Lucien OS v2.0 mapuje principy řízení strategie, obrany a exekuce.',
      'Prozkoumejte moduly, schopnosti, archiv, diagnostiku, rezonanci a signální kanál.'
    ],
    MODULES: [
      'Moduly pokrývají autonomní inteligenci, prediktivní rámce a governance systémy.',
      'Každý modul popisuje rozsah, technologický stack a provozní dopad.',
      'Stránka slouží k rychlému posouzení kompatibility a integračních možností.'
    ],
    CAPABILITIES: [
      'Matice schopností zahrnuje AI inženýrství, OSINT fúzi, architekturu systémů a průmysl.',
      'Schopnosti jsou mapovány na měřitelné výstupy a nástroje.',
      'Sekce je určena pro rychlé posouzení technické i strategické připravenosti.'
    ],
    ARCHIVE: [
      'Archiv konsoliduje historii misí, role a systémové milníky napříč sektory.',
      'Záznamy shrnují rozsah, odpovědnosti a výsledky pro ověření zkušeností.',
      'Časová osa ukazuje dlouhodobý růst kompetencí a doménové zkušenosti.'
    ],
    DIAGNOSTICS: [
      'Diagnostika poskytuje strukturovaný profil kognitivních a provozních signálů.',
      'Telemetrie je prezentována pro jasnost a kontext rozhodování.',
      'Sekce slouží k zarovnání chování systému se strategickými omezeními.'
    ],
    RESONANCE: [
      'Rezonance zachycuje dlouhodobé zájmy v systémové dynamice, filozofii a praxi.',
      'Kurátorská média přinášejí kontext pro rozhodování a design pozornosti.',
      'Tento kontext podporuje spolupráce, kde je důležitá shoda i schopnost.'
    ],
    SIGNAL: [
      'Signál je bezpečný kontaktní kanál pro spolupráci, audity a strategické požadavky.',
      'Uveďte ID původu, typ protokolu a jasný payload pro rychlou reakci.',
      'High‑signal požadavky mají prioritu.'
    ]
  }
};

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const setTag = (html, regex, replacement) => {
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }
  return html.replace(/<\/head>/i, `${replacement}\n</head>`);
};

const setMeta = (html, attr, key, value) => {
  const safeValue = escapeAttr(value);
  const regex = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>(?=\\n)?`, 'i');
  const replacement = `<meta ${attr}="${key}" content="${safeValue}">`;
  return setTag(html, regex, replacement);
};

const setLink = (html, rel, attrs) => {
  const entries = Object.entries(attrs).map(([k, v]) => `${k}="${escapeAttr(v)}"`).join(' ');
  const regex = new RegExp(`<link\\s+rel="${rel}"[^>]*>(?=\\n)?`, 'i');
  const replacement = `<link rel="${rel}" ${entries}>`;
  return setTag(html, regex, replacement);
};

const removeAll = (html, regex) => html.replace(regex, '');

const buildPath = (section, lang) => {
  const prefix = lang === 'en' ? '/en' : '';
  const path = sections[section];
  if (path) return `${prefix}/${path}/`;
  return prefix ? `${prefix}/` : '/';
};

const buildUrl = (section, lang) => joinUrl(SITE_URL, buildPath(section, lang));


const buildFallback = (lang, section) => {
  const copy = fallbackCopy[lang] && fallbackCopy[lang][section] ? fallbackCopy[lang][section] : fallbackCopy[lang].CORE;
  const paragraphs = copy.map((text) => `        <p style="opacity: 0.75; margin-top: 12px;">${text}</p>`).join('\n');
  const navLabels = lang === 'en'
    ? { core: 'Core', modules: 'Modules', capabilities: 'Capabilities', archive: 'Archive', diagnostics: 'Diagnostics', resonance: 'Resonance', signal: 'Signal' }
    : { core: 'Jádro', modules: 'Moduly', capabilities: 'Schopnosti', archive: 'Archiv', diagnostics: 'Diagnostika', resonance: 'Rezonance', signal: 'Signál' };

  return `<!-- SEO_FALLBACK_START -->
      <div class="seo-fallback" style="padding: 48px; max-width: 960px; margin: 0 auto; color: #ececec; font-family: 'Fira Code', monospace;">
        <h1 style="font-size: 28px; letter-spacing: 0.08em; text-transform: uppercase;">Adam Karl Lucien</h1>
${paragraphs}
        <nav style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #6366f1; text-decoration: none;">${navLabels.core}</a>
          <a href="/modules/" style="color: #6366f1; text-decoration: none;">${navLabels.modules}</a>
          <a href="/capabilities/" style="color: #6366f1; text-decoration: none;">${navLabels.capabilities}</a>
          <a href="/archive/" style="color: #6366f1; text-decoration: none;">${navLabels.archive}</a>
          <a href="/diagnostics/" style="color: #6366f1; text-decoration: none;">${navLabels.diagnostics}</a>
          <a href="/resonance/" style="color: #6366f1; text-decoration: none;">${navLabels.resonance}</a>
          <a href="/signal/" style="color: #6366f1; text-decoration: none;">${navLabels.signal}</a>
        </nav>
        <div style="margin-top: 20px; font-size: 12px; opacity: 0.6;">
          English: <a href="/en/" style="color: #6366f1; text-decoration: none;">Home</a>,
          <a href="/en/modules/" style="color: #6366f1; text-decoration: none;">Modules</a>,
          <a href="/en/capabilities/" style="color: #6366f1; text-decoration: none;">Capabilities</a>,
          <a href="/en/archive/" style="color: #6366f1; text-decoration: none;">Archive</a>,
          <a href="/en/diagnostics/" style="color: #6366f1; text-decoration: none;">Diagnostics</a>,
          <a href="/en/resonance/" style="color: #6366f1; text-decoration: none;">Resonance</a>,
          <a href="/en/signal/" style="color: #6366f1; text-decoration: none;">Signal</a>
        </div>
      </div>
      <!-- SEO_FALLBACK_END -->`;
};


const updateHtml = (html, lang, section) => {
  const title = seo[lang].titles[section];
  const description = seo[lang].descriptions[section];
  const url = buildUrl(section, lang);
  const altLang = lang === 'en' ? 'cs' : 'en';

  let out = html;

  out = out.replace(/<html\s+lang="[^"]+"/i, `<html lang="${lang}"`);
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttr(title)}</title>`);

  out = setMeta(out, 'name', 'description', description);
  out = setMeta(out, 'property', 'og:title', title);
  out = setMeta(out, 'property', 'og:description', description);
  out = setMeta(out, 'property', 'og:url', url);
  out = setMeta(out, 'property', 'og:locale', seo[lang].locale);

  out = removeAll(out, /<meta\s+property="og:locale:alternate"[^>]*>\s*/gi);
  out = out.replace(/<meta\s+property="og:locale"[^>]*>/i, (match) => `${match}\n    <meta property="og:locale:alternate" content="${seo[altLang].locale}">`);

  out = setMeta(out, 'name', 'twitter:title', title);
  out = setMeta(out, 'name', 'twitter:description', description);

  out = setLink(out, 'canonical', { href: url });
  out = removeAll(out, /<link\s+rel="alternate"[^>]*>\s*/gi);

  const alternates = [
    `<link rel="alternate" hreflang="cs" href="${buildUrl(section, 'cs')}">`,
    `<link rel="alternate" hreflang="en" href="${buildUrl(section, 'en')}">`,
    `<link rel="alternate" hreflang="x-default" href="${buildUrl(section, 'cs')}">`
  ].join('\n    ');

  out = out.replace(/<link\s+rel="canonical"[^>]*>/i, (match) => `${match}\n    ${alternates}`);

  out = out.replace(/<!-- SEO_FALLBACK_START -->[\s\S]*?<!-- SEO_FALLBACK_END -->/i, buildFallback(lang, section));

  return out;
};

const distDir = join(process.cwd(), 'dist');
const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');

for (const lang of Object.keys(seo)) {
  for (const section of Object.keys(sections)) {
    const path = buildPath(section, lang);
    const html = updateHtml(baseHtml, lang, section);
    const outputPath = path === '/' ? join(distDir, 'index.html') : join(distDir, path.slice(1), 'index.html');
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, 'utf8');
  }
}

const buildSitemap = () => {
  const entries = [];
  const sectionKeys = Object.keys(sections);
  for (const section of sectionKeys) {
    const locCs = buildUrl(section, 'cs');
    const locEn = buildUrl(section, 'en');
    entries.push({
      loc: locCs,
      alternates: [
        { lang: 'cs', href: locCs },
        { lang: 'en', href: locEn },
        { lang: 'x-default', href: locCs }
      ]
    });
  }

  const urls = entries
    .map((entry) => {
      const alternates = entry.alternates
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`)
        .join('\n');
      return `  <url>\n    <loc>${entry.loc}</loc>\n${alternates}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
};

const writeSitemap = () => {
  const sitemap = buildSitemap();
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
};

const writeRobots = () => {
  const robots = `User-agent: *\nAllow: /\nSitemap: ${joinUrl(SITE_URL, '/sitemap.xml')}\n`;
  writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8');
};

writeSitemap();
writeRobots();

console.log('SEO HTML pages generated.');
