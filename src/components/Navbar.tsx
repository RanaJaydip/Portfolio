import { site } from "@/data/site";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/55 backdrop-blur">
      <div className="container-pad flex h-14 items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border/80 bg-white/5 text-sm font-semibold">
            {site.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0]?.toUpperCase())
              .join("") || "YN"}
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">{site.name}</div>
            <div className="text-xs text-muted">{site.role}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn btn-ghost px-3 py-2">
              {l.label}
            </a>
          ))}
          <a
            href={site.socials.github}
            className="btn btn-ghost px-3 py-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <a href="#projects" className="btn btn-ghost px-3 py-2">
            Projects
          </a>
          <a href="#contact" className="btn btn-primary px-3 py-2">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

