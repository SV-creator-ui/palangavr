'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';

const NAV_IDS = ['games', 'how', 'pricing', 'faq'] as const;

interface Props {
  onBook: () => void;
}

export default function Footer({ onBook }: Props) {
  const { t } = useLang();
  const f = t.footer;
  const c = t.contact;

  return (
    <footer style={{
      background: 'var(--bg-stage)',
      color: 'rgba(255,255,255,0.7)',
      padding: '72px 32px 32px',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }} className="grid-footer">
        <div>
          <Image src="/assets/logo-palanga-vr.png" alt="Palanga VR" width={200} height={56} style={{ height: 56, width: 'auto', marginBottom: 20 }} />
          <p style={{ font: '400 14px/1.65 var(--font-body)', color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: 320 }}>
            {f.desc}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {(['instagram', 'facebook'] as const).map((s) => (
              <a key={s} href="#" aria-label={s} style={{
                width: 36, height: 36, borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              }}>
                {s === 'instagram' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>{f.navTitle}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`/#${id}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', font: '400 14px var(--font-body)' }}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
            <li>
              <button onClick={onBook} style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                color: '#fff', textDecoration: 'none', font: '600 14px var(--font-body)',
              }}>
                {f.bookLink}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>{f.hoursTitle}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, font: '400 14px var(--font-body)', color: 'rgba(255,255,255,0.7)' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>{f.days.pirKet}</span><span>14:00 – 22:00</span></li>
            <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>{f.days.pen}</span><span>12:00 – 22:00</span></li>
            <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>{f.days.ses}</span><span>10:00 – 22:00</span></li>
            <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>{f.days.sek}</span><span>10:00 – 22:00</span></li>
          </ul>
        </div>

        <div>
          <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>{f.contactTitle}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, font: '400 14px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>
            <li>{c.addr1}<br />{c.addr2}</li>
            <li><a href="tel:+37068426686" style={{ color: '#fff', textDecoration: 'none', font: '600 15px var(--font-display)' }}>+370 684 26686</a></li>
            <li><a href="mailto:palangavr@gmail.com" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>palangavr@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: 1320, margin: '48px auto 0', paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', justifyContent: 'space-between',
        font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.45)',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2026 Palanga VR.</span>
        <span>{f.copy}</span>
      </div>
    </footer>
  );
}
