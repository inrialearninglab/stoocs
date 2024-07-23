<script setup lang="ts">
import { useMoocs } from '~/stores/moocs.store';
import { Search } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard'
});

const moocsStore = useMoocs()

</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="relative w-full max-w-sm items-center">
            <Input id="search" v-model="moocsStore.search" placeholder="Chercher un mooc..." class="pl-8"/>
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Search class="size-5 text-muted-foreground" />
            </span>
        </div>

        <div class="flex flex-col gap-5">
            <div v-if="moocsStore.pinnedMoocs.length" class="flex flex-col gap-3">
                <h2>Epinglés</h2>
                <MoocList :moocs="moocsStore.pinnedMoocs" :pinned="true" />
            </div>

            <div class="flex flex-col gap-3">
                <h2>Autres moocs</h2>
                <MoocList :moocs="moocsStore.unpinnedMoocs" />
            </div>
        </div>
    </div>
</template>