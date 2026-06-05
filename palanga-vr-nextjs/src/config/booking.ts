/**
 * REZERVACIJOS NUORODOS
 * ─────────────────────────────────────────────────────────────
 * Vidinė rezervacijos sistema pašalinta. Visi „Rezervuoti" mygtukai
 * naudoja šią konfigūraciją.
 *
 * KAIP PRIJUNGTI IŠORINĘ REZERVAVIMO SISTEMĄ ATEITYJE:
 *
 *  1. Bendra nuoroda visiems mygtukams – įrašykite ją į BOOKING_URL:
 *       export const BOOKING_URL = 'https://jusu-rezervacija.lt';
 *
 *  2. Atskira nuoroda konkretiems kambariams – įrašykite į BOOKING_URLS
 *     pagal kambario „slug" (jis turi pirmenybę prieš BOOKING_URL):
 *       export const BOOKING_URLS = {
 *         'cyberscape': 'https://jusu-rezervacija.lt/cyberscape',
 *         'ninja-trials': 'https://jusu-rezervacija.lt/ninja-trials',
 *       };
 *
 * Kol abu palikti tušti – mygtukai veikia (paspaudžiami), bet niekur
 * neveda ir nieko neatidaro.
 */

export const BOOKING_URL = '';

export const BOOKING_URLS: Record<string, string> = {};

/** Atidaro rezervacijos nuorodą naujame lange, jei ji nustatyta. */
export function goToBooking(slug?: string) {
  const url = (slug && BOOKING_URLS[slug]) || BOOKING_URL;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  // Jei nuorodos nėra – nieko nedaro (mygtukas tiesiog neaktyvus).
}
