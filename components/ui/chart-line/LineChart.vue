<script setup lang="ts" generic="T extends Record<string, any>">
import { type BulletLegendItemInterface, CurveType, type FreeBrushSelection } from '@unovis/ts';
import { VisAxis, VisLine, VisXYContainer, VisFreeBrush } from '@unovis/vue';
import { Axis, Line } from '@unovis/ts';
import { type Component, computed, ref } from 'vue';
import { useMounted } from '@vueuse/core';
import type { BaseChartProps } from '.';
import { ChartCrosshair, ChartLegend, defaultColors } from '~/components/ui/chart';
import { cn } from '~/lib/utils';
import { scaleLinear } from 'd3-scale';
import { useElementSize } from '@vueuse/core';

const props = withDefaults(
    defineProps<
        BaseChartProps<T> & {
            /**
             * Render custom tooltip component.
             */
            customTooltip?: Component;
            /**
             * Type of curve
             */
            curveType?: CurveType;
            xLabel?: string;
            yLabel?: string;
            showXTickline?: boolean;
            brush?: boolean;
        }
    >(),
    {
        curveType: CurveType.MonotoneX,
        filterOpacity: 0.2,
        margin: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
        showXAxis: true,
        showYAxis: true,
        showTooltip: true,
        showLegend: true,
        showGridLine: true,
        showXTickline: false,
        brush: false,
    },
);

const emits = defineEmits<{
    legendItemClick: [d: BulletLegendItemInterface, i: number];
    brushEnd: [start: number, end: number];
}>();

type KeyOfT = Extract<keyof T, string>;
type Data = (typeof props.data)[number];

const index = computed(() => props.index as KeyOfT);
const colors = computed(() => (props.colors?.length ? props.colors : defaultColors(props.categories.length)));

const legendItems = ref<BulletLegendItemInterface[]>(
    props.categories.map((category, i) => ({
        name: category,
        color: colors.value[i],
        inactive: false,
    })),
);

const isMounted = useMounted();

function handleLegendItemClick(d: BulletLegendItemInterface, i: number) {
    emits('legendItemClick', d, i);
}

const chartContainer: Ref<HTMLDivElement | null> = ref(null);
const { width } = useElementSize(chartContainer);
const tickCount = computed(() => {
    if (!width.value) return 5;

    return Math.max(2, Math.min(20, Math.floor(width.value / 120)));
});

const domainStart = 0;
const domainEnd = computed(() => props.data.length - 1);
const tickValues = computed(() => {
    const xScale = scaleLinear().domain([domainStart, domainEnd.value]);
    let vals = xScale.ticks(tickCount.value);

    if (vals[0] !== domainStart) vals.unshift(domainStart);
    if (vals[vals.length - 1] !== domainEnd.value) vals[vals.length - 1] = domainEnd.value;

    return vals;
});

function onBrushEnd(selection: FreeBrushSelection) {
    const [start, end] = toRaw(selection) as [number, number];
    emits('brushEnd', start, end);
}
</script>

<template>
    <div ref="chartContainer" :class="cn('w-full h-[500px] flex flex-col items-end', $attrs.class ?? '')">
        <ChartLegend v-if="showLegend" v-model:items="legendItems" @legend-item-click="handleLegendItemClick" />

        <VisXYContainer :margin="{ left: 20, right: 20 }" :data="data" :style="{ height: isMounted ? '100%' : 'auto' }">
            <ChartCrosshair
                v-if="showTooltip"
                :colors="colors"
                :items="legendItems"
                :index="index"
                :custom-tooltip="customTooltip"
            />

            <template v-for="(category, i) in categories" :key="category">
                <VisLine
                    :x="(d: Data, i: number) => i"
                    :y="(d: Data) => d[category]"
                    :curve-type="curveType"
                    :color="colors[i]"
                    :attributes="{
                        [Line.selectors.line]: {
                            opacity: legendItems.find((item) => item.name === category)?.inactive ? filterOpacity : 1,
                        },
                    }"
                />
            </template>

            <VisAxis
                v-if="showXAxis"
                type="x"
                :label="xLabel"
                label-color="hsl(var(--vis-text-color))"
                :tick-format="xFormatter ?? ((v: number) => data[v]?.[index])"
                :grid-line="false"
                :tick-line="showXTickline"
                :tick-values="tickValues"
                tick-text-color="hsl(var(--vis-text-color))"
            />
            <VisAxis
                v-if="showYAxis"
                type="y"
                :label="yLabel"
                label-color="hsl(var(--vis-text-color))"
                :tick-line="false"
                :tick-format="yFormatter"
                :domain-line="false"
                :grid-line="showGridLine"
                :attributes="{
                    [Axis.selectors.grid]: {
                        class: 'text-muted-foreground/60',
                    },
                }"
                tick-text-color="hsl(var(--vis-text-color))"
            />

            <VisFreeBrush v-if="brush" mode="x" @brush-end="onBrushEnd" />

            <slot />
        </VisXYContainer>
    </div>
</template>
