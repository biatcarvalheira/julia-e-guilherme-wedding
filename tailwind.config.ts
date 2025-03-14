import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-green': '#bcd7b4', // Add your custom color here
      },
        fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
