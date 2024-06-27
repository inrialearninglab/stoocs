<template>
    <div class="relative overflow-hidden py-24 lg:py-32">
        <div
            aria-hidden="true"
            class="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
            <div class="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
            <div class="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
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
                        <Button size="lg" as-child>
                            <NuxtLink to="/moocs">
                                Commencer
                            </NuxtLink>
                        </Button>
                        <Button size="lg" variant="outline">
                            Documentation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>