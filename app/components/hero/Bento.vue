<script lang="ts" setup>
import { Users, Cog, List, BookOpen, ChartLine } from 'lucide-vue-next';
import { BentoGrid, BentoGridItem } from '~/components/inspira/bento';

type Item = {
    title: string;
    description: string;
    href: string;
    icon: any;
    class: string;
    target?: string;
};

const items: Item[] = [
    {
        title: 'Moocs',
        description: 'Voir la liste des moocs',
        href: '/moocs',
        icon: List,
        class: 'md:col-span-2',
    },
    {
        title: 'Tableau de bord',
        description: 'Accéder au tableau de bord global',
        href: '/dashboard',
        icon: ChartLine,
        class: 'md:col-span-1',
    },
    {
        title: 'Paramètres',
        description: "Accéder aux paramètres de l'application",
        href: '/settings/profile',
        icon: Cog,
        class: '',
    },
];

const illItems: Item[] = [
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
        href: 'https://inrialearninglab.github.io/stoocs-docs/',
        target: '_blank',
        icon: BookOpen,
        class: 'md:col-span-1',
    },
];
const user = useUser();

if (user?.value?.rolename === 'ILL') items.push(...illItems);
</script>

<template>
    <BentoGrid class="max-w-4xl mx-auto">
        <BentoGridItem
            v-for="(item, index) in items"
            :key="index"
            class="z-10 justify-center text-center bg-card"
            :class="item.class"
            :href="item.href"
            :target="item.target"
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
