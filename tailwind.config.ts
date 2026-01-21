import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',           // root app component
    './app/**/*.vue',      // all pages and storyblok components
    './components/**/*.vue', // any additional components outside app/
    './layouts/**/*.vue'     // layouts
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
