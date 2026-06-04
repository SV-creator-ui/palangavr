// Hero.jsx — variants: centered | left | full-poster

const HERO_BG_IMAGES = [
'assets/game-banner-alien-infection.jpg',
'assets/game-banner-ninja-trials.jpg',
'assets/screenshot-alien-infection-gameplay.jpg'];


const useHeroCarousel = (interval = 5000) => {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    // preload
    HERO_BG_IMAGES.forEach((src) => {const img = new Image();img.src = src;});
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_BG_IMAGES.length), interval);
    return () => clearInterval(t);
  }, [interval]);
  return idx;
};

const HeroBgCarousel = () => {
  const idx = useHeroCarousel();
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {HERO_BG_IMAGES.map((src, i) =>
      <div key={src} style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: idx === i ? 1 : 0,
        transition: 'opacity 1400ms var(--ease-out)',
        transform: idx === i ? 'scale(1.04)' : 'scale(1)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '1400ms, 7000ms',
        transitionTimingFunction: 'var(--ease-out), linear'
      }} />
      )}
      {/* overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(11,11,58,0.55) 0%, rgba(11,11,58,0.85) 100%)'
      }} />
      {/* indicator dots */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 5
      }}>
        {HERO_BG_IMAGES.map((_, i) =>
        <span key={i} style={{
          width: idx === i ? 24 : 8, height: 4, borderRadius: 2,
          background: idx === i ? 'var(--heat-gradient)' : 'rgba(255,255,255,0.35)',
          transition: 'width 400ms var(--ease-out), background 400ms var(--ease-out)'
        }} />
        )}
      </div>
    </div>);

};

const Hero = ({ onBook, onScrollGames, layout = 'centered' }) => {
  const overlay = 'linear-gradient(180deg, rgba(11,11,58,0.55) 0%, rgba(11,11,58,0.85) 100%)';
  const heroImage = `${overlay}, url(assets/hero-homepage.jpg)`;

  if (layout === 'full-poster') {
    // dramatic full-bleed: featured game poster as backdrop, copy bottom-left
    return (
      <section style={{
        position: 'relative',
        minHeight: 760,
        background: 'var(--bg-stage)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(0deg, rgba(11,11,58,1) 0%, rgba(11,11,58,0.4) 45%, rgba(11,11,58,0.6) 100%), url(assets/poster-alien-infection.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 18%'
        }} />
        <div style={{ position: 'relative', maxWidth: 1320, margin: '0 auto', width: '100%', padding: '120px 32px 80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--heat-pink)', boxShadow: '0 0 0 4px rgba(242,70,110,0.25)' }} />
            <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>Palanga VR · Naujas pabėgimo kambarys</span>
          </div>
          <h1 className="t-hero" style={{ maxWidth: 1100, marginBottom: 20, color: '#fff', fontSize: 'clamp(56px, 9vw, 132px)' }}>
            Pabėk iš realybės.<br />Įženk į nuotykį.
          </h1>
          <p style={{ font: '500 20px/1.45 var(--font-body)', color: 'rgba(255,255,255,0.85)', margin: '0 0 36px', maxWidth: 620 }}>
            Komandiniai VR pabėgimo kambariai 2–6 žaidėjams. Devyni unikalūs pasauliai, viena Palangos vieta.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={onBook} style={{ padding: '18px 32px', fontSize: 16 }}>Rezervuoti laiką</Button>
            <Button variant="ghost" onClick={onScrollGames} style={{ padding: '18px 32px', fontSize: 16 }}>Žiūrėti kambarius</Button>
          </div>
        </div>
      </section>);

  }

  if (layout === 'left') {
    return (
      <section style={{
        position: 'relative',
        minHeight: 720,
        backgroundImage: heroImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 32px 96px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--heat-pink)', boxShadow: '0 0 0 4px rgba(242,70,110,0.25)' }} />
              <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>Palanga · Lietuva</span>
            </div>
            <h1 className="t-hero" style={{ color: '#fff', marginBottom: 24, fontSize: 'clamp(48px, 7vw, 96px)' }}>
              VR nuotykiai<br />Palangoje
            </h1>
            <p style={{ font: '500 20px/1.5 var(--font-body)', color: 'rgba(255,255,255,0.85)', margin: '0 0 36px', maxWidth: 520 }}>
              Devyni komandiniai VR pabėgimo kambariai 2–6 žaidėjams. 45 minutės adrenalino, galvosūkių ir nepamirštamų istorijų.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={onBook} style={{ padding: '18px 32px', fontSize: 16 }}>Rezervuoti laiką</Button>
              <Button variant="ghost" onClick={onScrollGames} style={{ padding: '18px 32px', fontSize: 16 }}>Visi kambariai</Button>
            </div>
            <HeroStatsRow />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, transform: 'rotate(-2deg)' }}>
            {['alien-infection', 'ninja-trials', 'dragon-tower', 'cyberscape'].map((s, i) =>
            <div key={s} style={{
              aspectRatio: '5/7', borderRadius: 16,
              background: `url(assets/poster-${s}.png) center/cover`,
              transform: i % 2 ? 'translateY(24px)' : 'translateY(-12px)',
              boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7)'
            }} />
            )}
          </div>
        </div>
      </section>);

  }

  // centered (default)
  return (
    <section style={{
      position: 'relative',
      minHeight: 720,
      background: 'var(--bg-stage)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 32px 96px',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <HeroBgCarousel />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', marginBottom: 28 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--heat-pink)', boxShadow: '0 0 0 4px rgba(242,70,110,0.25)' }} />
        <span style={{ font: '700 11px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>PALANGA · S. DAUKANTO G. 24 </span>
      </div>
      <h1 className="t-hero" style={{ maxWidth: 1400, marginBottom: 28, color: '#fff' }}>
        VR nuotykiai<br />Palangoje
      </h1>
      <p style={{ font: '500 22px/1.4 var(--font-body)', color: 'rgba(255,255,255,0.9)', margin: '0 0 40px', maxWidth: 720 }}>Devyni komandiniai VR pabėgimo kambariai 2–6 žaidėjams.
45 minutės, kurių neužmiršite.
        </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" onClick={onBook} style={{ padding: '18px 32px', fontSize: 16 }}>Rezervuoti laiką</Button>
        <Button variant="ghost" onClick={onScrollGames} style={{ padding: '18px 32px', fontSize: 16 }}>Visi kambariai</Button>
      </div>
      <HeroStatsRow centered />
      </div>
    </section>);

};

const HeroStatsRow = ({ centered }) =>
<div style={{
  marginTop: 56,
  display: 'flex',
  gap: 40,
  justifyContent: centered ? 'center' : 'flex-start',
  flexWrap: 'wrap'
}}>
    {[
  ['9', 'pabėgimo kambariai'],
  ['2 – 6', 'žaidėjai komandoje'],
  ['~45 min', 'tikro adrenalino'],
  ['nuo 20 €', 'vienam žmogui']].
  map(([n, l]) =>
  <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: centered ? 'center' : 'flex-start' }}>
        <span style={{ font: '800 32px var(--font-display)', color: '#fff', lineHeight: 1 }}>{n}</span>
        <span style={{ font: '500 12px var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>{l}</span>
      </div>
  )}
  </div>;


window.Hero = Hero;