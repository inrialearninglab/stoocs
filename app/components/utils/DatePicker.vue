<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next';
import { type DateValue } from '@internationalized/date';
import { DatePickerContent, DatePickerField, DatePickerInput, DatePickerRoot, DatePickerTrigger } from 'radix-vue';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
    modelValue?: DateValue;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: DateValue): void;
}>();

const value = useVModel(props, 'modelValue', emits);
</script>

<template>
    <DatePickerRoot v-model="value" locale="fr">
        <DatePickerField v-slot="{ segments }" class="flex border rounded-md w-fit gap-2 h-9 p-1 items-center">
            <div class="flex items-center">
                <template v-for="item in segments" :key="item.part">
                    <DatePickerInput v-if="item.part === 'literal'" :part="item.part">
                        {{ item.value }}
                    </DatePickerInput>
                    <DatePickerInput
                        v-else
                        :part="item.part"
                        class="focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary rounded-sm"
                    >
                        {{ item.value }}
                    </DatePickerInput>
                </template>
            </div>

            <DatePickerTrigger as-child>
                <Button variant="ghost" size="xs">
                    <CalendarIcon class="size-4" />
                </Button>
            </DatePickerTrigger>
        </DatePickerField>

        <DatePickerContent
            class="z-50 w-72 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
            <Calendar v-model="value" />
        </DatePickerContent>
    </DatePickerRoot>
</template>
