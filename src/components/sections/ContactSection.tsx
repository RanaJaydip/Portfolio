import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading
        title="Contact"
        subtitle="Want to build something together? Send a message."
      />

      <div className="card p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm text-muted">
              The fastest way to reach me is email. I’m also active on GitHub and LinkedIn.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Email me
              </a>
              <a className="btn btn-ghost" href={site.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-white/5 p-5">
            <p className="text-sm font-semibold text-text">Details</p>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-xs text-muted">Location</dt>
                <dd className="mt-1 text-text">{site.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Email</dt>
                <dd className="mt-1">
                  <a className="text-text hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Phone</dt>
                <dd className="mt-1">
                  <a className="text-text hover:underline" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

