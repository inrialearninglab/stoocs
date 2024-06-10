<script setup lang="ts">
import { DateFormatter, type DateValue, getLocalTimeZone, today } from '@internationalized/date';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { Calendar } from '~/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Button, type ButtonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { useVModel } from '@vueuse/core';
import { Select, SelectContent, SelectValue } from '~/components/ui/select';

const df = new DateFormatter('fr-FR', {
    dateStyle: 'long',
})

const props = defineProps<{
    modelValue: DateValue;
    size?: ButtonVariants['size']
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: DateValue): void
}>();

const value = useVModel(props, 'modelValue', emits);

function getPresetValue(value: string) {
    switch (value) {
        case 'week':
            return today(getLocalTimeZone()).subtract({ weeks: 1})
        case 'month':
            return today(getLocalTimeZone()).subtract({ months: 1})
        case 'year':
            return today(getLocalTimeZone()).subtract({ years: 1})
        default:
            return today(getLocalTimeZone())
    }
}

const presets = [
    { value: 'week', label: 'La semaine dernière' },
    { value: 'month', label: 'Le mois dernier' },
    { value: 'year', label: 'La dernière année' },
]
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                :size="size"
                variant="outline"
                :class="cn(
                'w-[250px] justify-start text-left font-normal',
                !value && 'text-muted-foreground'
            )"
            >
                <CalendarIcon class="mr-2 size-4" />
                {{ value ? df.format(value.toDate(getLocalTimeZone())) : 'Choisissez une date' }}
            </Button>
        </PopoverTrigger>

        <PopoverContent class="flex w-auto flex-col gap-y-2 p-2">
            <Select
                @update:model-value="(v) => {
                    if (!v) return;
                    value = getPresetValue(v)
                }"
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

            <Calendar v-model="value" initial-focus/>
        </PopoverContent>
    </Popover>
</template>