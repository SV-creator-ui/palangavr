'use client';

import { goToBooking } from '@/config/booking';
import { trackEvent, trackPixel } from '@/config/analytics';

/**
 * GIMTADIENIŲ NUKREIPIMO PUSLAPIS (/gimtadieniai)
 * Skirtas Google Ads kampanijai – į jį nėra nuorodų iš pagrindinio meniu.
 * Hero Zone VR nuotykių žaidimai vaikams nuo 8 m.
 */

const PHONE_DISPLAY = '+370 684 26686';
const PHONE_TEL = 'tel:+37068426686';

const HZ_GAMES = [
  {
    img: '/assets/herozone/monkey-madness.jpg',
    title: 'Monkey Madness',
    desc: '25 linksmos džiunglių rungtys – vikrumas, ritmas ir truputis sėkmės',
    age: '8+', time: '10–12 min',
  },
  {
    img: '/assets/herozone/wizard-academy.jpg',
    title: 'Wizard Academy',
    desc: 'Burtų akademija: kerai, artefaktai ir komandinės mįslės',
    age: '8+', time: '5–20 min',
  },
  {
    img: '/assets/herozone/cookd-up.jpg',
    title: "Cook'd Up",
    desc: 'Virtuali virtuvė – kuri komanda iškeps daugiau burgerių?',
    age: '8+', time: '~10 min',
  },
  {
    img: '/assets/herozone/plush-rush.jpg',
    title: 'Plush Rush',
    desc: 'Susitraukite iki žaislo dydžio ir apginkite saldainius nuo užpuolikų',
    age: '8+', time: '5–15 min',
  },
  {
    img: '/assets/herozone/espionage-express.jpg',
    title: 'Espionage Express',
    desc: 'Šnipų traukinys – galvosūkiai, kuriuos įveiksite tik kartu',
    age: '8+', time: '~15 min',
  },
  {
    img: '/assets/herozone/arrowsong.jpg',
    title: 'Arrowsong',
    desc: 'Fantastinis lankininkų nuotykis – apginkite šventąjį medį nuo drakono',
    age: '6+', time: '10–12 min',
  },
  {
    img: '/assets/herozone/cyber-shock.jpg',
    title: 'Cyber Shock',
    desc: 'Greitas futuristinis šaudymas – išsisukinėkite nuo lazerių',
    age: '6+', time: '10–12 min',
  },
  {
    img: '/assets/herozone/quantum-arena.jpg',
    title: 'Quantum Arena',
    desc: 'Draugiškos komandų kautynės su atšokančiomis kulkomis ir spąstais',
    age: '8+', time: '10–12 min',
  },
  {
    img: '/assets/herozone/dead-ahead.jpg',
    title: 'Dead Ahead',
    desc: 'Atremkite zombių bangas – turite 30 sekundžių pasiruošti gynybai',
    age: '8+', time: '10–12 min',
  },
  {
    img: '/assets/herozone/terminator-uprising.jpg',
    title: 'Terminator Uprising',
    desc: 'Paskutinė žmonijos kova prieš mašinas – nuotykis drąsiausiems',
    age: '8+', time: '10–12 min',
  },
];

const STEPS: [string, string, string][] = [
  ['01', 'Atvykstate ir apmokome', 'Pasitinkame, pritaikome VR įrangą ir per 10 minučių paruošiame visus žaidimui – tinka ir pirmą kartą bandantiems.'],
  ['02', 'Žaidžia dviem komandomis', 'Iki 10 vaikų žaidžia po 5 vienu metu – kol viena komanda nuotykyje, kita serga už juos ir laukia savo eilės.'],
  ['03', 'Pertraukėlė prie staliuko', 'Tarp žaidimų – atokvėpis prie staliuko su gėrimais. Tėvai fotografuoja, vaikai dalinasi įspūdžiais.'],
];

