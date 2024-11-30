import type { Config } from "tailwindcss";

const colorPalette = require('./src/common/styles/colors');


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: colorPalette,
    },
  },
  plugins: [],
} satisfies Config;
