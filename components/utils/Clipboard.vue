<script setup lang="ts">
import { Clipboard, Check } from 'lucide-vue-next';

const icon = ref(Clipboard);

const emits = defineEmits<{
    (e: 'copied'): void;
}>();

async function copy() {
    icon.value = Check;
    setTimeout(() => icon.value = Clipboard, 2000);
    emits('copied');
}

</script>

<template>
    <Button variant="outline" size="icon" @click="copy">
        <component :is="icon" class="size-4" />
    </Button>
</template>