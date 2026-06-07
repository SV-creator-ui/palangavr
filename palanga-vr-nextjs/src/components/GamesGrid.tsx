'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { GAMES, type Game } from '@/data/games';
import DifficultyMeter from './ui/DifficultyMeter';
import { useLang } from '@/context/LangContext';
import { sectionId } from '@/config/sections';

function GameCard({ game }: { game: Game }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLang();
  const g = t.grid;

  return (
    <Link href={`/games/${game.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'linear-gradient(180deg, #14144A 0%, #0B0B3A 100%)',
          borderRadius: 'var(--radius-card)',
          padding: '16px 16px 22px',
          color: '#fff',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? '0 24px 48px -16px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div style={{
          width: '100%',
          aspectRatio: '5/7',
          borderRadius: 'var(--radius-poster)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={game.poster}
            alt={game.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>
        <h3 style={{ font: '700 22px/1.1 var(--font-display)', color: '#fff', margin: 0 }}>{game.title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{g.difficulty}</span>
            <DifficultyMeter level={game.difficulty} size="sm" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{g.players}</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.players}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{g.duration}</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.timeShort}</span>
          </div>
        </div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 4,
          font: '700 13px var(--font-display)', color: 'var(--heat-orange)',
          textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>
          {g.learnMore}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform 200ms var(--ease-out)' }}>
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function SortDropdown({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative', minWidth: 200 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%', padding: '14px 22px', borderRadius: 999,
          border: '1.5px solid rgba(255,255,255,0.25)',
          background: 'rgba(255,255,255,0.05)', color: '#fff',
          font: '500 14px var(--font-body)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        {value}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
          background: '#fff', color: 'var(--fg)', borderRadius: 16, overflow: 'hidden',
          boxShadow: 'var(--shadow-popover)', zIndex: 10,
        }}>
          {options.map((o) => (
            <button key={o} onClick={() => { onChange(o); setOpen(false); }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '12px 20px', border: 'none',
              background: o === value ? 'var(--off-white)' : '#fff',
              font: '500 14px var(--font-body)', color: 'var(--fg)', cursor: 'pointer',
            }}>{o}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GamesGrid() {
  const { t, lang } = useLang();
  const g = t.grid;
  const sorts = g.sorts;
  const [sortIdx, setSortIdx] = useState(0);

  const sorted = useMemo(() => {
    const arr = [...GAMES];
    if (sortIdx === 0) arr.sort((a, b) => b.year - a.year);
    else if (sortIdx === 1) arr.sort((a, b) => a.year - b.year);
    else if (sortIdx === 2) arr.sort((a, b) => a.difficulty - b.difficulty);
    else if (sortIdx === 3) arr.sort((a, b) => b.difficulty - a.difficulty);
    return arr;
  }, [sortIdx]);

  return (
    <section id={sectionId(lang, 'games')} style={{ background: 'var(--bg-stage)', color: '#fff' }} className="section-pad-sm">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ font: '700 12px var(--font-display)', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{g.eyebrow}</span>
            <h2 style={{
              font: '800 clamp(32px, 4.5vw, 64px)/1 var(--font-display)',
              color: '#fff', textTransform: 'uppercase', margin: 0,
              display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', minWidth: 0,
            }}>
              {g.title}
              <span className="deco-line" style={{ display: 'inline-block', width: 120, height: 2, background: 'rgba(255,255,255,0.4)' }} />
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '700 11px var(--font-display)', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{g.sortLabel}</span>
            <SortDropdown value={sorts[sortIdx]} options={sorts} onChange={(v) => setSortIdx(sorts.indexOf(v))} />
          </div>
        </div>
        <div className="grid-games">
          {sorted.map((g) => <GameCard key={g.slug} game={g} />)}
        </div>
      </div>
    </section>
  );
}
