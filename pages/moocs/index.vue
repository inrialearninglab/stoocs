<script setup lang="ts">
import { useMoocs } from '~/stores/moocs.store';
import { Search } from 'lucide-vue-next';

definePageMeta({
    layout: 'dashboard',
});

const moocsStore = useMoocs();
const user = useUser();
const searchInput: Ref<HTMLInputElement | null> = ref(null);
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

        <p v-if="user?.rolename !== 'ILL' && !user?.moocSessions.length" class="text-lg text-center">
            Votre compte n'a accès à aucune session.
        </p>

        <MoocNewList v-else />
    </div>
</template>
