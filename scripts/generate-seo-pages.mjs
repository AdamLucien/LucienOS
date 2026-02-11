import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE_URL = 'https://adamkarl.lucien.technology';

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
      CORE: 'Adam Karl Lucien | System Architect & AI Engineer',
      MODULES: 'Projects & Modules | Adam Karl Lucien',
      CAPABILITIES: 'Capabilities | Adam Karl Lucien',
      ARCHIVE: 'Archive Timeline | Adam Karl Lucien',
      DIAGNOSTICS: 'Diagnostics | Adam Karl Lucien',
      RESONANCE: 'Resonance | Adam Karl Lucien',
      SIGNAL: 'Signal / Contact | Adam Karl Lucien'
    },
    descriptions: {
      CORE: 'System Architect, AI Engineer, and strategic systems auditor. Explore Lucien OS v2.0, a dual-mode digital twin with projects, mission, and operations.',
      MODULES: 'Projects and systems: NOXIS, ARCHΞON, Lucien Control, industrial operations, and robotics protocols.',
      CAPABILITIES: 'Capability matrix across AI, OSINT fusion, systems architecture, logistics optimization, automation, and industrial engineering.',
      ARCHIVE: 'Career timeline and mission log across AI systems, logistics, and industrial operations.',
      DIAGNOSTICS: 'Cognitive diagnostics, system profile, and analytical telemetry for the Lucien OS persona.',
      RESONANCE: 'Interests and resonance: systems dynamics, inner practices, philosophy, and curated media.',
      SIGNAL: 'Contact and secure signal channel to initiate collaboration or a systems audit.'
    }
  },
  cs: {
    locale: 'cs_CZ',
    titles: {
      CORE: 'Adam Karl Lucien | Systémový architekt & AI inženýr',
      MODULES: 'Projekty a moduly | Adam Karl Lucien',
      CAPABILITIES: 'Schopnosti | Adam Karl Lucien',
      ARCHIVE: 'Archiv a časová osa | Adam Karl Lucien',
      DIAGNOSTICS: 'Diagnostika | Adam Karl Lucien',
      RESONANCE: 'Rezonance | Adam Karl Lucien',
      SIGNAL: 'Signál / Kontakt | Adam Karl Lucien'
    },
    descriptions: {
      CORE: 'Systémový architekt, AI inženýr a auditor strategických systémů. Lucien OS v2.0 jako digitální profil s projekty, misí a operacemi.',
      MODULES: 'Projekty a systémy: NOXIS, ARCHΞON, Lucien Control, průmyslové operace a robotika.',
      CAPABILITIES: 'Matice schopností napříč AI, OSINT fúzí, architekturou systémů, logistikou, automatizací a průmyslovým inženýrstvím.',
      ARCHIVE: 'Kariérní časová osa a log misí napříč AI, logistikou a průmyslovými operacemi.',
      DIAGNOSTICS: 'Diagnostika kognitivního profilu, systémová telemetrie a analytické charakteristiky.',
      RESONANCE: 'Rezonance a zájmy: systémová dynamika, vnitřní disciplíny, filozofie a kurátorské odkazy.',
      SIGNAL: 'Kontakt a šifrovaný signální kanál pro spolupráci nebo audit systému.'
    }
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

const buildUrl = (section, lang) => `${SITE_URL}${buildPath(section, lang)}`;

const buildFallback = (lang) => {
  if (lang === 'en') {
    return `<!-- SEO_FALLBACK_START -->\n      <div class="seo-fallback" style="padding: 48px; max-width: 960px; margin: 0 auto; color: #ececec; font-family: 'Fira Code', monospace;">\n        <h1 style="font-size: 28px; letter-spacing: 0.08em; text-transform: uppercase;">Adam Karl Lucien</h1>\n        <p style="opacity: 0.75; margin-top: 12px;">\n          System Architect, AI Engineer, and strategic systems auditor. Lucien OS v2.0 is a dual-mode digital twin with projects, capabilities, archive, diagnostics, resonance, and a signal channel.\n        </p>\n        <nav style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 12px;">\n          <a href="/" style="color: #6366f1; text-decoration: none;">Core</a>\n          <a href="/modules/" style="color: #6366f1; text-decoration: none;">Modules</a>\n          <a href="/capabilities/" style="color: #6366f1; text-decoration: none;">Capabilities</a>\n          <a href="/archive/" style="color: #6366f1; text-decoration: none;">Archive</a>\n          <a href="/diagnostics/" style="color: #6366f1; text-decoration: none;">Diagnostics</a>\n          <a href="/resonance/" style="color: #6366f1; text-decoration: none;">Resonance</a>\n          <a href="/signal/" style="color: #6366f1; text-decoration: none;">Signal</a>\n        </nav>\n        <div style="margin-top: 20px; font-size: 12px; opacity: 0.6;">\n          English: <a href="/en/" style="color: #6366f1; text-decoration: none;">Home</a>,\n          <a href="/en/modules/" style="color: #6366f1; text-decoration: none;">Modules</a>,\n          <a href="/en/capabilities/" style="color: #6366f1; text-decoration: none;">Capabilities</a>,\n          <a href="/en/archive/" style="color: #6366f1; text-decoration: none;">Archive</a>,\n          <a href="/en/diagnostics/" style="color: #6366f1; text-decoration: none;">Diagnostics</a>,\n          <a href="/en/resonance/" style="color: #6366f1; text-decoration: none;">Resonance</a>,\n          <a href="/en/signal/" style="color: #6366f1; text-decoration: none;">Signal</a>\n        </div>\n      </div>\n      <!-- SEO_FALLBACK_END -->`;
  }
  return `<!-- SEO_FALLBACK_START -->\n      <div class="seo-fallback" style="padding: 48px; max-width: 960px; margin: 0 auto; color: #ececec; font-family: 'Fira Code', monospace;">\n        <h1 style="font-size: 28px; letter-spacing: 0.08em; text-transform: uppercase;">Adam Karl Lucien</h1>\n        <p style="opacity: 0.75; margin-top: 12px;">\n          Systémový architekt, AI inženýr a auditor strategických systémů. Lucien OS v2.0 jako digitální profil s projekty, schopnostmi, archivem, diagnostikou, rezonancí a signálním kanálem.\n        </p>\n        <nav style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 12px;">\n          <a href="/" style="color: #6366f1; text-decoration: none;">Jádro</a>\n          <a href="/modules/" style="color: #6366f1; text-decoration: none;">Moduly</a>\n          <a href="/capabilities/" style="color: #6366f1; text-decoration: none;">Schopnosti</a>\n          <a href="/archive/" style="color: #6366f1; text-decoration: none;">Archiv</a>\n          <a href="/diagnostics/" style="color: #6366f1; text-decoration: none;">Diagnostika</a>\n          <a href="/resonance/" style="color: #6366f1; text-decoration: none;">Rezonance</a>\n          <a href="/signal/" style="color: #6366f1; text-decoration: none;">Signál</a>\n        </nav>\n        <div style="margin-top: 20px; font-size: 12px; opacity: 0.6;">\n          English: <a href="/en/" style="color: #6366f1; text-decoration: none;">Home</a>,\n          <a href="/en/modules/" style="color: #6366f1; text-decoration: none;">Modules</a>,\n          <a href="/en/capabilities/" style="color: #6366f1; text-decoration: none;">Capabilities</a>,\n          <a href="/en/archive/" style="color: #6366f1; text-decoration: none;">Archive</a>,\n          <a href="/en/diagnostics/" style="color: #6366f1; text-decoration: none;">Diagnostics</a>,\n          <a href="/en/resonance/" style="color: #6366f1; text-decoration: none;">Resonance</a>,\n          <a href="/en/signal/" style="color: #6366f1; text-decoration: none;">Signal</a>\n        </div>\n      </div>\n      <!-- SEO_FALLBACK_END -->`;
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

  out = out.replace(/<!-- SEO_FALLBACK_START -->[\s\S]*?<!-- SEO_FALLBACK_END -->/i, buildFallback(lang));

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

console.log('SEO HTML pages generated.');
