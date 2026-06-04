import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Palanga VR — VR pabėgimo kambariai Palangoje',
  description: 'Komandiniai VR pabėgimo kambariai 2–6 žaidėjams Palangoje. Devyni unikalūs pasauliai, Daukanto g. 35.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
