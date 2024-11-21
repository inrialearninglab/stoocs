import animate from 'tailwindcss-animate';
import { setupInspiraUI } from '@inspira-ui/plugins';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    safelist: [
        'dark',
        'bg-success-bg',
        'text-success-text',
        'border-success-border',
        'bg-warning-bg',
        'text-warning-text',
        'border-warning-border',
        'bg-error-bg',
        'text-error-text',
        'border-error-border',
        'bg-info-bg',
        'text-info-text',
        'border-info-border',
    ],
    prefix: '',

    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                success: {
                    DEFAULT: '#12cc82',
                    border: 'hsl(var(--success-border))',
                    text: 'hsl(var(--success-text))',
                    bg: 'hsl(var(--success-bg))',
                },
                warning: {
                    DEFAULT: '#f59e0b',
                    border: 'hsl(var(--warning-border))',
                    text: 'hsl(var(--warning-text))',
                    bg: 'hsl(var(--warning-bg))',
                },
                error: {
                    DEFAULT: '#e11d48',
                    border: 'hsl(var(--error-border))',
                    text: 'hsl(var(--error-text))',
                    bg: 'hsl(var(--error-bg))',
                },
                info: {
                    border: 'hsl(var(--info-border))',
                    text: 'hsl(var(--info-text))',
                    bg: 'hsl(var(--info-bg))',
                },
            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'collapsible-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: 0 },
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
                'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
            },
            maxWidth: {
                '8xl': '85rem',
            },
        },
    },
    plugins: [animate, setupInspiraUI],
};
