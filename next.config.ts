import type { NextConfig } from "next";

/**
 * Chemin de base pour GitHub Pages :
 * - en local : aucune variable d'environnement → site à la racine ;
 * - sur GitHub Actions : `GITHUB_REPOSITORY=prenom/portfolio` → `/portfolio/` ;
 * - "user page" (`prenom/prenom.github.io`) → racine.
 * Surcharge possible avec la variable `BASE_PATH`.
 */
const basePath = (() => {
  const override = process.env.BASE_PATH;
  if (override) return override;
  const repo = process.env.GITHUB_REPOSITORY ?? "";
  if (!repo.includes("/") || repo.endsWith(".github.io")) return "";
  return `/${repo.split("/")[1]}`;
})();

const nextConfig: NextConfig = {};

// Mode export 100 % statique (dimensionné pour GitHub Pages) : activé par
// `npm run build:static` ou par le workflow GitHub Actions. Le serveur de
// dev (`npm run dev`) reste, lui, en mode normal.
if (process.env.STATIC_EXPORT === "1") {
  nextConfig.output = "export";
  // GitHub Pages ne sert pas les URLs sans slash final.
  nextConfig.trailingSlash = true;
  // Pages ne peut pas exécuter l'optimiseur d'images de Next.
  nextConfig.images = { unoptimized: true };
}

if (basePath) {
  nextConfig.basePath = basePath;
  nextConfig.assetPrefix = basePath;
}

export default nextConfig;
