/**
 * REZERVACIJOS NUORODOS (pagal kalbą)
 * ─────────────────────────────────────────────────────────────
 * Vidinė rezervacijos sistema pašalinta. Visi „Rezervuoti" mygtukai
 * naudoja šią konfigūraciją ir veda į išorinę rezervavimo sistemą.
 *
 * KAIP PRIDĖTI / PAKEISTI NUORODĄ:
 *   Įrašykite nuorodą prie atitinkamos kalbos žemiau.
 *   Tuščia reikšmė ('') = tos kalbos mygtukai nieko nedaro.
 *
 * Šiuo metu nuoroda nustatyta tik lietuvių (lt) kalbai.
 */

export const BOOKING_URL_BY_LANG: Record<string, string> = {
  lt: 'https://booking.moizmo.com/lt/booking/963a95eb-95b9-41d6-935d-1bde89925310',
  en: 'https://booking.moizmo.com/booking/963a95eb-95b9-41d6-935d-1bde89925310',
  ru: 'https://booking.moizmo.com/ru/booking/963a95eb-95b9-41d6-935d-1bde89925310',
};

/** Atidaro tos kalbos rezervacijos nuorodą naujame lange, jei ji nustatyta. */
export function goToBooking(lang: string) {
  const url = BOOKING_URL_BY_LANG[lang] || '';
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  // Jei nuorodos tai kalbai nėra – nieko nedaro (mygtukas neaktyvus).
}
