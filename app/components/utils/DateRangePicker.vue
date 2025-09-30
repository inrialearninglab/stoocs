<script setup lang="ts">
import { buttonVariants, type ButtonVariants } from '~/components/ui/button';

import { cn } from '~/lib/utils';
import { CalendarDate, type DateValue, isEqualMonth, parseDate } from '@internationalized/date';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';
import { type DateRange, RangeCalendarRoot, useDateFormatter } from 'radix-vue';
import { createMonth, type Grid, toDate } from 'radix-vue/date';
import { type Ref, ref, watch } from 'vue';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
    modelValue: {
        start: DateValue;
        end: DateValue;
    };
    maxDate: DateValue;
    minDate: DateValue;
    presets?: {
        value: string;
        label: string;
    }[];
    size?: ButtonVariants['size'];
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: { start: DateValue; end: DateValue }): void;
}>();

const value = useVModel(props, 'modelValue', emits);

const locale = ref('fr-FR');
const formatter = useDateFormatter(locale.value);

const placeholder = ref(value.value.start) as Ref<DateValue>;
const secondMonthPlaceholder = ref(value.value.end) as Ref<DateValue>;

const firstMonth = ref(
    createMonth({
        dateObj: placeholder.value,
        locale: locale.value,
        fixedWeeks: true,
        weekStartsOn: 0,
    }),
) as Ref<Grid<DateValue>>;
const secondMonth = ref(
    createMonth({
        dateObj: secondMonthPlaceholder.value,
        locale: locale.value,
        fixedWeeks: true,
        weekStartsOn: 0,
    }),
) as Ref<Grid<DateValue>>;

function updateMonth(reference: 'first' | 'second', months: number) {
    if (reference === 'first') {
        placeholder.value = placeholder.value.add({ months });
    } else {
        secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
            months,
        });
    }
}

function updateYear(reference: 'first' | 'second', years: number) {
    if (reference === 'first') {
        placeholder.value = placeholder.value.add({ years });
    } else {
        secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
            years,
        });
    }
}

watch(placeholder, (_placeholder) => {
    firstMonth.value = createMonth({
        dateObj: _placeholder,
        weekStartsOn: 0,
        fixedWeeks: false,
        locale: locale.value,
    });
    if (isEqualMonth(secondMonthPlaceholder.value, _placeholder)) {
        secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
            months: 1,
        });
    }
});

watch(secondMonthPlaceholder, (_secondMonthPlaceholder) => {
    secondMonth.value = createMonth({
        dateObj: _secondMonthPlaceholder,
        weekStartsOn: 0,
        fixedWeeks: false,
        locale: locale.value,
    });
    if (isEqualMonth(_secondMonthPlaceholder, placeholder.value))
        placeholder.value = placeholder.value.subtract({ months: 1 });
});

const open = ref(false);

function getPresetValue(value: string) {
    switch (value) {
        case 'week':
            return { start: props.maxDate.subtract({ weeks: 1 }), end: props.maxDate };
        case 'month':
            return { start: props.maxDate.subtract({ months: 1 }), end: props.maxDate };
        case 'year':
            return { start: props.maxDate.subtract({ years: 1 }), end: props.maxDate };
        case '2024':
            return {
                start: parseDate('2024-01-01'),
                end: parseDate('2024-12-31'),
            };
        default:
            return { start: parseDate(value), end: props.maxDate };
    }
}

const presets = [
    { value: 'week', label: 'La dernière semaine' },
    { value: 'month', label: 'Le dernier mois' },
    { value: 'year', label: 'La dernière année' },
    ...(props.presets ?? []),
];

function onModalOpen(isOpen: boolean) {
    if (isOpen) secondMonthPlaceholder.value = value.value.end;
}
</script>

