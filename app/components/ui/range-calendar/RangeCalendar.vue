<script lang="ts" setup>
import type { RangeCalendarRootEmits, RangeCalendarRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { reactiveOmit } from '@vueuse/core';
import { RangeCalendarRoot, useForwardPropsEmits, RangeCalendarPrev } from 'reka-ui';
import { cn } from '@/lib/utils';
import type { DateValue } from '@internationalized/date';
import {
    RangeCalendarCell,
    RangeCalendarCellTrigger,
    RangeCalendarGrid,
    RangeCalendarGridBody,
    RangeCalendarGridHead,
    RangeCalendarGridRow,
    RangeCalendarHeadCell,
    RangeCalendarHeader,
    RangeCalendarHeading,
    RangeCalendarNextButton,
    RangeCalendarPrevButton,
} from '.';

const props = defineProps<RangeCalendarRootProps & { class?: HTMLAttributes['class'] }>();

const emits = defineEmits<RangeCalendarRootEmits>();

const delegatedProps = reactiveOmit(props, 'class');

const forwarded = useForwardPropsEmits(delegatedProps, emits);

function pagingFunc(date: DateValue, sign: -1 | 1) {
    if (sign === -1) return date.subtract({ years: 1 });
    return date.add({ years: 1 });
}
</script>

<template>
    <RangeCalendarRoot v-slot="{ grid, weekDays }" :class="cn('p-3', props.class)" v-bind="forwarded">
        <RangeCalendarHeader>
            <div class="flex gap-2">
                <RangeCalendarPrevButton :prev-page="(date: DateValue) => pagingFunc(date, -1)" double />
                <RangeCalendarPrevButton />
            </div>
            <RangeCalendarHeading />
            <div class="flex gap-2">
                <RangeCalendarNextButton />
                <RangeCalendarNextButton :next-page="(date: DateValue) => pagingFunc(date, 1)" double />
            </div>
        </RangeCalendarHeader>

        <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
            <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()">
                <RangeCalendarGridHead>
                    <RangeCalendarGridRow>
                        <RangeCalendarHeadCell v-for="day in weekDays" :key="day">
                            {{ day }}
                        </RangeCalendarHeadCell>
                    </RangeCalendarGridRow>
                </RangeCalendarGridHead>
                <RangeCalendarGridBody>
                    <RangeCalendarGridRow
                        v-for="(weekDates, index) in month.rows"
                        :key="`weekDate-${index}`"
                        class="mt-2 w-full"
                    >
                        <RangeCalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                            <RangeCalendarCellTrigger :day="weekDate" :month="month.value" />
                        </RangeCalendarCell>
                    </RangeCalendarGridRow>
                </RangeCalendarGridBody>
            </RangeCalendarGrid>
        </div>
    </RangeCalendarRoot>
</template>
