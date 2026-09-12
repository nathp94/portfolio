import { site } from "@/lib/site";
import { url } from "@/lib/basepath";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" label="about">
      <div className="flex flex-col gap-6">
        {site.photo ? (
          <img
            src={url(site.photo)}
            alt={`Portrait de ${site.name}`}
            className="aspect-square w-[11rem] border border-hairline object-cover grayscale"
          />
        ) : null}
        <div className="prose">
          <p>
            Je suis étudiant ingénieur en Data Science & IA à l'EFREI, et je
            consigne ici les projets, les défis et les compétitions qui
            jalonnent mon parcours de data scientist.
          </p>
          <p>
            Je travaille principalement sur le machine learning appliqué, la
            détection d'anomalies sur séries temporelles et la vision par
            ordinateur, avec un souci constant d'efficacité, des pipelines
            MLOps structurés, du code optimisé et des outils interactifs.
            Distingué lors de plusieurs concours (Innovation Project EFREI,
            Hackathon Colas), j'aime concevoir des modèles performants capables
            de répondre à des problématiques concrètes.
          </p>
          <p>
            Je m'intéresse aussi à la mise en production et à la valorisation
            des données : comment transformer des données complexes en
            solutions fiables et explicables. Ce site est une vitrine de mes
            travaux et de mes expérimentations.
          </p>
        </div>
      </div>
      <p className="mt-10 font-mono text-xs text-muted">
        {site.location} · {site.domain} · {site.availability}
      </p>
    </Section>
  );
}