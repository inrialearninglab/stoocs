<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import UserActions from '~/components/navbar/actions/users/Index.vue';
import MoocActions from '~/components/navbar/actions/Moocs.vue';
import type { TabInfo, TabState, TabChild, TabChildInfo } from '~/types/navigation.type';
import type { Ref } from 'vue';
import { Palette, UserPen } from 'lucide-vue-next';

const user = useUser();

const tabMap: Record<TabState, TabInfo> = {
    moocs: {
        label: 'MOOCs',
        description: 'Liste des MOOCs sur FUN',
        to: '/moocs',
        actions: MoocActions,
    },
    team: {
        label: 'Équipe',
        description: "Liste des membres de l'équipe",
        to: '/users',
        actions: UserActions,
    },
    settings: {
        label: 'Paramètres',
        description: 'Gérer vos paramètres',
        to: '/settings/profile',
        children: {
            profile: {
                label: 'Profil',
                description: 'Mon profil',
                to: '/settings/profile',
                icon: UserPen,
            },
        },
    },
};

if (user.value?.rolename === 'Guest') {
    // @ts-expect-error
    delete tabMap.team;
}

const route = useRoute();

async function onTabChange(tab: TabState) {
    await navigateTo(tabMap[tab].to);
}

function findCurrentTab(path: string): TabState | undefined {
    const entry = Object.entries(tabMap).find(([, value]) => {
        if (value.to === path) {
            return true;
        }
        if (value.children) {
            return Object.values(value.children).find((child) => child.to === path);
        }
    });

    if (!entry) return undefined;
    return entry[0] as TabState;
}

const activeTab: Ref<TabState | undefined> = ref(findCurrentTab(route.path));
const modelValue = computed(() => activeTab.value);

watch(
    () => route.path,
    () => {
        activeTab.value = findCurrentTab(route.path);
    },
);
</script>

<template>
    <div v-if="activeTab">
        <header class="flex justify-between items-center mb-6">
            <div class="flex flex-col gap-2">
                <h1>{{ tabMap[activeTab].label }}</h1>
                <p class="text-muted-foreground">{{ tabMap[activeTab].description }}</p>
            </div>

            <Component v-if="tabMap[activeTab].actions" :is="tabMap[activeTab].actions" />
        </header>

        <Tabs class="flex flex-col gap-8" v-model="modelValue" @update:model-value="onTabChange">
            <nav
                class="flex flex-row items-center justify-between w-full gap-4 max-sm:overflow-x-auto border-b border-b-divider pb-1"
            >
                <TabsList class="bg-transparent relative px-0" as-child>
                    <div>
                        <TabsTrigger
                            v-for="(tab, key) in tabMap"
                            :key="key"
                            :value="key"
                            class="data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            as-child
                        >
                            <Button variant="ghost" class="relative tab-button text-md font-medium px-5 py-2.5">
                                <span>{{ tab.label }}</span>
                                <div v-if="key === activeTab" class="absolute -bottom-[5.5px] w-full">
                                    <div class="h-0.5 bg-foreground rounded-t-md" />
                                </div>
                            </Button>
                        </TabsTrigger>
                    </div>
                </TabsList>
            </nav>
            <TabsContent v-if="modelValue" :value="modelValue">
                <div class="flex gap-8">
                    <SettingsSidebar
                        v-if="tabMap[activeTab].children"
                        :tabs="tabMap[activeTab].children as Record<TabChild, TabChildInfo>"
                        :activeTab="activeTab as TabChild"
                    />
                    <div class="flex-1">
                        <slot />
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    </div>
</template>

<style scoped>
.tab-button {
    @apply hover:bg-secondary/90 !important;
}
</style>
