import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import Analytics from '@/components/Analytics';

const BASE_URL = 'https://palangavr.lt';

export const metadata: Metadata = {
  title: 'Palanga VR — VR pabėgimo kambariai Palangoje',
  description: 'Komandiniai VR pabėgimo kambariai 2–6 žaidėjams Palangoje. Devyni unikalūs pasauliai. Rezervuokite internetu!',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Palanga VR — VR pabėgimo kambariai',
    description: 'Devyni komandiniai VR pabėgimo kambariai 2–6 žaidėjams Palangos centre. ~45 min nuotykių!',
    url: BASE_URL,
    siteName: 'Palanga VR',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Palanga VR — VR pabėgimo kambariai Palangoje',
      },
    ],
    locale: 'lt_LT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palanga VR — VR pabėgimo kambariai',
    description: 'Devyni komandiniai VR pabėgimo kambariai 2–6 žaidėjams Palangos centre.',
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body>
        <LangProvider>
          {children}
          <Analytics />
        </LangProvider>
      </body>
    </html>
  );
}
