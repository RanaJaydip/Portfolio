import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(220 25% 6%)",
        card: "hsl(220 20% 9%)",
        text: "hsl(210 40% 96%)",
        muted: "hsl(215 20% 65%)",
        border: "hsl(220 15% 18%)",
        brand: "hsl(200 100% 60%)",
        brand2: "hsl(270 100% 70%)"
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(200 100% 60% / .25), 0 10px 35px -15px hsl(200 100% 60% / .35)"
      }
    }
  },
  plugins: []
} satisfies Config;

