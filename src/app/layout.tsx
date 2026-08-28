import type { Metadata } from 'next';
import './globals.css';
import LocaleContext from './i18n/LocaleContext';
import { setupFbtee } from 'fbtee';
import { cookies } from 'next/headers';
import setupServerFbtee from './i18n/setupServerFbtee';

export const metadata: Metadata = {
  title: 'Next.js fbtee Oxc Example',
  description: 'A Next.js app compiled with the fbtee Oxc transform.',
};

export const dynamic = 'force-dynamic';

setupFbtee({ translations: {} });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await cookies()).get('NEXT_LOCALE')?.value ?? 'en_US';
  setupServerFbtee(locale);

  return (
    <html lang={locale === 'ja_JP' ? 'ja' : 'en'}>
      <body>
        <LocaleContext>{children}</LocaleContext>
      </body>
    </html>
  );
}
