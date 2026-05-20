# Next.js fbtee SWC example

This is a small Next.js app for testing `fbtee` with the native SWC compiler plugin. It intentionally does not include a Babel config; app code is compiled by Next/Turbopack using `@nkzw/swc-plugin-fbtee`.

## Getting Started

Install dependencies and run the Turbopack dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app installs `fbtee`, `@nkzw/swc-plugin-fbtee`, and `@nkzw/fbtee-cli` from npm so it exercises the published packages.

## Build

```bash
pnpm build
```

`next.config.ts` wires the plugin through `experimental.swcPlugins`.

## Translations

The checked-in Japanese translations are in `src/translations/ja_JP.json`. The app imports them directly so the locale switcher can verify runtime translation after the SWC transform.

Phrase collection still belongs to the `fbtee` CLI. The SWC plugin is only the runtime compiler for the Next.js build.

```bash
pnpm fbtee:collect
pnpm fbtee:translate
```
