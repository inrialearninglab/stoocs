<script setup lang="ts">

</script>

<template>
    <Tabs default-value="profile" class="max-w-2xl mx-auto">
        <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="password">Mot de passe</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
            <UserFormProfile />
        </TabsContent>

        <TabsContent value="password">
            <UserFormPassword />
        </TabsContent>
    </Tabs>
</template>
