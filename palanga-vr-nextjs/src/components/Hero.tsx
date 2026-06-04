'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLang } from '@/context/LangContext';

const HERO_BG_IMAGES = [
  '/assets/game-banner-alien-infection.jpg',
  '/assets/game-banner-ninja-trials.jpg',
  '/assets/screenshot-alien-infection-gameplay.jpg',
];

function HeroBgCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    HERO_BG_IMAGES.forEach((src) => { const img = new Image(); img.src = src; });
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_BG_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {HERO_BG_IMAGES.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          opacity: idx === i ? 1 : 0,
          transform: idx === i ? 'scale(1.04)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '1400ms, 7000ms',
          transitionTimingFunction: 'var(--ease-out), linear',
        }} />
      ))}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(11,11,58,0.55) 0%, rgba(11,11,58,0.85) 100%)',
      }} />
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 5 }}>
        {HERO_BG_IMAGES.map((_, i) => (
          <span key={i} style={{
            width: idx === i ? 24 : 8, height: 4, borderRadius: 2,
            background: idx === i ? 'var(--heat-gradient)' : 'rgba(255,255,255,0.35)',
            transition: 'width 400ms var(--ease-out), background 400ms var(--ease-out)',
          }} />
        ))}
      </div>
    </div>
  );
}

interface Props {
  onBook: () => void;
}

export default function Hero({ onBook }: Props) {
  const { t } = useLang();
  const h = t.hero;
  const stats: [string, string][] = [
    ['9', h.stat1],
    ['2 – 6', h.stat2],
    ['~45 min', h.stat3],
    ['nuo 20 €', h.stat4],
  ];

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: 720,
      background: 'var(--bg-stage)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 32px 96px',
      color: '#fff',
      overflow: 'hidden',
    }}>
      <HeroBgCarousel />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '8px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
          marginBottom: 28,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--heat-pink)', boxShadow: '0 0 0 4px rgba(242,70,110,0.25)' }} />
          <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>
            {h.badge}
          </span>
        </div>
        <h1 className="t-hero" style={{ maxWidth: 1400, marginBottom: 28, color: '#fff' }}>
          {h.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p style={{ font: '500 clamp(16px, 4.5vw, 22px)/1.4 var(--font-body)', color: 'rgba(255,255,255,0.9)', margin: '0 0 40px', maxWidth: 720 }}>
          {h.sub}
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" onClick={onBook} style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta}</Button>
          <Button variant="ghost" href="/#games" style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta2}</Button>
        </div>
        <div style={{ marginTop: 56, display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map(([n, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
              <span style={{ font: '800 32px var(--font-display)', color: '#fff', lineHeight: 1 }}>{n}</span>
              <span style={{ font: '500 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
