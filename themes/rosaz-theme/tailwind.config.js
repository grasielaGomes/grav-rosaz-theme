// tailwind.config.js
module.exports = {
  content: ['./templates/**/*.twig', './templates/**/*.html.twig'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
