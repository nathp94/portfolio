import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, getWorkBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return getWork().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};
  return { title: item.meta.title, description: item.meta.summary };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  const content = await renderMdx(item.body);

  return (
    <article className="mx-auto max-w-5xl px-6 pt-14 sm:px-10">
      <p className="font-mono text-xs text-muted">
        <Link href="/" className="hover:underline underline-offset-4">
          ← retour
        </Link>
        {" · work · "}
        {item.meta.year}
      </p>
      <h1 className="mt-8 font-serif text-2xl leading-snug sm:text-3xl">
        {item.meta.title}
      </h1>
      <p className="mt-4 font-mono text-sm text-muted">
        {item.meta.type} · {item.meta.tags.join(" · ")}
      </p>
      <div className="prose">{content}</div>
    </article>
  );
}