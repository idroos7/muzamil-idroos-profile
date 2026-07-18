# Muzamil Idroos — Career Profile

Personal career site built with Next.js (App Router). Phase 1 is the resume/profile page; the "Coming Next" section is a placeholder for payments and QA write-ups to be added later.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset auto-detects "Next.js" — no config changes needed.
4. Click **Deploy**.

Every push to your main branch will auto-deploy after the first import.

## Project structure

```
app/
  layout.js      # fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) + metadata
  page.js         # all profile content (About, Competencies, Experience, Certifications, Education)
  globals.css     # design tokens + styles
public/           # static assets (add a favicon/og-image here if you want one)
```

## Editing content

All resume content lives in plain JS arrays/objects at the top of `app/page.js` (`competencies`, `certifications`, `experience`, `education`) — edit those directly, no CMS required. When you're ready to add payments/QA articles, the "Coming Next" section in `app/page.js` is the natural place to link out to new routes (e.g. `app/writing/[slug]/page.js`).
