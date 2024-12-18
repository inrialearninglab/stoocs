<script lang="ts" setup>
import { Users, Cog, List } from 'lucide-vue-next';
import { BentoGrid, BentoGridItem } from '~/components/inspira/bento';

const items = [
    {
        title: 'nav.moocs.title',
        description: 'nav.moocs.description',
        image: '/hero/moocs-dark.png',
        href: '/moocs',
        icon: List,
        class: 'md:col-span-2',
    },
    {
        title: 'nav.settings.title',
        description: 'nav.settings.description',
        image: '/hero/settings-dark.png',
        href: '/settings/profile',
        icon: Cog,
        class: '',
    },
];

const ILLItems = [
    {
        title: 'nav.team.title',
        description: 'nav.team.description',
        image: '/hero/users-dark.png',
        href: '/users',
        icon: Users,
        class: '',
    },
];
const user = useUser();

if (user?.value?.rolename === 'ILL') items.push(...ILLItems);
</script>

<template>
    <BentoGrid class="max-w-4xl mx-auto">
        <BentoGridItem
            v-for="(item, index) in items"
            :key="index"
            class="z-10 justify-center text-center bg-card"
            :class="item.class"
            :href="item.href"
        >
            <template #title>
                <h2>{{ $t(item.title) }}</h2>
            </template>

            <template #icon>
                <component :is="item.icon" class="size-12" />
            </template>

            <template #description>
                <p class="text-lg">{{ $t(item.description) }}</p>
            </template>
        </BentoGridItem>
    </BentoGrid>
</template>
