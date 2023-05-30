import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["Lufga", 'sans-serif'],
        lufgaBold: ["Lufga-Bold", 'sans-serif'],
        lufgaLight: ["Lufga-Light", 'sans-serif'],
        lufgaMedium: ["Lufga-Medium", 'sans-serif'],
        lufgaSemiBold: ["Lufga-SemiBold", 'sans-serif'],
        lufgaThin: ["Lufga-Thin", 'sans-serif'],
        lufgaExtraBold: ["Lufga-ExtraBold", 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
