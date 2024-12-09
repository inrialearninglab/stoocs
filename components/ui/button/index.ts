import { type VariantProps, cva } from 'class-variance-authority';

// @ts-ignore
export { default as Button } from './Button.vue';

export const buttonVariants = cva(
    'inline-flex items-center justify-center relative whitespace-nowrap rounded-md font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border box-border',
    {
        variants: {
            variant: {
                default: [
                    'bg-primary border-transparent text-primary-foreground shadow-custom-inset [--button-hover-overlay:theme(colors.white/10%)]',
                    "after:content-[''] after:rounded-md after:transition after:absolute after:inset-0 after:bg-[var(--button-hover-overlay)] after:opacity-0 hover:after:opacity-100",
                    'dark:border-white/5',
                ],
                destructive: [
                    'bg-destructive border-transparent text-destructive-foreground shadow-custom-inset [--button-hover-overlay:theme(colors.white/10%)]',
                    "after:content-[''] after:rounded-md after:transition after:absolute after:inset-0 after:bg-[var(--button-hover-overlay)] after:opacity-0 hover:after:opacity-100",
                ],
                outline: ['hover:bg-secondary/90'],
                secondary: [
                    'bg-secondary shadow-custom-inset [--button-hover-overlay:theme(colors.secondary.foreground/5%)]',
                    "after:content-[''] after:transition after:rounded-md after:absolute after:inset-0 after:bg-[var(--button-hover-overlay)] after:opacity-0 hover:after:opacity-100",
                    'dark:border-white/5',
                ],
                ghost: 'hover:bg-secondary/90 hover:text-accent-foreground border-none',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                xs: 'h-7 rounded px-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
