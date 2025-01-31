import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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

<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99747832, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/99747832" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-black to-gray-900 min-h-screen text-white`}>
        <GoogleAnalytics />
        <TelegramBanner />
        <Header />
        <div className="pt-32">
          {children}
        </div>
        <Footer />
        <Script
          src="//pl25594665.profitablecpmrate.com/69/d1/5b/69d15b8d926a631c012951646752ba58.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}