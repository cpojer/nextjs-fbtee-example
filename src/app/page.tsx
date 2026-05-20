import { cookies } from 'next/headers';
import LocaleSwitcher from './i18n/LocaleSwitcher';
import setupServerFbtee from './i18n/setupServerFbtee';
import Welcome from './Welcome';

export default async function Home() {
  const locale = (await cookies()).get('NEXT_LOCALE')?.value ?? 'en_US';
  setupServerFbtee(locale);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-8 p-8">
      <section className="space-y-4">
        <p className="text-sm font-medium text-pink-600 dark:text-pink-400">
          Next.js + fbtee + SWC
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          <Welcome />
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70">
          <fbt desc="Label for instant reloads">
            Save and see your changes instantly.
          </fbt>
        </p>
        <LocaleSwitcher />
      </section>

      <footer className="flex flex-wrap gap-4 text-sm">
        <a
          className="underline underline-offset-4 hover:no-underline"
          href="https://github.com/nkzw-tech/fbtee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fbt desc="Link to fbtee">Go to fbtee →</fbt>
        </a>
        <a
          className="underline underline-offset-4 hover:no-underline"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fbt desc="Docs button label">Read our docs</fbt>
        </a>
      </footer>
    </main>
  );
}
