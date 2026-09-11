import { About } from "@/components/about";
import { Section } from "@/components/section";
import { WorkList } from "@/components/work-list";
import { NoteList } from "@/components/note-list";
import { Contact } from "@/components/contact";
import { getNotes, getWork } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-10">
      <About />

      <Section id="work" label="selected work">
        <WorkList items={getWork()} />
      </Section>

      <Section id="notes" label="notes / experiments">
        <NoteList items={getNotes()} />
      </Section>

      <Contact />
    </main>
  );
}
