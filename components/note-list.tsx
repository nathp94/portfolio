import Link from "next/link";
import type { NoteEntry } from "@/lib/content";

/** Liste compacte des notes / expériences. */
export function NoteList({ items }: { items: NoteEntry[] }) {
  if (items.length === 0) {
    return (
      <p className="font-mono text-sm text-muted">
        Aucune note publiée pour l'instant.
      </p>
    );
  }
  return (
    <ul className="divide-y divide-hairline">
      {items.map((item) => (
        <li
          key={item.slug}
          className="grid grid-cols-[9rem_1fr] items-baseline gap-x-6 py-3.5"
        >
          <span className="font-mono text-xs text-muted">
            {item.meta.date} · {item.meta.type}
          </span>
          <Link
            href={`/notes/${item.slug}`}
            className="min-w-0 font-serif text-base leading-snug hover:underline underline-offset-4"
          >
            {item.meta.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}