const FACTS: [string, string][] = [
  ['Amžius', 'Nuo 8 metų – specialūs VR nuotykių žaidimai, pritaikyti vaikams'],
  ['Grupės dydis', 'Iki 10 vaikų (žaidžia dviem komandomis po 5, viena po kitos)'],
  ['Trukmė', '~1–1,5 val. visai šventei, priklausomai nuo grupės dydžio'],
  ['Vieta', 'S. Daukanto g. 35, Palangos centre'],
  ['Vaišės', 'Staliukas gėrimams – atsineškite savo sulčių ar limonado'],
  ['Mokėjimas', 'Jokio išankstinio mokėjimo – atsiskaitote šventės dieną vietoje'],
];

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    font: '700 12px var(--font-display)', color: 'var(--heat-pink)',
    textTransform: 'uppercase', letterSpacing: '0.14em',
  }}>{children}</span>
);

export default function BirthdayPage() {
  const onCall = () => {
    trackEvent('phone_click', { page: 'gimtadieniai' });
    trackPixel('Contact', { content_name: 'gimtadieniai' });
  };
  const onBook = () => goToBooking('lt');

  return (
    <div style={{ background: 'var(--bg-stage)', minHeight: '100vh', color: '#fff' }}>

      {/* ── Viršutinė juosta ── */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 24px', maxWidth: 1200, margin: '0 auto',
      }}>
        <a href="/" style={{ font: '800 20px var(--font-display)', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          Palanga <span style={{ background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>VR</span>
        </a>
        <a href={PHONE_TEL} onClick={onCall} className="btn btn--ghost" style={{ padding: '10px 20px', fontSize: 13 }}>
          {PHONE_DISPLAY}
        </a>
      </header>

      {/* ── Hero ── */}
      <section style={{ textAlign: 'center', padding: '56px 24px 64px', maxWidth: 880, margin: '0 auto' }}>
        <Kicker>Gimtadieniai · Palanga</Kicker>
        <h1 style={{
          font: '800 clamp(34px, 7vw, 72px)/1.02 var(--font-display)',
          textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '14px 0 20px',
        }}>
          Vaiko gimtadienis<br />
          <span style={{ background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>VR pasaulyje</span>
        </h1>
        <p style={{ font: '400 17px/1.6 var(--font-body)', color: 'rgba(255,255,255,0.78)', maxWidth: 560, margin: '0 auto 32px' }}>
          Šventė, kurioje vaikai ne sėdi prie stalo, o kartu įveikia džiungles,
          burtų akademiją ir kosmosą. Tėvams – jokio streso: atvykstate, o visa kita padarome mes.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <a href={PHONE_TEL} onClick={onCall} className="btn btn--primary">Paskambinti ir aptarti</a>
          <button onClick={onBook} className="btn btn--ghost">Rezervuoti laiką</button>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['Nuo 8 m.', 'vaikams'], ['Iki 10', 'vaikų grupei'], ['~1 val.', 'nuotykių'], ['Centre', 'Palangos']].map(([v, l]) => (
            <div key={v} style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 16, padding: '12px 20px', minWidth: 110,
            }}>
              <div style={{ font: '800 20px var(--font-display)' }}>{v}</div>
              <div style={{ font: '500 12px var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Kaip vyksta ── */}
      <section style={{ background: 'var(--bg-surface)', color: 'var(--fg)', borderRadius: '32px 32px 0 0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Kicker>Kaip vyksta šventė</Kicker>
            <h2 style={{ font: '800 clamp(26px, 4.5vw, 40px) var(--font-display)', textTransform: 'uppercase', margin: '10px 0 0' }}>
              Trys paprasti žingsniai
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {STEPS.map(([n, title, body], i) => (
              <div key={n} style={{
                background: i === 1 ? 'var(--navy-900)' : 'var(--off-white)',
                color: i === 1 ? '#fff' : 'var(--fg)',
                borderRadius: 'var(--radius-card)', padding: '32px 28px',
              }}>
                <div style={{
                  font: '800 14px var(--font-display)',
                  background: 'var(--heat-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  marginBottom: 12,
                }}>{n}</div>
                <h3 style={{ font: '800 19px var(--font-display)', margin: '0 0 10px' }}>{title}</h3>
                <p style={{
                  font: '400 14px/1.6 var(--font-body)', margin: 0,
                  color: i === 1 ? 'rgba(255,255,255,0.75)' : 'var(--fg-muted)',
                }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Žaidimų galerija ── */}
      <section style={{ background: 'var(--bg-surface)', color: 'var(--fg)', padding: '24px 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Kicker>VR nuotykių žaidimai</Kicker>
            <h2 style={{ font: '800 clamp(26px, 4.5vw, 40px) var(--font-display)', textTransform: 'uppercase', margin: '10px 0 12px' }}>
              Vaikai renkasi patys
            </h2>
            <p style={{ font: '400 15px/1.6 var(--font-body)', color: 'var(--fg-muted)', maxWidth: 520, margin: '0 auto' }}>
              Per šventę komandos spėja išbandyti kelis žaidimus – nuo linksmų rungčių iki komandinių nuotykių.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {HZ_GAMES.map((g) => (
              <div key={g.title} style={{
                background: '#fff', border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-card)', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.img} alt={g.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  <h3 style={{ font: '800 16px var(--font-display)', margin: 0 }}>{g.title}</h3>
                  <p style={{ font: '400 13px/1.5 var(--font-body)', color: 'var(--fg-muted)', margin: 0, flex: 1 }}>{g.desc}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[g.age, g.time].map((c) => (
                      <span key={c} style={{
                        font: '600 11px var(--font-display)', color: 'var(--fg-muted)',
                        background: 'var(--off-white)', border: '1px solid var(--gray-200)',
                        borderRadius: 999, padding: '4px 10px',
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gera žinoti ── */}
      <section style={{ background: 'var(--off-white)', color: 'var(--fg)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <Kicker>Gera žinoti</Kicker>
            <h2 style={{ font: '800 clamp(26px, 4.5vw, 40px) var(--font-display)', textTransform: 'uppercase', margin: '10px 0 0' }}>
              Atsakymai tėvams
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {FACTS.map(([k, v]) => (
              <div key={k} style={{ background: '#fff', borderRadius: 16, padding: '18px 22px', border: '1px solid var(--gray-200)' }}>
                <div style={{ font: '700 12px var(--font-display)', color: 'var(--heat-pink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{k}</div>
                <div style={{ font: '500 14px/1.55 var(--font-body)', color: 'var(--fg)' }}>{v}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', font: '400 14px/1.6 var(--font-body)', color: 'var(--fg-muted)', marginTop: 28 }}>
            Švenčiame ne tik vaikų gimtadienius – VR pabėgimo kambariai puikiai tinka ir suaugusiųjų
            šventėms, bernvakariams ar mergvakariams. Paskambinkite – suplanuosime kartu.
          </p>
        </div>
      </section>

      {/* ── CTA pabaiga ── */}
      <section style={{ textAlign: 'center', padding: '72px 24px 80px', maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ font: '800 clamp(28px, 5vw, 48px)/1.05 var(--font-display)', textTransform: 'uppercase', margin: '0 0 16px' }}>
          Rezervuokite šventės datą
        </h2>
        <p style={{ font: '400 16px/1.6 var(--font-body)', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px' }}>
          Vasaros savaitgaliai pildosi greitai – aptarkime datą, vaikų skaičių ir žaidimus telefonu,
          arba rezervuokite laiką internetu.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          <a href={PHONE_TEL} onClick={onCall} className="btn btn--primary">{PHONE_DISPLAY}</a>
          <button onClick={onBook} className="btn btn--ghost">Rezervuoti internetu</button>
        </div>
        <div style={{ font: '400 13px var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
          Palanga VR · S. Daukanto g. 35, Palanga · <a href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>palangavr.lt</a>
        </div>
      </section>
    </div>
  );
}
