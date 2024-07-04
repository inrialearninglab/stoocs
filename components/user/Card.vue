<script setup lang="ts">
import type { User } from 'lucia';
import { Trash2, PenLine } from 'lucide-vue-next';
import { useUsers } from '~/stores/users.store';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog'

defineProps<{
    user: User
    profile?: boolean
}>();

const usersStore = useUsers()
</script>

<template>
    <Card class="w-full max-w-sm">
        <CardHeader class="items-center">
            <Avatar size="lg" class="mb-4">
                <!--               <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />-->
                <AvatarFallback>{{ user.firstname[0] + user.lastname[0] }}</AvatarFallback>
            </Avatar>

            <CardTitle>{{ user.firstname }} {{ user.lastname }}</CardTitle>
            <CardDescription>{{ user.email }}</CardDescription>
        </CardHeader>
        <CardFooter class="flex gap-2">
            <Button v-if="profile" variant="outline" class="flex-1" as-child>
                <NuxtLink to="/users/update" class="flex items-center">
                    <PenLine class="size-4 mr-2"/>
                    Modifier
                </NuxtLink>
            </Button>
            <AlertDialog>
                <AlertDialogTrigger as-child>
                    <Button variant="destructive" class="flex-1">
                        <Trash2 class="size-4 mr-2"/>
                        Supprimer
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Cela supprimera définitivement votre compte et effacera vos données de nos serveurs.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction @click="usersStore.deleteUser(user.id)">Continuer</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
    </Card>
</template>