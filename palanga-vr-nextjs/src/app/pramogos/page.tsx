import type { Metadata } from 'next';
import VisitPage from '@/components/VisitPage';

export const metadata: Metadata = {
  title: 'VR pramogos Palangoje – šeimai ir draugams | Palanga VR',
  description:
    'VR pabėgimo kambariai ir nuotykiai Palangoje šeimai ar draugų kompanijai. 20 €/asm., 50 min, iki 5 žmonių komandoje. Mokėjimas vietoje. Rezervuokite laiką!',
  openGraph: {
    title: 'VR pramogos Palangoje – šeimai ir draugams',
    description:
      'Adrenalinas, juokas ir šūksniai – kartu kovokite su zombiais, gelbėkite pasaulį ir nugalėkite vieni kitus virtualioje arenoje. 20 €/asm., 50 min, iki 5 žmonių.',
    url: 'https://palangavr.lt/pramogos/',
  },
};

export default function PramogosPage() {
  return <VisitPage />;
}
