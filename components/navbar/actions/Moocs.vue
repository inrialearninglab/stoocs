<script setup lang="ts">
import Refresh from '~/components/utils/Refresh.vue';
import { useMoocs } from '~/stores/moocs.store';

const refresh = ref<InstanceType<typeof Refresh>>();
const moocsStore = useMoocs();

async function handleRefresh() {
    if (!refresh.value) return;

    refresh.value.onStartLoad();
    await moocsStore.fetchMoocs();
    refresh.value.onEndLoad();
}
</script>

<template>
    <div class="flex gap-3 items-center">
        <Refresh ref="refresh" @refresh="handleRefresh" />
    </div>
</template>
