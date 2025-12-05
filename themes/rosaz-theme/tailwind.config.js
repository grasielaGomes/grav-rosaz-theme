// tailwind.config.js
module.exports = {
  content: ['./templates/**/*.twig', './templates/**/*.html.twig'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
