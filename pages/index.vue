<script setup lang="ts">
const isDark = computed(() => useColorMode().value == 'dark');
</script>

<template>
    <div class="flex flex-col gap-8 mx-auto">
        <InspiraParticlesBg
            class="absolute inset-0"
            :quantity="150"
            :ease="100"
            :color="isDark ? '#FFF' : '#000'"
            :staticity="10"
            refresh
        />

        <div class="flex gap-5 items-center self-center">
            <LayoutLogo class="w-fit h-44" />
            <span class="text-8xl font-extrabold">Stoocs</span>
        </div>

        <div class="flex justify-center text-blance">
            <h1 class="text-2xl font-bold text-center text-balance">
                Les données des MOOCs,
                <InspiraTextHighlight class="bg-gradient-to-r from-purple-300 to-orange-300 rounded-lg"
                    >réinventées</InspiraTextHighlight
                >
                pour le plaisir des yeux et des statistiques !
            </h1>
        </div>

        <HeroBento />
    </div>
</template>
