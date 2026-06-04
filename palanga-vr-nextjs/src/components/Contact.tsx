'use client';

import Button from './ui/Button';

interface Props {
  onBook: () => void;
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '40px 120px 1fr', gap: 16, alignItems: 'flex-start' }}>
      <span style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--heat-orange)', flexShrink: 0 }}>
        {icon}
      </span>
      <span style={{ font: '700 13px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)', paddingTop: 8 }}>{label}</span>
      <span style={{ font: '500 16px/1.55 var(--font-body)', color: '#fff', paddingTop: 6 }}>{value}</span>
    </div>
  );
}

export default function Contact({ onBook }: Props) {
  return (
    <section id="contact" style={{ background: 'var(--bg-stage)', color: '#fff' }} className="section-pad">
      <div style={{ maxWidth: 1320, margin: '0 auto' }} className="grid-2col">
        <div>
          <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-orange)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Apsilankymas</span>
          <h2 style={{ font: '800 clamp(40px, 5.5vw, 72px)/0.95 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '12px 0 32px' }}>
            Palangos<br />centre
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
              label="Adresas"
              value={<>Daukanto g. 35, Palanga<br />Viešbutis &ldquo;Palangos Vėtra&rdquo;</>}
            />
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>}
              label="Telefonas"
              value={<a href="tel:+37068426686" style={{ color: '#fff', textDecoration: 'none' }}>+370 684 26686</a>}
            />
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
              label="El. paštas"
              value={<a href="mailto:palanga-vr@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>palanga-vr@gmail.com</a>}
            />
            <ContactRow
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
              label="Darbo laikas"
              value={<>Pir – Ket 14:00 – 22:00<br />Pen 12:00 – 22:00 · Šeš 10:00 – 22:00 · Sek 10:00 – 22:00</>}
            />
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
            <Button variant="primary" onClick={onBook} style={{ padding: '16px 28px' }}>Rezervuoti laiką</Button>
            <a href="tel:+37068426686" className="btn btn--ghost" style={{ padding: '16px 28px' }}>Paskambinti</a>
          </div>
        </div>

        {/* Google Maps */}
        <div style={{
          position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-card-lg)',
          overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <iframe
            src="https://maps.google.com/maps?q=Daukanto+g.+35,+Palanga,+Lietuva&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Palanga VR žemėlapis"
          />
        </div>
      </div>
    </section>
  );
}
