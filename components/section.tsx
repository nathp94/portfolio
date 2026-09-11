import type { ReactNode } from "react";

/**
 * Rubrique de la page d'accueil : étiquette mono au-dessus d'un filet,
 * puis contenu. Les ancres de navigation pointent sur `id`.
 */
export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-16 sm:mt-24">
      <div className="mb-10">
        <h2 className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
          — {label}
        </h2>
        <div className="mt-3 border-t border-hairline" />
      </div>
      {children}
    </section>
  );
}