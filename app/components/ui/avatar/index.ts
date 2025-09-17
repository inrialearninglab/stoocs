import { type VariantProps, cva } from 'class-variance-authority';

// @ts-ignore
export { default as Avatar } from '~/components/ui/avatar/Avatar.vue';
// @ts-ignore
export { default as AvatarImage } from '~/components/ui/avatar/AvatarImage.vue';
// @ts-ignore
export { default as AvatarFallback } from '~/components/ui/avatar/AvatarFallback.vue';

export const avatarVariant = cva(
    'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
    {
        variants: {
            size: {
                xs: 'size-8 text-xs',
                sm: 'h-10 w-10 text-xs',
                base: 'h-16 w-16 text-2xl',
                lg: 'h-32 w-32 text-5xl',
            },
            shape: {
                circle: 'rounded-full',
                square: 'rounded-md',
            },
        },
    },
);

export type AvatarVariants = VariantProps<typeof avatarVariant>;
