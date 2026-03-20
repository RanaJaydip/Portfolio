export const site = {
  name: "Jaydip Rana",
  role: "Software Developer (Internship)",
  tagline:
    "Seeking internships in Python, AI/ML, BDE, and Web Development. I build reliable apps and learn fast.",
  location: "Sanand, Ahmedabad, 382110",
  email: "jaydiprana2506@gmail.com",
  phone: "9428694278",
  url: "https://example.com",
  socials: {
    github: "https://github.com/RanaJaydip",
    linkedin: "https://www.linkedin.com/in/jaydiprana",
    x: "https://x.com/your-handle",
  },
  resumeUrl: "#"
} as const;

export type Site = typeof site;

