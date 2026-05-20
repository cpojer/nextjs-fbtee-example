"use client";

import { createLocaleContext, useLocaleContext } from "fbtee";
import AvailableLanguages from "./AvailableLanguages";
import type { ReactNode } from "react";
import { useEffect, useTransition } from "react";

const ClientLocaleContext = ({ children }: { children: ReactNode }) => {
  const [, startTransition] = useTransition();
  const { locale, setLocale } = useLocaleContext();

  useEffect(() => {
    const cookieStore = (
      window as Window & {
        cookieStore?: {
          get: (name: string) => Promise<{ value?: string } | undefined>;
        };
      }
    ).cookieStore;

    cookieStore?.get("NEXT_LOCALE").then((cookie) => {
      const maybeLocale = cookie?.value;
      if (maybeLocale && maybeLocale !== locale) {
        startTransition(() => setLocale(maybeLocale));
      }
    });
  }, [locale, setLocale]);

  return children;
};

const FbteeLocaleContext = createLocaleContext({
  availableLanguages: AvailableLanguages,
  clientLocales: [...navigator.languages, navigator.language],
  loadLocale: async (locale: string) => {
    if (locale === "ja_JP") {
      return (await import("../../translations/ja_JP.json")).default.ja_JP;
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
