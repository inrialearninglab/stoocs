<script setup lang="ts">
import { Check, RefreshCw } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const emits = defineEmits<{
    (e: 'refresh'): void
}>();

const icon = ref(RefreshCw);
const loading = ref(false);

function onStartLoad() {
    icon.value = RefreshCw;
    loading.value = true;
}

function onEndLoad() {
    loading.value = false;
    icon.value = Check;

    toast.success('Mise à jour effectuée avec succès');

    setTimeout(() => {
        icon.value = RefreshCw;
    }, 1000);
}

defineExpose({
    onStartLoad,
    onEndLoad
})

</script>

<template>
    <Button @click="emits('refresh')" size="icon" variant="outline">
        <component :is="icon" :class="{ 'animate-spin': loading }" />
    </Button>
</template>