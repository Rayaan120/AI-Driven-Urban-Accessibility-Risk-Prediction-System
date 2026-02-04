/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        card: "rgba(255, 255, 255, 0.03)",
        "card-hover": "rgba(255, 255, 255, 0.08)",
        primary: "#6366f1", // Indigo
        accent: "#a855f7", // Purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
