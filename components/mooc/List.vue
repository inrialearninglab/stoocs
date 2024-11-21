<script setup lang="ts">
import type { Mooc } from '~/types';

defineProps<{
    moocs: Mooc[];
    pinned?: boolean;
}>();
</script>

<template>
    <div class="flex flex-col gap-5">
        <MoocItem v-for="mooc in moocs" :key="mooc.id" :mooc="mooc" :pinned="pinned" />
    </div>
</template>
