'use client';

import { useState } from 'react';
import { useLang } from '@/context/LangContext';

function FAQItem({ item, open, onToggle }: { item: { q: string; a: string }; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ border: '1px solid var(--gray-300)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: open ? 'var(--off-white)' : '#fff' }}>
      <button onClick={onToggle} style={{
        width: '100%', textAlign: 'left', padding: '24px 28px', border: 'none', background: 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        cursor: 'pointer', color: 'var(--fg)',
      }}>
        <span style={{ font: '700 18px var(--font-display)', color: 'var(--fg)' }}>{item.q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 999,
          background: open ? 'var(--navy-900)' : 'var(--gray-200)',
          color: open ? '#fff' : 'var(--navy-900)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'all 200ms var(--ease-out)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 200ms var(--ease-out)' }}>
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 28px 28px', font: '400 16px/1.65 var(--font-body)', color: 'var(--fg-muted)' }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  const items = t.faq.items;

  return (
    <section id="faq" style={{ background: '#fff', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{t.faq.eyebrow}</span>
          <h2 style={{ font: '800 clamp(40px, 5.5vw, 72px)/0.95 var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '12px 0 0' }}>
            {t.faq.title}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item, i) => (
            <FAQItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
        <p style={{ textAlign: 'center', font: '500 16px var(--font-body)', color: 'var(--fg-muted)', marginTop: 48 }}>
          {t.faq.notFound}{' '}
          <a href="tel:+37068426686" style={{ color: 'var(--navy-900)', textDecoration: 'underline', fontWeight: 600 }}>+37068426686</a>
        </p>
      </div>
    </section>
  );
}
