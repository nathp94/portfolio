import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Lecture des contenus MDX.
 *
 * Chaque fichier `content/work/*.mdx` commence par un en-tête YAML
 * (frontmatter) puis un corps en Markdown/MDX. Les fichiers sont lus au
 * moment du build (et en dev, à chaque requête).
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface WorkMeta {
  title: string;
  /** Année du projet, affichée à gauche dans la liste. */
  year: number;
  /** Type de travail : "Projet de recherche", "Stage", "Mémoire", "Perso"... */
  type: string;
  /** Description en deux lignes maximum. */
  summary: string;
  /** Technologies / sujets. */
  tags: string[];
}

export interface Entry<T> {
  slug: string;
  meta: T;
  /** Corps Markdown/MDX, sans le frontmatter. */
  body: string;
}

export type WorkEntry = Entry<WorkMeta>;

function readEntries<T>(dir: string): Entry<T>[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  const files = fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(full, file), "utf-8");
    const { data, content } = matter(raw);
    return { slug: file.replace(/\.mdx$/, ""), meta: data as T, body: content.trim() };
  });
}

/** Projets triés par année décroissante, puis par titre. */
export function getWork(): WorkEntry[] {
  return readEntries<WorkMeta>("work").sort((a, b) => {
    if (a.meta.year !== b.meta.year) return b.meta.year - a.meta.year;
    return a.meta.title.localeCompare(b.meta.title);
  });
}

export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return getWork().find((entry) => entry.slug === slug);
}