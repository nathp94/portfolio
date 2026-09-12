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
        <div className="prose prose-about">
          <p>
            I am a Data Science & AI engineering student at EFREI, 
            documenting the projects, challenges, and competitions 
            that shape my journey as a data scientist.
          </p>
          <p>
            My work focuses primarily on applied machine learning, 
            time-series anomaly detection, and computer vision, 
            with a strong emphasis on efficiency, structured MLOps pipelines, 
            optimized code, and interactive tools. Recognized in several 
            competitions (EFREI Innovation Project, Colas Hackathon), 
            I enjoy designing high-performing models to tackle real-world problems.
          </p>
          <p>
            I am also keen on deployment and data value creation—turning complex 
            data into reliable, explainable solutions. This website serves 
            as a showcase for my projects and experiments.
          </p>
        </div>
      </div>
      <p className="mt-10 font-mono text-xs text-muted">
        {site.location} · {site.domain} · {site.availability}
      </p>
    </Section>
  );
}