'use client';

import { PRICING } from '@/data/games';

function PlayerDots({ count, dark = true }: { count: number; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24"
          fill={i < count ? (dark ? 'var(--navy-900)' : 'currentColor') : 'none'}
          stroke={i < count ? 'none' : (dark ? 'var(--gray-300)' : 'rgba(255,255,255,0.4)')}
          strokeWidth="2">
          <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
        </svg>
      ))}
    </div>
  );
}

interface Props {
  onBook: (players?: number) => void;
}

export default function Pricing({ onBook }: Props) {
  return (
    <section id="pricing" style={{ background: 'var(--bg-stage)', color: '#fff' }} className="section-pad">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-orange)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Kainos</span>
          <h2 style={{ font: '800 clamp(48px, 6.5vw, 88px)/0.95 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '12px 0 16px' }}>
            Nuo <span style={{ background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>20 €</span> žmogui
          </h2>
          <p style={{ font: '500 18px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.7)', margin: '0 auto', maxWidth: 600 }}>
            Vienodos kainos visiems pabėgimo kambariams. Mokate už grupę – nesvarbu, kurį nuotykį pasirenkate.
          </p>
        </div>

        <div style={{ background: '#fff', color: 'var(--fg)', borderRadius: 'var(--radius-card-lg)', padding: '8px', overflow: 'hidden' }}>
          {PRICING.map((p, i) => (
            <div key={p.players} className="pricing-row" style={{
              borderRadius: p.popular ? 24 : 16,
              background: p.popular ? 'var(--navy-900)' : 'transparent',
              color: p.popular ? '#fff' : 'var(--fg)',
              marginBottom: i < PRICING.length - 1 ? 4 : 0,
            }}>
              <div className="pr-count" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ font: '800 48px/1 var(--font-display)', color: 'inherit' }}>{p.players}</span>
                <span style={{ font: '500 13px/1.2 var(--font-body)', color: p.popular ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)' }}>žaidėjai</span>
              </div>
              <div className="pr-dots" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <PlayerDots count={p.players} dark={!p.popular} />
                {p.popular && (
                  <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--heat-orange)', marginTop: 4 }}>
                    ★ Populiariausias pasirinkimas
                  </span>
                )}
              </div>
              <div className="pr-price" style={{ textAlign: 'right' }}>
                <div style={{ font: '800 36px/1 var(--font-display)', color: 'inherit' }}>{p.price} €</div>
                <div style={{ font: '500 12px var(--font-body)', color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--fg-muted)', marginTop: 4 }}>
                  {p.perPerson.toFixed(p.perPerson % 1 ? 2 : 0)} € / žmogui
                </div>
              </div>
              <div className="pr-btn" style={{ textAlign: 'right' }}>
                <button onClick={() => onBook(p.players)} style={{
                  padding: '14px 24px', borderRadius: 999, border: 'none',
                  background: p.popular ? 'var(--heat-gradient)' : 'var(--navy-900)',
                  color: '#fff', font: '700 14px var(--font-display)', cursor: 'pointer',
                  width: '100%',
                }}>
                  Rezervuoti {p.players}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }} className="grid-3col">
          {[
            ['Be paslėptų mokesčių', 'Kaina apima viską: įrangą, instruktažą, kambarį.'],
            ['Apmokėjimas', 'Apmokėjimas grynais arba kortele.'],
            ['Nuolaida', 'Du seansai iš eilės su 5 % nuolaida. Parašykite mums.'],
          ].map(([h, b]) => (
            <div key={h} style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-card)', padding: '24px 28px', background: 'rgba(255,255,255,0.03)' }}>
              <h4 style={{ font: '700 16px var(--font-display)', color: '#fff', margin: '0 0 8px' }}>{h}</h4>
              <p style={{ font: '400 14px/1.55 var(--font-body)', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
