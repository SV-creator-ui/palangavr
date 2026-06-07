import { Lang } from '@/data/translations';

/**
 * Sekcijų nuorodos (#hash) pagal kalbą.
 * Tas pats raktas (games/how/...) skirtingose kalbose duoda skirtingą
 * URL fragmentą, pvz. LT: #pabegimo-kambariai, EN: #escape-rooms.
 * Naudojama IR sekcijos `id`, IR navigacijos nuorodose – jie visada sutampa.
 */

export const SECTION_KEYS = ['games', 'how', 'pricing', 'faq', 'contact'] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

const SECTION_SLUGS: Record<Lang, Record<SectionKey, string>> = {
  lt: {
    games: 'pabegimo-kambariai',
    how: 'kaip-vyksta',
    pricing: 'kainos',
    faq: 'duk',
    contact: 'kontaktai',
  },
  en: {
    games: 'escape-rooms',
    how: 'how-it-works',
    pricing: 'prices',
    faq: 'faq',
    contact: 'contact',
  },
  ru: {
    games: 'komnaty-pobega',
    how: 'kak-eto-rabotaet',
    pricing: 'ceny',
    faq: 'voprosy',
    contact: 'kontakty',
  },
};

/** Sekcijos „slug" pagal kalbą (naudoti ir id, ir nuorodose). */
export function sectionId(lang: Lang, key: SectionKey): string {
  return SECTION_SLUGS[lang]?.[key] ?? key;
}
