// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/fonts", "@pinia/nuxt", "@nuxtjs/color-mode"],

  shadcn: {
      prefix: '',
      componentDir: './components/ui'
  },

  css: ['~/assets/css/typography.css'],

  colorMode: {
      classSuffix: ''
  },

  compatibilityDate: "2024-07-12"
})