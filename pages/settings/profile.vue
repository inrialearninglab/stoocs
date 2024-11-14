<script lang="ts" setup="">
definePageMeta({
    layout: 'dashboard',
});

const user = useUser();
</script>

<template>
    <UserCard :user="user" class="max-w-md border-none shadow-none mx-auto" :profile="true" />
</template>
