import {
  Inter,
  League_Spartan,
  Lobster,
  Titillium_Web
} from 'next/font/google';

import { GlowCapture } from '@codaworks/react-glow';
import '~/styles/globals.css';
import { TRPCReactProvider } from '~/trpc/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const lobster = Lobster({
  subsets: ['latin'],
  variable: '--font-lobster',
  weight: '400'
});

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium',
  weight: '400'
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: '400'
});

export const metadata = {
  title: 'Matt C. McCoy',
  description: 'Portfolio of Matthew McCoy',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${lobster.variable} ${titillium.variable} ${leagueSpartan.variable}`}
      >
        <GlowCapture>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </GlowCapture>
      </body>
    </html>
  );
}
