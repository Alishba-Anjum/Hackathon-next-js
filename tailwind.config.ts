import type { Config } from "tailwindcss";

const config: Config = {
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
        lightYellow : '#FBEBB5',
        lightGray :  '#FAF4F4',
        Gray :'#9F9F9F',
        pink : '#FAF4F4',
        cart :  '#FFF9E5'

      },
    },
  },
  plugins: [],
};
export default config;
