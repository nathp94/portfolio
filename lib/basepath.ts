/**
 * Chemin de base du site (GitHub Pages).
 *
 * La même logique est dupliquée dans next.config.ts : ici elle sert aux
 * composants (liens internes, images, liens du contenu MDX) afin que tout
 * pointe vers `/portfolio/...` lors du déploiement sous un sous-chemin.
 */
function computeBasePath(): string {
  const override = process.env.BASE_PATH;
  if (override) return override;
  const repo = process.env.GITHUB_REPOSITORY ?? "";
  if (!repo.includes("/") || repo.endsWith(".github.io")) return "";
  return `/${repo.split("/")[1]}`;
}

export const basePath = computeBasePath();

/** Prépende le chemin de base à une URL interne commençant par "/". */
export function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return basePath ? `${basePath}${p}` : p;
}