<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';

</script>

<template>
    <Button as-child>
        <NuxtLink to="/auth/register" class="flex items-center gap-2">
            <CirclePlus class="size-4"/>
            Ajouter un membre
        </NuxtLink>
    </Button>
</template>