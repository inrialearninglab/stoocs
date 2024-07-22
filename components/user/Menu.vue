<script setup lang="ts">
import { User, Users, LogOut } from 'lucide-vue-next';
import { logout } from '~/services/auth.service';
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';

const user = useUser();

async function handleLogout() {
    await logout();
    user.value = null;
    await navigateTo('/auth/login');
}
</script>

<template>
   <DropdownMenu v-if="user">
       <DropdownMenuTrigger as-child>
           <Avatar class="cursor-pointer">
<!--               <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />-->
               <AvatarFallback>{{ user.firstname[0] + user.lastname[0] }}</AvatarFallback>
           </Avatar>
       </DropdownMenuTrigger>
       <DropdownMenuContent class="w-56">
           <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
           <DropdownMenuSeparator />

           <DropdownMenuItem as-child class="cursor-pointer">
               <NuxtLink to="/users/profile">
                   <User class="size-4 mr-2" />
                   <span>Profil</span>
               </NuxtLink>
           </DropdownMenuItem>

           <DropdownMenuItem as-child class="cursor-pointer">
               <NuxtLink to="/users">
                   <Users class="size-4 mr-2" />
                   <span>Equipe</span>
               </NuxtLink>

           </DropdownMenuItem>

           <DropdownMenuSeparator />

           <DropdownMenuItem @click="handleLogout" class="cursor-pointer">
               <LogOut class="size-4 mr-2" />
               <span>Déconnexion</span>
           </DropdownMenuItem>
       </DropdownMenuContent>
   </DropdownMenu>
</template>