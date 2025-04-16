<script lang="ts" setup="">
definePageMeta({
    layout: 'settings',
});

const user = useUser();
</script>

<template>
    <UserCard v-if="user" :user="user" class="max-w-md mx-auto" :profile="true" />
</template>
