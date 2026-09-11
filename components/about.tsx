import { site } from "@/lib/site";
import { url } from "@/lib/basepath";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" label="about">
      <div className="grid gap-10 md:grid-cols-[11rem_1fr] md:items-start">
        {site.photo ? (
          <img
            src={url(site.photo)}
            alt={`Portrait de ${site.name}`}
            className="aspect-square w-full max-w-[11rem] border border-hairline object-cover grayscale"
          />
        ) : null}
        <div className="prose">
          <p>
            Je suis étudiant·e en [master data science / statistique], et je
            consigne ici les projets, les expériences et les lectures qui
            jalonnent mon apprentissage du métier de data scientist.
          </p>
          <p>
            Je travaille principalement sur la modélisation de séries
            temporelles, l'imputation de données manquantes et les méthodes
            robustes, avec un souci constant de reproductibilité — code
            documenté, pipelines clairs, visualisations sobres.
          </p>
          <p>
            Je m'intéresse aussi à la causalité et à la communication des
            résultats : comment raconter une analyse sans la trahir. Ce site
            est un terrain d'entraînement pour ces deux questions.
          </p>
        </div>
      </div>
      <p className="mt-10 font-mono text-xs text-muted">
        {site.location} · {site.domain} · {site.availability}
      </p>
    </Section>
  );
}