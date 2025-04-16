<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';
import { ref, watch } from 'vue';
import { Circle, FileText } from 'lucide-vue-next';

defineProps<{
    pages: {
        label: string;
        path: string;
        restricted?: boolean;
    }[];
}>();

const open = ref(false);

const { Meta_K, Ctrl_K } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault();
    },
});

watch([Meta_K, Ctrl_K], (v) => {
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
                <span class="text-xs">⌘</span>K
            </kbd>
        </Button>
        <CommandDialog v-model:open="open">
            <CommandInput placeholder="Chercher une page..." />
            <CommandList>
                <CommandEmpty>Aucun résultat</CommandEmpty>
                <CommandGroup heading="Pages">
                    <CommandItem v-for="page of pages" :value="page.label" @click="navigate(page.path)">
                        <Circle class="mr-2 size-4" /> {{ page.label }}
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Sessions">
                    <CommandItem
                        v-for="mooc of moocsStore.moocs"
                        :value="mooc.title"
                        @click="navigate(`/moocs/${mooc.id}`)"
                    >
                        <FileText class="mr-2 size-4" /> {{ mooc.title }}
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    </div>
</template>
