<script setup lang="ts">
import { useMooc } from '~/stores/mooc.store';

const moocStore = useMooc();

if (!moocStore.mooc) moocStore.fetchMooc();
</script>

<template>
   <pre v-if="moocStore.mooc && moocStore.mooc.gradeReport">{{ moocStore.mooc.gradeReport }}</pre>
</template>