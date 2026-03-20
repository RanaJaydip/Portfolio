import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/70">
      <div className="container-pad flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-2">
          <a className="btn btn-ghost px-3 py-2" href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost px-3 py-2" href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost px-3 py-2" href={site.socials.x} target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

