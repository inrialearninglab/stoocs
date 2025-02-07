<script setup lang="ts">
import type { User } from '@prisma/client';
defineProps<{
    users: User[];
}>();
</script>

<template>
    <div class="border rounded-md">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[6rem]">Avatar</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead class="w-[10rem]">Rôle</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="user of users">
                    <TableCell><UserAvatar :user="user" size="xs" /></TableCell>
                    <TableCell class="font-semibold">{{ user.firstname }} {{ user.lastname }}</TableCell>
                    <TableCell>{{ user.email }}</TableCell>
                    <TableCell class="w-min"><UserRole :rolename="user.rolename" /></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>
