import { cva, type VariantProps } from 'class-variance-authority';

export { default as Toggle } from './Toggle.vue';

export const toggleVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-secondary',
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline: 'border bg-transparent hover:bg-secondary',
            },
            size: {
                default: 'h-10 px-3',
                sm: 'h-9 px-2.5',
                lg: 'h-11 px-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
