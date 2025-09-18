<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
});

const user = useUser();
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

        <MoocList v-else />
    </div>
</template>
