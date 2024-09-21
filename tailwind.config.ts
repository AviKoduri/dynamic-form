import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    colors: {
      primary: '#47751B',
      bg: '#333333',
      bgDark: '#161616',
      borderColor: "#60883A",
      inputLabelColor: "#AFAFAF",
      grayColor:"#D9D9D9"

    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'Display': '3rem',  // 10px
        'H1': '2.25rem',    // 12px
        'H2': '1.63rem',   // 14px
        'H3': '1.38rem',     // 16px (default)
        'H4': '1.13rem',   // 18px
        'H5': '0.88rem',    // 20px
        'H6': '0.75rem',    // 24px
        'PL': '1.13rem',  // 30px
        'Pd': '1rem',   // 36px
        'BtnText': '0.93rem',
        'DisplaySm': '1.813rem',  // 10px
        'H1Sm': '1.88rem',    // 12px
        'H2Sm': '1.38rem',   // 14px
        'H3Sm': '0.875rem',     // 16px (default)
        'H4Sm': '0.75rem',   // 18px
        'H5Sm': '0.688rem',    // 20px
        'H6Sm': '0.625rem',    // 24px
        'PLSm': '1rem',  // 30px
        'PdSm': '0.875rem',   // 36px
        'BtnTextSm': '0.69rem',

      },
      lineHeight: {
        "Display": "3.4rem",
        "H1 ": "2.61rem",
        "H2": "1.89rem",
        "H3": "1.60rem",
        "H4": "1.31rem",
        "H5": "1.02rem",
        "H6": "0.87rem",
        "PL": "1.31rem",
        "Pd": "1.25rem",
        'DisplaySm': '2.10rem',  // 10px
        'H1Sm': '2.17rem',    // 12px
        'H2Sm': '1.595rem',   // 14px
        'H3Sm': '1.015rem',     // 16px (default)
        'H4Sm': '0.87rem',   // 18px
        'H5Sm': '0.797rem',    // 20px
        'H6Sm': '0.725rem',    // 24px
        'PLSm': '1.16rem',  // 30px
        'PdSm': '1.2rem',   // 36px
      }
    },
  },
  plugins: [
  ],
};
export default config;
