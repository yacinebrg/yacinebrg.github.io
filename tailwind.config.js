// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          background: "#0B0E16",       // Bleu nuit profond
          foreground: "#E4E6EB",       // Blanc cassé (texte principal)
          title: "#F0EADB",            // Beige professionnel
          secondary: "#B6BBC6",        // Gris doux (paragraphes)
          accent: "#7EA6F6",           // Bleu raffiné pour boutons/accents
          highlight: "#BFCFFF",        // Hover ou détails légers
          marker: "#44D17D",           // Pastille ou effet “actif”
          beige_fonce: "#EDE8D0"
        }
      },
      
      
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        krushnadevaraya: ['"Sree Krushnadevaraya"', 'serif'],
      }
    },
  },
  plugins: [],
};
