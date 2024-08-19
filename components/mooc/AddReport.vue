<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next';

const emits = defineEmits<{
    (e: 'open-enrollments'): void;
    (e: 'open-grades'): void;
    (e: 'open-all'): void;
}>();

</script>

<template>
   <DropdownMenu>
       <DropdownMenuTrigger as-child>
           <Button variant="outline" class="flex items-center gap-2">
               <CirclePlus class="size-5" />
               Ajouter des données
           </Button>
       </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem @click="emits('open-enrollments')" class="cursor-pointer">
                Rapport d'inscription
            </DropdownMenuItem>

            <DropdownMenuItem @click="emits('open-grades')" class="cursor-pointer">
                Rapports de notes
            </DropdownMenuItem>

            <DropdownMenuItem @click="emits('open-all')" class="cursor-pointer">
                Tous les rapports
            </DropdownMenuItem>
        </DropdownMenuContent>
   </DropdownMenu>
</template>