<script setup lang="ts">
import { Ellipsis } from 'lucide-vue-next';
import { Button } from '~/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '~/components/ui/dropdown-menu';
import { PencilLine, PencilOff, Flag } from 'lucide-vue-next';
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost">
                <Ellipsis />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <PencilLine />
                    <span> Marquer comme modifiée</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <PencilOff />
                    <span> Marquer comme traitée</span>
                </DropdownMenuItem>

                <DropdownMenuItem destructive>
                    <Flag />
                    <span> Marquer comme corrompues</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
