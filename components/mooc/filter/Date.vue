<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next';
import type { DateValue } from '@internationalized/date';
import { useVModels } from '@vueuse/core';

const props = defineProps<{
    label: string;
    from?: DateValue;
    to?: DateValue;
}>();

const emits = defineEmits<{
    (e: 'update:from', value: DateValue): void;
    (e: 'update:to', value: DateValue): void;
}>();

const { from, to } = useVModels(props, emits);

const open = ref(false);
function reset() {
    from.value = undefined;
    to.value = undefined;
    open.value = false;
}

const conditions = computed(() => [to, from].filter((v) => v.value !== undefined).length);
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <Button variant="outline" class="border-dashed flex gap-2">
                <CalendarIcon class="size-4" />
                {{ label }}
                <template v-if="conditions">
                    <!-- @vue-expect-error  -->
                    : {{ from ? formatDate(new Date(from)) : '' }} - {{ to ? formatDate(new Date(to)) : '' }}
                    <Separator orientation="vertical" class="h-4" />
                    <Badge class="px-2 rounded-sm">{{ conditions }}</Badge>
                </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="space-y-4">
            <div class="flex items-center gap-1">
                Après le :
                <UtilsDatePicker v-model="from" />
            </div>
            <div class="flex items-center gap-1">
                Avant le :
                <UtilsDatePicker v-model="to" />
            </div>
            <div v-if="to || from" class="space-y-2">
                <Separator />
                <Button variant="ghost" @click="reset()" class="w-full"> Retirer les filtres </Button>
            </div>
        </PopoverContent>
    </Popover>
</template>
