import { evaluate, type MDXComponents } from "next-mdx-remote-client/rsc";
import type { ReactNode } from "react";
import { url } from "@/lib/basepath";

/**
 * Rendu du corps MDX d'un contenu, compilé côté serveur au moment du build
 * (compatible avec l'export 100 % statique).
 *
 * Les composants `a`/`img` réécrivent les liens internes (`/...`) pour y
 * prépender le chemin de base de GitHub Pages.
 */
const components: MDXComponents = {
  a: (props) => (
    <a {...props} href={props.href?.startsWith("/") ? url(props.href) : props.href} />
  ),
  img: (props) => (
    <img {...props} src={props.src?.startsWith("/") ? url(props.src) : props.src} />
  ),
};

export async function renderMdx(source: string): Promise<ReactNode> {
  const { content, error } = await evaluate({
    source,
    options: { parseFrontmatter: false },
    components,
  });
  if (error) throw error;
  return content;
}