<script lang="ts" setup="">
definePageMeta({
    layout: 'dashboard',
});

const user = useUser();
</script>

<template>
    <UserCard :user="user" class="mx-auto" :profile="true" />
</template>