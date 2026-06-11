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

export const GA4_ID = 'G-V3YWM16KB3';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Siunčia įvykį į GA4, jei analitika įjungta ir užkrauta. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params || {});
  }
}
