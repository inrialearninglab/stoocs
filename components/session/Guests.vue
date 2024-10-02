<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from '~/components/ui/dialog';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '~/components/ui/sheet';
import { UserPen, UserMinus, UserPlus } from 'lucide-vue-next';
import { useUsers } from '~/stores/users.store';

const props = defineProps<{
    sessionId: string
}>();

const usersStore = useUsers();

const guests = computed(() => usersStore.guests.filter((guest) => guest.moocSessions.includes(props.sessionId)))
const otherGuests = computed(() => usersStore.guests.filter((guest) => !guest.moocSessions.includes(props.sessionId)))

function removeGuest(id: string) {
    usersStore.updateSessionGuest(props.sessionId, id, false);
}

function addGuest(id: string) {
    usersStore.updateSessionGuest(props.sessionId, id, true);
}

const addWindowLimit = 5;

const guestSearch = ref('');
const filteredGuests = computed(() => {
    return otherGuests.value.filter((guest) =>
        `${guest.firstname.toLowerCase()} ${guest.lastname.toLowerCase()}`.includes(guestSearch.value.toLowerCase() || '')).slice(0, addWindowLimit)
})
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="outline">
                <UserPen class="mr-2" />
                <span>{{ guests.length }} invité</span>
            </Button>
        </SheetTrigger>

        <SheetContent>
            <SheetHeader>
                <SheetTitle class="p-0">Invités</SheetTitle>
                <SheetDescription>Gérer les accès des invités à ce cours.</SheetDescription>

                <div class="flex gap-2 items-center justify-between">
                    <span class="text-lg font-semibold">{{ guests.length }} invités</span>

                    <Dialog>
                        <DialogTrigger as-child>
                            <Button variant="outline" class="my-4 w-fit self-end">
                                <UserPlus class="mr-2" />
                                <span>Ajouter</span>
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Ajouter des invités</DialogTitle>
                            </DialogHeader>
                            <Input v-model="guestSearch" placeholder="Rechercher un utilisateur" />

                            <template v-if="guestSearch">
                                <div v-for="guest of filteredGuests" class="border rounded-md p-2 flex gap-2 items-center">
                                    <UserAvatar :user="guest" size="sm" />
                                    <span class="flex-1">{{ guest.firstname }} {{ guest.lastname }}</span>

                                    <Button @click="addGuest(guest.id)" size="icon" variant="ghost">
                                        <UserPlus class="size-5" />
                                    </Button>
                                </div>
                            </template>
                            <span class="mt-2 text-center" v-if="!filteredGuests.length">Aucun utilisateur ne correspond à votre recherche.</span>
                        </DialogContent>
                    </Dialog>
                </div>

                <div v-for="guest of guests" class="border rounded-md p-2 flex gap-2 items-center">
                    <UserAvatar :user="guest" size="sm" />
                    <span class="flex-1">{{ guest.firstname }} {{ guest.lastname }}</span>

                    <Button @click="removeGuest(guest.id)" size="icon" variant="ghost">
                        <UserMinus class="size-5" />
                    </Button>
                </div>

            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>
