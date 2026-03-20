import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading
        title="Skills"
        subtitle="A practical stack for building modern, reliable web products."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="card p-5">
            <p className="text-sm font-semibold text-text">{s.group}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-border/80 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

