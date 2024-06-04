'use client';

import { Inter } from 'next/font/google';

// Styles
import './globals.css';

// Providers
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });
const timeZone = 'Europe/Paris';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <NextIntlClientProvider locale="en" timeZone={timeZone}>
              <main className="">{children}</main>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
