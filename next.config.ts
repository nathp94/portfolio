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

const nextConfig: NextConfig = {
  // Export 100 % statique vers le dossier `out/` (requis pour GitHub Pages).
  output: "export",
  // GitHub Pages ne sert pas les URLs sans slash final.
  trailingSlash: true,
  // Pages ne peut pas exécuter l'optimiseur d'images de Next.
  images: { unoptimized: true },
};

if (basePath) {
  nextConfig.basePath = basePath;
  nextConfig.assetPrefix = basePath;
}

export default nextConfig;
