// @ts-ignore
export { default as ChartTooltip } from '~/components/ui/chart/ChartTooltip.vue';
// @ts-ignore
export { default as ChartSingleTooltip } from '~/components/ui/chart/ChartSingleTooltip.vue';
// @ts-ignore
export { default as ChartLegend } from '~/components/ui/chart/ChartLegend.vue';
// @ts-ignore
export { default as ChartCrosshair } from '~/components/ui/chart/ChartCrosshair.vue';

export function defaultColors(count: number = 3) {
    const quotient = Math.floor(count / 2);
    const remainder = count % 2;

    const primaryCount = quotient + remainder;
    const secondaryCount = quotient;
    return [
        ...Array.from(Array(primaryCount).keys()).map(
            (i) => `hsl(var(--vis-primary-color) / ${1 - (1 / primaryCount) * i})`,
        ),
        ...Array.from(Array(secondaryCount).keys()).map(
            (i) => `hsl(var(--vis-secondary-color) / ${1 - (1 / secondaryCount) * i})`,
        ),
    ];
}

export * from './interface';
