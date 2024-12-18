export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            nav: {
                moocs: {
                    title: 'MOOCs',
                    description: 'MOOCs list on FUN',
                },
                settings: {
                    title: 'Settings',
                    description: 'Manage application parameters',
                },
                team: {
                    title: 'Team',
                    description: 'List of team members',
                },
            },
            home: {
                hero: {
                    firstPart: 'MOOCs data',
                    secondPart: 'reinvented',
                    lastPart: 'for the pleasure of the eyes and statistics!',
                },
            },
        },
        fr: {
            welcome: 'Bienvenue',
            nav: {
                moocs: {
                    title: 'MOOCs',
                    description: 'Liste des MOOCs sur FUN',
                },
                settings: {
                    title: 'Paramètres',
                    description: "Gérer les paramètres de l'application",
                },
                team: {
                    title: 'Équipe',
                    description: "Liste des membres de l'équipe",
                },
            },
            home: {
                hero: {
                    firstPart: 'Les données des MOOCs',
                    secondPart: 'réinventées',
                    thirdPart: 'pour le plaisir des yeux et des statistiques !',
                },
            },
        },
    },
}));
