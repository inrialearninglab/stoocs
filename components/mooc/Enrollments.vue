<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line'
import { useMooc } from '~/stores/mooc.store';

const moocStore = useMooc();
moocStore.fetchMooc();

</script>

<template>
    <LineChart
        v-if="moocStore.mooc"
        :data="moocStore.mooc.enrollments"
        index="date"
        :categories="['enrollments']"
    />
</template>
