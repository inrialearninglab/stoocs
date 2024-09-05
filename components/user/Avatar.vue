<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback, type AvatarVariants } from '~/components/ui/avatar';
import type { User } from 'lucia';

defineProps<{
    user: User
    size?: AvatarVariants['size']
}>();

</script>

<template>
    <Avatar :size="size">
        <AvatarFallback>{{ user.firstname[0] + user.lastname[0] }}</AvatarFallback>
    </Avatar>
</template>
