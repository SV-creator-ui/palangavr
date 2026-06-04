'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
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
  const [lang, setLang] = useState<Lang>('lt');
  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
