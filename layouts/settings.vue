<template>
    <LayoutHeader />
    <div class="flex flex-col max-w-8xl w-full mx-auto p-8 gap-6">
        <div class="flex justify-between">
            <div class="space-y-2">
                <h1>Paramètre</h1>
                <p class="text-muted-foreground">Gérer les paramètres de l'application</p>
            </div>
        </div>

        <div class="flex gap-8">
            <SettingsSidebar />
            <div class="flex-1">
                <slot />
            </div>
        </div>
    </div>
</template>
