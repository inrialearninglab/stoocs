<script setup lang="ts">
import { type Theme, themes } from '~/lib/registry/themes';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { Sun, Moon, Monitor, Check } from 'lucide-vue-next';

const { themeClass, theme, setTheme, radius, setRadius } = useThemes();

// Create an array of color values
const allColors: Theme['name'][] = [
    'zinc',
    'rose',
    'blue',
    'green',
    'orange',
    'red',
    'slate',
    'stone',
    'gray',
    'neutral',
    'yellow',
    'violet',
    'black'
];

const RADII = [0, 0.25, 0.5, 0.75, 1] as const;

// Whenever the theme value changes, update the document class list
watch(theme, () => {
    setClassTheme();
});

// Whenever the radius value changes, update the document style
watch(radius, () => {
    setStyleRadius();
});

function setClassTheme() {
    document.documentElement.classList.remove(
        ...allColors.map(color => `theme-${color}`),
    );
    document.documentElement.classList.add(themeClass.value);
}

function setStyleRadius() {
    document.documentElement.style.setProperty('--radius', `${radius.value}rem`);
}

function backgroundColor(color: Theme['name']) {
    const bg = themes.find(theme => theme.name === color);
    return `hsl(${bg?.activeColor.light})`;
}

const colorMode = useColorMode();
</script>

<template>
    <div class="grid gap-6">
        <div class="grid space-y-1">
            <h1 class="text-lg font-semibold text-foreground">
                Personnaliser
            </h1>
            <p class="text-sm text-muted-foreground">
                Personnaliser l'apparence de l'application.
            </p>
        </div>
        <div class="space-y-1.5">
            <Label>Couleur</Label>
            <div class="grid grid-cols-3 gap-2">
                <template v-for="color in allColors" :key="color">
                    <Button
                        class="justify-start gap-2"
                        variant="outline"
                        :class="{ 'border-2 border-primary': theme === color }"
                        @click="setTheme(color)"
                    >
            <span class="flex size-5 items-center justify-center rounded-full"
                  :style="{ backgroundColor: backgroundColor(color) }">
                <Check v-if="theme === color" class="size-4"/>
            </span>
                        <span class="text-xs capitalize">{{ color }}</span>
                    </Button>
                </template>
            </div>
        </div>

        <div class="space-y-1.5">
            <Label>Radius</Label>
            <div class="grid grid-cols-5 gap-2">
                <template v-for="r in RADII" :key="r">
                    <Button
                        class="justify-center gap-2"
                        variant="outline"
                        :class="{ 'border-2 border-primary': radius === r }"
                        @click="setRadius(r)"
                    >
                        <span class="text-xs capitalize">{{ r }}</span>
                    </Button>
                </template>
            </div>
        </div>

        <div class="space-y-1.5">
            <Label>Thème</Label>
            <div class="grid grid-cols-3 gap-2">
                <Button
                    class="justify-center gap-2"
                    variant="outline"
                    :class="{ 'border-2 border-primary': colorMode.preference === 'light' }"
                    @click="colorMode.preference = 'light'"
                >
                    <Sun class="size-5"/>
                    <span class="text-xs capitalize">Clair</span>
                </Button>
                <Button
                    class="justify-center gap-2"
                    variant="outline"
                    :class="{ 'border-2 border-primary': colorMode.preference === 'dark' }"
                    @click="colorMode.preference = 'dark'"
                >
                    <Moon class="size-5"/>
                    <span class="text-xs capitalize">Sombre</span>
                </Button>
                <Button
                    class="justify-center gap-2"
                    variant="outline"
                    :class="{ 'border-2 border-primary': colorMode.preference === 'system' }"
                    @click="colorMode.preference = 'system'"
                >
                    <Monitor class="size-5"/>
                    <span class="text-xs capitalize">Système</span>
                </Button>
            </div>
        </div>
    </div>
</template>