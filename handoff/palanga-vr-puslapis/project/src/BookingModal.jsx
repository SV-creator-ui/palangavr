// BookingModal.jsx — REZERVACIJA flow with date / time / game / players

const TIMES = ['12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00'];

const formatLtDate = (d) => {
  const months = ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
};
const dayNamesShort = ['Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš'];

const BookingModal = ({ open, onClose, initialGameSlug, initialPlayers = 4 }) => {
  const [step, setStep] = React.useState(1);
  const [game, setGame] = React.useState(initialGameSlug || GAMES[0].slug);
  const [players, setPlayers] = React.useState(initialPlayers);
  const [dateIdx, setDateIdx] = React.useState(2);
  const [time, setTime] = React.useState('18:00');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setStep(1); setDone(false);
      if (initialGameSlug) setGame(initialGameSlug);
      if (initialPlayers) setPlayers(initialPlayers);
    }
  }, [open, initialGameSlug, initialPlayers]);

  if (!open) return null;

  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + i); return d;
  });

  const selectedGame = GAMES.find(g => g.slug === game);
  const priceRow = PRICING.find(p => p.players === players) || PRICING[2];

  const close = (e) => { if (e) e.stopPropagation(); onClose(); };

  return (
    <div onClick={close} style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(11,11,58,0.7)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, overflow: 'auto'
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: '#fff', color: 'var(--fg)',
        borderRadius: 'var(--radius-card-lg)',
        maxWidth: 880, width: '100%', maxHeight: '92vh',
        overflow: 'auto', position: 'relative',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
      }}>
        {/* close */}
        <button onClick={close} style={{
          position: 'absolute', top: 20, right: 20, zIndex: 10,
          width: 40, height: 40, borderRadius: 999,
          background: 'var(--gray-200)', border: 'none', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {done ? (
          <BookingSuccess game={selectedGame} date={dates[dateIdx]} time={time} players={players} onClose={onClose} />
        ) : (
          <>
            {/* Header strip */}
            <div style={{ padding: '32px 40px 24px', borderBottom: '1px solid var(--gray-200)' }}>
              <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Rezervacija · Žingsnis {step} / 3</span>
              <h3 style={{ font: '800 32px var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '8px 0 0' }}>
                {step === 1 && 'Pasirinkite kambarį ir komandą'}
                {step === 2 && 'Pasirinkite datą ir laiką'}
                {step === 3 && 'Jūsų kontaktai'}
              </h3>
              {/* step dots */}
              <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
                {[1,2,3].map(s => (
                  <div key={s} style={{
                    height: 4, flex: 1, borderRadius: 999,
                    background: s <= step ? 'var(--heat-gradient)' : 'var(--gray-200)'
                  }} />
                ))}
              </div>
            </div>

            <div style={{ padding: 40 }}>
              {step === 1 && (
                <Step1 game={game} setGame={setGame} players={players} setPlayers={setPlayers} />
              )}
              {step === 2 && (
                <Step2 dates={dates} dateIdx={dateIdx} setDateIdx={setDateIdx} time={time} setTime={setTime} />
              )}
              {step === 3 && (
                <Step3 name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
              )}
            </div>

            {/* Footer */}
            <div style={{
              borderTop: '1px solid var(--gray-200)', padding: '20px 40px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              background: 'var(--off-white)',
              borderBottomLeftRadius: 'var(--radius-card-lg)', borderBottomRightRadius: 'var(--radius-card-lg)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ font: '500 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Iš viso</span>
                <span style={{ font: '800 28px var(--font-display)', color: 'var(--fg)' }}>{priceRow.price} €</span>
                <span style={{ font: '500 12px var(--font-body)', color: 'var(--fg-muted)' }}>{priceRow.perPerson.toFixed(priceRow.perPerson % 1 ? 2 : 0)} € / žmogui · {players} žaidėjai</span>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="btn btn--outline" style={{ background: '#fff', padding: '14px 24px' }}>
                    Atgal
                  </button>
                )}
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} className="btn btn--primary" style={{ padding: '14px 28px' }}>
                    Toliau
                  </button>
                ) : (
                  <button onClick={() => setDone(true)} className="btn btn--primary" style={{ padding: '14px 28px' }}>
                    Patvirtinti rezervaciją
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Step1 = ({ game, setGame, players, setPlayers }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <div>
      <Label>Pabėgimo kambarys</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {GAMES.map(g => (
          <button key={g.slug} onClick={() => setGame(g.slug)} style={{
            padding: 8, border: game === g.slug ? '2px solid var(--navy-900)' : '2px solid transparent',
            borderRadius: 16, background: game === g.slug ? 'var(--off-white)' : '#fff',
            cursor: 'pointer', textAlign: 'left',
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <div style={{
              aspectRatio: '5/7', borderRadius: 10,
              backgroundImage: `url(${g.poster})`, backgroundSize: 'cover', backgroundPosition: 'center'
            }} />
            <span style={{ font: '700 13px var(--font-display)', color: 'var(--fg)', padding: '0 4px' }}>{g.title}</span>
            <span style={{ font: '500 11px var(--font-body)', color: 'var(--fg-muted)', padding: '0 4px' }}>{g.difficultyName}</span>
          </button>
        ))}
      </div>
    </div>
    <div>
      <Label>Žaidėjų skaičius</Label>
      <div style={{ display: 'flex', gap: 8 }}>
        {[2,3,4,5,6].map(n => (
          <button key={n} onClick={() => setPlayers(n)} style={{
            flex: 1, padding: '20px 0',
            border: players === n ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)',
            borderRadius: 16,
            background: players === n ? 'var(--navy-900)' : '#fff',
            color: players === n ? '#fff' : 'var(--fg)',
            cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center'
          }}>
            <span style={{ font: '800 24px var(--font-display)' }}>{n}</span>
            <span style={{ font: '500 11px var(--font-body)', color: players === n ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)' }}>
              {PRICING.find(p => p.players === n).price} €
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Step2 = ({ dates, dateIdx, setDateIdx, time, setTime }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <div>
      <Label>Data</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
        {dates.map((d, i) => {
          const sel = dateIdx === i;
          const isToday = i === 0;
          return (
            <button key={i} onClick={() => setDateIdx(i)} style={{
              padding: '14px 8px',
              border: sel ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)',
              borderRadius: 12,
              background: sel ? 'var(--navy-900)' : '#fff',
              color: sel ? '#fff' : 'var(--fg)',
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center'
            }}>
              <span style={{ font: '500 11px var(--font-display)', textTransform: 'uppercase', color: sel ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)', letterSpacing: '0.06em' }}>
                {isToday ? 'Šiandien' : dayNamesShort[d.getDay()]}
              </span>
              <span style={{ font: '800 20px var(--font-display)' }}>{d.getDate()}</span>
              <span style={{ font: '400 10px var(--font-body)', color: sel ? 'rgba(255,255,255,0.6)' : 'var(--fg-subtle)' }}>
                {['saus.','vas.','kov.','bal.','geg.','birž.','liep.','rugp.','rugs.','spal.','lapkr.','gruod.'][d.getMonth()]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
    <div>
      <Label>Laisvi laikai · {formatLtDate(dates[dateIdx])}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
        {TIMES.map(t => {
          const busy = (dateIdx + TIMES.indexOf(t)) % 5 === 0; // fake "booked" slots
          const sel = t === time;
          return (
            <button key={t} onClick={() => !busy && setTime(t)} disabled={busy} style={{
              padding: '14px 0',
              border: sel ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)',
              borderRadius: 999,
              background: busy ? 'var(--gray-200)' : sel ? 'var(--navy-900)' : '#fff',
              color: busy ? 'var(--gray-500)' : sel ? '#fff' : 'var(--fg)',
              cursor: busy ? 'not-allowed' : 'pointer',
              font: '700 14px var(--font-display)',
              textDecoration: busy ? 'line-through' : 'none'
            }}>
              {t}
            </button>
          );
        })}
      </div>
      <p style={{ font: '400 13px var(--font-body)', color: 'var(--fg-muted)', marginTop: 12 }}>
        Perbraukti laikai jau užimti. Sesijos trukmė – 45 min, atvykti rekomenduojame 10 min anksčiau.
      </p>
    </div>
  </div>
);

const Step3 = ({ name, setName, phone, setPhone, email, setEmail }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <Field label="Vardas" value={name} onChange={setName} placeholder="Jonas Jonaitis" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Field label="Telefonas" value={phone} onChange={setPhone} placeholder="+370 ___ _____" type="tel" />
      <Field label="El. paštas" value={email} onChange={setEmail} placeholder="vardas@email.lt" type="email" />
    </div>
    <div style={{
      background: 'var(--off-white)', borderRadius: 16, padding: 20,
      display: 'flex', gap: 12, alignItems: 'flex-start'
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: 999, background: 'var(--navy-900)',
        color: '#fff', flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        font: '700 13px var(--font-display)'
      }}>i</span>
      <div style={{ font: '400 14px/1.55 var(--font-body)', color: 'var(--fg-muted)' }}>
        Mokėjimas atliekamas vietoje grynaisiais arba kortele. Rezervacija nepatvirtina mokėjimo – tik laiką. Prašome apie atšaukimą informuoti telefonu. Tel. nr.: +37068426686
      </div>
    </div>
  </div>
);

const Label = ({ children }) => (
  <div style={{ font: '700 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
    {children}
  </div>
);

const Field = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span style={{ font: '700 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
      padding: '14px 18px', borderRadius: 999,
      border: '1.5px solid var(--gray-300)', background: '#fff',
      font: '400 15px var(--font-body)', color: 'var(--fg)',
      outline: 'none'
    }} />
  </label>
);

const BookingSuccess = ({ game, date, time, players, onClose }) => (
  <div style={{ padding: '64px 48px 48px', textAlign: 'center' }}>
    <div style={{
      width: 72, height: 72, borderRadius: '50%',
      background: 'var(--heat-gradient)',
      margin: '0 auto 24px',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff'
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
    <h3 style={{ font: '800 32px var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '0 0 12px' }}>
      Rezervacija išsiųsta!
    </h3>
    <p style={{ font: '500 16px/1.6 var(--font-body)', color: 'var(--fg-muted)', margin: '0 auto 32px', maxWidth: 440 }}>
      Per kelias minutes gausite patvirtinimo laišką el. paštu. Iki susitikimo Palangoje!
    </p>
    <div style={{
      display: 'inline-flex', flexDirection: 'column', gap: 12,
      padding: 24, background: 'var(--off-white)', borderRadius: 16,
      textAlign: 'left', minWidth: 320
    }}>
      <Row label="Pabėgimo kambarys" value={game.title} />
      <Row label="Data" value={formatLtDate(date)} />
      <Row label="Laikas" value={time} />
      <Row label="Komanda" value={`${players} žaidėjai`} />
    </div>
    <div style={{ marginTop: 32 }}>
      <button onClick={onClose} className="btn btn--primary" style={{ padding: '14px 32px' }}>
        Uždaryti
      </button>
    </div>
  </div>
);

const Row = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, font: '500 14px var(--font-body)' }}>
    <span style={{ color: 'var(--fg-muted)' }}>{label}</span>
    <span style={{ color: 'var(--fg)', fontWeight: 700 }}>{value}</span>
  </div>
);

window.BookingModal = BookingModal;
