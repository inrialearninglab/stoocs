<script setup lang="ts">
import type { Mooc } from '~/types';

defineProps<{
    moocs: Mooc[]
}>();

</script>

<template>
    <div class="flex flex-col gap-5">
        <MoocItem v-for="mooc in moocs" :key="mooc.id" :mooc="mooc" />
    </div>
</template>