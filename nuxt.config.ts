import vue from '@vitejs/plugin-vue';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxt/fonts',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-security',
    ],

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },

    css: ['~/assets/css/tailwind.css'],

    colorMode: {
        classSuffix: '',
    },

    routeRules: {
        '/api/enrollments/*': {
            security: {
                xssValidator: false,
            },
        },
        '/api/reports/*': {
            security: {
                xssValidator: false,
                requestSizeLimiter: {
                    maxUploadFileRequestInBytes: 1024 * 1024 * 100,
                },
            },
        },
    },

    security: {
        removeLoggers: !(process.env.NODE_ENV === 'development'),
        headers: {
            crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'unsafe-none',
            contentSecurityPolicy: {
                'img-src': ["'self'", 'data:', 'https://mooc-forums.inria.fr'],
            },
        },
        rateLimiter: {
            tokensPerInterval: 300,
        },
    },

    nitro: {
        rollupConfig: {
            plugins: [vue()],
        },
    },

    compatibilityDate: '2024-07-12',
});
