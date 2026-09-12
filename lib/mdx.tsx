import { evaluate } from "next-mdx-remote-client/rsc";
import type { ReactNode } from "react";
import { basePath } from "@/lib/basepath";

/** Attributs porteurs d'URL traités par la réécriture. */
const URL_ATTRIBUTES = new Set(["src", "href", "poster"]);

/** URL interne au site : commence par "/", sans être protocolaire ("//"). */
function isInternalUrl(value: string) {
  return value.startsWith("/") && !value.startsWith("//");
}

type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  name?: string;
  attributes?: { name: string; value?: unknown }[];
  children?: HastNode[];
};

/**
 * Plugin rehype exécuté au moment de la compilation MDX : il prépende le
 * chemin de base de GitHub Pages (`/portfolio/`) à toute URL interne trouvée
 * dans les attributs `src` / `href` / `poster`.
 *
 * Il couvre à la fois les éléments HTML standard (liens et images en
 * Markdown) et les éléments JSX écrits dans le MDX (`<iframe>`, `<video>`,
 * `<source>`, `<a>`, ...). Les URLs externes (`http…`, `//…`) et les ancres
 * (`#…`) restent inchangées.
 */
function rehypeRewriteBasePath() {
  return (tree: HastNode) => {
    if (!basePath) return;
    const walk = (node: HastNode) => {
      if (node.type === "element" && node.tagName && node.properties) {
        for (const attr of URL_ATTRIBUTES) {
          const value = node.properties[attr];
          if (typeof value === "string" && isInternalUrl(value)) {
            node.properties[attr] = basePath + value;
          }
        }
      } else if (
        node.type === "mdxJsxFlowElement" ||
        node.type === "mdxJsxTextElement"
      ) {
        for (const attribute of node.attributes ?? []) {
          if (
            URL_ATTRIBUTES.has(attribute.name) &&
            typeof attribute.value === "string" &&
            isInternalUrl(attribute.value)
          ) {
            attribute.value = basePath + attribute.value;
          }
        }
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}

export async function renderMdx(source: string): Promise<ReactNode> {
  const { content, error } = await evaluate({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: { rehypePlugins: [rehypeRewriteBasePath] },
    },
  });
  if (error) throw error;
  return content;
}