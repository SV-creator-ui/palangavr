// GameDetail.jsx — matches reference screenshot (Alien Infection layout)

const GameDetail = ({ game, onBack, onOpenGame, onBook }) => {
  const hasBanner = game.slug === 'ninja-trials' || game.slug === 'alien-infection';
  const bannerSrc = hasBanner ? `assets/game-banner-${game.slug}.jpg` : null;

  const others = GAMES.filter((g) => g.slug !== game.slug).slice(0, 3);

  return (
    <div style={{ background: 'var(--bg-stage)', minHeight: '100vh' }}>
      {/* banner */}
      <div style={{
        background: hasBanner ?
        `linear-gradient(180deg, rgba(11,11,58,0.0) 50%, rgba(11,11,58,0.7) 100%), url(${bannerSrc}) center/cover no-repeat` :
        `linear-gradient(180deg, rgba(11,11,58,0.6), rgba(11,11,58,0.95)), url(${game.poster}) center/cover no-repeat`,
        minHeight: 460,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 32px',
        position: 'relative'
      }}>
        {!hasBanner &&
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, maxWidth: 1320, width: '100%' }}>
            <img src={game.poster} alt="" style={{ height: 280, borderRadius: 16, boxShadow: '0 24px 60px -10px rgba(0,0,0,0.6)' }} />
            <div>
              <span style={{ font: '700 12px var(--font-display)', color: 'var(--heat-orange)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{game.year} · vrCAVE</span>
              <h1 style={{ font: '800 clamp(48px, 7vw, 96px)/0.95 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '12px 0 16px' }}>{game.title}</h1>
              <p style={{ font: '500 20px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: 540 }}>{game.tagline}</p>
            </div>
          </div>
        }
        {/* back chip */}
        <button onClick={onBack} style={{
          position: 'absolute', top: 24, left: 32,
          background: 'rgba(255,255,255,0.1)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)',
          padding: '10px 18px', borderRadius: 999,
          font: '600 13px var(--font-display)',
          textTransform: 'uppercase', letterSpacing: '0.06em',
          cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
          backdropFilter: 'blur(8px)'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Visi kambariai
        </button>
      </div>

      {/* About card */}
      <div style={{ background: 'var(--bg-stage)', padding: '0 32px' }}>
        <div style={{
          maxWidth: 1320, margin: '0 auto',
          background: '#fff', borderRadius: 'var(--radius-card-lg)',
          padding: 40,
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 48
        }}>
          <div>
            <h2 style={{
              font: '800 40px/1 var(--font-display)', color: 'var(--fg)', margin: '0 0 24px',
              display: 'inline-flex', alignItems: 'center', gap: 24
            }}>
              Apie {game.title}
              <span style={{ display: 'inline-block', width: 140, height: 2, background: 'var(--gray-300)' }} />
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {game.description.map((p, i) =>
              <p key={i} style={{ font: '400 16px/1.6 var(--font-body)', color: 'var(--fg)', margin: 0 }}>{p}</p>
              )}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <StatRow label="Žaidėjai" value={game.players} />
              <StatRow label="Trukmė" value={game.time} />
              <StatRow label="Sudėtingumas" value={
              <DifficultyMeter level={game.difficulty} showLabel labelName={game.difficultyName} />
              } />
            </div>
            <div style={{ height: 1, background: 'var(--gray-300)', margin: '24px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {game.tags.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <Button variant="primary" onClick={onBook} style={{ width: '100%', padding: '16px 28px', fontSize: 15 }}>
                Rezervuoti šį kambarį
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video placeholder */}
      <div style={{ padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{
            background: '#000', borderRadius: 'var(--radius-card-lg)',
            aspectRatio: '16/9', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {game.slug === 'alien-infection' &&
            <img src="assets/screenshot-alien-infection-gameplay.jpg" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
            }
            {game.slug !== 'alien-infection' &&
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${game.poster}) center/cover`,
              opacity: 0.7
            }} />
            }
            <button style={{
              position: 'relative', zIndex: 1,
              width: 96, height: 96, borderRadius: '50%',
              background: 'rgba(255,255,255,0.95)', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 12px 32px rgba(0,0,0,0.4)'
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="var(--navy-900)" style={{ marginLeft: 4 }}><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
            </button>
          </div>
        </div>
      </div>

      {/* More games */}
      <section style={{ padding: '80px 32px 16px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <h3 style={{ font: '800 40px/1 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '0 0 32px', display: 'inline-flex', alignItems: 'center', gap: 24 }}>
            Daugiau nuotykių
            <span style={{ display: 'inline-block', width: 120, height: 2, background: 'rgba(255,255,255,0.4)' }} />
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {others.map((g) => <GameCard key={g.slug} game={g} onClick={() => onOpenGame(g)} />)}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '80px 32px 96px' }}>
        <div style={{
          maxWidth: 1320, margin: '0 auto',
          background: 'var(--heat-gradient)',
          borderRadius: 'var(--radius-card-lg)',
          padding: '56px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap'
        }}>
          <div>
            <h3 style={{ font: '800 36px/1.05 var(--font-display)', color: '#fff', textTransform: 'uppercase', margin: '0 0 12px' }}>PASIRUOŠĘ PRAMOGAUTI?

            </h3>
            <p style={{ font: '500 17px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.95)', margin: 0, maxWidth: 540 }}>
              Surinkite komandą nuo 2 iki 6 žaidėjų ir užsisakykite seansą jums patogiu metu.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={onBack} style={{
              padding: '16px 28px', borderRadius: 999,
              background: 'transparent', border: '2px solid rgba(255,255,255,0.6)',
              color: '#fff', font: '700 15px var(--font-display)', cursor: 'pointer'
            }}>
              Visi kambariai
            </button>
            <button onClick={onBook} style={{
              padding: '16px 32px', borderRadius: 999,
              background: '#fff', border: 'none',
              color: 'var(--navy-900)', font: '700 15px var(--font-display)', cursor: 'pointer'
            }}>
              Rezervuoti laiką
            </button>
          </div>
        </div>
      </section>
    </div>);

};

const StatRow = ({ label, value }) =>
<div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: 16 }}>
    <span style={{ font: '700 15px var(--font-display)', color: 'var(--fg)' }}>{label}</span>
    <span style={{ font: '400 15px var(--font-body)', color: 'var(--fg)' }}>{value}</span>
  </div>;


window.GameDetail = GameDetail;