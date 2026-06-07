'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, TRANSLATIONS } from '@/data/translations';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof TRANSLATIONS.lt;
}

const LangContext = createContext<LangContextValue>({
  lang: 'lt',
  setLang: () => {},
  t: TRANSLATIONS.lt,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('lt');

  // Po prisikrovimo atstatom įsimintą kalbą (kad išliktų perkrovus / kituose puslapiuose)
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'lt' || saved === 'en' || saved === 'ru') setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
