<script setup lang="ts">
import { useMoocs } from '~/stores/moocs.store';

const moocsStore = useMoocs()

onMounted(() => {
    if (!moocsStore.moocs.length) moocsStore.getMoocs();
})
</script>

<template>
    <div>
        <MoocList :moocs="moocsStore.moocs" />
    </div>
</template>