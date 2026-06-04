'use client';

import { useLang } from '@/context/LangContext';

export default function HowItWorks() {
  const { t } = useLang();
  const steps = t.how.steps;

  return (
    <section id="how" style={{ background: '#fff' }} className="section-pad">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <div>
            <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{t.how.eyebrow}</span>
            <h2 style={{ font: '800 clamp(32px, 5.5vw, 72px)/1 var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '12px 0 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, minWidth: 0 }}>
              {t.how.title}
              <span className="deco-line" style={{ display: 'inline-block', width: 120, height: 2, background: 'var(--gray-300)' }} />
            </h2>
          </div>
          <p style={{ font: '500 17px/1.5 var(--font-body)', color: 'var(--fg-muted)', margin: 0, maxWidth: 420 }}>
            {t.how.sub}
          </p>
        </div>
        <div className="grid-3col">
          {steps.map((s, i) => (
            <div key={s.n} style={{
              background: i === 1 ? 'var(--navy-900)' : 'var(--off-white)',
              color: i === 1 ? '#fff' : 'var(--fg)',
              borderRadius: 'var(--radius-card-lg)',
              padding: '40px 36px 36px',
              display: 'flex', flexDirection: 'column', gap: 20,
              minHeight: 320,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ font: '800 96px/0.9 var(--font-display)', color: i === 1 ? 'rgba(255,255,255,0.28)' : 'var(--gray-300)', letterSpacing: '-0.04em' }}>{s.n}</div>
              <h3 style={{ font: '800 28px/1.05 var(--font-display)', color: 'inherit', textTransform: 'uppercase', margin: 0 }}>{s.title}</h3>
              <p style={{ font: '400 15px/1.55 var(--font-body)', color: i === 1 ? 'rgba(255,255,255,0.8)' : 'var(--fg-muted)', margin: 0 }}>{s.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${i === 1 ? 'rgba(255,255,255,0.15)' : 'var(--gray-300)'}` }}>
                <span style={{ font: '700 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: i === 1 ? 'var(--heat-orange)' : 'var(--heat-pink)' }}>{s.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
