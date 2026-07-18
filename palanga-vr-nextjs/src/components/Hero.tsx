'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
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

/* Plaukiojantys spalvoti "glow" rutuliai – suteikia gyliaus ir prabangaus jausmo.
   Esant "reduced motion" – lieka statiski (be nuolatinio judesio), bet vis tiek prideda turtingumo. */
function AmbientGlow({ reduced }: { reduced: boolean }) {
  const orbs = [
    { size: 540, left: '-10%', top: '-20%', color: 'rgba(248,162,75,0.30)', dur: 17, dx: 50, dy: 34 },
    { size: 480, left: '74%', top: '2%', color: 'rgba(242,70,110,0.28)', dur: 21, dx: -56, dy: 44 },
    { size: 400, left: '58%', top: '66%', color: 'rgba(46,190,240,0.22)', dur: 25, dx: 36, dy: -46 },
  ];
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          animate={reduced ? undefined : { x: [0, o.dx, 0], y: [0, o.dy, 0] }}
          transition={reduced ? undefined : { duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: o.left, top: o.top,
            width: o.size, height: o.size, borderRadius: '50%',
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: 'blur(24px)',
          }}
        />
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
  const reduced = useReducedMotion() ?? false;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, reduced ? 1 : 0]);

  const stats: [string, string][] = [
    ['9', h.stat1],
    ['2 – 6', h.stat2],
    ['~45 min', h.stat3],
    ['nuo 20 €', h.stat4],
  ];

  // Stagger konteineris ir elementai. Sumažinto judesio režimu – tik permatomumas.
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.11, delayChildren: reduced ? 0 : 0.12 } },
  };
  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        show: {
          opacity: 1, y: 0, filter: 'blur(0px)',
          transition: { type: 'spring', stiffness: 90, damping: 18, mass: 0.9 },
        },
      };

  return (
    <section ref={ref} className="hero-section" style={{
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
      <AmbientGlow reduced={reduced} />

      {/* Kvėpuojantis švytėjimas už antraštės (statiskas esant reduced motion) */}
      <motion.div
        aria-hidden
        animate={reduced ? { opacity: 0.5 } : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
        transition={reduced ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '38%', left: '50%',
          width: 680, height: 340, transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(242,70,110,0.38) 0%, transparent 65%)',
          filter: 'blur(48px)', zIndex: 1, pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          y: contentY, opacity: contentOpacity,
        }}
      >
        <motion.div variants={item} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '8px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)',
          backdropFilter: 'blur(6px)',
          marginBottom: 28,
        }}>
          <span style={{ position: 'relative', width: 6, height: 6 }}>
            <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)' }} />
            {!reduced && (
              <motion.span
                animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--heat-pink)' }}
              />
            )}
          </span>
          <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>
            {h.badge}
          </span>
        </motion.div>

        <motion.h1 variants={item} className="t-hero" style={{ maxWidth: 1400, marginBottom: 28, color: '#fff' }}>
          {h.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h1>

        <motion.p variants={item} style={{ font: '500 clamp(16px, 4.5vw, 22px)/1.4 var(--font-body)', color: 'rgba(255,255,255,0.9)', margin: '0 0 40px', maxWidth: 720 }}>
          {h.sub}
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.div whileHover={reduced ? undefined : { scale: 1.045, y: -2 }} whileTap={reduced ? undefined : { scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
            <Button variant="primary" onClick={onBook} style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta}</Button>
          </motion.div>
          <motion.div whileHover={reduced ? undefined : { scale: 1.045, y: -2 }} whileTap={reduced ? undefined : { scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
            <Button variant="ghost" href={`/#${sectionId(lang, 'games')}`} style={{ padding: '18px 32px', fontSize: 16 }}>{h.cta2}</Button>
          </motion.div>
        </motion.div>

        <motion.div variants={item} style={{ marginTop: 56, display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map(([n, l]) => (
            <motion.div
              key={l}
              whileHover={reduced ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', cursor: 'default' }}
            >
              <span style={{ font: '800 32px var(--font-display)', color: '#fff', lineHeight: 1 }}>{n}</span>
              <span style={{ font: '500 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>{l}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Slinkimo indikatorius */}
      {!reduced && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{ position: 'absolute', bottom: 56, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
        >
          <div style={{ width: 26, height: 42, borderRadius: 14, border: '2px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
            <motion.span
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--heat-gradient)' }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