<template>
    <Popover v-model:open="open" @update:open="onModalOpen">
        <PopoverTrigger as-child>
            <Button
                variant="secondary"
                :class="
                    cn('min-w-[350px] w-fit justify-start text-left font-normal', !value && 'text-muted-foreground')
                "
            >
                <CalendarIcon class="mr-2 h-4 w-4" />
                <template v-if="value.start">
                    <template v-if="value.end">
                        {{
                            formatter.custom(toDate(value.start), {
                                dateStyle: 'long',
                            })
                        }}
                        -
                        {{
                            formatter.custom(toDate(value.end), {
                                dateStyle: 'long',
                            })
                        }}
                    </template>

                    <template v-else>
                        {{
                            formatter.custom(toDate(value.start), {
                                dateStyle: 'medium',
                            })
                        }}
                    </template>
                </template>
                <template v-else> Choisir une date </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-3">
            <Select
                @update:model-value="
                    (v) => {
                        if (!v) return;
                        value = getPresetValue(v);
                        open = false;
                    }
                "
            >
                <SelectTrigger>
                    <SelectValue placeholder="Choisir" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem v-for="item in presets" :key="item.value" :value="item.value.toString()">
                        {{ item.label }}
                    </SelectItem>
                </SelectContent>
            </Select>

            <RangeCalendarRoot
                v-slot="{ weekDays }"
                v-model="value"
                v-model:placeholder="placeholder"
                :max-value="maxDate"
                :min-value="minDate"
            >
                <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-1">
                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateYear('first', -1)"
                                >
                                    <ChevronsLeft class="h-4 w-4" />
                                </button>

                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateMonth('first', -1)"
                                >
                                    <ChevronLeft class="h-4 w-4" />
                                </button>
                            </div>

                            <div :class="cn('text-sm font-medium')">
                                {{ formatter.fullMonthAndYear(toDate(firstMonth.value)) }}
                            </div>

                            <div class="flex gap-1">
                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateMonth('first', 1)"
                                >
                                    <ChevronRight class="h-4 w-4" />
                                </button>

                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateYear('first', 1)"
                                >
                                    <ChevronsRight class="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <RangeCalendarGrid>
                            <RangeCalendarGridHead>
                                <RangeCalendarGridRow>
                                    <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full">
                                        {{ day }}
                                    </RangeCalendarHeadCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridHead>
                            <RangeCalendarGridBody>
                                <RangeCalendarGridRow
                                    v-for="(weekDates, index) in firstMonth.rows"
                                    :key="`weekDate-${index}`"
                                    class="mt-2 w-full"
                                >
                                    <RangeCalendarCell
                                        v-for="weekDate in weekDates"
                                        :key="weekDate.toString()"
                                        :date="weekDate"
                                    >
                                        <RangeCalendarCellTrigger :day="weekDate" :month="firstMonth.value" />
                                    </RangeCalendarCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridBody>
                        </RangeCalendarGrid>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-1">
                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateYear('second', -1)"
                                >
                                    <ChevronsLeft class="h-4 w-4" />
                                </button>
                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateMonth('second', -1)"
                                >
                                    <ChevronLeft class="h-4 w-4" />
                                </button>
                            </div>

                            <div :class="cn('text-sm font-medium')">
                                {{ formatter.fullMonthAndYear(toDate(secondMonth.value)) }}
                            </div>

                            <div class="flex gap-1">
                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateMonth('second', 1)"
                                >
                                    <ChevronRight class="h-4 w-4" />
                                </button>

                                <button
                                    :class="
                                        cn(
                                            buttonVariants({ variant: 'outline' }),
                                            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                                        )
                                    "
                                    @click="updateYear('second', 1)"
                                >
                                    <ChevronsRight class="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <RangeCalendarGrid>
                            <RangeCalendarGridHead>
                                <RangeCalendarGridRow>
                                    <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full">
                                        {{ day }}
                                    </RangeCalendarHeadCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridHead>
                            <RangeCalendarGridBody>
                                <RangeCalendarGridRow
                                    v-for="(weekDates, index) in secondMonth.rows"
                                    :key="`weekDate-${index}`"
                                    class="mt-2 w-full"
                                >
                                    <RangeCalendarCell
                                        v-for="weekDate in weekDates"
                                        :key="weekDate.toString()"
                                        :date="weekDate"
                                    >
                                        <RangeCalendarCellTrigger :day="weekDate" :month="secondMonth.value" />
                                    </RangeCalendarCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridBody>
                        </RangeCalendarGrid>
                    </div>
                </div>
            </RangeCalendarRoot>
        </PopoverContent>
    </Popover>
</template>
