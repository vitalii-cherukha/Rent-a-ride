import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px", // Мобільні
        sm: "24px", // Планшети
        md: "40px", // Середні екрани
        lg: "60px", // Великі екрани
        xl: "120px", // Desktop
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },

    screens: {
      xs: "375px", // Маленькі мобільні
      sm: "640px", // Мобільні (горизонтально)
      md: "768px", // Планшети
      lg: "1024px", // Ноутбуки
      xl: "1440px", // Desktop
      "2xl": "1536px", // Великі екрани
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
        grey: "#8d929a",
      },
    },
  },
  plugins: [],
};

export default config;
