<script lang="ts" setup>
import { Users, Cog, List } from "lucide-vue-next";
import { BentoGrid, BentoGridItem } from "~/components/inspira/bento";

const items = [
    {
        title: "Moocs",
        description: "Voir la liste des moocs",
        image: "/hero/moocs-dark.png",
        href: "/moocs",
        icon: List,
        class: "md:col-span-2"
    },
    {
        title: "Paramètres",
        description: "Accéder aux paramètres de l'application",
        image: "/hero/settings-dark.png",
        href: "/settings/profile",
        icon: Cog,
        class: "",
    },
];

const ILLItems = [
    {
        title: "Equipe",
        description: "Administrer les membres de l'équipe",
        image: "/hero/users-dark.png",
        href: "/users",
        icon: Users,
        class: "",
    },
]
const user = useUser();

if (user?.value?.rolename === 'ILL') items.push(...ILLItems);
</script>

<template>
    <BentoGrid class="max-w-4xl mx-auto">
        <BentoGridItem
            v-for="(item, index) in items"
            :key="index"
            class="z-10 justify-center text-center"
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
