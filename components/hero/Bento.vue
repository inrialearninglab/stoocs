<script lang="ts" setup>
import { Users, Cog, List, BookOpen } from 'lucide-vue-next';
import { BentoGrid, BentoGridItem } from '~/components/inspira/bento';

const items = [
    {
        title: 'Moocs',
        description: 'Voir la liste des moocs',
        href: '/moocs',
        icon: List,
        class: 'md:col-span-2',
    },
    {
        title: 'Paramètres',
        description: "Accéder aux paramètres de l'application",
        href: '/settings/profile',
        icon: Cog,
        class: '',
    },
];

const ILLItems = [
    {
        title: 'Equipe',
        description: "Administrer les membres de l'équipe",
        href: '/users',
        icon: Users,
        class: '',
    },
    {
        title: 'Documentation',
        description: 'Consulter la documentation',
        href: 'https://docs-stoocs.nathan-viaud.xyz/user/add',
        icon: BookOpen,
        class: 'md:col-span-2',
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
                <h2>{{ item.title }}</h2>
            </template>

            <template #icon>
                <component :is="item.icon" class="size-12" />
            </template>

            <template #description>
                <p class="text-lg">{{ item.description }}</p>
            </template>
        </BentoGridItem>
    </BentoGrid>
</template>
