import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section aria-label="Intro" className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className="space-y-5">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-white/5 px-3 py-1 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-brand shadow-glow" />
          Open to internships (Python • AI/ML • BDE • Web Dev)
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {site.name}
          <span className="block bg-gradient-to-r from-brand to-brand2 bg-clip-text text-transparent">
            {site.role}
          </span>
        </h1>
        <p className="max-w-prose text-pretty text-sm text-muted sm:text-base">
          {site.tagline} Based in {site.location}.
        </p>

        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-border/70 bg-white/5 p-4">
          <p className="text-sm font-medium text-text">About</p>
          <p className="mt-1 text-sm text-muted">
            I care about clean architecture, performance, and accessible UI. I ship with strong
            engineering fundamentals and great communication.
          </p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-white/5 p-4">
            <p className="text-xs text-muted">Focus</p>
            <p className="mt-1 text-sm font-medium text-text">Python + Web Development</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-white/5 p-4">
            <p className="text-xs text-muted">Strengths</p>
            <p className="mt-1 text-sm font-medium text-text">Fast learner, consistent delivery</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-white/5 p-4">
            <p className="text-xs text-muted">Location</p>
            <p className="mt-1 text-sm font-medium text-text">{site.location}</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-white/5 p-4">
            <p className="text-xs text-muted">Email</p>
            <a className="mt-1 block text-sm font-medium text-text hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="rounded-xl border border-border/70 bg-white/5 p-4 sm:col-span-2">
            <p className="text-xs text-muted">Phone</p>
            <a className="mt-1 block text-sm font-medium text-text hover:underline" href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

