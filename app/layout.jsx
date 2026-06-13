import './globals.css';
import { Playfair_Display, Inter, Caveat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
});

export const metadata = {
  title: 'You & Me For Kindness - Empowering Every Ability',
  description:
    'Empowering individuals with special needs through handmade products, dance, inclusive programs, and community resources.',
  keywords:
    'nonprofit, special needs, empowerment, inclusion, handmade, dance, community',
  openGraph: {
    title: 'You & Me For Kindness',
    description:
      'Empowering individuals with special needs through creativity and community.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#F9F6F0] text-[#2B2B2B]">
        {children}
      </body>
    </html>
  );
}
