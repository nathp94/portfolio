# Portfolio — Data Scientist

Site vitrine 100 % statique : Next.js (App Router) + TypeScript + Tailwind CSS,
contenu en MDX, déployé sur GitHub Pages via GitHub Actions.

## Développement local

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # vérification TypeScript
```

## Ajouter un projet

Créez un fichier dans `content/work/`, par exemple `content/work/2026-mon-projet.mdx` :

```mdx
---
title: "Titre du projet"
year: 2026
type: "Projet de recherche"   # Stage · Mémoire · Perso · ...
summary: "Description en deux lignes maximum."
tags: ["python", "pytorch", "statistiques"]
---

## Contexte

Le corps du fichier est la page de détail (Markdown / MDX, blocs de code
supportés).

```python
print("hello")
```
```

Le projet apparaît automatiquement dans la section **Selected Work**
(tri par année décroissante), et sa page de détail est accessible via le titre.

## Ajouter une note (expériences, scripts, lectures)

Même principe dans `content/notes/` :

```mdx
---
title: "Titre de la note"
date: 2026-03-14              # format ISO : YYYY-MM-DD
type: "essai"                 # essai · script · visualisation · analyse · lecture
tags: ["metrics"]
---

Corps de la note…
```

## Personnalisation

Toutes vos données personnelles sont concentrées dans **`lib/site.ts`** :
nom, rôle, localisation, disponibilité, e-mail, GitHub, LinkedIn, photo, CV.
Après modification, `git push` redéploie le site automatiquement.

- **Photo** : déposez une image noir et blanc dans `public/` (ex. `photo.jpg`),
  puis renseignez `photo: "/photo.jpg"` dans `lib/site.ts`. Le rendu est forcé
  en niveaux de gris.
- **CV** : déposez `cv.pdf` dans `public/` et renseignez `cv: "/cv.pdf"`.

## Déploiement sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile le site (`npm run build`
→ dossier `out/`) et le publie à chaque `push` sur `main`.

Une seule étape manuelle, à faire dans GitHub une fois :

1. Créez le dépôt (ex. `portfolio`) et poussez le contenu.
2. GitHub → **Settings → Pages** → section *Build and deployment* →
   **Source : "GitHub Actions"**.

Le site est alors disponible à `https://<pseudo>.github.io/portfolio/`.

Le chemin de base se détecte automatiquement à la compilation :

- dépôt `pseudo/portfolio` → `/portfolio/` ;
- dépôt `pseudo/pseudo.github.io` → racine ;
- surcharge possible avec la variable d'environnement `BASE_PATH`.

## Structure

```
app/                  Pages (App Router) + styles globaux
components/           Composants d'interface
content/work/         Projets sélectionnés (MDX + frontmatter)
content/notes/        Notes / expériences (MDX + frontmatter)
lib/site.ts           ⚙️ Configuration personnelle
lib/content.ts        Lecture et tri des contenus
lib/mdx.ts            Rendu du corps MDX
lib/basepath.ts       Préparation du chemin de base GitHub Pages
public/               Photo, CV, assets statiques
.github/workflows/    Déploiement GitHub Pages
```
