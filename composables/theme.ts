import { type Theme, themes } from '~/lib/registry/themes';

export function useThemes() {
    const { value: color } = useColorMode();
    const isDark = color === 'dark';

    const defaultTheme = {
        color: 'slate',
        radius: 0.75,
    };
    const config = useCookie('theme', {
        default: () => ({
            theme: defaultTheme.color,
            radius: defaultTheme.radius,
        }),
    });

    const theme = computed(() => config.value.theme);
    const radius = computed(() => config.value.radius);

    const themeClass = computed(() => `theme-${theme.value}`);

    function setTheme(themeName: Theme['name']) {
        config.value.theme = themeName;
    }

    function setRadius(radius: number) {
        config.value.radius = radius;
    }

    const themePrimary = computed(() => {
        const t = themes.find((t) => t.name === theme.value);
        return `hsl(${t?.cssVars[isDark ? 'dark' : 'light'].primary})`;
    });

    return {
        themeClass,
        theme,
        setTheme,
        radius,
        setRadius,
        themePrimary,
    };
}
