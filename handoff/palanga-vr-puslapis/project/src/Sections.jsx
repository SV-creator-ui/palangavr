// Sections.jsx — HowItWorks, Pricing, FAQ, Contact (location/map)

const HowItWorks = () => {
  const steps = [
  {
    n: '01',
    title: 'Pasirink nuotykį',
    body: 'Devyni unikalūs pasauliai – nuo lengvų šeimai tinkančių iki ekspertų lygio galvosūkių. Surink komandą nuo 2 iki 6 žaidėjų.',
    meta: '2 – 6 žaidėjų'
  },
  {
    n: '02',
    title: 'Rezervuok laiką',
    body: 'Užsisakyk seansą internetu arba paskambink. Atvyk 10 min. anksčiau – pristatysime pabėgimo kambarį ir uždėsime VR įrangą.',
    meta: '~10 min pasiruošimas'
  },
  {
    n: '03',
    title: 'Įženk į kambarį',
    body: '45 minutės azartiškų nuotykių virtualioje realybėje. Įtraukiantys galvosūkiai, nepamirštami pasauliai ir adrenalinas.',
    meta: '~45 min žaidimo'
  }];

  return (
    <section id="how" style={{ background: '#fff', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
          <div>
            <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Kaip vyksta</span>
            <h2 style={{
              font: '800 clamp(40px, 5.5vw, 72px)/0.95 var(--font-display)',
              color: 'var(--fg)', textTransform: 'uppercase', margin: '12px 0 0',
              display: 'inline-flex', alignItems: 'center', gap: 24
            }}>
              Trys žingsniai
              <span style={{ display: 'inline-block', width: 120, height: 2, background: 'var(--gray-300)' }} />
            </h2>
          </div>
          <p style={{ font: '500 17px/1.5 var(--font-body)', color: 'var(--fg-muted)', margin: 0, maxWidth: 420 }}>Nuo durų atidarymo iki pergalės – maždaug valanda jūsų laiko.

          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {steps.map((s, i) =>
          <div key={s.n} style={{
            background: i === 1 ? 'var(--navy-900)' : 'var(--off-white)',
            color: i === 1 ? '#fff' : 'var(--fg)',
            borderRadius: 'var(--radius-card-lg)',
            padding: '40px 36px 36px',
            display: 'flex', flexDirection: 'column', gap: 20,
            minHeight: 320,
            position: 'relative', overflow: 'hidden'
          }}>
              <div style={{
              font: '800 96px/0.9 var(--font-display)',
              color: i === 1 ? 'rgba(255,255,255,0.28)' : 'var(--gray-300)',
              letterSpacing: '-0.04em'
            }}>{s.n}</div>
              <h3 style={{ font: '800 28px/1.05 var(--font-display)', color: 'inherit', textTransform: 'uppercase', margin: 0 }}>{s.title}</h3>
              <p style={{ font: '400 15px/1.55 var(--font-body)', color: i === 1 ? 'rgba(255,255,255,0.8)' : 'var(--fg-muted)', margin: 0 }}>{s.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${i === 1 ? 'rgba(255,255,255,0.15)' : 'var(--gray-300)'}` }}>
                <span style={{ font: '700 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: i === 1 ? 'var(--heat-orange)' : 'var(--heat-pink)' }}>{s.meta}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

// PRICING --------------------------------------------------------------
const Pricing = ({ onBook, style = 'rows' }) => {
  return (
    <section id="pricing" style={{ background: 'var(--bg-stage)', padding: '120px 32px', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-orange)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Kainos</span>
          <h2 style={{
            font: '800 clamp(48px, 6.5vw, 88px)/0.95 var(--font-display)',
            color: '#fff', textTransform: 'uppercase', margin: '12px 0 16px'
          }}>
            Nuo <span style={{ background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>20 €</span> žmogui
          </h2>
          <p style={{ font: '500 18px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.7)', margin: '0 auto', maxWidth: 600 }}>
            Vienodos kainos visiems pabėgimo kambariams. Mokate už grupę – nesvarbu, kurį nuotykį pasirenkate.
          </p>
        </div>

        {style === 'cards' ? <PricingCards onBook={onBook} /> : <PricingRows onBook={onBook} />}

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
          ['Be paslėptų mokesčių', 'Kaina apima viską: įrangą, instruktažą, kambarį.'],
          ['Apmokėjimas', 'Apmokėjimas grynais arba kortele.'],
          ['Nuolaida', 'Du seansai iš eilės su 5 % nuolaida. Parašykite mums.']].
          map(([h, b]) =>
          <div key={h} style={{
            border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-card)',
            padding: '24px 28px', background: 'rgba(255,255,255,0.03)'
          }}>
              <h4 style={{ font: '700 16px var(--font-display)', color: '#fff', margin: '0 0 8px' }}>{h}</h4>
              <p style={{ font: '400 14px/1.55 var(--font-body)', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{b}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const PricingRows = ({ onBook }) =>
<div style={{
  background: '#fff', color: 'var(--fg)',
  borderRadius: 'var(--radius-card-lg)',
  padding: '8px 8px 8px 8px',
  overflow: 'hidden'
}}>
    {PRICING.map((p, i) =>
  <div key={p.players} style={{
    display: 'grid',
    gridTemplateColumns: '120px 1fr auto 220px',
    alignItems: 'center', gap: 24,
    padding: '24px 32px',
    borderRadius: p.popular ? 24 : 16,
    background: p.popular ? 'var(--navy-900)' : 'transparent',
    color: p.popular ? '#fff' : 'var(--fg)',
    marginBottom: i < PRICING.length - 1 ? 4 : 0,
    position: 'relative'
  }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ font: '800 48px/1 var(--font-display)', color: 'inherit' }}>{p.players}</span>
          <span style={{ font: '500 13px/1.2 var(--font-body)', color: p.popular ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)' }}>
            {p.players === 2 ? 'žaidėjai' : 'žaidėjai'}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <PlayerDots count={p.players} dark={!p.popular} />
          {p.popular &&
      <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--heat-orange)', marginTop: 4 }}>
              ★ Populiariausias pasirinkimas
            </span>
      }
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ font: '800 36px/1 var(--font-display)', color: 'inherit' }}>{p.price} €</div>
          <div style={{ font: '500 12px var(--font-body)', color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--fg-muted)', marginTop: 4 }}>
            {p.perPerson.toFixed(p.perPerson % 1 ? 2 : 0)} € / žmogui
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button onClick={() => onBook(p.players)} style={{
        padding: '14px 24px', borderRadius: 999, border: 'none',
        background: p.popular ? 'var(--heat-gradient)' : 'var(--navy-900)',
        color: '#fff', font: '700 14px var(--font-display)', cursor: 'pointer',
        width: '100%'
      }}>
            Rezervuoti {p.players}
          </button>
        </div>
      </div>
  )}
  </div>;


const PricingCards = ({ onBook }) =>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
    {PRICING.map((p) =>
  <div key={p.players} style={{
    background: p.popular ? 'var(--heat-gradient)' : '#fff',
    color: p.popular ? '#fff' : 'var(--fg)',
    borderRadius: 'var(--radius-card)',
    padding: '32px 24px',
    display: 'flex', flexDirection: 'column', gap: 16,
    position: 'relative',
    transform: p.popular ? 'translateY(-12px)' : 'none',
    boxShadow: p.popular ? '0 32px 64px -20px rgba(242,70,110,0.5)' : 'none'
  }}>
        {p.popular &&
    <span style={{
      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
      background: 'var(--navy-900)', color: '#fff',
      padding: '6px 14px', borderRadius: 999,
      font: '700 10px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em'
    }}>★ Populiariausias</span>
    }
        <div>
          <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: p.popular ? 'rgba(255,255,255,0.85)' : 'var(--fg-muted)' }}>
            {p.players} žaidėjai
          </span>
        </div>
        <div>
          <span style={{ font: '800 56px/1 var(--font-display)', color: 'inherit' }}>{p.price}</span>
          <span style={{ font: '700 24px var(--font-display)', color: 'inherit', marginLeft: 4 }}>€</span>
        </div>
        <div style={{ font: '500 13px var(--font-body)', color: p.popular ? 'rgba(255,255,255,0.85)' : 'var(--fg-muted)' }}>
          {p.perPerson.toFixed(p.perPerson % 1 ? 2 : 0)} € / žmogui
        </div>
        <PlayerDots count={p.players} dark={!p.popular} centered />
        <div style={{ marginTop: 'auto' }}>
          <button onClick={() => onBook(p.players)} style={{
        width: '100%', padding: '14px', borderRadius: 999, border: 'none',
        background: p.popular ? '#fff' : 'var(--navy-900)',
        color: p.popular ? 'var(--navy-900)' : '#fff',
        font: '700 13px var(--font-display)', cursor: 'pointer'
      }}>
            Rezervuoti
          </button>
        </div>
      </div>
  )}
  </div>;


const PlayerDots = ({ count, dark = true, centered = false }) =>
<div style={{ display: 'flex', gap: 6, justifyContent: centered ? 'center' : 'flex-start' }}>
    {Array.from({ length: 6 }).map((_, i) => {
    const filled = i < count;
    return (
      <svg key={i} width="22" height="22" viewBox="0 0 24 24"
      fill={filled ? dark ? 'var(--navy-900)' : 'currentColor' : 'none'}
      stroke={filled ? 'none' : dark ? 'var(--gray-300)' : 'rgba(255,255,255,0.4)'}
      strokeWidth="2">
          <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
        </svg>);

  })}
  </div>;


// FAQ ------------------------------------------------------------------
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: '#fff', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>D.U.K.</span>
          <h2 style={{
            font: '800 clamp(40px, 5.5vw, 72px)/0.95 var(--font-display)',
            color: 'var(--fg)', textTransform: 'uppercase', margin: '12px 0 0'
          }}>
            Dažniausi klausimai
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {FAQ_ITEMS.map((item, i) =>
          <FAQItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          )}
        </div>
        <p style={{ textAlign: 'center', font: '500 16px var(--font-body)', color: 'var(--fg-muted)', marginTop: 48 }}>
          Klausimo nėra sąraše? Paskambinkite mums:{' '}
          <a href="tel:+37068426686" style={{ color: 'var(--navy-900)', textDecoration: 'underline', fontWeight: 600 }}>+37068426686</a>
        </p>
      </div>
    </section>);

};

const FAQItem = ({ item, open, onToggle }) =>
<div style={{
  border: '1px solid var(--gray-300)',
  borderRadius: 'var(--radius-card)',
  overflow: 'hidden',
  background: open ? 'var(--off-white)' : '#fff'
}}>
    <button onClick={onToggle} style={{
    width: '100%', textAlign: 'left',
    padding: '24px 28px', border: 'none', background: 'transparent',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
    cursor: 'pointer', color: 'var(--fg)'
  }}>
      <span style={{ font: '700 18px var(--font-display)', color: 'var(--fg)' }}>{item.q}</span>
      <span style={{
      width: 32, height: 32, borderRadius: 999,
      background: open ? 'var(--navy-900)' : 'var(--gray-200)',
      color: open ? '#fff' : 'var(--navy-900)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, transition: 'all 200ms var(--ease-out)'
    }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 200ms var(--ease-out)' }}>
          <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </span>
    </button>
    {open &&
  <div style={{ padding: '0 28px 28px', font: '400 16px/1.65 var(--font-body)', color: 'var(--fg-muted)' }}>
        {item.a}
      </div>
  }
  </div>;


// CONTACT / LOCATION ---------------------------------------------------
const Contact = ({ onBook }) =>
<section style={{ background: 'var(--bg-stage)', padding: '120px 32px 80px', color: '#fff' }}>
    <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'center' }}>
      <div>
        <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-orange)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Apsilankymas</span>
        <h2 style={{
        font: '800 clamp(40px, 5.5vw, 72px)/0.95 var(--font-display)',
        color: '#fff', textTransform: 'uppercase', margin: '12px 0 32px'
      }}>
          Palangos<br />centre
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ContactRow
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
          label="Adresas"
          value={<>S. Daukanto g. 24, Palanga<br />Viešbutis "Palangos Vėtra"</>} />
        
          <ContactRow
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
          label="Telefonas"
          value={<a href="tel:+37068426686" style={{ color: '#fff', textDecoration: 'none' }}>+370 684 26686</a>} />
        
          <ContactRow
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
          label="El. paštas"
          value={<a href="mailto:palanga-vr@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>palanga-vr@gmail.com</a>} />
        
          <ContactRow
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
          label="Darbo laikas"
          value={<>Pir – Ket 14:00 – 22:00<br />Pen 12:00 – 22:00 · Šeš 10:00 – 22:00 · Sek 10:00 – 22:00</>} />
        
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
          <Button variant="primary" onClick={onBook} style={{ padding: '16px 28px' }}>Rezervuoti laiką</Button>
          <a href="tel:+37068426686" className="btn btn--ghost" style={{ padding: '16px 28px' }}>Paskambinti</a>
        </div>
      </div>

      {/* Stylised map */}
      <div style={{
      position: 'relative',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-card-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1E1E5C 0%, #0B0B3A 100%)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
        {/* fake map grid */}
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="seaG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a4a7a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B0B3A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />
          {/* Baltic sea */}
          <rect x="0" y="0" width="100" height="300" fill="url(#seaG)" />
          <text x="40" y="160" fill="rgba(255,255,255,0.4)" fontFamily="Sora" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle" transform="rotate(-90 40 160)">BALTIJOS JŪRA</text>
          {/* Coastline */}
          <path d="M 100 0 Q 105 80 100 150 T 100 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
          {/* Roads */}
          <path d="M 100 120 Q 200 110 400 140" stroke="rgba(255,255,255,0.18)" strokeWidth="3" fill="none" />
          <path d="M 220 0 L 230 300" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <path d="M 130 60 L 380 200" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
          <path d="M 150 250 L 380 220" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
          {/* Park (Birutės) */}
          <ellipse cx="160" cy="200" rx="50" ry="35" fill="rgba(46,190,240,0.08)" stroke="rgba(46,190,240,0.2)" strokeWidth="1" />
          <text x="160" y="205" fill="rgba(46,190,240,0.6)" fontFamily="Sora" fontSize="9" fontWeight="600" textAnchor="middle">Birutės parkas</text>
          {/* labels */}
          <text x="280" y="100" fill="rgba(255,255,255,0.35)" fontFamily="Sora" fontSize="10" fontWeight="600">Jūratės g.</text>
        </svg>
        {/* Pin */}
        <div style={{
        position: 'absolute', top: '34%', left: '62%',
        transform: 'translate(-50%, -100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6
      }}>
          <div style={{
          background: '#fff', color: 'var(--navy-900)',
          padding: '8px 14px', borderRadius: 999,
          font: '700 12px var(--font-display)',
          textTransform: 'uppercase', letterSpacing: '0.06em',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          whiteSpace: 'nowrap'
        }}>
            Palanga VR
          </div>
          <div style={{
          width: 28, height: 28, borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          background: 'var(--heat-gradient)',
          border: '3px solid #fff',
          boxShadow: '0 6px 20px rgba(242,70,110,0.5)'
        }} />
          <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'rgba(242,70,110,0.4)',
          marginTop: -4,
          animation: 'ping 2s var(--ease-out) infinite'
        }} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes ping {
            0% { transform: scale(0.5); opacity: 0.8; }
            100% { transform: scale(3); opacity: 0; }
          }
        ` }} />
      </div>
    </div>
  </section>;


const ContactRow = ({ icon, label, value }) =>
<div style={{ display: 'grid', gridTemplateColumns: '40px 120px 1fr', gap: 16, alignItems: 'flex-start' }}>
    <span style={{
    width: 36, height: 36, borderRadius: 999,
    background: 'rgba(255,255,255,0.08)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--heat-orange)', flexShrink: 0
  }}>{icon}</span>
    <span style={{ font: '700 13px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)', paddingTop: 8 }}>{label}</span>
    <span style={{ font: '500 16px/1.55 var(--font-body)', color: '#fff', paddingTop: 6 }}>{value}</span>
  </div>;


Object.assign(window, { HowItWorks, Pricing, FAQ, Contact });