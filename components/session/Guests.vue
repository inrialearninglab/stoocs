<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from '~/components/ui/dialog';
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
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="outline">
                <UserPen class="mr-2" />
                <span>Gérer les invités</span>
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Gérer les invités</DialogTitle>
                <DialogDescription>Gérer les accès des invités à ce cours.</DialogDescription>
            </DialogHeader>

            <p>Invités dans ce cours ({{ guests.length }})</p>
            <div v-for="guest of guests" class="border rounded-md p-2 flex gap-2 items-center">
                <UserAvatar :user="guest" size="sm" />
                <span class="flex-1">{{ guest.firstname }} {{ guest.lastname }}</span>

                <Button @click="removeGuest(guest.id)" size="icon" variant="ghost">
                    <UserMinus class="size-5" />
                </Button>
            </div>

            <p>Autres comptes invités</p>
            <div v-for="guest of otherGuests" class="border rounded-md p-2 flex gap-2 items-center">
                <UserAvatar :user="guest" size="sm" />
                <span class="flex-1">{{ guest.firstname }} {{ guest.lastname }}</span>

                <Button @click="addGuest(guest.id)" size="icon" variant="ghost">
                    <UserPlus class="size-5" />
                </Button>
            </div>
        </DialogContent>
    </Dialog>
</template>
