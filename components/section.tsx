import type { ReactNode } from "react";

/**
 * Rubrique de la page d'accueil : titre dans une case pleine carrée
 * (rayons nuls garantis par le style global), filet sous le titre, puis
 * contenu. Les ancres de navigation pointent sur `id`.
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
    <section id={id} className="scroll-mt-16">
      <div className="mb-10">
        <h2 className="inline-block bg-ink px-3 py-1 font-mono text-xs text-paper uppercase tracking-[0.2em]">
          {label}
        </h2>
        <div className="mt-3 border-t border-hairline" />
      </div>
      {children}
    </section>
  );
}