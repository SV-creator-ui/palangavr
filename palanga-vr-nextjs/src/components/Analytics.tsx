'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA4_ID } from '@/config/analytics';
import { useLang } from '@/context/LangContext';

const CONSENT_KEY = 'cookie-consent';

const BANNER_TEXT: Record<string, { msg: string; accept: string; decline: string }> = {
  lt: {
    msg: 'Naudojame slapukus lankytojų statistikai. Tai padeda mums tobulinti svetainę.',
    accept: 'Sutinku',
    decline: 'Nesutinku',
  },
  en: {
    msg: 'We use cookies for visitor statistics. This helps us improve the website.',
    accept: 'Accept',
    decline: 'Decline',
  },
  ru: {
    msg: 'Мы используем cookie для статистики посещений. Это помогает нам улучшать сайт.',
    accept: 'Принять',
    decline: 'Отклонить',
  },
};

/* Inline skriptas rašomas ES5 sintakse — jis įterpiamas kaip tekstas,
   todėl jo netranspiliuoja browserslist (turi veikti ir iOS 12 Safari). */
const consentInit = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('${CONSENT_KEY}') === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', '${GA4_ID}');
`;

function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {}
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    } catch {}
    if (granted && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
    setVisible(false);
  };

  if (!visible) return null;
  const t = BANNER_TEXT[lang] || BANNER_TEXT.lt;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 500,
        margin: '0 auto',
        maxWidth: 560,
        background: '#0B0B3A',
        color: '#fff',
        borderRadius: 16,
        padding: '16px 20px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 12,
        font: '400 14px/1.5 var(--font-body, sans-serif)',
      }}
    >
      <span style={{ flex: '1 1 260px' }}>{t.msg}</span>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => choose(false)}
          style={{
            padding: '10px 18px',
            borderRadius: 999,
            border: '1.5px solid rgba(255,255,255,0.4)',
            background: 'transparent',
            color: '#fff',
            cursor: 'pointer',
            font: '600 13px var(--font-display, sans-serif)',
          }}
        >
          {t.decline}
        </button>
        <button
          onClick={() => choose(true)}
          style={{
            padding: '10px 18px',
            borderRadius: 999,
            border: 'none',
            background: 'linear-gradient(90deg, #F8A24B, #F2466E)',
            color: '#fff',
            cursor: 'pointer',
            font: '700 13px var(--font-display, sans-serif)',
          }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}

/** GA4 + Consent Mode v2 + slapukų juostelė. Nieko nedaro, kol GA4_ID tuščias. */
export default function Analytics() {
  if (!GA4_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {consentInit}
      </Script>
      <CookieBanner />
    </>
  );
}
