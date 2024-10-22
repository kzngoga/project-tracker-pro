import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7FB",
        foreground: "#353c4e",
        primary: {
          DEFAULT: "#36A9AC",
        },
        secondary: {
          DEFAULT: "#212529",
          dark: "#404e67",
          gray: "#505458",
        },
        muted: {
          DEFAULT: "#919aa3",
          light: "#f1f1f1",
        },
        error: {
          DEFAULT: "#F55D70",
        },
        link: {
          DEFAULT: "#dcdcdc",
          icon: "#c3c3c3",
        },
        warning: {
          DEFAULT: "#fe8a7d",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
