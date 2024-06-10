// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/fonts"],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    css: ['~/assets/css/typography.css']
})