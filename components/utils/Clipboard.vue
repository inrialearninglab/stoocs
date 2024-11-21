<script setup lang="ts">
import { Copy, Check } from 'lucide-vue-next';

const icon = ref(Copy);

const emits = defineEmits<{
    (e: 'copied'): void;
}>();

async function copy() {
    icon.value = Check;
    setTimeout(() => (icon.value = Copy), 2000);
    emits('copied');
}
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button variant="outline" size="icon" @click="copy">
                    <component :is="icon" class="size-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Copier</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
