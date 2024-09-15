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
        darkCoffee: "var(--dark-coffee)",
        lightCoffee: "var(--light-coffee)",
        darkCream: "var(--dark-cream)",
        lightCream: "var(--light-cream)",
        mainBg: "var(--main-bg)",
        iconColors: "var(--icon-colors)",
        textColorInput: "var(--text-color-input)"
      },
      fontFamily: {
        'mono-regular': ['var(--font-roboto-regular)'],
      },
      boxShadow: {
        '3xl': '0 0px 10px 0 rgb(0 0 0 / 0.05)',
      },
      translate: {
        'negative-50': '-50%',
      }
    },
  },
  plugins: [],
};
export default config;
