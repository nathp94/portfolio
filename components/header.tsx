import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { label: "about", href: "/#about" },
  { label: "work", href: "/#work" },
  { label: "notes", href: "/#notes" },
  { label: "contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-3xl flex-wrap items-end justify-between gap-x-10 gap-y-2 px-6 pb-14 pt-14 sm:px-10">
        <div>
          <p className="font-serif text-2xl leading-none tracking-tight">
            {site.name}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">{site.role}</p>
        </div>
        <nav aria-label="Navigation principale" className="font-mono text-xs">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}