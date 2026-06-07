'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';
import { useLang } from '@/context/LangContext';
import { Lang } from '@/data/translations';

const NAV_IDS = ['games', 'how', 'pricing', 'faq', 'contact'] as const;

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switcher" style={{
      display: 'flex', alignItems: 'center', gap: 2,
      padding: '4px', borderRadius: 999,
      background: 'var(--off-white)', border: '1px solid var(--gray-300)',
    }}>
      {(['lt', 'en', 'ru'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="lang-btn"
          style={{
            padding: '5px 10px', borderRadius: 999, border: 'none', cursor: 'pointer',
            background: lang === l ? 'var(--navy-900)' : 'transparent',
            color: lang === l ? '#fff' : 'var(--fg-muted)',
            font: '700 11px var(--font-display)',
            textTransform: 'uppercase', letterSpacing: '0.05em',
            transition: 'all 150ms',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

interface Props {
  onBook: () => void;
}

export default function Header({ onBook }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  const close = () => setMenuOpen(false);

  const navLabels: Record<string, string> = {
    games: t.nav.games,
    how: t.nav.how,
    pricing: t.nav.pricing,
    faq: t.nav.faq,
    contact: t.nav.contact,
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      borderBottomLeftRadius: menuOpen ? 0 : 24,
      borderBottomRightRadius: menuOpen ? 0 : 24,
      boxShadow: '0 6px 24px -16px rgba(11,11,58,0.25)',
    }}>
      {/* Main row */}
      <div className="header-row" style={{ padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Link href="/" className="header-logo" style={{ display: 'inline-flex', flexShrink: 0 }} onClick={close}>
          <Image src="/assets/logo-palanga-vr.png" alt="Palanga VR" width={200} height={56} priority style={{ height: 52, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 18 }} className="header-nav-links">
          {NAV_IDS.map((id) => (
            <a key={id} href={`/#${id}`} style={{
              font: '700 14px var(--font-display)',
              color: 'var(--fg)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '6px 0',
              whiteSpace: 'nowrap',
            }}>
              {navLabels[id]}
            </a>
          ))}
          <a href="tel:+37068426686" className="header-phone" style={{
            font: '700 14px var(--font-display)', color: 'var(--fg)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            marginLeft: 6, paddingLeft: 16, borderLeft: '1px solid var(--gray-300)',
            whiteSpace: 'nowrap',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +370 684 26686
          </a>
          <LanguageSwitcher />
          <Button variant="primary" onClick={onBook} style={{ padding: '14px 28px', fontSize: 15 }}>
            {t.book}
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="mob-controls" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <LanguageSwitcher />
          <Button variant="primary" onClick={onBook} className="mob-book-btn" style={{ padding: '10px 16px', fontSize: 13 }}>
            {t.book}
          </Button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="mob-menu-btn"
            aria-label="Meniu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid var(--gray-200)',
          padding: '8px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={close}
              style={{
                padding: '14px 0',
                font: '700 16px var(--font-display)',
                color: 'var(--fg)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                borderBottom: '1px solid var(--gray-200)',
              }}
            >
              {navLabels[id]}
            </a>
          ))}
          <a
            href="tel:+37068426686"
            style={{
              marginTop: 16,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              font: '700 15px var(--font-display)', color: 'var(--fg)',
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +370 684 26686
          </a>
        </div>
      )}
    </header>
  );
}
