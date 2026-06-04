// components.jsx — primitives, header, footer

const Button = ({ variant = 'primary', children, onClick, style, href, ...rest }) => {
  const cls = `btn btn--${variant}`;
  if (href) return <a className={cls} href={href} style={style} {...rest}>{children}</a>;
  return <button className={cls} onClick={onClick} style={style} {...rest}>{children}</button>;
};

const Chip = ({ children }) => <span className="chip">{children}</span>;

const DifficultyMeter = ({ level, showLabel = false, labelName = '', size = 'md' }) => {
  const hue = level >= 3 ? 'hard' : 'easy';
  const dotSize = size === 'sm' ? 7 : size === 'lg' ? 12 : 10;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ display: 'flex', gap: 4 }}>
        {[1, 2, 3, 4, 5].map((i) =>
        <span key={i}
          className={`diff-dot ${i <= level ? (hue === 'hard' ? 'diff-dot--hard' : 'diff-dot--easy') : 'diff-dot--empty'}`}
          style={{ width: dotSize, height: dotSize }} />
        )}
      </span>
      {showLabel && labelName ?
      <span style={{ font: '400 14px var(--font-body)', color: 'var(--fg)' }}>{labelName}</span> :
      null}
    </span>);

};

const NAV_LINKS = [
{ id: 'games', label: 'Pabėgimo kambariai' },
{ id: 'how', label: 'Kaip vyksta' },
{ id: 'pricing', label: 'Kainos' },
{ id: 'faq', label: 'D.U.K.' },
{ id: 'contact', label: 'Kontaktai' }];


const Header = ({ onNav, onBook, onHome, current }) => {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
      boxShadow: '0 6px 24px -16px rgba(11,11,58,0.25)'
    }}>
      <a href="#" onClick={(e) => {e.preventDefault();onHome();}} style={{ display: 'inline-flex' }}>
        <img src="assets/logo-palanga-vr.png" alt="Palanga VR" style={{ height: 48, width: 'auto' }} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {NAV_LINKS.map((l) =>
        <a key={l.id} href={`#${l.id}`}
        onClick={(e) => {e.preventDefault();onNav(l.id);}}
        style={{
          font: '700 14px var(--font-display)',
          color: 'var(--fg)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          padding: '6px 0',
          borderBottom: current === l.id ? '2px solid var(--heat-pink)' : '2px solid transparent',
          transition: 'border-color 150ms var(--ease-out)',
          whiteSpace: 'nowrap'
        }}>
            {l.label}
          </a>
        )}
        <a href="tel:+37068426686" className="header-phone" style={{
          font: '700 14px var(--font-display)', color: 'var(--fg)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
          marginLeft: 6, paddingLeft: 16, borderLeft: '1px solid var(--gray-300)',
          whiteSpace: 'nowrap'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          +370 684 26686
        </a>
        <Button variant="primary" onClick={onBook} style={{ padding: '12px 22px', fontSize: 14 }}>
          Rezervacija
        </Button>
      </nav>
    </header>);

};

const Footer = ({ onNav, onBook }) =>
<footer id="contact" style={{
  background: 'var(--bg-stage)',
  color: 'rgba(255,255,255,0.7)',
  padding: '72px 32px 32px',
  marginTop: 0
}}>
    <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 48 }}>
      <div>
        <img src="assets/logo-palanga-vr.png" alt="Palanga VR" style={{ height: 56, width: 'auto', marginBottom: 20 }} />
        <p style={{ font: '400 14px/1.65 var(--font-body)', color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: 320 }}>Pabėgimo kambariai prie jūros. Komandiniai nuotykiai 2–6 žaidėjams Palangos centre.

      </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          {['instagram', 'facebook'].map((s) =>
        <a key={s} href="#" aria-label={s} style={{
          width: 36, height: 36, borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(255,255,255,0.7)', textDecoration: 'none'
        }}>
              {s === 'instagram' ?
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg> :

          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
          }
            </a>
        )}
        </div>
      </div>
      <div>
        <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>Naršyti</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {['games', 'how', 'pricing', 'faq'].map((id) => {
          const l = NAV_LINKS.find((x) => x.id === id);
          return <li key={id}><a href="#" onClick={(e) => {e.preventDefault();onNav(id);}} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', font: '400 14px var(--font-body)' }}>{l.label}</a></li>;
        })}
          <li><a href="#" onClick={(e) => {e.preventDefault();onBook();}} style={{ color: '#fff', textDecoration: 'none', font: '600 14px var(--font-body)' }}>Rezervuoti laiką →</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>Darbo laikas</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, font: '400 14px var(--font-body)', color: 'rgba(255,255,255,0.7)' }}>
          <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>Pir – Ket</span><span>14:00 – 22:00</span></li>
          <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>Pen</span><span>12:00 – 22:00</span></li>
          <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>Šeš</span><span>10:00 – 22:00</span></li>
          <li style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}><span>Sek</span><span>10:00 – 22:00</span></li>
        </ul>
      </div>
      <div>
        <h4 style={{ font: '700 12px var(--font-display)', color: '#fff', textTransform: 'uppercase', letterSpacing: '.08em', margin: '0 0 18px' }}>Susisiekti</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, font: '400 14px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>
          <li>S. Daukanto g. 24, Palanga<br />Viešbutis "Palangos Vėtra"</li>
          <li><a href="tel:+37068426686" style={{ color: '#fff', textDecoration: 'none', font: '600 15px var(--font-display)' }}>+370 684 26686</a></li>
          <li><a href="mailto:palanga-vr@gmail.com" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>palanga-vr@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div style={{ maxWidth: 1320, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)',
    display: 'flex', justifyContent: 'space-between', font: '400 12px var(--font-body)', color: 'rgba(255,255,255,0.45)', flexWrap: 'wrap', gap: 12 }}>
      <span>© 2026 Palanga VR. </span>
      <span>Palanga, Lietuva</span>
    </div>
  </footer>;


Object.assign(window, { Button, Chip, DifficultyMeter, Header, Footer, NAV_LINKS });