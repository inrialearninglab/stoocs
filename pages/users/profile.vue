<script lang="ts" setup="">
definePageMeta({
    layout: 'dashboard',
});

const user = useUser();
</script>

<template>
    <UserCard :user="user" class="mx-auto max-w-md" :profile="true" />
</template>