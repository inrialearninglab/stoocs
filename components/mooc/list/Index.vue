<script setup lang="ts">
import { columns } from './columns';

const moocsStore = useMoocs();
</script>

<template>
    <DataTable :columns="columns" :data="moocsStore.sessions" enable-filtering border>
        <template #filters="{ table }">
            <MoocFilter :table="table" />
        </template>
    </DataTable>
</template>
