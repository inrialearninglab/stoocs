export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            home: {
                hero: {
                    firstPart: 'MOOCs data',
                    secondPart: 'reinvented',
                    lastPart: 'for the pleasure of the eyes and statistics!',
                },
                bento: {
                    moocs: {
                        title: 'MOOCs',
                        description: 'See MOOCs list',
                    },
                    settings: {
                        title: 'Settings',
                        description: 'Access to application settings',
                    },
                    team: {
                        title: 'Team',
                        description: 'Administrate team members',
                    },
                },
            },
        },
        fr: {
            welcome: 'Bienvenue',
            home: {
                hero: {
                    firstPart: 'Les données des MOOCs',
                    secondPart: 'réinventées',
                    thirdPart: 'pour le plaisir des yeux et des statistiques !',
                },
                bento: {
                    moocs: {
                        title: 'MOOCs',
                        description: 'Voir la list des MOOCs',
                    },
                    settings: {
                        title: 'Paramètres',
                        description: "Accéder aux paramètres de l'application",
                    },
                    team: {
                        title: 'Équipe',
                        description: "Administrer les membres de l'équipe",
                    },
                },
            },
        },
    },
}));
