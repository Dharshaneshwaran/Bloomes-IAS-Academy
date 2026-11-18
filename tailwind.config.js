/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
        },
        accent: "var(--accent)",
        light: "var(--light)",
        dark: "var(--dark)",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
