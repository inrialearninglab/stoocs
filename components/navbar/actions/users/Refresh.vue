<script setup lang="ts">
import { useUsers } from '~/stores/users.store';
import Refresh from '~/components/utils/Refresh.vue';

const usersStore = useUsers();
const refresh = ref<InstanceType<typeof Refresh>>();

async function handleRefresh() {
    if (!refresh.value) return;

    refresh.value.onStartLoad();
    await usersStore.fetchUsers();
    refresh.value.onEndLoad();
}
</script>

<template>
    <Refresh ref="refresh" @refresh="handleRefresh" />
</template>
