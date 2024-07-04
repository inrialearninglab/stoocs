<script lang="ts" setup="">
const user = useUser();
</script>

<template>
    <UserCard :user="user" class="mx-auto" :profile="true" />
</template>