import Link from "next/link";
import type { WorkEntry } from "@/lib/content";

/** Liste verticale des projets sélectionnés. */
export function WorkList({ items }: { items: WorkEntry[] }) {
  if (items.length === 0) {
    return (
      <p className="font-mono text-sm text-muted">
        Aucun projet publié pour l'instant.
      </p>
    );
  }
  return (
    <ul className="divide-y divide-hairline">
      {items.map((item) => (
        <li key={item.slug} className="grid grid-cols-[3.5rem_1fr] gap-x-6 py-7">
          <span className="font-mono text-sm text-muted">{item.meta.year}</span>
          <div className="min-w-0 space-y-2">
            <p className="flex flex-wrap items-baseline gap-x-3">
              <Link
                href={`/work/${item.slug}`}
                className="font-serif text-lg leading-snug hover:underline underline-offset-4"
              >
                {item.meta.title}
              </Link>
              <span className="font-mono text-xs text-muted">
                {item.meta.type}
              </span>
            </p>
            <p className="text-base leading-relaxed text-muted">
              {item.meta.summary}
            </p>
            <p className="font-mono text-xs text-muted">
              {item.meta.tags.join(" · ")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}