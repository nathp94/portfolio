# Data Scientist Portfolio

A minimal, sober portfolio site for a data scientist — built with **Next.js (App
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

> When the `GITHUB_REPOSITORY` env var is set (as in GitHub Actions), the site
> is served under the matching base path (`/portfolio/`). Locally, without the
> var, everything sits at the root.

## Personalize

- Everything about you lives in **`lib/site.ts`** (name, role, links, photo, CV).
- Projects are plain MDX files in **`content/work/`** — one file per project
  (frontmatter: `title`, `year`, `type`, `summary`, `tags`, followed by the detail page body).
- Push to `main` to rebuild and redeploy automatically.

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
