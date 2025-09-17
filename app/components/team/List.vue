<script setup lang="ts">
import { ArrowDownUp } from 'lucide-vue-next';
import type { User } from '@prisma/client';

const props = defineProps<{
    users: User[];
}>();

const sortBy: Ref<'email' | 'role'> = ref('role');
const sortedUsers = computed(() => {
    switch (sortBy.value) {
        case 'role':
            const guests = props.users.filter((user) => user.rolename === 'Guest');
            const ill = props.users.filter((user) => user.rolename === 'ILL');
            return [...ill, ...guests];
        case 'email':
            return props.users.sort((a, b) => a.email.localeCompare(b.email));
        default:
            return props.users;
    }
});
</script>

<template>
    <div class="border rounded-md">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[6rem]">Avatar</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>
                        <Button variant="ghost" @click="() => (sortBy = 'email')"
                            >Email <ArrowDownUp class="size-5 ml-2" />
                        </Button>
                    </TableHead>
                    <TableHead class="w-[10rem]">
                        <Button variant="ghost" @click="() => (sortBy = 'role')"
                            >Rôle<ArrowDownUp class="size-5 ml-2" />
                        </Button>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="user of sortedUsers">
                    <TableCell><UserAvatar :user="user" size="xs" /></TableCell>
                    <TableCell class="font-semibold">
                        <InspiraSparklesText
                            :text="`${user.firstname} ${user.lastname}`"
                            v-if="user.isAdmin"
                            class="text-base font-md"
                        />
                        <template v-else> {{ user.firstname }} {{ user.lastname }} </template>
                    </TableCell>
                    <TableCell>{{ user.email }}</TableCell>
                    <TableCell class="w-min"><UserRole :rolename="user.rolename" /></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>
