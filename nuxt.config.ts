// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN, // preview token
        bridge: true,
        apiOptions: {
          region: 'eu',
          cache: { clear: 'auto', type: 'memory' }
        }
      }
    ]
  ]
})
