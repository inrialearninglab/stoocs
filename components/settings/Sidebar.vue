<script setup lang="ts">
import type { TabChild, TabChildInfo } from '~/types/navigation.type';
import { UserPen } from 'lucide-vue-next';

const tabs = [
    {
        label: 'Profil',
        icon: UserPen,
        to: 'profile',
    },
];
</script>

<template>
    <nav class="max-w-[14rem] w-full">
        <ul class="space-y-2">
            <li v-for="tab in tabs" :key="tab.to">
                <NuxtLink
                    :to="tab.to"
                    class="flex gap-2 items-center hover:bg-primary rounded-md px-3 py-1.5 transition active:scale-[0.98]"
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
    @apply bg-primary text-primary-foreground;
}
</style>
