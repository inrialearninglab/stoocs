<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import type { DateValue } from '@internationalized/date';
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'radix-vue';
import { ChevronsLeft } from 'lucide-vue-next';
import { cn } from '~/lib/utils';
import { buttonVariants } from '~/components/ui/button';

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

function pagingFunc(date: DateValue, sign: -1 | 1) {
    if (sign === -1) return date.subtract({ years: 1 });
    return date.add({ years: 1 });
}
</script>

<template>
    <CalendarPrev
        :class="
            cn(
                buttonVariants({ variant: 'outline' }),
                'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                props.class,
            )
        "
        v-bind="forwardedProps"
        :prev-page="(date: DateValue) => pagingFunc(date, -1)"
    >
        <slot>
            <ChevronsLeft class="h-4 w-4" />
        </slot>
    </CalendarPrev>
</template>
