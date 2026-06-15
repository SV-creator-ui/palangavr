'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA4_ID, META_PIXEL_ID } from '@/config/analytics';
import { useLang } from '@/context/LangContext';

const CONSENT_KEY = 'cookie-consent';

const BANNER_TEXT: Record<string, { title: string; msg: string; accept: string; decline: string }> = {
  lt: {
    title: 'Vertiname tavo privatumą',
    msg: 'Naudojame slapukus lankytojų statistikai ir aktualesnei reklamai. Tai padeda mums tobulinti svetainę.',
    accept: 'Sutinku',
    decline: 'Tik būtinieji',
  },
  en: {
    title: 'We value your privacy',
    msg: 'We use cookies for visitor statistics and more relevant ads. This helps us improve the website.',
    accept: 'Accept',
    decline: 'Essential only',
  },
  ru: {
    title: 'Мы ценим вашу приватность',
    msg: 'Мы используем cookie для статистики посещений и более релевантной рекламы. Это помогает нам улучшать сайт.',
    accept: 'Принять',
    decline: 'Только необходимые',
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

/* Meta Pixel (Facebook) bazinis kodas. Rašoma ES5 sintakse, kaip ir GA4 –
   įterpiamas tekstu, todėl netranspiliuojamas. Sutikimas valdomas Meta
   „consent" mechanizmu: kol neduotas (revoke), įvykiai kaupiami eilėje ir
   nesiunčiami, slapukai (_fbp) nestatomi. Davus sutikimą – grant. */
const pixelInit = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', 'revoke');
fbq('init', '${META_PIXEL_ID}');
try {
  if (localStorage.getItem('${CONSENT_KEY}') === 'granted') {
    fbq('consent', 'grant');
  }
} catch (e) {}
fbq('track', 'PageView');
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
    if (granted && typeof window.fbq === 'function') {
      window.fbq('consent', 'grant');
    }
    setVisible(false);
  };

  if (!visible) return null;
  const t = BANNER_TEXT[lang] || BANNER_TEXT.lt;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      style={{
        position: 'fixed',
        bottom: 20,
        left: 16,
        right: 16,
        zIndex: 500,
        margin: '0 auto',
        maxWidth: 540,
        background: 'linear-gradient(150deg, #1A1A55 0%, #0B0B3A 100%)',
        color: '#fff',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.10)',
        padding: '22px 24px',
        boxShadow: '0 20px 60px -12px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}
    >
      {/* Šilumos gradiento linija viršuje */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'var(--heat-gradient)',
        }}
      />
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 44,
            height: 44,
            borderRadius: 14,
            background: 'rgba(248,162,75,0.14)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            lineHeight: 1,
          }}
        >
          🍪
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              font: '700 16px/1.3 var(--font-display, sans-serif)',
              marginBottom: 5,
            }}
          >
            {t.title}
          </div>
          <p
            style={{
              margin: 0,
              font: '400 13.5px/1.55 var(--font-body, sans-serif)',
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {t.msg}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginTop: 18,
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
        }}
      >
        <button
          className="btn btn--ghost"
          onClick={() => choose(false)}
          style={{ padding: '12px 22px', fontSize: 13 }}
        >
          {t.decline}
        </button>
        <button
          className="btn btn--primary"
          onClick={() => choose(true)}
          style={{
            padding: '12px 26px',
            fontSize: 13,
            boxShadow: '0 8px 24px -6px rgba(242,70,110,0.55)',
          }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}

/** GA4 + Meta Pixel + Consent Mode v2 + slapukų juostelė.
 *  Nieko nedaro, kol abu ID (GA4_ID ir META_PIXEL_ID) tušti. */
export default function Analytics() {
  if (!GA4_ID && !META_PIXEL_ID) return null;
  return (
    <>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {consentInit}
          </Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {pixelInit}
        </Script>
      )}
      <CookieBanner />
    </>
  );
}
