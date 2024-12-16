<script setup lang="ts">
import { useMoocs } from '~/stores/moocs.store';
import { Search } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard',
});

const moocsStore = useMoocs();
const user = useUser();
const searchInput: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
    document.addEventListener('keydown', (e) => {
        const { key, metaKey } = e;
        if (key === 'k' && metaKey) {
            searchInput.value?.focus();
        }
    });
});
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex justify-between">
            <div class="space-y-2">
                <h1>MOOCs</h1>
                <p class="text-muted-foreground">Liste des MOOCs sur FUN</p>
            </div>
            <NavbarActionsMoocs />
        </div>

        <div class="flex justify-between gap-2 items-center">
            <div class="relative w-full max-w-sm items-center">
                <Input
                    ref="searchInput"
                    id="search"
                    v-model="moocsStore.search"
                    placeholder="Chercher un MOOC..."
                    class="pl-8 bg-card"
                />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Search class="size-5 text-muted-foreground" />
                </span>

                <kbd
                    class="pointer-events-none border-border min-h-5 absolute right-2 top-2 hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex"
                >
                    <!--[--><span class="text-sm">⌘</span>K<!--]-->
                </kbd>
            </div>

            <CiTrigger v-if="user?.rolename === 'ILL'" />
        </div>

        <p v-if="user?.rolename !== 'ILL' && !user?.moocSessions.length" class="text-lg text-center">
            Votre compte n'a accès à aucune session.
        </p>

        <div class="flex flex-col gap-5">
            <div v-if="moocsStore.pinnedMoocs.length" class="flex flex-col gap-3">
                <h2>Favoris</h2>
                <MoocList :moocs="moocsStore.pinnedMoocs" :pinned="true" />
            </div>

            <div class="flex flex-col gap-3">
                <h2 v-if="moocsStore.pinnedMoocs.length">Autres MOOCs</h2>
                <MoocList :moocs="moocsStore.unpinnedMoocs" />
            </div>
        </div>
    </div>
</template>
