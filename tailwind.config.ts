/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#2974E5",
      gray: "#C7C7C7",
      white: "#FFFFFF",
      black: "#000",
      lightCoral: "#F66A6A",
      darkGray: "#333",
      lightGray: "#e4e4e4",
      charcoal: "#1c1c1c",
      mediumGray: "#919191",
      offWhite: "#f2f2f2",
      softGray: "#d4d3d3",
      slateGray: "#ababab",
      dimGray: "#777",
      neutralGray: "#5F5F5F",
      grayMuted: "#818181",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".durationInOut": { "@apply duration-300 ease-in-out origin-top": {} },
        ".scaleOpacityFull": { "@apply scale-y-100 opacity-100": {} },
        ".scaleOpacityNone": { "@apply scale-y-0 opacity-0": {} },
        ".headerMobileMenulist": {
          "@apply p-2 hover:bg-blue hover:bg-opacity-50": {},
        },
      });
    }),
  ],
};
export default config;
