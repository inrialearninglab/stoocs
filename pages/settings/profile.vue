<script lang="ts" setup="">
definePageMeta({
    layout: 'settings',
});

const user = useUser();
</script>

<template>
    <UserCard :user="user" class="max-w-md mx-auto" :profile="true" />
</template>
