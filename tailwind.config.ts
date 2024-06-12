import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f2f5',
        secondary: '#c6cd01',
        tertiary: '#222222',
        cuartiary: '#FF8000',
        slate: {
          10: '#f1f3f4',
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      backgroundImage: {
        hero: "url('/src/assets/bgecom.png')",
        banneroffer: "url('/src/assets/banneroffer.png')",
        pattern: "url('/pattern.png')",
        "footer-pattern": "url('/footer-pattern.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
