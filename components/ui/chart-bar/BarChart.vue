<script setup lang="ts" generic="T extends Record<string, any>">
import type { BulletLegendItemInterface } from '@unovis/ts'
import { VisAxis, VisGroupedBar, VisStackedBar, VisXYContainer, VisXYLabels } from '@unovis/vue'
import { Axis, GroupedBar, StackedBar } from '@unovis/ts'
import { type Component, computed, ref } from 'vue'
import { useMounted } from '@vueuse/core'
import type { BaseChartProps } from '.'
import { ChartCrosshair, ChartLegend, defaultColors } from '~/components/ui/chart'
import { cn } from '~/lib/utils'
import type { Labels } from '~/types/graph.type';

const props = withDefaults(defineProps<BaseChartProps<T> & {
    /**
     * Render custom tooltip component.
     */
    customTooltip?: Component
    /**
     * Change the type of the chart
     * @default "grouped"
     */
    type?: 'stacked' | 'grouped'
    /**
     * Rounded bar corners
     * @default 0
     */
    roundedCorners?: number
    color?: any
    percentage?: boolean;
    labels?: Labels;
}>(), {
    type: 'grouped',
    margin: () => ({ top: 10, bottom: 0, left: 0, right: 0 }),
    filterOpacity: 0.2,
    roundedCorners: 0,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
    showGridLine: true,
})
const emits = defineEmits<{
    legendItemClick: [d: BulletLegendItemInterface, i: number]
}>()

type KeyOfT = Extract<keyof T, string>
type Data = typeof props.data[number]

const index = computed(() => props.index as KeyOfT)
const colors = computed(() => props.colors?.length ? props.colors : defaultColors(props.categories.length))
const legendItems = ref<BulletLegendItemInterface[]>(props.categories.map((category, i) => ({
    name: category,
    color: colors.value[i],
    inactive: false,
})))

const isMounted = useMounted()

function handleLegendItemClick(d: BulletLegendItemInterface, i: number) {
    emits('legendItemClick', d, i)
}

const VisBarComponent = computed(() => props.type === 'grouped' ? VisGroupedBar : VisStackedBar)
const selectorsBar = computed(() => props.type === 'grouped' ? GroupedBar.selectors.bar : StackedBar.selectors.bar)
</script>

<template>
    <div :class="cn('w-full h-[500px] flex flex-col items-end', $attrs.class ?? '')">
        <ChartLegend v-if="showLegend" v-model:items="legendItems" @legend-item-click="handleLegendItemClick"/>

        <VisXYContainer
            :data="data"
            :style="{ height: isMounted ? '100%' : 'auto' }"
            :margin="margin"
            :yDomain="[0, 100]"
        >
            <ChartCrosshair
                v-if="showTooltip"
                :colors="colors"
                :items="legendItems"
                :custom-tooltip="customTooltip"
                :index="index"
                :percentage="percentage"
            />

            <VisBarComponent
                :x="(d: Data, i: number) => i"
                :y="categories.map(category => (d: Data) => d[category]) "
                :color="color ?? colors"
                :rounded-corners="roundedCorners"
                :bar-padding="0.05"
                :attributes="{
          [selectorsBar]: {
            opacity: (d: Data, i:number) => {
              const pos = i % categories.length
              return legendItems[pos]?.inactive ? filterOpacity : 1
            },
          },
        }"
            />

            <VisXYLabels
                v-if="labels"
                :x="(d: Data) => labels[d.pos]?.pos"
                :y="(d: Data) => labels[d.pos]?.value / 2"
                :label="(d: Data) => labels[d.pos]?.label"
                backgroundColor="hsl(var(--primary))"
                color="hsl(var(--background))"
            />

            <VisAxis
                v-if="showXAxis"
                type="x"
                :tick-format="xFormatter ?? ((v: number) => data[v]?.[index])"
                :grid-line="false"
                :tick-line="false"
                tick-text-color="hsl(var(--vis-text-color))"
            />
            <VisAxis
                v-if="showYAxis"
                type="y"
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

            <slot/>
        </VisXYContainer>
    </div>
</template>
