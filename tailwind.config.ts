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
        },
        muted: {
          DEFAULT: "#919aa3",
        },
        error: {
          DEFAULT: "#F55D70",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
