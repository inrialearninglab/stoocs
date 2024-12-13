<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';
import { ref, watch } from 'vue';

const open = ref(false);

const { Meta_J, Ctrl_J } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) e.preventDefault();
    },
});

watch([Meta_J, Ctrl_J], (v) => {
    if (v[0] || v[1]) handleOpenChange();
});

function handleOpenChange() {
    open.value = !open.value;
}

async function navigate(route: string) {
    await navigateTo(route);
    open.value = false;
}

const moocsStore = useMoocs();
</script>

<template>
    <div>
        <Button variant="outline" class="flex gap-3" @click="handleOpenChange">
            <small class="text-muted-foreground"> Aller à... </small>
            <kbd
                class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
            >
                <span class="text-xs">⌘</span>J
            </kbd>
        </Button>
        <CommandDialog v-model:open="open">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>Aucun résultat</CommandEmpty>
                <CommandGroup heading="Pages">
                    <CommandItem value="moocs" @click="navigate('/moocs')"> MOOCs </CommandItem>
                    <CommandItem value="équipe" @click="navigate('/users')"> Équipe </CommandItem>
                    <CommandItem value="paramètre" @click="navigate('/settings/profile')"> Paramètres</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Sessions">
                    <CommandItem v-for="mooc of moocsStore.moocs" :value="mooc.title">{{ mooc.title }}</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    </div>
</template>
