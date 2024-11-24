import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import Header from './_shared/components/Header';
import ReactQueryProviders from './_shared/provider/reactQuery';

const pretendard = localFont({
  src: './_shared/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Favor Coin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body className="w-screen h-screen">
        <Header />
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
