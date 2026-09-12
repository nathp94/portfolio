import { About } from "@/components/about";
import { Section } from "@/components/section";
import { WorkList } from "@/components/work-list";
import { Contact } from "@/components/contact";
import { getWork } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start">
        {/* Colonne gauche : présentation */}
        <div>
          <About />
        </div>

        {/* Colonne droite : travaux puis contact */}
        <div className="flex flex-col gap-16">
          <Section id="work" label="projects">
            <WorkList items={getWork()} />
          </Section>

          <Contact />
        </div>
      </div>
    </main>
  );
}
