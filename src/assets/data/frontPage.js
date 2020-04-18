const cards_data = [
    {
        title: "le projet",
        description: "Favoriser la réflexion et faciliter des liens",
        image: "goals",
        link: "projet"
    },
    {
        title: "nos métiers",
        description: "Les différentes professions",
        image: "network",
        link: "metiers"
    }, {
        title: "l'ambition",
        description: "Regrouper des professionnels attentifs à l'écoute et au suivi singulier des personnes",
        image: "ambition",
        link: "ambition"
    }
];

const cards_data_profiles = [
    {
        name: "Patrikainen",
        firstName: "Geraldine",
        description: "Psychologue - psychanalyste",
        image: "patrikainen",
        link: "patrikainen"
    }, {
        name: "Barbier",
        firstName: "Kevin",
        description: "Psychologue - psychanalyste",
        image: "portrait",
        link: "barbier"
    }, {
        name: "Foucault",
        firstName: "Céline",
        description: "Psychologue - psychanalyste",
        image: "portrait",
        link: "foucault"
    }, {
        name: "Graz",
        firstName: "Geneviève",
        description: "Psychologue - psychanalyste",
        image: "portrait",
        link: "patrikainen"
    }
];

const list_professions_data = {
    therapy: [{
        title: 'psychiatre', link: 'psychiatre'
    }, {
        title: 'psychologue', link: 'psychologue', active: true
    }, {
        title: 'psychanalyste', link: 'psychanalyste', active: true
    }, {
        title: 'art thérapeute', link: 'art-thérapeute'
    }, {
        title: 'ergothérapeute', link: 'ergothérapeute'
    }],
    social_support: [{
        title: 'assistante sociale', link: 'assistante-sociale'
    }, {
        title: 'éducateur', link: 'educateur'
    }, {
        title: 'médiation artistique', link: 'mediation-artistique'
    }],
    activities: [{
        title: 'sport', link: 'sport'
    }, {
        title: 'langues', link: 'langues'
    }]
};

export {cards_data, cards_data_profiles, list_professions_data};
