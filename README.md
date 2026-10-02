# m{ai}geXR promotional site (m-ai-geXR org copy)

The public marketing page for m{ai}geXR — *"Transform natural language into
immersive 3D experiences across Android, iOS and Desktop."*

Static single-page site, deployed to Vercel.

[![Sponsor seacloud9](https://img.shields.io/badge/Sponsor-seacloud9-ea4aaa?logo=githubsponsors&logoColor=white)](https://github.com/sponsors/seacloud9)

> **Read this first.** `index.html` here is **byte-identical** to the one in the
> sibling `maige_xr_site/` repository, but these are two separate repositories
> with separate remotes:
>
> | Repository | Remote | State |
> |---|---|---|
> | `maige_xr_site` | `seacloud9/maige_xr_site` | newer commits; holds the promo video and poster assets |
> | `maigeXR_promotional_site` (here) | `m-ai-geXR/maigeXR_promotional_site` | the organisation copy; an untracked `old/` holds the original Next.js source locally |
>
> A change made in one does not reach the other. Decide which is canonical
> before editing — `maige_xr_site` is currently ahead.

---

## What's here

| Path | What it is |
|---|---|
| `index.html` | The entire site — a ~280 KB bundled page, inlined CSS/JS/fonts and all |
| `old/` | The previous Next.js implementation — **gitignored, local-only** (see below) |
| `vercel.json` | Vercel config — no framework, no build step |

### `index.html` is a build artifact

It is **generated output from a page bundler**, not hand-authored source: a
single file carrying inlined styles, base64 font payloads, and templates in
`<script type="__bundler/template">` blocks. Design tokens inside it are labelled
"Modernist". Editing it by hand is possible but unpleasant, and any regeneration
will discard your edits.

### `old/` — the Next.js original

Before the site was flattened to a single bundled page (commit *"Deploy as
static site instead of Next.js"*), it was a Next.js app.

> **`old/` is listed in `.gitignore` and is not tracked.** It exists only in
> working copies that already have it — a fresh clone of this repository will
> not contain it. If that source is worth keeping, it needs to be committed
> (or archived elsewhere) deliberately; right now it survives on one machine.

Its layout:

```
old/
├── app/                                      # Next.js app router
├── components/
├── config/                                   # centralised site config
├── maigeXR-website-implementation-plan.md
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── package.json
```

It is **not built or deployed** — it is reference material for the copy,
structure and config that the current page was derived from. The
implementation plan in particular is the best record of the site's intended
structure.

---

## Page contents

- Hero with the tagline and calls to action
- **See it in action** — a video modal over a frosted backdrop. Note that the
  `maigeXRpromoVemo.mp4` and `maigeXRpromoPoster.jpg` assets this section needs
  live in the `maige_xr_site` repository, **not here**.
- Platform overview — Android, iOS, Desktop
- Per-platform setup steps (clone and `pnpm install` for Desktop, APK from
  GitHub Releases for Android, and so on)
- Links to the [m-ai-geXR GitHub organisation](https://github.com/m-ai-geXR) and
  the individual `WebMaigeXr`, `AndroidMaigeXr` and `iOSMaigeXr` repositories

---

## Deploying

`vercel.json` declares no framework and no build command, serving the directory
as-is:

```json
{
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "."
}
```

So a push is the deploy. To preview locally, any static file server will do:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
