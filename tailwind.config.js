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
        ink: '#1A1C23',
        mist: '#F4F5F8',
        rule: '#E3E5EB',
        navy: { DEFAULT: '#1E3A8A', deep: '#172554' },
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
        heading: ['var(--font-anek)', 'Anek Tamil', 'IBM Plex Sans', 'sans-serif'],
        sans: ['var(--font-plex)', 'IBM Plex Sans', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
};
