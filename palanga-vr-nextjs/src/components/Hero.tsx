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
      {/* Tamsesnis, bet spalvotas uzdangalas – kad glow rutuliai issiskirtu */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(11,11,58,0.62) 0%, rgba(11,11,58,0.9) 100%)',
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

/* Ryskus spalvoti "glow" rutuliai su screen blend – aiskiai svyti virs nuotraukos */
function AmbientGlow() {
  const orbs = [
    { size: 620, left: '-12%', top: '-24%', color: 'rgba(248,162,75,0.75)', anim: 'heroOrbA 17s' },
    { size: 560, left: '68%', top: '-6%', color: 'rgba(242,70,110,0.72)', anim: 'heroOrbB 21s' },
    { size: 480, left: '55%', top: '64%', color: 'rgba(46,190,240,0.6)', anim: 'heroOrbC 25s' },
    { size: 420, left: '8%', top: '58%', color: 'rgba(146,90,255,0.5)', anim: 'heroOrbB 29s' },
  ];
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1, mixBlendMode: 'screen' }}>
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: 'absolute', left: o.left, top: o.top,
          width: o.size, height: o.size, borderRadius: '50%',
          background: `radial-gradient(circle, ${o.color} 0%, transparent 68%)`,
          filter: 'blur(40px)',
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
        position: 'absolute', top: '40%', left: '50%',
        width: 760, height: 380, transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse, rgba(242,70,110,0.5) 0%, transparent 66%)',
        filter: 'blur(60px)', zIndex: 1, pointerEvents: 'none', mixBlendMode: 'screen',
        animation: 'heroBreathe 6.5s ease-in-out infinite',
      }} />

      {/* key={lang} – perjungus kalba turinys persirenderina ir iejimo reveal
          animacija suveikia is naujo kiekvienai kalbai */}
      <div key={lang} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* Glass badge */}
        <div className="hero-reveal" style={{
          ...revealDelay(0),
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '9px 16px', borderRadius: 999,
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px -12px rgba(0,0,0,0.5)',
          marginBottom: 30,
        }}>
          <span style={{ position: 'relative', width: 7, height: 7 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)' }} />
            <span aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)', animation: 'heroPulse 1.8s ease-out infinite' }} />
          </span>
          <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff' }}>
            {h.badge}
          </span>
        </div>

        {/* Gradientine sviecianti antraste */}
        <h1 className="t-hero hero-reveal hero-title-shimmer" style={{ ...revealDelay(1), maxWidth: 1400, marginBottom: 26 }}>
          {h.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>

        <p className="hero-reveal" style={{ ...revealDelay(2), font: '500 clamp(16px, 4.5vw, 22px)/1.5 var(--font-body)', color: 'rgba(255,255,255,0.92)', margin: '0 0 40px', maxWidth: 700 }}>
          {h.sub}
        </p>

        <div className="hero-reveal" style={{ ...revealDelay(3), display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="hero-cta-glow" style={{ display: 'inline-flex' }}>
            <Button variant="primary" onClick={onBook} className="hero-btn" style={{ padding: '18px 34px', fontSize: 16 }}>{h.cta}</Button>
          </span>
          <Button variant="ghost" href={`/#${sectionId(lang, 'games')}`} className="hero-btn" style={{
            padding: '18px 34px', fontSize: 16,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          }}>{h.cta2}</Button>
        </div>

        {/* Glassmorphism statistikos korteles */}
        <div className="hero-reveal" style={{ ...revealDelay(4), marginTop: 60, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map(([n, l]) => (
            <div key={l} className="hero-stat" style={{
              display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center',
              minWidth: 128, padding: '18px 22px', borderRadius: 18,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 12px 40px -16px rgba(0,0,0,0.6)',
              cursor: 'default',
            }}>
              <span style={{ font: '800 34px var(--font-display)', lineHeight: 1,
                background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent', color: 'transparent' }}>{n}</span>
              <span style={{ font: '500 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.72)' }}>{l}</span>
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
