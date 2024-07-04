<script setup lang="ts">
import { User, LogOut } from 'lucide-vue-next';
import { logout } from '~/services/auth.service';

const user = useUser();

async function handleLogout() {
    await logout();
    await navigateTo('/login');
    user.value = null;
}
</script>

<template>
   <DropdownMenu v-if="user">
       <DropdownMenuTrigger as-child>
           <Button size="icon" variant="ghost">
              <User />
           </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent class="w-56">
           <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
           <DropdownMenuSeparator />
           <DropdownMenuItem as-child>
               <NuxtLink to="/profile">
                   <User class="size-4 mr-2" />
                   <span>Profil</span>
               </NuxtLink>
           </DropdownMenuItem>
           <DropdownMenuItem @click="handleLogout">
               <LogOut class="size-4 mr-2" />
               <span>Déconnexion</span>
           </DropdownMenuItem>
       </DropdownMenuContent>
   </DropdownMenu>
</template>