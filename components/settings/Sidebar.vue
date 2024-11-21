<script setup lang="ts">
import type { TabChild, TabChildInfo } from '~/types/navigation.type';

defineProps<{
    tabs: Record<TabChild, TabChildInfo>;
    activeTab: TabChild;
}>();
</script>

<template>
    <nav class="max-w-[14rem] w-full">
        <ul class="space-y-2">
            <li v-for="tab in tabs" :key="tab.to">
                <NuxtLink
                    :to="tab.to"
                    class="flex gap-2 items-center hover:bg-accent rounded-md px-3 py-1.5 transition active:scale-[0.98]"
                >
                    <component :is="tab.icon" class="size-4" />
                    {{ tab.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.router-link-active {
    @apply bg-muted text-foreground;
}
</style>
