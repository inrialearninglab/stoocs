<script setup lang="ts">
import { Button } from '~/components/ui/button';
import useConfetti from '~/composables/confetti';
import BorderBeam from '~/components/ui/BorderBeam.vue';

function triggerConfetti() {
    useConfetti({ particleCount: 200, spread: 360, origin: { y: 0.3 }})
}
</script>

<template>
    <div class="relative overflow-hidden py-24 lg:py-32">
        <div
            aria-hidden="true"
            class="absolute inset-0 bg-[radial-gradient(theme(colors.border/90%)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]"
        />
        <div class="relative z-10">
            <div class="container py-10 lg:py-16">
                <div class="max-w-2xl text-center mx-auto">
                    <Badge variant="outline" size="lg">By Nathan</Badge>
                    <div class="mt-2 max-w-2xl">
                        <h1 class="text-4xl font-extrabold lg:text-5xl">
                            Stoocs
                        </h1>
                    </div>

                    <div class="mt-3 max-w-3xl">
                        <p class="text-xl text-muted-foreground">
                            Les données des MOOCs, réinventées pour le plaisir des yeux et des statistiques !
                        </p>
                    </div>
                    <div class="mt-8 gap-5 flex justify-center">
                        <Button size="lg" variant="outline" as-child>
                            <NuxtLink to="https://docs-stoocs.nathan-viaud.xyz">
                                Documentation
                            </NuxtLink>
                        </Button>

                        <Button @click="triggerConfetti" size="lg" as-child>
                            <NuxtLink to="/moocs">
                                Commencer
                            </NuxtLink>
                        </Button>
                    </div>

                    <div class="relative flex h-64 w-fit flex-col mx-auto mt-12 rounded-[5px]">
                        <BorderBeam :duration="10" />
                        <LayoutLogo class="h-64 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
