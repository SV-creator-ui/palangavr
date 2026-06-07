'use client';

import { type Game } from '@/data/games';
import Header from './Header';
import Footer from './Footer';
import GameDetail from './GameDetail';
import { goToBooking } from '@/config/booking';
import { useLang } from '@/context/LangContext';

export default function GameDetailPage({ game }: { game: Game }) {
  const { lang } = useLang();
  const onBook = () => goToBooking(lang);

  return (
    <>
      <Header onBook={onBook} />
      <GameDetail game={game} onBook={onBook} />
      <Footer onBook={onBook} />
    </>
  );
}
