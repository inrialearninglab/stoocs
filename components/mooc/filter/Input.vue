<script setup lang="ts">
import { PlusCircleIcon, CheckIcon } from 'lucide-vue-next';
import { useVModel } from '@vueuse/core';
import { cn } from '~/lib/utils';

interface Option {
    label: string;
    value: string;
}

const props = defineProps<{
    label: string;
    options: Option[];
    modelValue: Set<string>;
    isStatus?: boolean;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: Set<string>): void;
}>();

const selected = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: new Set(),
});

function selectItem(option: Option) {
    const isSelected = selected.value.has(option.value);

    if (isSelected) {
        selected.value.delete(option.value);
    } else {
        selected.value.add(option.value);
    }
}

function filterFunction(list: Option[], term: string): Option[] {
    return list.filter((item) => item.label.toLowerCase().includes(term.toLowerCase()));
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline" class="border-dashed">
                <PlusCircleIcon class="size-4 mr-2" />
                {{ label }}

                <template v-if="selected.size > 0">
                    <Separator orientation="vertical" class="mx-2 h-4" />

                    <Badge class="rounded-sm px-2 font-normal">
                        {{ selected.size }}
                    </Badge>
                </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="p-0 w-auto">
            <!-- @vue-ignore -->
            <Command :filter-function="filterFunction">
                <CommandInput :placeholder="label" />
                <CommandList>
                    <CommandEmpty>Pas de résultats.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem
                            v-for="option of options"
                            :value="option"
                            @select="selectItem(option)"
                            class="data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground"
                        >
                            <div
                                :class="
                                    cn(
                                        'mr-2 flex size-4 items-center justify-center rounded border border-primary',
                                        selected.has(option.value)
                                            ? 'bg-primary text-primary-foreground'
                                            : 'opacity-50 [&_svg]:invisible',
                                    )
                                "
                            >
                                <CheckIcon class="size-4" />
                            </div>

                            <MoocStatusBadge v-if="isStatus" :status="option.value as 'open' | 'closed' | 'archived'" />
                            <template v-else>
                                {{ option.label }}
                            </template>
                        </CommandItem>
                    </CommandGroup>

                    <template v-if="selected.size > 0">
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem
                                :value="{ label: 'Clear filters' }"
                                class="justify-center text-center data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground"
                                @select="selected.clear()"
                            >
                                Retirer les filtres
                            </CommandItem>
                        </CommandGroup>
                    </template>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>
