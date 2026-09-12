# Data Scientist Portfolio

A minimal, sober portfolio site built with **Next.js (App
Router), TypeScript, Tailwind CSS and MDX**. Fully static, no database, no
backend. Auto-deployed to **GitHub Pages** on every push to `main`.

## Quick start

```bash
npm install
npm run dev             # local dev server → http://localhost:3000
npm run typecheck       # TypeScript check
npm run build:static    # static export → ./out
npm run verify          # check internal links & MDX rendering
```
## Deploy

The workflow `.github/workflows/deploy.yml` builds the static export (`./out`)
and publishes it to GitHub Pages (`https://<user>.github.io/portfolio/`).
Done once in the repo settings: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.

The base path is auto-detected at build time from `GITHUB_REPOSITORY`
(`/portfolio/` for project repos, root for `*.github.io` user pages) —
override it with the `BASE_PATH` env var if needed.

## Structure

```
app/                  Pages (App Router) + global styles
components/           UI components
content/work/         Projects (MDX + frontmatter)
lib/site.ts           ⚙️ Personal configuration
lib/content.ts        Content loading & sorting
lib/mdx.ts            MDX rendering
lib/basepath.ts       GitHub Pages base-path handling
public/               Photo, CV, static assets
.github/workflows/    GitHub Pages deployment
```
