<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from '~/components/ui/dialog';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '~/components/ui/sheet';
import { UserPen, UserMinus, UserPlus } from 'lucide-vue-next';
import { useUsers } from '~/stores/users.store';
import { z } from 'zod';

// TODO: refactor this component

const props = defineProps<{
    sessionId: string
}>();

const usersStore = useUsers();

const guests = computed(() => usersStore.guests.filter((guest) => guest.moocSessions.includes(props.sessionId)))
const otherGuests = computed(() => usersStore.guests.filter((guest) => !guest.moocSessions.includes(props.sessionId)))

const invitations = computed(() => usersStore.invitations.filter((invitation) => invitation.moocSessions.includes(props.sessionId) && invitation.isGuest))
const otherInvitations = computed(() => usersStore.invitations.filter((invitation) => !invitation.moocSessions.includes(props.sessionId) && invitation.isGuest))

function addPendingGuest(email: string) {
    usersStore.updateSessionPendingGuest(props.sessionId, email, true);
}

function removePendingGuest(email: string) {
    usersStore.updateSessionPendingGuest(props.sessionId, email, false);
}

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
const filteredInvitations = computed(() => {
    return otherInvitations.value.filter((invitation) =>
        `${invitation.email.toLowerCase()}`.includes(guestSearch.value.toLowerCase() || '')).slice(0, addWindowLimit)
});

function isValidEmail(email: string) {
    const emailSchema = z.string().email();

    try {
        emailSchema.parse(email);
        return true;
    } catch (error) {
        return false;
    }
}

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

                                <div v-for="invitation of filteredInvitations" class="border border-dashed rounded-md p-2 flex gap-2 items-center">
                                    <span class="flex-1">{{ invitation.email }}</span>
                                    <Button @click="addPendingGuest(invitation.email)" size="icon" variant="ghost">
                                        <UserPlus class="size-5" />
                                    </Button>
                                </div>

                            </template>

                            <div v-if="!filteredGuests.length && !filteredInvitations.length" class="mt-2 text-center">
                                <span>Aucun utilisateur ne correspond à votre recherche.</span>
                                <Button v-if="isValidEmail(guestSearch)" @click="usersStore.createInvitation(guestSearch, true)" variant="outline" class="mt-2">
                                    <UserPlus class="mr-2" />
                                    <span>Ajouter comme membre invité</span>
                                </Button>
                            </div>
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

                <Separator class="my-4" />
                <span class="text-lg font-semibold">Invités en attente</span>

                <div v-for="invitation of invitations" class="border border-dashed rounded-md p-2 flex gap-2 items-center">
                    <span class="flex-1">{{ invitation.email }}</span>
                    <Button @click="removePendingGuest(invitation.email)" size="icon" variant="ghost">
                        <UserMinus class="size-5" />
                    </Button>
                </div>
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>
