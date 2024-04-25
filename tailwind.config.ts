import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#03045e',
        'secondary': '#0077b6',
        'accent': '#00b4d8',
        'info': '#90e0ef',
        'light': '#caf0f8',
      },
    },
  },
  plugins: [],
};

export default config;
