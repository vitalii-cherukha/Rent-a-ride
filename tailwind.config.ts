// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "120px",
      },
      screens: {
        xl: "1440px",
      },
    },

    extend: {
      colors: {
        // Темний фон (Hero, оверлей)
        "dark-bg": "#101828",

        // Основний колір (Primary)
        primary: "#3470FF",

        // Колір наведення / Dark Primary
        "primary-dark": "#0B44CD",

        // Колір бордюрів / Роздільник (DADDED)
        "border-light": "#DADDE1",

        // Колір фону - Світло-сірий
        "background-light": "#F2F4F7",

        // Колір фону - Дуже світлий сірий
        "background-alt": "#F7F7F7",
      },
    },
  },
  plugins: [],
};

export default config;
