/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          blue: "rgb(var(--color-primary-violet) / <alpha-value>)",
          green: "rgb(var(--color-primary-green) / <alpha-value>)",
          yellow: "rgb(var(--color-primary-yellow) / <alpha-value>)",
        },
        text: {
          body: "rgb(var(--color-text-body) / <alpha-value>)",
          bold: "rgb(var(--color-text-bold) / <alpha-value>)",
          heading: "rgb(var(--color-text-heading) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          code: "rgb(var(--color-text-code) / <alpha-value>)",
          link: "rgb(var(--color-text-link) / <alpha-value>)",
          selection: "rgb(var(--color-text-selection) / <alpha-value>)",
        },
        bg: {
          body: "rgb(var(--color-bg-body) / <alpha-value>)",
          code: "rgb(var(--color-bg-code) / <alpha-value>)",
          selection: "rgb(var(--color-bg-selection) / <alpha-value>)",
        },
        border: {
          code: "rgb(var(--color-border-code) / <alpha-value>)",
        },
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
    plugins: [],
  }
}