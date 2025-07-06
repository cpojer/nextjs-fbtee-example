'use client';

import { useLocaleContext } from 'fbtee';
import { useEffect, useTransition } from 'react';
import AvailableLanguages from './AvailableLanguages';
import { setLocale } from '../actions/set-locale';

export default function LocaleSwitcher() {
  const [, startTransition] = useTransition();
  const { locale } = useLocaleContext();

  return (
    <div>
      <a
        className="cursor-pointer text-pink-500 underline select-none hover:no-underline dark:text-pink-400"
        onClick={() =>
          startTransition(() => {
            setLocale(locale === 'ja_JP' ? 'en_US' : 'ja_JP');
            setTimeout(() => location.reload(), 1000);
          })
        }
      >
        {AvailableLanguages.get(locale)}
      </a>
    </div>
  );
}
