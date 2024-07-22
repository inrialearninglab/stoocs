<script setup lang="ts">
import { Plus } from 'lucide-vue-next';

const emits = defineEmits<{
    (e: 'open-enrollments'): void;
    (e: 'open-grades'): void;
    (e: 'open-all'): void;
}>();

</script>

<template>
   <DropdownMenu>
       <DropdownMenuTrigger as-child>
           <Button size="icon" variant="outline">
               <Plus />
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