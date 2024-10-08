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
        lighterCoffe: "var(--lighter-coffee)",
        darkCream: "var(--dark-cream)",
        lightCream: "var(--light-cream)",
        mainBg: "var(--main-bg)",
        iconColors: "var(--icon-colors)",
        textColorInput: "var(--text-color-input)",
        primaryGrayColor: "var(--primary-gray-color)",
        primaryTextColor: "var(--primary-text-color)"
      },
      fontFamily: {
        'regular-font': ['var(--regular-font)'],
        'mono-regular-semibold': ['var(--font-roboto-regular-semibild)'],
      },
      boxShadow: {
        '2xl': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '3xl': '0 0px 10px 0 rgb(0 0 0 / 0.05)',
        '4x1': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        '5x1': 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'
      },
      translate: {
        'negative-50': '-50%',
      },
      zIndex: {
        '1000': '1000',
        '100': '100',
        '99': '99',
      }
    },
  },
  plugins: [],
};
export default config;
