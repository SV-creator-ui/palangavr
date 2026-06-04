'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

const NAV_LINKS = [
  { id: 'games', label: 'Pabėgimo kambariai' },
  { id: 'how', label: 'Kaip vyksta' },
  { id: 'pricing', label: 'Kainos' },
  { id: 'faq', label: 'D.U.K.' },
  { id: 'contact', label: 'Kontaktai' },
];

interface Props {
  onBook: () => void;
}

export default function Header({ onBook }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      borderBottomLeftRadius: menuOpen ? 0 : 24,
      borderBottomRightRadius: menuOpen ? 0 : 24,
      boxShadow: '0 6px 24px -16px rgba(11,11,58,0.25)',
    }}>
      {/* Main row */}
      <div style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Link href="/" style={{ display: 'inline-flex' }} onClick={close}>
          <Image src="/assets/logo-palanga-vr.png" alt="Palanga VR" width={200} height={56} style={{ height: 44, width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 18 }} className="header-nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`/#${l.id}`} style={{
              font: '700 14px var(--font-display)',
              color: 'var(--fg)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '6px 0',
              whiteSpace: 'nowrap',
            }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+37068426686" className="header-phone" style={{
            font: '700 14px var(--font-display)', color: 'var(--fg)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            marginLeft: 6, paddingLeft: 16, borderLeft: '1px solid var(--gray-300)',
            whiteSpace: 'nowrap',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +370 684 26686
          </a>
          <Button variant="primary" onClick={onBook} style={{ padding: '12px 22px', fontSize: 14 }}>
            Rezervacija
          </Button>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button variant="primary" onClick={onBook} className="mob-book-btn" style={{ padding: '10px 16px', fontSize: 13 }}>
            Rezervacija
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
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
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
              {l.label}
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
