'use client';

import { useState, useEffect } from 'react';
import { GAMES, PRICING } from '@/data/games';

const TIMES = ['12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00'];

const formatLtDate = (d: Date) => {
  const months = ['sausio','vasario','kovo','balandžio','gegužės','birželio','liepos','rugpjūčio','rugsėjo','spalio','lapkričio','gruodžio'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
};

const dayNamesShort = ['Sek','Pir','Ant','Tre','Ket','Pen','Šeš'];

interface Props {
  open: boolean;
  onClose: () => void;
  initialGameSlug?: string;
  initialPlayers?: number;
}

export default function BookingModal({ open, onClose, initialGameSlug, initialPlayers = 4 }: Props) {
  const [step, setStep] = useState(1);
  const [game, setGame] = useState(initialGameSlug || GAMES[0].slug);
  const [players, setPlayers] = useState(initialPlayers);
  const [dateIdx, setDateIdx] = useState(2);
  const [time, setTime] = useState('18:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
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

  const selectedGame = GAMES.find((g) => g.slug === game)!;
  const priceRow = PRICING.find((p) => p.players === players) || PRICING[2];

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(11,11,58,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflow: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', color: 'var(--fg)', borderRadius: 'var(--radius-card-lg)', maxWidth: 880, width: '100%', maxHeight: '92vh', overflow: 'auto', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, width: 40, height: 40, borderRadius: 999, background: 'var(--gray-200)', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        {done ? (
          <BookingSuccess game={selectedGame} date={dates[dateIdx]} time={time} players={players} onClose={onClose} />
        ) : (
          <>
            <div style={{ padding: '32px 40px 24px', borderBottom: '1px solid var(--gray-200)' }}>
              <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Rezervacija · Žingsnis {step} / 3</span>
              <h3 style={{ font: '800 32px var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '8px 0 0' }}>
                {step === 1 && 'Pasirinkite kambarį ir komandą'}
                {step === 2 && 'Pasirinkite datą ir laiką'}
                {step === 3 && 'Jūsų kontaktai'}
              </h3>
              <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
                {[1, 2, 3].map((s) => (
                  <div key={s} style={{ height: 4, flex: 1, borderRadius: 999, background: s <= step ? 'var(--heat-gradient)' : 'var(--gray-200)' }} />
                ))}
              </div>
            </div>

            <div style={{ padding: 40 }}>
              {step === 1 && <Step1 game={game} setGame={setGame} players={players} setPlayers={setPlayers} />}
              {step === 2 && <Step2 dates={dates} dateIdx={dateIdx} setDateIdx={setDateIdx} time={time} setTime={setTime} />}
              {step === 3 && <Step3 name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />}
            </div>

            <div style={{ borderTop: '1px solid var(--gray-200)', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'var(--off-white)', borderBottomLeftRadius: 'var(--radius-card-lg)', borderBottomRightRadius: 'var(--radius-card-lg)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ font: '500 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Iš viso</span>
                <span style={{ font: '800 28px var(--font-display)', color: 'var(--fg)' }}>{priceRow.price} €</span>
                <span style={{ font: '500 12px var(--font-body)', color: 'var(--fg-muted)' }}>{priceRow.perPerson.toFixed(priceRow.perPerson % 1 ? 2 : 0)} € / žmogui · {players} žaidėjai</span>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="btn btn--outline" style={{ background: '#fff', padding: '14px 24px' }}>Atgal</button>
                )}
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} className="btn btn--primary" style={{ padding: '14px 28px' }}>Toliau</button>
                ) : (
                  <button onClick={() => setDone(true)} className="btn btn--primary" style={{ padding: '14px 28px' }}>Patvirtinti rezervaciją</button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Step1({ game, setGame, players, setPlayers }: { game: string; setGame: (g: string) => void; players: number; setPlayers: (n: number) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Label>Pabėgimo kambarys</Label>
        <div className="grid-booking-games">
          {GAMES.map((g) => (
            <button key={g.slug} onClick={() => setGame(g.slug)} style={{ padding: 8, border: game === g.slug ? '2px solid var(--navy-900)' : '2px solid transparent', borderRadius: 16, background: game === g.slug ? 'var(--off-white)' : '#fff', cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ aspectRatio: '5/7', borderRadius: 10, backgroundImage: `url(${g.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <span style={{ font: '700 13px var(--font-display)', color: 'var(--fg)', padding: '0 4px' }}>{g.title}</span>
              <span style={{ font: '500 11px var(--font-body)', color: 'var(--fg-muted)', padding: '0 4px' }}>{g.difficultyName}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <Label>Žaidėjų skaičius</Label>
        <div style={{ display: 'flex', gap: 8 }}>
          {[2, 3, 4, 5, 6].map((n) => (
            <button key={n} onClick={() => setPlayers(n)} style={{ flex: 1, padding: '20px 0', border: players === n ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)', borderRadius: 16, background: players === n ? 'var(--navy-900)' : '#fff', color: players === n ? '#fff' : 'var(--fg)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
              <span style={{ font: '800 24px var(--font-display)' }}>{n}</span>
              <span style={{ font: '500 11px var(--font-body)', color: players === n ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)' }}>
                {PRICING.find((p) => p.players === n)!.price} €
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2({ dates, dateIdx, setDateIdx, time, setTime }: { dates: Date[]; dateIdx: number; setDateIdx: (i: number) => void; time: string; setTime: (t: string) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Label>Data</Label>
        <div className="grid-7col">
          {dates.map((d, i) => {
            const sel = dateIdx === i;
            return (
              <button key={i} onClick={() => setDateIdx(i)} style={{ padding: '14px 8px', border: sel ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)', borderRadius: 12, background: sel ? 'var(--navy-900)' : '#fff', color: sel ? '#fff' : 'var(--fg)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <span style={{ font: '500 11px var(--font-display)', textTransform: 'uppercase', color: sel ? 'rgba(255,255,255,0.7)' : 'var(--fg-muted)', letterSpacing: '0.06em' }}>{i === 0 ? 'Šiandien' : dayNamesShort[d.getDay()]}</span>
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
        <div className="grid-7col">
          {TIMES.map((t) => {
            const busy = (dateIdx + TIMES.indexOf(t)) % 5 === 0;
            const sel = t === time;
            return (
              <button key={t} onClick={() => !busy && setTime(t)} disabled={busy} style={{ padding: '14px 0', border: sel ? '2px solid var(--navy-900)' : '1.5px solid var(--gray-300)', borderRadius: 999, background: busy ? 'var(--gray-200)' : sel ? 'var(--navy-900)' : '#fff', color: busy ? 'var(--gray-500)' : sel ? '#fff' : 'var(--fg)', cursor: busy ? 'not-allowed' : 'pointer', font: '700 14px var(--font-display)', textDecoration: busy ? 'line-through' : 'none' }}>
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
}

function Step3({ name, setName, phone, setPhone, email, setEmail }: { name: string; setName: (v: string) => void; phone: string; setPhone: (v: string) => void; email: string; setEmail: (v: string) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Field label="Vardas" value={name} onChange={setName} placeholder="Jonas Jonaitis" />
      <div className="grid-2col" style={{ gap: 16, alignItems: 'unset' }}>
        <Field label="Telefonas" value={phone} onChange={setPhone} placeholder="+370 ___ _____" type="tel" />
        <Field label="El. paštas" value={email} onChange={setEmail} placeholder="vardas@email.lt" type="email" />
      </div>
      <div style={{ background: 'var(--off-white)', borderRadius: 16, padding: 20, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--navy-900)', color: '#fff', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: '700 13px var(--font-display)' }}>i</span>
        <div style={{ font: '400 14px/1.55 var(--font-body)', color: 'var(--fg-muted)' }}>
          Mokėjimas atliekamas vietoje grynaisiais arba kortele. Rezervacija nepatvirtina mokėjimo – tik laiką. Prašome apie atšaukimą informuoti telefonu. Tel. nr.: +37068426686
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div style={{ font: '700 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{children}</div>;
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ font: '700 12px var(--font-display)', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={{ padding: '14px 18px', borderRadius: 999, border: '1.5px solid var(--gray-300)', background: '#fff', font: '400 15px var(--font-body)', color: 'var(--fg)', outline: 'none' }} />
    </label>
  );
}

function BookingSuccess({ game, date, time, players, onClose }: { game: ReturnType<typeof GAMES['find']>; date: Date; time: string; players: number; onClose: () => void }) {
  if (!game) return null;
  return (
    <div style={{ padding: '64px 48px 48px', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--heat-gradient)', margin: '0 auto 24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h3 style={{ font: '800 32px var(--font-display)', color: 'var(--fg)', textTransform: 'uppercase', margin: '0 0 12px' }}>Rezervacija išsiųsta!</h3>
      <p style={{ font: '500 16px/1.6 var(--font-body)', color: 'var(--fg-muted)', margin: '0 auto 32px', maxWidth: 440 }}>
        Per kelias minutes gausite patvirtinimo laišką el. paštu. Iki susitikimo Palangoje!
      </p>
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 12, padding: 24, background: 'var(--off-white)', borderRadius: 16, textAlign: 'left', minWidth: 320 }}>
        {[['Pabėgimo kambarys', game.title], ['Data', formatLtDate(date)], ['Laikas', time], ['Komanda', `${players} žaidėjai`]].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', gap: 32, font: '500 14px var(--font-body)' }}>
            <span style={{ color: 'var(--fg-muted)' }}>{l}</span>
            <span style={{ color: 'var(--fg)', fontWeight: 700 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <button onClick={onClose} className="btn btn--primary" style={{ padding: '14px 32px' }}>Uždaryti</button>
      </div>
    </div>
  );
}
