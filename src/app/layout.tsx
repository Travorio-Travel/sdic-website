import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

// Instrument Serif from Google Fonts — loaded as local for better control
const instrumentSerif = localFont({
  src: [
    {
      path: '../../public/fonts/InstrumentSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InstrumentSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SDIC — Sudan Digital Infrastructure Company | Technology for Reconstruction',
    template: '%s | SDIC',
  },
  description:
    'A Sudanese-led technology company building digital infrastructure, enterprise software, and national-scale platforms for Sudan\'s reconstruction and development.',
  keywords: [
    'Sudan technology company',
    'Sudan digital infrastructure',
    'Sudan reconstruction technology',
    'Sudan enterprise software',
    'digital transformation Sudan',
    'Sudan government technology',
    'Sudan IT infrastructure',
    'Sudanese technology company',
  ],
  authors: [{ name: 'Sudan Digital Infrastructure Company' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SDIC — Sudan Digital Infrastructure Company',
    title: 'SDIC — Building Sudan\'s Digital Future',
    description:
      'A Sudanese-led technology company developing digital infrastructure, enterprise software, and national-scale platforms to support reconstruction and long-term development.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SDIC — Sudan Digital Infrastructure Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDIC — Building Sudan\'s Digital Future',
    description:
      'A Sudanese-led technology company developing digital infrastructure, enterprise software, and national-scale platforms.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*
        If you're reading this source, you're our kind of person.
        SDIC is building Sudan's digital future and we need engineers like you.
        Reach us at contact@sdic.sd
      */}
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
