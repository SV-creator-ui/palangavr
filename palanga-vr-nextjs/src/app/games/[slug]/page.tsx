import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GAMES } from '@/data/games';
import GameDetailPage from '@/components/GameDetailPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) return {};
  return {
    title: `${game.title} — Palanga VR`,
    description: game.tagline,
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();
  return <GameDetailPage game={game} />;
}
