# Next.js fbtee Oxc example

This is a small Next.js app for testing `fbtee` with the native Oxc transform. It intentionally does not include a Babel config; app code is compiled by Next/Turbopack using `@nkzw/next-plugin-fbtee`.

## Getting Started

Install dependencies and run the Turbopack dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app installs `fbtee`, `@nkzw/next-plugin-fbtee`, and `@nkzw/fbtee-cli` from npm so it exercises the published packages.

## Build

```bash
pnpm build
```

`next.config.ts` wraps the Next.js configuration with `@nkzw/next-plugin-fbtee`.

## Translations

The checked-in Japanese translations are in `src/translations/ja_JP.json`. The app imports them directly so the locale switcher can verify runtime translation after the Oxc transform.

Phrase collection still belongs to the `fbtee` CLI. The Next.js plugin runs the Oxc transform during the Next.js build.

```bash
pnpm fbtee:collect
pnpm fbtee:translate
```
