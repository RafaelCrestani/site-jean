/* ------------------------------------------------------------------ *
 * Central site configuration.
 * Values ported from the prototype's editable props (data-props).
 * Edit these to update contact details / brand accent across the site.
 * ------------------------------------------------------------------ */

export const config = {
  theme: 'dark', // 'dark' | 'light' — default when no user preference stored
  whatsapp: '+55 18 99668-0381',
  phoneLabel: '+55 18 99668-0381',
  instagram: 'jeanmaciel.jm',
  email: 'macieljean46@gmail.com',
  city: 'José Bonifácio - SP',
  gold: '#C39843', // brand accent (options: #C39843 #B0894A #C9A24B #98773A)
};

const WA_MESSAGE =
  'Olá, Jean! Vim pelo site e gostaria de conversar sobre um projeto de arquitetura.';

/** Derived, ready-to-use links + labels (mirrors the prototype's renderVals). */
export function getLinks(cfg = config) {
  const digits = String(cfg.whatsapp || '5500000000000').replace(/\D/g, '');
  const igHandle = String(cfg.instagram || 'jeanmaciel.arq').replace(/^@/, '');
  const email = cfg.email || 'contato@jeanmaciel.arq.br';

  return {
    waLink: `https://wa.me/${digits}?text=${encodeURIComponent(WA_MESSAGE)}`,
    igLink: `https://instagram.com/${igHandle}`,
    igHandle: `@${igHandle}`,
    email,
    mailLink: `mailto:${email}`,
    phoneLabel: cfg.phoneLabel || '+55 (00) 0 0000-0000',
    city: cfg.city || 'Sua cidade · Brasil',
  };
}

export const links = getLinks(config);
