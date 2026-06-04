'use client';

import { useState } from 'react';
import { type Game } from '@/data/games';
import Header from './Header';
import Footer from './Footer';
import GameDetail from './GameDetail';
import BookingModal from './BookingModal';

export default function GameDetailPage({ game }: { game: Game }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialPlayers, setInitialPlayers] = useState(4);

  const openBooking = (players?: number) => {
    if (players) setInitialPlayers(players);
    setBookingOpen(true);
  };

  return (
    <>
      <Header onBook={() => openBooking()} />
      <GameDetail game={game} onBook={() => openBooking()} />
      <Footer onBook={() => openBooking()} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialGameSlug={game.slug}
        initialPlayers={initialPlayers}
      />
    </>
  );
}
