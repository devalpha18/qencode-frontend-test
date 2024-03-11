/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        basis: ["basis-grotesque", "sans-serif"],
        saol: ["Saol", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        ttlDark: "var(--color-ttl-dark)",
        basicDark: "var(--color-primary)",
        placeholder: "var(--color-placeholder-gray)",
        qencodeBlue: "var(--color-qencode-blue)",
        darkGray: "var(--color-darkgray)",
        lightGray: "var(--color-lightgray)",
      },
    },
  },
  plugins: [],
};
