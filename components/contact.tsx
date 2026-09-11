import { site } from "@/lib/site";
import { url } from "@/lib/basepath";
import { Section } from "@/components/section";

const rows: { label: string; value: string; href: string }[] = [
  { label: "email", value: site.email, href: `mailto:${site.email}` },
  ...(site.github
    ? [{ label: "github", value: site.github, href: site.github }]
    : []),
  ...(site.linkedin
    ? [{ label: "linkedin", value: site.linkedin, href: site.linkedin }]
    : []),
];

export function Contact() {
  return (
    <Section id="contact" label="contact">
      <ul className="divide-y divide-hairline">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-baseline justify-between gap-6 py-4"
          >
            <span className="font-mono text-sm text-muted">{row.label}</span>
            <a
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={
                row.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="break-all font-mono text-sm hover:underline underline-offset-4"
            >
              {row.value}
            </a>
          </li>
        ))}
        {site.cv ? (
          <li className="flex items-baseline justify-between gap-6 py-4">
            <span className="font-mono text-sm text-muted">cv</span>
            <a
              href={url(site.cv)}
              className="font-mono text-sm hover:underline underline-offset-4"
            >
              télécharger (pdf)
            </a>
          </li>
        ) : null}
      </ul>
    </Section>
  );
}