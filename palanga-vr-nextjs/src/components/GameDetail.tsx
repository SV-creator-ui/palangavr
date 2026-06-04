'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// useState still needed for GameCard hover state
import { GAMES, type Game } from '@/data/games';
import DifficultyMeter from './ui/DifficultyMeter';
import Chip from './ui/Chip';
import { useLang } from '@/context/LangContext';

function GameCard({ game }: { game: Game }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLang();
  return (
    <Link href={`/games/${game.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'linear-gradient(180deg, #14144A 0%, #0B0B3A 100%)',
          borderRadius: 'var(--radius-card)',
          padding: '16px 16px 22px',
          color: '#fff', textAlign: 'left', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 18,
          transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? '0 24px 48px -16px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div style={{ width: '100%', aspectRatio: '5/7', borderRadius: 'var(--radius-poster)', backgroundImage: `url(${game.poster})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#0B0B3A' }} />
        <h3 style={{ font: '700 22px/1.1 var(--font-display)', color: '#fff', margin: 0 }}>{game.title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.detail.difficulty}</span>
            <DifficultyMeter level={game.difficulty} size="sm" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.detail.players}</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.players}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
            <span style={{ font: '700 11px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.detail.duration}</span>
            <span style={{ font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>{game.timeShort}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function GameDetail({ game, onBook }: { game: Game; onBook: () => void }) {
  const { lang, t } = useLang();
  const d = t.detail;
  const loc = lang !== 'lt' ? game.i18n?.[lang] : undefined;
  const tagline = loc?.tagline ?? game.tagline;
  const description = loc?.description ?? game.description;

  const hasBanner = game.slug === 'ninja-trials' || game.slug === 'alien-infection';
  const bannerSrc = hasBanner ? `/assets/game-banner-${game.slug}.jpg` : null;
  const others = GAMES.filter((g) => g.slug !== game.slug).slice(0, 3);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [videoOpen]);

  return (
    <div style={{ background: 'var(--bg-stage)', minHeight: '100vh' }}>
      {/* Banner */}
      <div style={{
        background: hasBanner
          ? `linear-gradient(180deg, rgba(11,11,58,0.0) 50%, rgba(11,11,58,0.7) 100%), url(${bannerSrc}) center/cover no-repeat`
          : `linear-gradient(180deg, rgba(11,11,58,0.6), rgba(11,11,58,0.95)), url(${game.poster}) center/cover no-repeat`,
        minHeight: 460,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 32px', position: 'relative',
      }}>
        {!hasBanner && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40, maxWidth: 1320, width: '100%' }}>
            <img src={game.poster} alt={game.title} style={{ height: 'clamp(180px, 40vw, 280px)', width: 'auto', borderRadius: 16, boxShadow: '0 24px 60px -10px rgba(0,0,0,0.6)' }} />
            <div style={{ minWidth: 0, flex: '1 1 240px' }}>
              <h1 style={{ font: '800 clamp(34px, 7vw, 96px)/0.98 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '0 0 16px', overflowWrap: 'break-word' }}>{game.title}</h1>
              <p style={{ font: '500 clamp(16px, 4vw, 20px)/1.4 var(--font-body)', color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: 540 }}>{tagline}</p>
            </div>
          </div>
        )}
        <Link href="/" style={{
          position: 'absolute', top: 24, left: 32,
          background: 'rgba(255,255,255,0.1)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)',
          padding: '10px 18px', borderRadius: 999,
          font: '600 13px var(--font-display)',
          textTransform: 'uppercase', letterSpacing: '0.06em',
          cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
          backdropFilter: 'blur(8px)', textDecoration: 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          {d.back}
        </Link>
      </div>

      {/* About card */}
      <div className="px-page" style={{ background: 'var(--bg-stage)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', background: '#fff', borderRadius: 'var(--radius-card-lg)', padding: 'clamp(20px, 5vw, 40px)' }} className="grid-detail">
          <div>
            <h2 style={{ font: '800 clamp(28px, 6vw, 40px)/1.05 var(--font-display)', color: 'var(--fg)', margin: '0 0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, minWidth: 0, overflowWrap: 'break-word' }}>
              {d.about} {game.title}
              <span className="deco-line" style={{ display: 'inline-block', width: 140, height: 2, background: 'var(--gray-300)' }} />
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {description.map((p, i) => (
                <p key={i} style={{ font: '400 16px/1.6 var(--font-body)', color: 'var(--fg)', margin: 0 }}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[[d.players, game.players], [d.duration, game.time]].map(([l, v]) => (
                <div key={l} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: 16 }}>
                  <span style={{ font: '700 15px var(--font-display)', color: 'var(--fg)' }}>{l}</span>
                  <span style={{ font: '400 15px var(--font-body)', color: 'var(--fg)' }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: 16 }}>
                <span style={{ font: '700 15px var(--font-display)', color: 'var(--fg)' }}>{d.difficulty}</span>
                <DifficultyMeter level={game.difficulty} showLabel labelName={t.diff[game.difficultyName] ?? game.difficultyName} />
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--gray-300)', margin: '24px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {game.tags.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <button onClick={() => onBook()} className="btn btn--primary" style={{ width: '100%', padding: '16px 28px', fontSize: 15 }}>
                {d.bookRoom}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div style={{ padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ background: '#000', borderRadius: 'var(--radius-card-lg)', aspectRatio: '16/9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {game.youtubeId ? (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', border: 'none', padding: 0, background: 'none', cursor: 'pointer' }}
              >
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${game.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.42)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}><polygon points="6 4 20 12 6 20 6 4" /></svg>
                  </div>
                  <span style={{ font: '700 14px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{d.watchVideo}</span>
                </div>
              </button>
            ) : (
              <>
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${game.poster}) center/cover`, opacity: 0.7 }} />
                <div style={{ position: 'relative', zIndex: 1, width: 96, height: 96, borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="var(--navy-900)" style={{ marginLeft: 4 }}><polygon points="6 4 20 12 6 20 6 4" /></svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* More games */}
      <section style={{ padding: '80px 32px 16px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <h3 style={{ font: '800 clamp(28px, 6vw, 40px)/1.05 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '0 0 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, minWidth: 0 }}>
            {d.moreGames}
            <span className="deco-line" style={{ display: 'inline-block', width: 120, height: 2, background: 'rgba(255,255,255,0.4)' }} />
          </h3>
          <div className="grid-games">
            {others.map((g) => <GameCard key={g.slug} game={g} />)}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '80px 32px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', background: 'var(--heat-gradient)', borderRadius: 'var(--radius-card-lg)', padding: '56px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ font: '800 36px/1.05 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '0 0 12px' }}>{d.ctaTitle}</h3>
            <p style={{ font: '500 17px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.95)', margin: 0, maxWidth: 540 }}>
              {d.ctaSub}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/" style={{ padding: '16px 28px', borderRadius: 999, background: 'transparent', border: '2px solid rgba(255,255,255,0.6)', color: '#fff', font: '700 15px var(--font-display)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              {d.ctaBack}
            </Link>
            <button onClick={() => onBook()} style={{ padding: '16px 32px', borderRadius: 999, background: '#fff', border: 'none', color: 'var(--navy-900)', font: '700 15px var(--font-display)', cursor: 'pointer' }}>
              {d.ctaBook}
            </button>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && game.youtubeId && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 960, aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title={game.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
            />
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Uždaryti"
              style={{ position: 'absolute', top: -44, right: 0, background: 'none', border: 'none', color: '#fff', fontSize: 32, lineHeight: 1, cursor: 'pointer', padding: '4px 8px' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
