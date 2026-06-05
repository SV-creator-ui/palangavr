'use client';

import { type Game } from '@/data/games';
import Header from './Header';
import Footer from './Footer';
import GameDetail from './GameDetail';
import { goToBooking } from '@/config/booking';

export default function GameDetailPage({ game }: { game: Game }) {
  const onBook = () => goToBooking(game.slug);

  return (
    <>
      <Header onBook={onBook} />
      <GameDetail game={game} onBook={onBook} />
      <Footer onBook={onBook} />
    </>
  );
}
