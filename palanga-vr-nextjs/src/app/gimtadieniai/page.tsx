import type { Metadata } from 'next';
import BirthdayPage from '@/components/BirthdayPage';

export const metadata: Metadata = {
  title: 'Vaiko gimtadienis Klaipėdoje – VR žaidimai | Palanga VR',
  description:
    'Vaiko gimtadienis VR pasaulyje Klaipėdoje: nuotykių žaidimai vaikams nuo 8 m., iki 10 vaikų grupei. Staliukas gėrimams, mokėjimas vietoje. Rezervuokite datą!',
  openGraph: {
    title: 'Vaiko gimtadienis Klaipėdoje – VR žaidimai',
    description:
      'Šventė, kurioje vaikai ne sėdi prie stalo, o kartu įveikia džiungles, burtų akademiją ir kosmosą. Nuo 8 m., iki 10 vaikų.',
    url: 'https://palangavr.lt/gimtadieniai/',
  },
};

export default function GimtadieniaiPage() {
  return <BirthdayPage />;
}
