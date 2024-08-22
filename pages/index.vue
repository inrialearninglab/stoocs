<template>
    <div class="relative overflow-hidden py-24 lg:py-32">
        <div
            aria-hidden="true"
            class="absolute inset-0 bg-[radial-gradient(theme(colors.border/90%)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]"
        />
        <div class="relative z-10">
            <div class="container py-10 lg:py-16">
                <div class="max-w-2xl text-center mx-auto">
                    <p class="">By Nathan</p>
                    <div class="mt-5 max-w-2xl">
                        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            丂ｲののᄃ
                        </h1>
                    </div>
                    <div class="mt-5 max-w-3xl">
                        <p class="text-xl text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div class="mt-8 gap-3 flex justify-center">
                        <Button size="lg" variant="outline">
                            Documentation
                        </Button>

                        <Button size="lg" as-child>
                            <NuxtLink to="/moocs">
                                Commencer
                            </NuxtLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>