<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import AddUser from '~/components/layout/AddUser.vue';

interface TabInfo {
    label: string;
    description: string;
    to: string;
    add?: Component
}

type TabState = 'moocs' | 'team' | 'profile';

const tabMap: Record<TabState, TabInfo> = {
    moocs: {
        label: 'Cours',
        description: 'Liste des cours',
        to: '/moocs'
    },
    team: {
        label: 'Équipe',
        description: 'Liste des membres de l\'équipe',
        to: '/users',
        add: AddUser
    },
    profile: {
        label: 'Profil',
        description: 'Mon profil',
        to: '/users/profile'
    }
}

const route = useRoute();

async function onTabChange(tab: TabState) {
    await navigateTo(tabMap[tab].to);
    activeTab.value = tab;
}

function findCurrentTab(path: string): TabState | null {
    const entry = Object.entries(tabMap).find(([, value]) => value.to === path)
    if (!entry) return null;
    return entry[0] as TabState;
}

const activeTab: Ref<TabState | null> = ref(findCurrentTab(route.path));

</script>

<template>
    <div v-if="activeTab">
        <header class="flex justify-between items-center mb-6">
            <div class="flex flex-col gap-2">
                <h1>{{ tabMap[activeTab].label }}</h1>
                <p class="text-muted-foreground">{{ tabMap[activeTab].description }}</p>
            </div >

            <Component v-if="tabMap[activeTab].add" :is="tabMap[activeTab].add" />
        </header>

        <Tabs
            class="flex flex-col gap-8"
            :default-value="activeTab"
            @update:model-value="onTabChange"
        >
            <nav class="flex flex-row items-center justify-between w-full gap-4 max-sm:overflow-x-auto border-b border-b-divider pb-1">
                <TabsList class="bg-transparent relative px-0" as-child>
                    <div>
                        <TabsTrigger
                            v-for="(tab, key) in tabMap"
                            :key="key"
                            :value="key"
                            class="data-[state=active]:bg-none"
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
            <TabsContent :value="activeTab">
                <slot />
            </TabsContent>
        </Tabs>
    </div>
</template>

<style scoped>
    .tab-button {
        @apply hover:bg-accent !important;
    }
</style>