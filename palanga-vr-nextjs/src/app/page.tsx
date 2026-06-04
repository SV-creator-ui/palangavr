'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GamesGrid from '@/components/GamesGrid';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialPlayers, setInitialPlayers] = useState(4);

  const openBooking = (players?: number) => {
    if (players) setInitialPlayers(players);
    setBookingOpen(true);
  };

  return (
    <>
      <Header onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <GamesGrid />
        <HowItWorks />
        <Pricing onBook={openBooking} />
        <FAQ />
        <Contact onBook={() => openBooking()} />
      </main>
      <Footer onBook={() => openBooking()} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialPlayers={initialPlayers}
      />
    </>
  );
}
