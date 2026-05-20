"use client";

import { useLocaleContext } from "fbtee";
import { useTransition } from "react";
import AvailableLanguages from "./AvailableLanguages";
import { setLocale } from "../actions/set-locale";

export default function LocaleSwitcher() {
  const [, startTransition] = useTransition();
  const { locale, setLocale: setClientLocale } = useLocaleContext();

  return (
    <div>
      <a
        className="cursor-pointer text-pink-500 underline select-none hover:no-underline dark:text-pink-400"
        onClick={() =>
          startTransition(() => {
            const newLocale = locale === "ja_JP" ? "en_US" : "ja_JP";
            setClientLocale(newLocale);
            setLocale(newLocale);
            setTimeout(() => location.reload(), 1000);
          })
        }
      >
        {AvailableLanguages.get(locale)}
      </a>
    </div>
  );
}
