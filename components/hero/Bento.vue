<script lang="ts" setup>
import { Users, Cog, List } from 'lucide-vue-next';
import { BentoGrid, BentoGridItem } from '~/components/inspira/bento';

const items = [
    {
        title: 'home.bento.moocs.title',
        description: 'home.bento.moocs.description',
        image: '/hero/moocs-dark.png',
        href: '/moocs',
        icon: List,
        class: 'md:col-span-2',
    },
    {
        title: 'home.bento.settings.title',
        description: 'home.bento.settings.description',
        image: '/hero/settings-dark.png',
        href: '/settings/profile',
        icon: Cog,
        class: '',
    },
];

const ILLItems = [
    {
        title: 'home.bento.team.title',
        description: 'home.bento.team.description',
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
