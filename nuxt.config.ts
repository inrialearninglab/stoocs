// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },

    modules: [
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxt/fonts",
        "@pinia/nuxt",
        "@nuxtjs/color-mode",
        "nuxt-security"
    ],

    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },

    css: ['~/assets/css/typography.css', '~/assets/css/themes.css'],

    colorMode: {
        classSuffix: ''
    },

    routeRules: {
        '/api/enrollments/*': {
            security: {
                xssValidator: false
            }
        },
        '/api/reports/*': {
            security: {
                xssValidator: false,
                requestSizeLimiter: {
                    maxUploadFileRequestInBytes: 1024 * 1024 * 50
                }
            }
        }
    },

    security: {
        headers: {
            crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
        }
    },

    runtimeConfig: {
        public: {
            scrapperEmail: 'ill-stoocs@inria.fr'
        }
    },

    compatibilityDate: "2024-07-12"
})
