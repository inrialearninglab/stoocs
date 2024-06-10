<script setup lang="ts">
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { Calendar } from '~/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { useVModel } from '@vueuse/core';

const df = new DateFormatter('fr-FR', {
    dateStyle: 'long',
})

const props = defineProps<{
    modelValue: DateValue
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: DateValue): void
}>();

const value = useVModel(props, 'modelValue', emits);
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                :class="cn(
                'w-[280px] justify-start text-left font-normal',
                !value && 'text-muted-foreground'
            )"
            >
                <CalendarIcon class="mr-2 size-4" />
                {{ value ? df.format(value.toDate(getLocalTimeZone())) : 'Choisissez une date' }}
            </Button>
        </PopoverTrigger>

        <PopoverContent class="w-auto p-0">
            <Calendar v-model="value" initial-focus/>
        </PopoverContent>
    </Popover>
</template>