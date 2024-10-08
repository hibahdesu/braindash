import type { Config } from "tailwindcss";
import floatAnimation from './tailwind.plugin'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // 'primary': '#9f6e59',
      'primary': '#8E5500',
      'secondary': '#FFEECA',
      'tertiary': '#FFFEF6',
      'quaternary': '#FFFFFF',
      'quinary': '##FFEECA',
      'senary': '#D27E00',
      'septenary': '#E2B996',
      'octonary': '#ad7362',
      'nonary': '#d39042',
      'orange': '#e49e50',
      'light': '#f6af5f',
      'error': '#ff1515'
      // Other colors...
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [floatAnimation],
};

export default config;