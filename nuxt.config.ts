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
    
    css: ['~/assets/css/typography.css'],
    
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
    
    compatibilityDate: "2024-07-12"
})