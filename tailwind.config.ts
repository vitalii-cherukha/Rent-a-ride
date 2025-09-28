import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
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

        // Колір тексту - Сірий
        "text-grey": "#8d929a",
      },
    },
  },
  plugins: [],
};

export default config;
