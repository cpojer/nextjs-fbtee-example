'use client';

import { createLocaleContext } from 'fbtee';
import AvailableLanguages from './AvailableLanguages';
import { ReactNode } from 'react';

import { useLocaleContext } from 'fbtee';
import { useEffect } from 'react';

const ClientLocaleContext = ({ children }: { children: ReactNode }) => {
  const { locale, setLocale } = useLocaleContext();

  useEffect(() => {
    // @ts-expect-error
    window.cookieStore.get('NEXT_LOCALE').then(({ value: maybeLocale }) => {
      if (maybeLocale && maybeLocale !== locale) {
        setLocale(maybeLocale);
      }
    });
  }, []);

  return children;
};

const FbteeLocaleContext = createLocaleContext({
  availableLanguages: AvailableLanguages,
  clientLocales: [...navigator.languages, navigator.language],
  loadLocale: async (locale: string) => {
    if (locale === 'ja_JP') {
      return (await import('../../translations/ja_JP.json')).default.ja_JP;
    }

    return {};
  },
});

export default function LocaleContext({ children }: { children: ReactNode }) {
  return (
    <FbteeLocaleContext>
      <ClientLocaleContext>{children}</ClientLocaleContext>
    </FbteeLocaleContext>
  );
}
