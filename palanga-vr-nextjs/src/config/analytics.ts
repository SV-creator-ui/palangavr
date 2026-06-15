/**
 * GOOGLE ANALYTICS 4 KONFIGŪRACIJA
 * ─────────────────────────────────────────────────────────────
 * KAIP ĮJUNGTI:
 *   1. Susikurkite GA4 paskyrą analytics.google.com
 *   2. Įrašykite gautą Measurement ID žemiau (formatas: G-XXXXXXXXXX)
 *   3. Tuščia reikšmė ('') = analitika visiškai išjungta, joks
 *      Google kodas nekraunamas ir slapukų juostelė nerodoma.
 *
 * Konversijos: kiekvienas „Rezervuoti" paspaudimas siunčia
 * 'booking_click' įvykį (žr. src/config/booking.ts). GA4 sąsajoje
 * pažymėkite jį kaip „Key event" — tada galėsite importuoti į
 * Google Ads kaip konversiją.
 */

export const GA4_ID = 'G-G6MDZHH3PX';

/**
 * META PIXEL (Facebook) ID
 * ─────────────────────────────────────────────────────────────
 * Numeris iš Meta Events Manager → Data Sources → tavo pikselis.
 * Tuščia reikšmė ('') = Meta Pixel visiškai išjungtas (joks Meta
 * kodas nekraunamas). Pikselis kraunamas tik gavus slapukų sutikimą
 * (žr. src/components/Analytics.tsx) — kaip ir GA4.
 *
 * Konversijos: „Rezervuoti" paspaudimas siunčia standartinį 'Lead'
 * įvykį, o „Skambinti" (gimtadieniai) — 'Contact'. Meta Events
 * Manager / Ads sąsajoje juos galima naudoti kaip konversijas.
 */
export const META_PIXEL_ID = '1337443958330859';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Siunčia įvykį į GA4, jei analitika įjungta ir užkrauta. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params || {});
  }
}

/** Siunčia standartinį Meta Pixel įvykį, jei pikselis įjungtas ir užkrautas. */
export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params || {});
  }
}
