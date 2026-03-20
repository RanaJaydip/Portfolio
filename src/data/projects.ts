export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Mamory Matrix",
    description:
      "A browser-based Memory (Flip Card) game built with HTML, CSS, and vanilla JavaScript. Players match icon pairs using a shuffled grid, track moves, and beat a timer to complete the board.",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "Game UI"],
    href: "https://github.com/RanaJaydip/Mamory-Matrix",
    repo: "https://github.com/RanaJaydip/Mamory-Matrix",
    highlights: [
      "Flip-card matching logic with lockout to prevent incorrect rapid clicks",
      "Shuffled card layout + move counter",
      "Timer with win condition when all pairs are found",
      "Celebration confetti animation + “Play Again” flow",
    ],
  },
  {
    title: "Static Blog Website (iBlog)",
    description:
      "A simple static blog website built with HTML, CSS (Bootstrap), and JavaScript. Includes navigation pages (home/about/contact) and UI for browsing featured posts.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Static Site"],
    href: "https://github.com/RanaJaydip/Static-Blog-Website",
    repo: "https://github.com/RanaJaydip/Static-Blog-Website",
    highlights: [
      "Blog layout with featured articles and reading-style UI",
      "Static navigation (Home / About / Contact)",
      "Search UI included in the frontend",
      "Built as a basic example of a blog website with interactivity via JS",
    ],
  },
  {
    title: "Car Sales Performance Dashboard (Power BI)",
    description:
      "A Power BI dashboard for car sales analytics built as part of a Semester 7 Data Science coursework. It visualizes revenue, customer trends, and sales performance to support business decisions.",
    tags: ["Power BI", "Data Analysis", "Data Science", "Dashboards"],
    href: "https://github.com/RanaJaydip/Car_Sales_Performance_Dashboard_using_PowerBI",
    repo: "https://github.com/RanaJaydip/Car_Sales_Performance_Dashboard_using_PowerBI",
    highlights: [
      "Analyze total car sales and revenue",
      "Identify top-performing brands and models",
      "Understand customer purchasing behavior",
      "Track sales trends over time",
      "Compare regional performance",
    ],
  },
  {
    title: "Resume Parsing (Django + NLTK)",
    description:
      "A Django REST API that parses resume text using NLTK (tokenization, POS tagging, NER chunking, keyword extraction), scrapes a given URL to extract visible text + keywords, and stores parsed results in SQLite for demo purposes.",
    tags: ["Python", "Django", "NLTK", "REST API", "Web Scraping"],
    href: "https://github.com/RanaJaydip/Resume_Parser",
    repo: "https://github.com/RanaJaydip/Resume_Parser",
    highlights: [
      "Resume parsing via NLTK pipelines (NER, POS tagging, keywords)",
      "URL scraping to extract visible text + keywords",
      "API endpoints: `/api/parse-resume/` and `/api/scrape/`",
      "SQLite storage for demo results",
    ],
  },
];

