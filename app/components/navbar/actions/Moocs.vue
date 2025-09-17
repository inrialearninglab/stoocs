<script setup lang="ts">
import { DatabaseBackup } from 'lucide-vue-next';
import Refresh from '~/components/utils/Refresh.vue';
import { useMoocs } from '~/stores/moocs.store';

const moocsStore = useMoocs();
const user = useUser();

const refresh = ref<InstanceType<typeof Refresh>>();

async function handleRefresh() {
    if (!refresh.value) return;

    refresh.value.onStartLoad();
    await moocsStore.fetchMoocs();
    refresh.value.onEndLoad();
}
</script>

<template>
    <div class="flex gap-3 items-center">
        <Button as-child v-if="user?.rolename === 'ILL'">
            <NuxtLink to="moocs/changes">
                <DatabaseBackup class="mr-2" />
                Mettre à jour la liste des MOOCs
            </NuxtLink>
        </Button>
        <Refresh ref="refresh" @refresh="handleRefresh" />
    </div>
</template>
