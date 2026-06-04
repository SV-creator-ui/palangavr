'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { GAMES, type Game } from '@/data/games';
import DifficultyMeter from './ui/DifficultyMeter';

function GameCard({ game }: { game: Game }) {
  const [hovered, setHovered] = useState(false);

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
          backgroundImage: `url(${game.poster})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0B0B3A',
        }} />
        <h3 style={{ font: '700 22px/1.1 var(--font-display)', color: '#fff', margin: 0 }}>{game.title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sudėtingumas</span>
            <DifficultyMeter level={game.difficulty} size="sm" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Žaidėjai</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.players}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Trukmė</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.timeShort}</span>
          </div>
        </div>
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
  const [sort, setSort] = useState('Naujausi');
  const sortOptions = ['Naujausi', 'Seniausi', 'Lengviausi', 'Sunkiausi'];

  const sorted = useMemo(() => {
    const arr = [...GAMES];
    if (sort === 'Naujausi') arr.sort((a, b) => b.year - a.year);
    else if (sort === 'Seniausi') arr.sort((a, b) => a.year - b.year);
    else if (sort === 'Lengviausi') arr.sort((a, b) => a.difficulty - b.difficulty);
    else if (sort === 'Sunkiausi') arr.sort((a, b) => b.difficulty - a.difficulty);
    return arr;
  }, [sort]);

  return (
    <section id="games" style={{ background: 'var(--bg-stage)', color: '#fff' }} className="section-pad-sm">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ font: '700 12px var(--font-display)', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>9 nuotykiai · 1 vieta</span>
            <h2 style={{
              font: '800 clamp(40px, 4.5vw, 64px)/0.95 var(--font-display)',
              color: '#fff', textTransform: 'uppercase', margin: 0,
              display: 'inline-flex', alignItems: 'center', gap: 32, flexWrap: 'wrap',
            }}>
              Pabėgimo kambariai
              <span style={{ display: 'inline-block', width: 120, height: 2, background: 'rgba(255,255,255,0.4)' }} />
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ font: '700 11px var(--font-display)', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Rūšiuoti pagal</span>
            <SortDropdown value={sort} options={sortOptions} onChange={setSort} />
          </div>
        </div>
        <div className="grid-games">
          {sorted.map((g) => <GameCard key={g.slug} game={g} />)}
        </div>
      </div>
    </section>
  );
}
