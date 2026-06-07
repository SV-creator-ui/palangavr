'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GamesGrid from '@/components/GamesGrid';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { goToBooking } from '@/config/booking';
import { useLang } from '@/context/LangContext';

export default function HomePage() {
  const { lang } = useLang();
  const onBook = () => goToBooking(lang);

  return (
    <>
      <Header onBook={onBook} />
      <main>
        <Hero onBook={onBook} />
        <GamesGrid />
        <HowItWorks />
        <Pricing onBook={onBook} />
        <FAQ />
        <Contact onBook={onBook} />
      </main>
      <Footer onBook={onBook} />
    </>
  );
}
