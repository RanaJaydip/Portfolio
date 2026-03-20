import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="btn btn-ghost px-3 py-2"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading
        title="Projects"
        subtitle="Recent work—focused on polish, performance, and real-world shipping."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </div>
              <div className="hidden shrink-0 items-center gap-2 sm:flex">
                {p.href ? <ExternalLink href={p.href} label="Live" /> : null}
                {p.repo ? <ExternalLink href={p.repo} label="Code" /> : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/80 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.highlights?.length ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
              {p.href ? <ExternalLink href={p.href} label="Live" /> : null}
              {p.repo ? <ExternalLink href={p.repo} label="Code" /> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

