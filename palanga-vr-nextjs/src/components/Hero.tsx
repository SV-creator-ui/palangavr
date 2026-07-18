'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLang } from '@/context/LangContext';
import { sectionId } from '@/config/sections';

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
          transform: idx === i ? 'scale(1.08)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '1400ms, 7000ms',
          transitionTimingFunction: 'var(--ease-out), linear',
        }} />
      ))}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(11,11,58,0.55) 0%, rgba(11,11,58,0.88) 100%)',
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

/* Plaukiojantys spalvoti "glow" rutuliai – CSS animacija, veikia visiems */
function AmbientGlow() {
  const orbs = [
    { size: 540, left: '-10%', top: '-20%', color: 'rgba(248,162,75,0.30)', anim: 'heroOrbA 17s' },
    { size: 480, left: '74%', top: '2%', color: 'rgba(242,70,110,0.28)', anim: 'heroOrbB 21s' },
    { size: 400, left: '58%', top: '66%', color: 'rgba(46,190,240,0.22)', anim: 'heroOrbC 25s' },
  ];
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: 'absolute', left: o.left, top: o.top,
          width: o.size, height: o.size, borderRadius: '50%',
          background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          filter: 'blur(24px)',
          animation: `${o.anim} ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

interface Props {
  onBook: () => void;
}

export default function Hero({ onBook }: Props) {
  const { t, lang } = useLang();
  const h = t.hero;

  const stats: [string, string][] = [
    ['9', h.stat1],
    ['2 – 6', h.stat2],
    ['~45 min', h.stat3],
    ['nuo 20 €', h.stat4],
  ];

  // Staggered reveal – kiekvienam blokui vis didesnis animation-delay.
  const revealDelay = (i: number) => ({ animationDelay: `${0.12 + i * 0.11}s` });

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
      <AmbientGlow />

      {/* Kvėpuojantis švytėjimas už antraštės */}
      <div aria-hidden style={{
        position: 'absolute', top: '38%', left: '50%',
        width: 680, height: 340, transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse, rgba(242,70,110,0.38) 0%, transparent 65%)',
        filter: 'blur(48px)', zIndex: 1, pointerEvents: 'none',
        animation: 'heroBreathe 6.5s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="hero-reveal" style={{
          ...revealDelay(0),
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '8px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
          backdropFilter: 'blur(6px)',
          marginBottom: 28,
        }}>
          <span style={{ position: 'relative', width: 6, height: 6 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)' }} />
            <span aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)', animation: 'heroPulse 1.8s ease-out infinite' }} />
          </span>
          <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>
            {h.badge}
          </span>
        </div>

        <h1 className="t-hero hero-reveal" style={{ ...revealDelay(1), maxWidth: 1400, marginBottom: 28, color: '#fff' }}>
          {h.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>

        <p className="hero-reveal" style={{ ...revealDelay(2), font: '500 clamp(16px, 4.5vw, 22px)/1.4 var(--font-body)', color: 'rgba(255,255,255,0.9)', margin: '0 0 40px', maxWidth: 720 }}>
          {h.sub}
        </p>

        <div className="hero-reveal" style={{ ...revealDelay(3), display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" onClick={onBook} className="hero-btn" style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta}</Button>
          <Button variant="ghost" href={`/#${sectionId(lang, 'games')}`} className="hero-btn" style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta2}</Button>
        </div>

        <div className="hero-reveal" style={{ ...revealDelay(4), marginTop: 56, display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map(([n, l]) => (
            <div key={l} className="hero-stat" style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', cursor: 'default' }}>
              <span style={{ font: '800 32px var(--font-display)', color: '#fff', lineHeight: 1 }}>{n}</span>
              <span style={{ font: '500 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slinkimo indikatorius */}
      <div aria-hidden style={{ position: 'absolute', bottom: 56, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <div style={{ width: 26, height: 42, borderRadius: 14, border: '2px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
          <span style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--heat-gradient)', animation: 'heroScrollDot 1.8s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
