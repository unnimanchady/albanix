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
        albanix: {
          primary: "#07111F",
          secondary: "#0B1B32",
          blue: "#176BFF",
          cyan: "#00C2E8",
          aqua: "#16D6C5",
          light: "#F5F8FC",
          white: "#FFFFFF",
          textPrimary: "#101828",
          textSecondary: "#667085",
          border: "#E4EAF1",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
