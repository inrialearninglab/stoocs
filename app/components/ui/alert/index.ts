import { type VariantProps, cva } from 'class-variance-authority';

// @ts-ignore
export { default as Alert } from '~/components/ui/alert/Alert.vue';
// @ts-ignore
export { default as AlertTitle } from '~/components/ui/alert/AlertTitle.vue';
// @ts-ignore
export { default as AlertDescription } from '~/components/ui/alert/AlertDescription.vue';

export const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive: 'border-error-border bg-error-bg text-error-text [&>svg]:text-error-text',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
