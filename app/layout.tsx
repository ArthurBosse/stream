import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import TelegramBanner from '@/components/TelegramBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gratuit Streaming - Voir tous les films en streaming gratuitement',
  description: 'Regardez les derniers films en streaming gratuit sur Gratuit Streaming',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL
  },
  verification: {
    google: '4-5C23ti3KbFzOsKJu6eEd8y8pOALOIuHgcsTEj9Rm0',
    other: {
      'msvalidate.01': '116B8CD281360A0C9D7D45E1C5357CBB'
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/application-de-television-en-streaming.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-black to-gray-900 min-h-screen text-white`}>
        <GoogleAnalytics />
        <TelegramBanner />
        <Header />
        <div className="pt-32">
          {children}
        </div>
        <Footer />
        <script type='text/javascript' src='//pl25594665.profitablecpmrate.com/69/d1/5b/69d15b8d926a631c012951646752ba58.js'></script>
      </body>
    </html>
  );
}